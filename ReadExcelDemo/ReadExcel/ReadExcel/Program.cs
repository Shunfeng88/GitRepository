using Newtonsoft.Json;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using ReadExcel.Model;

namespace ReadExcel
{
    /// <summary>
    /// Excel动态列匹配Demo
    /// </summary>
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");

            ReadExcel();

            Console.ReadKey();
        }

        public static void ReadExcel()
        {
            try
            {
                //获取动态列配置文件
                var titleDict = GetTitleConfig();

                //读取Excel的第一个sheet
                string filePath = AppContext.BaseDirectory+ "DemoExcel.xlsx";
                XSSFWorkbook xSSFWorkbook = new XSSFWorkbook(filePath);
                XSSFSheet sheet = (XSSFSheet)xSSFWorkbook.GetSheetAt(0);


                var list = ExcelHelper.ReadSheetToDict<RoomModel>(sheet, titleDict);

                foreach (var item in list)
                {
                    Console.WriteLine($"{item.CommunityName} {item.BuildingName} {item.UnitName} {item.RoomName}");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("错误：" + ex.Message);
            }
        }

        /// <summary>
        /// 用 List<string>数组是可以兼容多种列的标题头
        /// </summary>
        /// <returns></returns>
        public static Dictionary<string, List<string>> GetTitleConfig()
        {
            //可用json配置文件，这里写死
            var configString = "{\"CommunityName\":[\"小区\",\"小区名称\"],\"BuildingName\":[\"楼栋\",\"楼 栋\",\"楼栋名称\"],\"UnitName\":[\"单元\",\"单 元\",\"单元名称\"],\"RoomName\":[\"房间\",\"房间号\"]}";
            
            Dictionary<string, List<string>> dict = JsonConvert.DeserializeObject<Dictionary<string, List<string>>>(configString);

            return dict;
        }

    }
}