using Admin.Data.Models;
using System.Net.Http.Headers;
using System.Net;
using System.Reflection.PortableExecutable;
using System.Text;
using Newtonsoft.Json;
using Microsoft.Extensions.Logging;
using System.Net.Http;
using Newtonsoft.Json.Linq;
using System;

namespace Admin.Server
{
    public class WechatServer
    {
        private IHttpClientFactory _httpClient;
        private ILogger<WechatServer> _logger;

        public WechatServer(IHttpClientFactory httpClient, ILogger<WechatServer> logger)
        {
            _httpClient = httpClient;
            _logger = logger;
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
                var responseStr = await response.Content.ReadAsStringAsync();
                return responseStr.ToString();
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        private async Task<Response> Post<T>(string url, object data, string token = "")
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

        #region ciba

        public async Task<cibaDto> GetCiba()
        {
            var responseStr = await HttpGet("http://open.iciba.com/dsapi/");
            var obj = JsonConvert.DeserializeObject<cibaDto>(responseStr);
            return obj;
        }

        #endregion
        public async Task<WeatherDto> getWeather(string region="")
        {
            var key = "df723dc8c7fe4d7a8e85721011d510f7";
            var responseStr = await HttpGet($"https://geoapi.qweather.com/v2/city/lookup?location={"上海市"}&key={key}");
            var location_id = (JObject.Parse(responseStr)["location"][0]["id"]).ToString();

            var responseStr2 = await HttpGet($"https://devapi.qweather.com/v7/weather/now?location={location_id}&key={key}");
            var response = JObject.Parse(responseStr);

            var data = new WeatherDto
            {
                weather = response["now"]["text"],
                temp = response["now"]["temp"] + "°C",
                windDir = response["now"]["windDir"]
            };
            return data;

            //        //headers = {
            //        //    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
            //        //          'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
            //        //}
            //        var key = "";// config["weather_key"]
            //        var regionUrl = $"https://geoapi.qweather.com/v2/city/lookup?location={region}&key={key}";
            //        //        var response = get(region_url, headers = headers).json();
            //        //if response["code"] == "404":
            //        //    print("推送消息失败，请检查地区名是否有误！")
            //        //    os.system("pause")
            //        //    sys.exit(1)
            //        //elif response["code"] == "401":
            //        //    print("推送消息失败，请检查和风天气key是否正确！")
            //        //    os.system("pause")
            //        //    sys.exit(1)
            //        //else:
            //        //    # 获取地区的location--id
            //        //    location_id = response["location"][0]["id"]
            //        weather_url = "https://devapi.qweather.com/v7/weather/now?location={}&key={}".format(location_id, key)
            //response = get(weather_url, headers = headers).json()
            //# 天气
            //weather = response["now"]["text"]
            //# 当前温度
            //temp = response["now"]["temp"] + u"\N{DEGREE SIGN}" + "C"
            //# 风向
            //wind_dir = response["now"]["windDir"]
            //return weather, temp, wind_dir
        }
        #region Wechat

        public async Task<string> getAccessToken()
        {
            var accesstoken = "";
            var appId = "wx130ab8b0fa17b9ff";//config["app_id"]
            var appSecret = "6908631cbe15c10d359240ce69d3e063";//config["app_secret"]
            var postUrl = $"https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={appId}&secret={appSecret}";
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



        //    public async Task<Response> SendMessage(string to_user, string access_token, string region_name, string weather, string temp, string wind_dir, string note_ch, string note_en)
        //    {
        //        var url = $"https://api.weixin.qq.com/cgi-bin/message/template/send?access_token={access_token}";
        //        var week_list = new string[] { "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" };
        //        var now = DateTime.Now;
        //        year = localtime().tm_year
        //        month = localtime().tm_mon
        //        day = localtime().tm_mday
        //        today = datetime.date(datetime(year = year, month = month, day = day))
        //        week = week_list[today.isoweekday() % 7]
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