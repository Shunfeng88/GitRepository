using System.Globalization;

namespace Admin.Base
{
    public static class DateTimeHelper
    {
        /// <summary>
        /// 阳历转农历
        /// </summary>
        /// <param name="time"></param>
        /// <returns></returns>
        public static DateTime SolarToLunar(this DateTime dt)
        {
            ChineseLunisolarCalendar cncld = new ChineseLunisolarCalendar();
            int year = cncld.GetYear(dt);
            int flag = cncld.GetLeapMonth(year);
            int month = flag > 0 ? cncld.GetMonth(dt) - 1 : cncld.GetMonth(dt);
            int day = cncld.GetDayOfMonth(dt);
            return new DateTime(year, month, day);
        }

        /// <summary>
        /// 农历转阳历
        /// </summary>
        /// <param name="time"></param>
        /// <returns></returns>
        public static DateTime LunarToSolar(this DateTime dt)
        {
            ChineseLunisolarCalendar cncld = new ChineseLunisolarCalendar();

            int year = dt.Year;
            int month = dt.Month;
            int day = dt.Day;
            int flag = cncld.GetLeapMonth(year);
            DateTime dtnl = cncld.ToDateTime(year, month, day, 0, 0, 0, 0);
            dtnl = flag > 0 ? dtnl.AddMonths(1) : dtnl;
            return dtnl;
        }

    }
}