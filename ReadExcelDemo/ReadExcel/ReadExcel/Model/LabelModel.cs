using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReadExcel.Model
{
    public class LabelModel
    {
        public string labelType { get; set; }
        public List<labelItem> detail { get; set; } = new List<labelItem>();
    }

    public class labelItem
    {
        public string code { get; set; }
        public string name { get; set; }
        public string explain { get; set; }
        public List<string> condition { get; set; } = new List<string>();
        public int type { get; set; }
    }



}
