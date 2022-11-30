using Admin.Base;
using Admin.Data.Models;
using System.Net.Http.Headers;
using System.Net;
using System.Text;
using Newtonsoft.Json;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using System.IO.Compression;

namespace Admin.Service
{
    public class WechatService
    {
        private IHttpClientFactory _httpClient;
        private ILogger<WechatService> _logger;
        private FileReadService _fileReadService;
        private WechatConfig _config;

        public WechatService(IHttpClientFactory httpClient, ILogger<WechatService> logger, FileReadService fileReadService)
        {
            _httpClient = httpClient;
            _logger = logger;
            _fileReadService = fileReadService;
            _config = _fileReadService.ReadFile<WechatConfig>("/WeChatConfig.json").Result;
        }

        private async Task<WechatConfig> getConfig()
        {
            if (_config == null)
            {
                _config = await _fileReadService.ReadFile<WechatConfig>("/WeChatConfig.json");
            }
            return _config;
        }

        private async Task<dynamic> HttpGet(string url)
        {
            try
            {
                var httpClient = _httpClient.CreateClient();

                HttpRequestMessage httpRequestMessage = new HttpRequestMessage(HttpMethod.Get, url);
                httpRequestMessage.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                var cts = new CancellationTokenSource(new TimeSpan(0, 0, 5));
                var response = await httpClient.SendAsync(httpRequestMessage, cts.Token);

                Stream respStream = response.Content.ReadAsStream();
                if (response.Content.Headers.ContentEncoding.Contains("gzip"))
                {
                    respStream = new GZipStream(respStream, CompressionMode.Decompress);
                }
                using StreamReader reader = new(respStream, Encoding.GetEncoding("UTF-8"));
                string res = reader.ReadToEnd();
                return res;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        private async Task<Response> HttpPost<T>(string url, object data, string token = "")
        {
            try
            {
                var client = _httpClient.CreateClient();
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);

                string postStr = JsonConvert.SerializeObject(data);
                var bytes = Encoding.UTF8.GetBytes(postStr);
                HttpRequestMessage httpRequestMessage = new HttpRequestMessage(HttpMethod.Post, url);
                httpRequestMessage.Content = new ByteArrayContent(bytes);
                httpRequestMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
                httpRequestMessage.Content.Headers.ContentType.CharSet = "utf-8";
                httpRequestMessage.Content.Headers.ContentLength = bytes.Length;
                var cts = new CancellationTokenSource(new TimeSpan(0, 0, 10));
                var repsonseMessage = await client.SendAsync(httpRequestMessage, cts.Token);
                var result = await repsonseMessage.Content.ReadAsStringAsync();
                if (repsonseMessage.StatusCode == HttpStatusCode.OK)
                {
                    var dataDto = JsonConvert.DeserializeObject<Response<T>>(result);
                    return dataDto;
                }

                return new Response<T> { Code = 0, Message = $"数据返回异常{repsonseMessage.StatusCode}" };
            }
            catch (Exception ex)
            {
                _logger.LogError($"ApiService Post Error:{JsonConvert.SerializeObject(ex)}");
                return new Response { Code = 0, Message = "获取数据异常" };
            }
        }

        #region 金山的每日金句

        public async Task<cibaDto> GetCibaNote()
        {
            var responseStr = await HttpGet("http://open.iciba.com/dsapi/");
            var obj = JsonConvert.DeserializeObject<cibaDto>(responseStr);
            return obj;
        }

        #endregion

        #region 天气
        public async Task<Response<WeatherDto>> getWeather(string region = "")
        {
            var locationStr = await HttpGet($"https://geoapi.qweather.com/v2/city/lookup?location={_config.region}&key={_config.weather_key}");
            var locationRes = JObject.Parse(locationStr);
            if (locationRes["code"] == "404")
            {
                return new Response<WeatherDto> { Code = 0, Message = "推送消息失败，请检查地区名是否有误！" };
            }
            else if (locationRes["code"] == "401")
            {
                return new Response<WeatherDto> { Code = 0, Message = "推送消息失败，请检查和风天气key是否正确！" };
            }

            var location_id = locationRes["location"][0]["id"].ToString();//获取地区的location--id

            var responseStr2 = await HttpGet($"https://devapi.qweather.com/v7/weather/now?location={location_id}&key={_config.weather_key}");
            var response = JObject.Parse(responseStr2);

            var data = new WeatherDto
            {
                weather = response["now"]["text"],
                temp = response["now"]["temp"] + "°C",
                windDir = response["now"]["windDir"]
            };
            return new Response<WeatherDto> { Code = 1, Data = data };
        }

        #endregion

        #region Wechat

        public async Task<string> getAccessToken()
        {
            var accesstoken = "";
            var postUrl = $"https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={_config.app_id}&secret={_config.app_secret}";
            try
            {
                var result = await HttpGet(postUrl);//{\"access_token\":\"63_OjMJnL0rAoQq-m284sPtrgvdGFzRyGywZ1u7kx1H5q9npZHcnpYiczmSjWQ9_QiHp8vg3blYZ1gfcdRshLck1r3FWyBMIjfQPyd8invOtURlvObljzDy6i4qYOkHGXjADAZYP\",\"expires_in\":7200}
                accesstoken = JsonConvert.DeserializeObject<WechatTokenResult>(result)?.access_token;
            }
            catch (Exception ex)
            {
                return "获取access_token失败，请检查app_id和app_secret是否正确";
            }
            return accesstoken;
        }

        public string getColor()
        {
            // 获取随机颜色
            var random = new Random();
            var colorList = Enumerable.Range(0, 100).Select(_ => "#" + random.Next(0, 16777215).ToString("X").PadLeft(6, '0')).ToList();

            return colorList[random.Next(colorList.Count)];
        }

        public string getBirthday()
        {
            var now = DateTime.Now.Date; 
            var birthdayStr = _config.birthday.FirstOrDefault().birthday;
            if (birthdayStr.StartsWith('r'))
            {
                //农历
                var birthday = DateTime.Parse(birthdayStr[1..]);
                var thisyearBirthday = new DateTime(now.Year, birthday.Month, birthday.Day);
                if (thisyearBirthday < now)//今年生日过了
                {
                    thisyearBirthday = thisyearBirthday.AddYears(1);
                }
                var day = thisyearBirthday.LunarToSolar();
                return (day - now).Days.ToString();
            }
            return "";
        }

        //public async Task<Response> SendMessage(string to_user, string access_token, string region_name, string weather, string temp, string wind_dir, string note_ch, string note_en)
        //{
        //    var url = $"https://api.weixin.qq.com/cgi-bin/message/template/send?access_token={access_token}";
        //    var week_list = new string[] { "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" };
        //    var now = DateTime.Now;
        ////        year = localtime().tm_year
        ////        month = localtime().tm_mon
        ////        day = localtime().tm_mday
        ////        today = datetime.date(datetime(year = year, month = month, day = day))
        //var week = week_list[(int)now.DayOfWeek];
        //        # 获取在一起的日子的日期格式
        //        love_year = int(config["love_date"].split("-")[0])
        //        love_month = int(config["love_date"].split("-")[1])
        //        love_day = int(config["love_date"].split("-")[2])
        //        love_date = date(love_year, love_month, love_day)
        //        # 获取在一起的日期差
        //        love_days = str(today.__sub__(love_date)).split(" ")[0]
        //        # 获取所有生日数据
        //        birthdays = { }
        //        for k, v in config.items():
        //            if k[0:5] == "birth":
        //                birthdays[k] = v
        //for k, v in config.items():
        //    if k[0:5] == "birth":
        //        birthdays[k] = v
        //data = {
        //            "touser": to_user,
        //    "template_id": config["template_id"],
        //    "url": "http://weixin.qq.com/download",
        //    "topcolor": "#FF0000",
        //    "data": {
        //                "date": {
        //                    "value": "{} {}".format(today, week),
        //            "color": get_color()
        //                },
        //        "region": {
        //                    "value": region_name,
        //            "color": get_color()
        //        },
        //        "weather": {
        //                    "value": weather,
        //            "color": get_color()
        //        },
        //        "temp": {
        //                    "value": temp,
        //            "color": get_color()
        //        },
        //        "wind_dir": {
        //                    "value": wind_dir,
        //            "color": get_color()
        //        },
        //        "love_day": {
        //                    "value": love_days,
        //            "color": get_color()
        //        },
        //        "note_en": {
        //                    "value": note_en,
        //            "color": get_color()
        //        },
        //        "note_ch": {
        //                    "value": note_ch,
        //            "color": get_color()
        //        }
        //            }
        //        }
        //        for key, value in birthdays.items():
        //    # 获取距离下次生日的时间
        //    birth_day = get_birthday(value["birthday"], year, today)
        //            if birth_day == 0:
        //        birthday_data = "今天{}生日哦，祝{}生日快乐！".format(value["name"], value["name"])
        //    else:
        //        birthday_data = "距离{}的生日还有{}天".format(value["name"], birth_day)
        //    # 将生日数据插入data
        //    data["data"][key] = { "value": birthday_data, "color": get_color()}
        //        headers = {
        //            'Content-Type': 'application/json',
        //    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
        //                          'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
        //        }
        //        response = post(url, headers = headers, json = data).json()
        //if response["errcode"] == 40037:
        //    print("推送消息失败，请检查模板id是否正确")
        //elif response["errcode"] == 40036:
        //    print("推送消息失败，请检查模板id是否为空")
        //elif response["errcode"] == 40003:
        //    print("推送消息失败，请检查微信号是否正确")
        //elif response["errcode"] == 0:
        //    print("推送消息成功")
        //else:
        //    print(response)
        //    }
        #endregion
    }
}