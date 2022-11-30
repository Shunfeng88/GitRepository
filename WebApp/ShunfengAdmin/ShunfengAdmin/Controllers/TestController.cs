using Admin.Data.Models;
using Admin.Service;

namespace ShunfengAdmin.Controllers
{
    public class TestController : BaseController
    {
        private WechatService _wechatServer;

        public TestController(WechatService wechatServer)
        {
            _wechatServer = wechatServer;
        }

        public async Task<Response> TestWechat()
        {
            var result =  _wechatServer.getBirthday();
            return SuccessResponse(result);
        }
    }
}
