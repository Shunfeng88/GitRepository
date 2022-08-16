using CSRedis;

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
            RedisHelper.Initialization(new CSRedisClient("linkingcloudfwcs.redis.rds.aliyuncs.com,password=nihaomafwcs20200301!@#,connectTimeout=2000,defaultDatabase=14"));
            _client = RedisHelper.Instance;
        }
        private void Form1_Shown(object sender, EventArgs e)
        {
            _client.ZRemRangeByRank(key, 0, -1);

            _client.ZAdd(key, (1, "aaa"));
            _client.ZAdd(key, (2, "bbb"));
            _client.ZAdd(key, (3, "ccc"));
            _client.ZAdd(key, (4, "ddd"));
            _client.ZAdd(key, (5, "eee"));
            _client.ZAdd(key, (6, "fff"));
            _client.ZAdd(key, (7, "ggg"));
            _client.ZAdd(key, (8, "hhh"));

            refresh();
        }

        private void refresh()
        {
            listDisplay.Items.Clear();
            var sortSet = _client.ZRangeWithScores(key, 0, -1);
            lblCount.Text = $"{_client.ZCard(key)} 行        Min:{sortSet.FirstOrDefault().score}        Max:{sortSet.LastOrDefault().score}";
            foreach (var item in sortSet)
            {
                listDisplay.Items.Add(item);
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

        private void btnTset_Click(object sender, EventArgs e)
        {
            var min = RedisHelper.Instance.ZRangeWithScores(key, 0, 0).FirstOrDefault().score;
            var max = RedisHelper.Instance.ZRangeWithScores(key, -1, -1).FirstOrDefault().score;
            MessageBox.Show(min.ToString() + "      " + max.ToString());
            //_client.HIncrBy(key, "cd123y");
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
            if (length > 1)
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
            var obj = listDisplay.SelectedItem;
            if (obj == null)
                return;
            txtScore.Text = (((string, decimal))obj).Item2.ToString();
            txtObject.Text = (((string, decimal))obj).Item1.ToString();
        }

        private void btnCallAhead_Click(object sender, EventArgs e)
        {
            if (!string.IsNullOrEmpty(txtCallAhead.Text))
            {
                var score = _client.ZRank(key, txtCallAhead.Text);

            }
            refresh();
        }
    }
}