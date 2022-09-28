using CSRedis;
using System.Drawing;
using System.Windows.Forms;

namespace RedisFormDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private CSRedisClient _client;
        private string key = $"sortset{DateTime.Now:yyyyMMdd}";

        private void Form1_Load(object sender, EventArgs e)
        {
            RedisHelper.Initialization(new CSRedisClient(
                "linkingcloudfwcs.redis.rds.aliyuncs.com,password=nihaomafwcs20200301!@#,connectTimeout=2000,defaultDatabase=14"));
            _client = RedisHelper.Instance;
        }
        private void Form1_Shown(object sender, EventArgs e)
        {
            _client.ZRemRangeByRank(key, 0, -1);

            //_client.ZAdd(key, (1, "A1"));
            //_client.ZAdd(key, (2, "A2"));
            //_client.ZAdd(key, (3, "A3"));
            //_client.ZAdd(key, (4, "A4"));
            //_client.ZAdd(key, (5, "A5"));
            //_client.ZAdd(key, (6, "A6"));
            //_client.ZAdd(key, (7, "A7"));
            //_client.ZAdd(key, (8, "A8"));

            refresh();
        }

        private void refresh()
        {
            listDisplay.Items.Clear();
            var sortSet = _client.ZRangeWithScores(key, 0, -1);
            lblCount.Text = $"{_client.ZCard(key)} 行        Min:{sortSet.FirstOrDefault().score}        Max:{sortSet.LastOrDefault().score}";
            foreach (var item in sortSet)
            {
                listDisplay.Items.Add(item.member);
            }
        }

        private void btnAdd_Click(object sender, EventArgs e)
        {
            if (txtScore.Text != string.Empty && txtObject.Text != string.Empty)
            {
                _client.ZAdd(key, (decimal.Parse(txtScore.Text), txtObject.Text));
            }

            refresh();
        }

        private void btnInput_Click(object sender, EventArgs e)
        {
            if (txtScore.Text != string.Empty && txtObject.Text != string.Empty)
            {
                decimal score = decimal.Parse(txtScore.Text);
                var scores = _client.ZRangeByScoreWithScores(key, score, score + 1).Select(x => x.score).ToList();
                scores.Remove(score + 1);
                if (scores.Any())
                {
                    score = scores.LastOrDefault() + 0.01m;
                }

                _client.ZAdd(key, (score, txtObject.Text));
            }

            refresh();
        }

        private void btnTset_Click(object sender, EventArgs e)
        {

        }


        private void btnCall_Click(object sender, EventArgs e)
        {
            //var field = "cd123y";

            //int startNo = 10;
            //int endNo = 15;

            //var currentNo = _client.HGet(key, field);
            //int len;
            //if (currentNo == null)
            //{
            //    _client.HSet(key, field, startNo);
            //    len = startNo;
            //}
            //else
            //{
            //    if (int.Parse(currentNo) >= endNo)
            //    {
            //        MessageBox.Show("已到最大号" + currentNo);
            //        return;
            //    }
            //    len = (int)_client.HIncrBy(key, field);
            //}




            //listDisplay.Items.Clear();
            //listDisplay.Items.Add(len);


            var array = _client.ZPopMin(key, 1);
            if (array.Any())
            {
                var str = array[0];
                refresh();
                MessageBox.Show(str.member + "  " + str.score);
            }


        }

        private void btnJump_Click(object sender, EventArgs e)
        {
            if (txtObject.Text != string.Empty)
            {
                var member = txtObject.Text;
                var count = int.Parse(txtCount.Text);

                //var sortSet = RedisHelper.Instance.ZRangeWithScores(key, 0, -1);
                //if (sortSet.FirstOrDefault().member != txtObject.Text)
                //{
                //    decimal scoreScore = sortSet.FirstOrDefault().score - RedisHelper.Instance.ZScore(key, txtObject.Text).Value - 0.01m;
                //    RedisHelper.Instance.ZIncrBy(key, txtObject.Text, scoreScore);
                //}

                JumpOrDrop(member, count, 1);
            }

            refresh();
        }

        private void btnDrop_Click(object sender, EventArgs e)
        {
            if (txtObject.Text != string.Empty)
            {
                var member = txtObject.Text;
                var count = int.Parse(txtCount.Text);

                //var sortSet = RedisHelper.Instance.ZRangeWithScores(key, 0, count + 1);
                //if (sortSet.LastOrDefault().member != txtObject.Text)
                //{
                //    decimal scoreScore = sortSet.LastOrDefault().score - RedisHelper.Instance.ZScore(key, txtObject.Text).Value - 0.01m;
                //    RedisHelper.Instance.ZIncrBy(key, txtObject.Text, scoreScore);
                //}


                JumpOrDrop(member, count, 2);

            }

            refresh();

        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="recordId"></param>
        /// <param name="count"></param>
        /// <param name="type"></param>
        public void JumpOrDrop(string recordId, int count, int type)
        {
            var length = RedisHelper.Instance.ZCard(key);
            if (length > 0)
            {
                var Index = RedisHelper.Instance.ZRank(key, recordId);
                decimal oldScore = Index == null ? 0 : RedisHelper.Instance.ZScore(key, recordId).Value;
                long index = Index == null ? -1 : Index.Value;

                if (type == 1)//优先
                {
                    if (index > 0)//不是首位
                    {
                        decimal increment;
                        if (index - count < 1)
                        {
                            increment = RedisHelper.Instance.ZRangeWithScores(key, 0, 0).FirstOrDefault().score - 0.1m;//取最小分数减0.1
                        }
                        else
                        {
                            var array = RedisHelper.Instance.ZRangeWithScores(key, index - count - 1, index - count);
                            increment = (array.FirstOrDefault().score + array.LastOrDefault().score) / 2;//取将插入的两边分数的中间数
                        }

                        RedisHelper.Instance.ZIncrBy(key, recordId, increment - oldScore);
                    }
                }
                else if (type == 2)//延后
                {
                    if (index + 1 < length)//不是最后一位
                    {
                        decimal increment;
                        if (index + 1 + count >= length)
                        {
                            increment = RedisHelper.Instance.ZRangeWithScores(key, -1, -1).FirstOrDefault().score + 0.1m;//取最大分数加0.1
                        }
                        else
                        {
                            var array = RedisHelper.Instance.ZRangeWithScores(key, index + count, index + count + 1);
                            increment = (array.FirstOrDefault().score + array.LastOrDefault().score) / 2;
                        }

                        RedisHelper.Instance.ZIncrBy(key, recordId, increment - oldScore);
                    }
                }
            }
        }

        private void listDisplay_DoubleClick(object sender, EventArgs e)
        {
            //var obj = listDisplay.SelectedItem;
            //if (obj == null)
            //    return;
            //txtScore.Text = (((string, decimal))obj).Item2.ToString();
            //txtObject.Text = (((string, decimal))obj).Item1.ToString();
        }

        private void btnCallAhead_Click(object sender, EventArgs e)
        {
            if (!string.IsNullOrEmpty(txtCallAhead.Text))
            {
                var score = _client.ZRank(key, txtCallAhead.Text);

            }
            refresh();
        }

        private void btntrain_Click(object sender, EventArgs e)
        {
            //string keyL = key + "_L";
            //string keyZ = key + "_Z";

            //_client.Del(keyL);
            //_client.ZRemRangeByRank(keyZ, 0, -1);



            ////string str = "62fb34a2324abc03df419194,62fb34a2324abc03df419198,62fb34a2324abc03df41919a,62fb364e324abc03df419615,62fb364e324abc03df419617,62fb364e324abc03df419618,62fb364e324abc03df419619,62fb364e324abc03df41961a,62fb364e324abc03df41961c,62fb364e324abc03df41961e,62fb364e324abc03df419622,62fb364e324abc03df419625,62fb364e324abc03df419627,62fb36e6324abc03df419812,62fb36e6324abc03df419814,62fb36e6324abc03df419816,62fb375e324abc03df41999d,62fb375e324abc03df41999f,62fb3792324abc03df419a7d,62fb3792324abc03df419a7f,62fb3792324abc03df419a80,62fb3793324abc03df419a82,62fb387e324abc03df419d96,62fb387e324abc03df419d98,62fb387e324abc03df419d99,62fb387e324abc03df419d9b,62fb39b1324abc03df41a0eb,62fb39b1324abc03df41a0ed,62fb39c3324abc03df41a189,62fb39c3324abc03df41a18b,62fb39c3324abc03df41a18c,62fb39c3324abc03df41a18e,62fb39c3324abc03df41a192,62fb39c3324abc03df41a194,62fb39c3324abc03df41a196,62fb39c3324abc03df41a19a,62fb39c3324abc03df41a19e,62fb39d3324abc03df41a1e7,62fb39d3324abc03df41a1e9,62fb3a00324abc03df41a28f,62fb3a00324abc03df41a291,62fb3a00324abc03df41a293,62fb3aae324abc03df41a513,62fb3aae324abc03df41a515,62fb3aae324abc03df41a516,62fb3aae324abc03df41a517,62fb3aae324abc03df41a519,62fb3aae324abc03df41a51c,62fb3aae324abc03df41a51e,62fb3aae324abc03df41a520,62fb3aae324abc03df41a524,62fb3aae324abc03df41a525,62fb3aae324abc03df41a527,62fb3aae324abc03df41a529,62fb3aaf324abc03df41a52c,62fb3aaf324abc03df41a52d,62fb3aaf324abc03df41a52e,62fb3aaf324abc03df41a52f,62fb3aaf324abc03df41a530,62fb3aaf324abc03df41a531,62fb3aaf324abc03df41a532,62fb3aaf324abc03df41a534,62fb3aaf324abc03df41a535,62fb3aaf324abc03df41a536,62fb3aaf324abc03df41a537,62fb3aaf324abc03df41a538,62fb3aaf324abc03df41a539,62fb3aaf324abc03df41a53a,62fb3b25324abc03df41a70a,62fb3b6a324abc03df41a7d7,62fb3b6a324abc03df41a7d9,62fb3b6a324abc03df41a7da,62fb3b6a324abc03df41a7dc,62fb3b6a324abc03df41a7de,62fb3b6a324abc03df41a7e0,62fb3bb9324abc03df41a93c,62fb3bb9324abc03df41a93e,62fb3d3c324abc03df41adcf,62fb3d3c324abc03df41add2,62fb3d3c324abc03df41add3,62fb3d3c324abc03df41add5,62fb3d3c324abc03df41add6,62fb3d3c324abc03df41add7,62fb3d3c324abc03df41add8,62fb3d3c324abc03df41adda,62fb3d3c324abc03df41addb,62fb3d3c324abc03df41addc,62fb3d3c324abc03df41addd,62fb3d3d324abc03df41adde,62fb3d3d324abc03df41addf,62fb3d51324abc03df41ae46,62fb3d51324abc03df41ae49,62fb3d51324abc03df41ae4a,62fb3d51324abc03df41ae4c,62fb3d51324abc03df41ae4e,62fb3d51324abc03df41ae52,62fb3d51324abc03df41ae53,62fb3d51324abc03df41ae54,62fb3d51324abc03df41ae55,62fb3d51324abc03df41ae56";
            ////var array = str.Split(',');

            //bool run = true;
            ////for (int i = 0; i < array.Length; i++)
            //for (int i = 0; i < 100; i++)
            //{
            //    if (!run)
            //        break;

            //    string id = MongoDB.Bson.ObjectId.GenerateNewId().ToString();
            //    //string id = array[i];
            //    _client.RPush(keyL, id);
            //    _client.ZAdd(keyZ, (1, id));

            //    var list = _client.LRange(keyL, 0, -1);
            //    var set = _client.ZRange(keyZ, 0, -1);

            //    for (int j = 0; j < i + 1; j++)
            //    {
            //        if (list[j] != set[j])
            //        {
            //            listDisplay.Items.Clear();
            //            listDisplay.Items.Add($"结束：第{j}个，{list[j]}不等于{set[j]}");
            //            run = false;
            //            break;
            //        }
            //    }
            //    if (!run)
            //        break;

            //    listDisplay.Items.Clear();
            //    listDisplay.Items.Add($"通过：第{i + 1}次");
            //    Application.DoEvents();
            //}


            //_client.Del(keyL);
            //_client.ZRemRangeByRank(keyZ, 0, -1);
        }

        private void btnClear_Click(object sender, EventArgs e)
        {

        }
        int AIndex = 1;
        int TIndex = 1;
        int XIndex = 1;
        int Score = 1;
        private void button1_Click(object sender, EventArgs e)
        {
            _client.ZAdd(key, (Score, $"A{AIndex}"));
            AIndex++;
            Score++;

            refresh();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            if (_client.ZCard(key) == 0)
            {
                //队列没有数据，直接插入
                _client.ZAdd(key, (Score, $"T{TIndex}"));
            }
            else
            {
                var delayCount = int.Parse(txtInsertCount.Text);

                var list = _client.ZRange(key, 0, -1);
                var LastSpecial = "";
                foreach (var item in list)
                {
                    if (item.StartsWith("T") || item.StartsWith("X"))
                    {
                        LastSpecial = item;
                    }
                }
                int increment;
                var lastIndex = _client.ZRank(key, LastSpecial);
                if (lastIndex == null)
                {
                    increment = -1;
                }
                else
                {
                    increment = (int)lastIndex.Value;
                }

                JumpOrDrop($"T{TIndex}", increment + 1 + delayCount, 2);
            }
            TIndex++;
            Score++;

            refresh();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            if (_client.ZCard(key) == 0)
            {
                //队列没有数据，直接插入
                _client.ZAdd(key, (Score, $"X{XIndex}"));
            }
            else
            {
                var delayCount = int.Parse(txtInsertCount2.Text);

                var list = _client.ZRange(key, 0, -1);
                var LastSpecial = "";
                foreach (var item in list)
                {
                    if (item.StartsWith("T") || item.StartsWith("X"))
                    {
                        LastSpecial = item;
                    }
                }
                int increment;
                var lastIndex = _client.ZRank(key, LastSpecial);
                if (lastIndex == null)
                {
                    increment = -1;
                }
                else
                {
                    increment = (int)lastIndex.Value;
                }

                JumpOrDrop($"X{XIndex}", increment + 1 + delayCount, 2);
            }
            XIndex++;
            Score++;

            refresh();
        }
    }
}