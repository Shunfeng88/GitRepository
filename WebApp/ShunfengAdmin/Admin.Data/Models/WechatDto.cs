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
