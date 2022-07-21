using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReadExcel.Model
{
    public class BodyPart
    {
        /// <summary>
        /// 
        /// </summary>
        public string body { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public List<PartsItem> parts { get; set; }
    }

    public class PartsItem
    {
        /// <summary>
        /// 头部
        /// </summary>
        public string part { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public List<SymptomsItem> symptoms { get; set; }
    }

    public class SymptomsItem
    {
        /// <summary>
        /// 
        /// </summary>
        public string id { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string symptom { get; set; }
    }



}
