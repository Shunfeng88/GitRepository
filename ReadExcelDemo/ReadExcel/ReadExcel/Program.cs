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

            //ReadLabelExcel();

            Console.ReadKey();
        }

        public static void ReadExcel()
        {
            try
            {
                string filePath = "D:/人体部位症状对应表(728).xlsx";

                XSSFWorkbook xSSFWorkbook = new XSSFWorkbook(filePath);

                XSSFSheet sheet0 = (XSSFSheet)xSSFWorkbook.GetSheetAt(0);
                var bodyParts = new List<BodyPart>();

                string body = "";
                for (int i = 0; i <= sheet0.LastRowNum; i++)
                {
                    IRow row = sheet0.GetRow(i);

                    if (!string.IsNullOrEmpty(row.GetCell(7)?.ToString()))
                    {
                        body = row.GetCell(7)?.ToString();
                        bodyParts.Add(new BodyPart
                        {
                            body = body,
                            parts = new List<PartsItem> {
                            new PartsItem
                            {
                                part = row.GetCell(8)?.ToString()
                            }
                            }
                        });
                    }
                    else
                    {
                        if (!string.IsNullOrEmpty(row.GetCell(8)?.ToString()))
                        {
                            bodyParts.LastOrDefault().parts.Add(new PartsItem
                            {
                                part = row.GetCell(8)?.ToString()
                            });
                        }
                    }

                }
                var count = bodyParts.SelectMany(x => x.parts).Count();


                List<string> SOURCEparts = bodyParts.SelectMany(x => x.parts).Select(x => x.part).ToList();

                List<SymptomsItemInfo> SymptomsItems = new List<SymptomsItemInfo>();
                //XSSFSheet sheet1 = (XSSFSheet)xSSFWorkbook.GetSheetAt(1);
                for (int i = 1; i <= sheet0.LastRowNum; i++)
                {
                    IRow row = sheet0.GetRow(i);

                    if (!string.IsNullOrEmpty(row.GetCell(0)?.ToString()))
                    {
                        var item = new SymptomsItem();

                        var part = (!string.IsNullOrEmpty(row.GetCell(2)?.ToString())) ? row.GetCell(2)?.ToString() : row.GetCell(1)?.ToString();
                        var symptom = row.GetCell(0)?.ToString();

                        if (part.Contains("/"))
                        {
                            var listpart = part.Split('/');
                            foreach (var partitem in listpart)
                            {
                                SymptomsItems.Add(new SymptomsItemInfo { part = partitem.Trim(), symptom = symptom.Trim() });
                            }
                        }
                        else
                        {
                            SymptomsItems.Add(new SymptomsItemInfo { part = part.Trim(), symptom = symptom.Trim() });
                        }
                    }

                }
                List<PartsItem> partsItems = SymptomsItems.GroupBy(x => x.part).Select(x => new PartsItem
                {
                    part = x.Key,
                    symptoms = x.Select(x => new SymptomsItem
                    {
                        id = "",
                        symptom = x.symptom
                    }).ToList(),
                }).ToList();

                var count2 = partsItems.SelectMany(x => x.symptoms).Count();


                var expcpt = partsItems.Where(x => !SOURCEparts.Contains(x.part)).ToList();

                //合并
                foreach (var bodyPart in bodyParts)
                {
                    foreach (var part in bodyPart.parts)
                    {
                        PartsItem partsItem = partsItems.FirstOrDefault(x => x.part == part.part);
                        if (partsItem != null)
                        {
                            List<SymptomsItem> symptoms = partsItem.symptoms;
                            part.symptoms = symptoms;
                        }

                    }
                }

                var count3 = 0;// = (bodyParts.SelectMany(x => x.parts)).SelectMany(x => x.symptoms).Count();
                foreach (var bodyPart1 in bodyParts)
                {
                    foreach (var part in bodyPart1.parts)
                    {
                        if (part.symptoms != null)
                            count3 += part.symptoms.Count;
                    }

                }

                Console.WriteLine(JsonConvert.SerializeObject(bodyParts));
            }
            catch (Exception ex)
            {
                Console.WriteLine("错误：" + ex.Message);
            }
        }

        public static void ReadLabelExcel()
        {
            try
            {
                string filePath = "D:/用户关怀标签（编码更新）.xlsx";

                XSSFWorkbook xSSFWorkbook = new XSSFWorkbook(filePath);

                XSSFSheet sheet = (XSSFSheet)xSSFWorkbook.GetSheetAt(0);
                var labelModels = new List<LabelModel>();

                for (int i = 1; i <= sheet.LastRowNum; i++)
                {
                    IRow row = sheet.GetRow(i);

                    LabelModel labelModel;
                    if (!string.IsNullOrEmpty(row.GetCell(0)?.ToString()) && row.GetCell(0)?.ToString() != labelModels.LastOrDefault()?.labelType)
                    {
                        labelModel = new LabelModel();
                        labelModel.labelType = row.GetCell(0)?.ToString();

                        labelModels.Add(labelModel);
                    }
                    else
                    {
                        labelModel = labelModels.LastOrDefault();
                    }
                    if (!string.IsNullOrEmpty(row.GetCell(2)?.ToString()))
                        labelModel.detail.Add(new labelItem
                        {
                            code = row.GetCell(2)?.ToString(),
                            name = row.GetCell(3)?.ToString(),
                            explain = row.GetCell(4)?.ToString(),
                            condition = row.GetCell(5)?.ToString().Replace("/", "|").Split(new char[] { '|', '、' }).ToList(),
                            type = row.GetCell(7)?.ToString() == "静态标签" ? 0 : 1
                        });

                }




                Console.WriteLine(JsonConvert.SerializeObject(labelModels));
            }
            catch (Exception ex)
            {
                Console.WriteLine("错误：" + ex.Message);
            }
        }


    }
}