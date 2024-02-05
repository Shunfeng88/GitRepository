using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using System.Reflection;
using System.Text;

namespace ReadExcel;

public static class ExcelHelper
{
    /// <summary>
    /// 读取Excel页内容
    /// </summary>
    /// <typeparam name="T">读取后赋值的实例</typeparam>
    /// <param name="sheet"></param>
    /// <param name="titleDictionary">标题头字典值</param>
    /// <param name="titleIndex">标题行索引</param>
    /// <param name="lastRow">最后一行，0则默认读取Excel最后一行</param>
    /// <returns></returns>
    public static List<T> ReadSheetToDict<T>(ISheet sheet, Dictionary<string, List<string>> titleDictionary, int titleIndex = 0, int lastRow = 0) where T : class, new()
    {
        var list = new List<Dictionary<string, string>>();
        try
        {
            //标题头
            var excelTitleIndexDict = sheet.GetRow(titleIndex).Cells.Where(x => !string.IsNullOrEmpty(x.ToString()))
                .ToDictionary(v => v.ToString(), k => k.ColumnIndex);

            var values = titleDictionary.SelectMany(x => x.Value).ToList();
            var fieldIndexDict = excelTitleIndexDict.Where(keyValuePair => values.Contains(keyValuePair.Key))
                .ToDictionary(keyValuePair => keyValuePair.Value, keyValuePair => titleDictionary.FirstOrDefault(x => x.Value.Contains(keyValuePair.Key)).Key);

            var lastRowNum = lastRow == 0 ? sheet.LastRowNum : lastRow;
            for (var iRow = titleIndex + 1; iRow <= lastRowNum; iRow++)
            {
                var row = sheet.GetRow(iRow);
                if (row != null)
                {
                    list.Add(fieldIndexDict.ToDictionary(k => k.Value, v => row.GetCell(v.Key)?.ToString() ?? ""));
                }
            }
        }
        catch (ArgumentException e)
        {
            //e.Message:    An item with the same key has already been added. Key: 楼栋
            var field = e.Message.Contains("same key") ? e.Message[(e.Message.IndexOf("Key: ", StringComparison.Ordinal) + "Key: ".Length)..] : e.Message;
            throw new Exception($"Excel中有相同的列名：{field}");
        }
        catch (Exception e)
        {
            throw new Exception($"导入失败：{e.Message}");
        }

        return list.SetDictToList<T>(); ;
    }

    /// <summary>
    /// 生成Excel文件
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="titles">传入字段和列名（顺序展示）</param>
    /// <param name="datas">数据源</param>
    /// <returns></returns>
    public static byte[] CreatExcel<T>(Dictionary<string, string> titles, List<T> datas)
    {
        var xSSFWorkbook = new XSSFWorkbook();

        var iRow = 0;
        var dataSheet = xSSFWorkbook.CreateSheet("Sheet1");
        var dataHeadRow = dataSheet.CreateRow(iRow);
        iRow++;

        var titleKeys = titles.Keys.ToArray();
        var titleNames = titles.Values.ToArray();
        for (var i = 0; i < titles.Count; i++)
        {
            dataHeadRow.CreateCell(i).SetCellValue(titleNames[i]);

        }

        var rowDatas = datas.Select(data => titleKeys.Select(key => data.GetType().GetProperty(key)?.GetValue(data, null)?.ToString()).ToArray());

        foreach (var rowData in rowDatas)
        {
            var row = dataSheet.CreateRow(iRow);
            for (var iCol = 0; iCol < rowData.Length; iCol++)
            {
                row.CreateCell(iCol).SetCellValue(rowData[iCol]);
            }
            iRow++;
        }

        SetSheetAutoSizeColumn(dataSheet, titles.Count);

        using var ms = new MemoryStream();
        xSSFWorkbook.Write(ms);
        var buffer = ms.ToArray();
        ms.Close();
        return buffer;
    }

    /// <summary>
    /// 设置自适应宽度
    /// </summary>
    /// <param name="sheet"></param>
    /// <param name="columnNo"></param>
    private static void SetSheetAutoSizeColumn(ISheet sheet, int columnNo = 0)
    {
        if (columnNo == 0)
            columnNo = sheet.GetRow(0).LastCellNum;

        for (var iCol = 0; iCol < columnNo; iCol++)
        {
            var columnWidth = sheet.GetColumnWidth(iCol) / 256;
            var maxColumnWidth = 22;//限制最大列宽
            var compareCount = sheet.LastRowNum > 100 ? 100 : sheet.LastRowNum;//取最大前100行最宽的列
            for (var rowNum = 0; rowNum <= compareCount; rowNum++)
            {
                if (columnWidth >= maxColumnWidth)
                    break;

                var currentRow = sheet.GetRow(rowNum);
                if (currentRow.GetCell(iCol) != null)
                {
                    var length = Encoding.Default.GetBytes(currentRow.GetCell(iCol).ToString()).Length;
                    if (columnWidth < length)
                    {
                        columnWidth = length;
                    }
                }
            }
            sheet.SetColumnWidth(iCol, Math.Min(maxColumnWidth, columnWidth) * 256);
        }
    }

}

/// <summary>
/// 扩展
/// </summary>
public static class ObjectExtensions
{
    #region 对象扩展

    /// <summary>
    /// 指定对象的属性赋值
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="instance">对象</param>
    /// <param name="propertyName">属性名</param>
    /// <param name="values">属性值</param>
    /// <returns></returns>
    public static T SetValue<T>(T instance, string propertyName, string values)
    {
        if (instance != null || string.IsNullOrEmpty(propertyName))
        {
            var _findedPropertyInfo = instance.GetType().GetProperty(propertyName);
            if (_findedPropertyInfo != null)
            {
                var type = instance.GetType().GetRuntimeProperty(propertyName).PropertyType.Name;

                var obj = new object();
                switch (type)
                {
                    case "Int32":
                        obj = Convert.ToInt32(values);
                        break;
                    case "Int64":
                        obj = Convert.ToInt64(values);
                        break;
                    case "DateTime":
                        obj = Convert.ToDateTime(values);
                        break;
                    case "String":
                        obj = values.ToString();
                        break;
                    case "Decimal":
                        obj = Convert.ToDecimal(values);
                        break;
                    case "Bool":
                        obj = Convert.ToBoolean(values);
                        break;
                }
                _findedPropertyInfo.SetValue(instance, obj);
            }
        }

        return instance;

    }

    /// <summary>
    /// 字典映射到指定类： 自身为字典，key是属性名，value是属性值
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="listDict"></param>
    /// <returns></returns>
    public static List<T> SetDictToList<T>(this List<Dictionary<string, string>> listDict) where T : class, new()
    {
        var list = new List<T>();
        var properties = typeof(T).GetProperties(BindingFlags.Instance | BindingFlags.Public).ToList();
        listDict.ForEach(dict =>
        {
            var instance = new T();
            properties.ForEach(property =>
            {
                if (dict.TryGetValue(property.Name, out var value))
                    SetValue(instance, property.Name, value);
            });
            list.Add(instance);
        });
        return list;
    }

    #endregion

}