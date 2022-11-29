using Admin.Data.Models;
using Admin.Server;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;

namespace ShunfengAdmin.Controllers
{
    public class TestController : BaseController
    {
        private WechatServer _wechatServer;

        public TestController(WechatServer wechatServer)
        {
            _wechatServer = wechatServer;
        }

        public async Task<Response> TestWechat()
        {
            var result = await _wechatServer.getWeather();
            return SuccessResponse(result);
        }
    }
}
