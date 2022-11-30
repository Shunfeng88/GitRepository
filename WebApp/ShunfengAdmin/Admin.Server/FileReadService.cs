using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;

namespace Admin.Service
{
    public class FileReadService
    {
        private readonly IHostingEnvironment _hostingEnvironment;

        public FileReadService(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        public async Task<T> ReadFile<T>(string path)
        {
            try
            {
                path = _hostingEnvironment.WebRootPath + path;
                if (File.Exists(path))
                {
                    var str = await File.ReadAllTextAsync(path);
                    if (!string.IsNullOrEmpty(str))
                    {
                        return JsonConvert.DeserializeObject<T>(str);
                    }
                }
            }
            catch (Exception ex)
            {

            }

            return default;
        }
    }
}
