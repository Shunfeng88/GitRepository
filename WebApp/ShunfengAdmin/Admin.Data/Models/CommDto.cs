using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.Data.Models
{
    /// <summary>
    /// 通用返回对象
    /// </summary>
    public class Response
    {
        public int Code { get; set; }
        public string Message { get; set; }
    }

    public class Response<T> : Response
    {
        public int Code { get; set; }
        public string Message { get; set; }
        public T Data { get; set; }
    }

}
