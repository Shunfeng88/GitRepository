using Newtonsoft.Json;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using ReadExcel.Model;

namespace ReadExcel
{
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
                string filePath = "D:/人体部位症状对应表.xlsx";

                XSSFWorkbook xSSFWorkbook = new XSSFWorkbook(filePath);

                XSSFSheet sheet3 = (XSSFSheet)xSSFWorkbook.GetSheetAt(3);
                var bodyParts = new List<BodyPart>();

                string body = "";
                for (int i = 2; i <= sheet3.LastRowNum; i++)
                {
                    IRow row = sheet3.GetRow(i);

                    if (!string.IsNullOrEmpty(row.GetCell(0)?.ToString()))
                    {
                        body = row.GetCell(0)?.ToString();
                        bodyParts.Add(new BodyPart
                        {
                            body = body,
                            parts = new List<PartsItem> {
                            new PartsItem
                            {
                                part = row.GetCell(1)?.ToString()
                            }
                            }
                        });
                    }
                    else
                    {
                        if (!string.IsNullOrEmpty(row.GetCell(1)?.ToString()))
                        {
                            bodyParts.LastOrDefault().parts.Add(new PartsItem
                            {
                                part = row.GetCell(1)?.ToString()
                            });
                        }
                    }

                }


                List<PartsItem> partsItems = new List<PartsItem>();
                XSSFSheet sheet1 = (XSSFSheet)xSSFWorkbook.GetSheetAt(1);
                for (int i = 0; i <= sheet1.LastRowNum; i++)
                {
                    IRow row = sheet1.GetRow(i);

                    PartsItem partsItem = new PartsItem();
                    partsItem.part = row.GetCell(0)?.ToString();
                    partsItem.symptoms = new List<SymptomsItem>();

                    for (int j = 1; j < row.LastCellNum; j++)//遍历列
                    {
                        string str = row.GetCell(j)?.ToString();
                        if (string.IsNullOrEmpty(str))
                            continue;
                        
                        partsItem.symptoms.Add(new SymptomsItem
                        {
                            id = str.Substring(str.IndexOf("|") + 1),
                            symptom = str.Substring(0, str.IndexOf("|")),
                        });
                    }

                    partsItems.Add(partsItem);
                }


                //合并
                foreach (var bodyPart in bodyParts)
                {
                    foreach (var part in bodyPart.parts)
                    {
                        List<SymptomsItem> symptoms = partsItems.FirstOrDefault(x => x.part == part.part).symptoms;
                        part.symptoms = symptoms;
                    }
                }

                Console.WriteLine(JsonConvert.SerializeObject(bodyParts));
            }
            catch (Exception ex)
            {
                Console.WriteLine("错误：" + ex.Message);
            }
        }


    }
}