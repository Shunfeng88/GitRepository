using Admin.Data.Models;
using Microsoft.AspNetCore.Mvc;

namespace ShunfengAdmin.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class BaseController : ControllerBase
    {
        public Response<object> SuccessResponse(object data = null, string message = "成功")
        {
            return new Response<object> { Code = 1, Message = message, Data = data };
        }
    }
}
