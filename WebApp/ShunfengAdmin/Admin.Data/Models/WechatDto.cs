using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.Data.Models
{
    public class WechatDto
    {
    }

    public class WechatConfig
    {
        /// <summary>
        /// 公众号appId
        /// </summary>
        public string app_id { get; set; }
        /// <summary>
        /// 公众号appSecret
        /// </summary>
        public string app_secret { get; set; }
        /// <summary>
        /// 模板消息id
        /// </summary>
        public string template_id { get; set; }
        /// <summary>
        /// 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
        /// </summary>
        public List<string> user { get; set; }
        /// <summary>
        /// 和风天气apikey
        /// </summary>
        public string weather_key { get; set; }
        /// <summary>
        /// 所在地区，可为省，城市，区，县，同时支持国外城市，例如上海市
        /// </summary>
        public string region { get; set; }
        /// <summary>
        /// 修改名字为对应需要显示的名字，如果生日为农历，在最前面加上r即可
        /// </summary>
        public List<Birthday> birthday { get; set; }
        /// <summary>
        /// 在一起的日子
        /// </summary>
        public string love_date { get; set; }
    }

    public class Birthday
    {
        /// <summary>
        /// 风哥
        /// </summary>
        public string name { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string birthday { get; set; }
    }

    public class WeatherDto
    {
        /// <summary>
        /// 天气
        /// </summary>
        public string weather { get; set; }
        /// <summary>
        /// 当前温度
        /// </summary>
        public string temp { get; set; }
        /// <summary>
        /// 风向
        /// </summary>
        public string windDir { get; set; }
    }

    public class WechatTokenResult
    {
        public string access_token { get; set; }
        public int expires { get; set; }
    }

    public class cibaDto
    {
        public string content { get; set; }
        public string note { get; set; }
    }

}
