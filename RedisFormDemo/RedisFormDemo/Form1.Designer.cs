namespace RedisFormDemo
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.btnAdd = new System.Windows.Forms.Button();
            this.lblCount = new System.Windows.Forms.Label();
            this.txtScore = new System.Windows.Forms.TextBox();
            this.txtObject = new System.Windows.Forms.TextBox();
            this.btnTset = new System.Windows.Forms.Button();
            this.btnCall = new System.Windows.Forms.Button();
            this.listDisplay = new System.Windows.Forms.ListBox();
            this.btnJump = new System.Windows.Forms.Button();
            this.btnDrop = new System.Windows.Forms.Button();
            this.txtCount = new System.Windows.Forms.TextBox();
            this.btnCallAhead = new System.Windows.Forms.Button();
            this.txtCallAhead = new System.Windows.Forms.TextBox();
            this.btntrain = new System.Windows.Forms.Button();
            this.btnInput = new System.Windows.Forms.Button();
            this.button1 = new System.Windows.Forms.Button();
            this.txtInsertCount = new System.Windows.Forms.TextBox();
            this.button2 = new System.Windows.Forms.Button();
            this.button3 = new System.Windows.Forms.Button();
            this.txtInsertCount2 = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // btnAdd
            // 
            this.btnAdd.Location = new System.Drawing.Point(514, 49);
            this.btnAdd.Margin = new System.Windows.Forms.Padding(4);
            this.btnAdd.Name = "btnAdd";
            this.btnAdd.Size = new System.Drawing.Size(96, 27);
            this.btnAdd.TabIndex = 1;
            this.btnAdd.Text = "ZAdd";
            this.btnAdd.UseVisualStyleBackColor = true;
            this.btnAdd.Click += new System.EventHandler(this.btnAdd_Click);
            // 
            // lblCount
            // 
            this.lblCount.AutoSize = true;
            this.lblCount.Location = new System.Drawing.Point(4, 371);
            this.lblCount.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.lblCount.Name = "lblCount";
            this.lblCount.Size = new System.Drawing.Size(0, 20);
            this.lblCount.TabIndex = 2;
            // 
            // txtScore
            // 
            this.txtScore.Location = new System.Drawing.Point(514, 4);
            this.txtScore.Margin = new System.Windows.Forms.Padding(4);
            this.txtScore.Name = "txtScore";
            this.txtScore.Size = new System.Drawing.Size(48, 27);
            this.txtScore.TabIndex = 3;
            // 
            // txtObject
            // 
            this.txtObject.Location = new System.Drawing.Point(599, 4);
            this.txtObject.Margin = new System.Windows.Forms.Padding(4);
            this.txtObject.Name = "txtObject";
            this.txtObject.Size = new System.Drawing.Size(127, 27);
            this.txtObject.TabIndex = 4;
            // 
            // btnTset
            // 
            this.btnTset.Location = new System.Drawing.Point(631, 298);
            this.btnTset.Margin = new System.Windows.Forms.Padding(4);
            this.btnTset.Name = "btnTset";
            this.btnTset.Size = new System.Drawing.Size(96, 27);
            this.btnTset.TabIndex = 5;
            this.btnTset.Text = "Test";
            this.btnTset.UseVisualStyleBackColor = true;
            this.btnTset.Click += new System.EventHandler(this.btnTset_Click);
            // 
            // btnCall
            // 
            this.btnCall.Location = new System.Drawing.Point(631, 206);
            this.btnCall.Margin = new System.Windows.Forms.Padding(4);
            this.btnCall.Name = "btnCall";
            this.btnCall.Size = new System.Drawing.Size(96, 27);
            this.btnCall.TabIndex = 6;
            this.btnCall.Text = "CallNext";
            this.btnCall.UseVisualStyleBackColor = true;
            this.btnCall.Click += new System.EventHandler(this.btnCall_Click);
            // 
            // listDisplay
            // 
            this.listDisplay.Font = new System.Drawing.Font("Microsoft YaHei UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.listDisplay.FormattingEnabled = true;
            this.listDisplay.ItemHeight = 27;
            this.listDisplay.Location = new System.Drawing.Point(4, 4);
            this.listDisplay.Margin = new System.Windows.Forms.Padding(4);
            this.listDisplay.Name = "listDisplay";
            this.listDisplay.Size = new System.Drawing.Size(502, 490);
            this.listDisplay.TabIndex = 7;
            this.listDisplay.Click += new System.EventHandler(this.listDisplay_DoubleClick);
            this.listDisplay.DoubleClick += new System.EventHandler(this.listDisplay_DoubleClick);
            // 
            // btnJump
            // 
            this.btnJump.Location = new System.Drawing.Point(571, 101);
            this.btnJump.Margin = new System.Windows.Forms.Padding(4);
            this.btnJump.Name = "btnJump";
            this.btnJump.Size = new System.Drawing.Size(84, 27);
            this.btnJump.TabIndex = 8;
            this.btnJump.Text = "优先";
            this.btnJump.UseVisualStyleBackColor = true;
            this.btnJump.Click += new System.EventHandler(this.btnJump_Click);
            // 
            // btnDrop
            // 
            this.btnDrop.Location = new System.Drawing.Point(662, 101);
            this.btnDrop.Margin = new System.Windows.Forms.Padding(4);
            this.btnDrop.Name = "btnDrop";
            this.btnDrop.Size = new System.Drawing.Size(80, 27);
            this.btnDrop.TabIndex = 9;
            this.btnDrop.Text = "延后";
            this.btnDrop.UseVisualStyleBackColor = true;
            this.btnDrop.Click += new System.EventHandler(this.btnDrop_Click);
            // 
            // txtCount
            // 
            this.txtCount.Location = new System.Drawing.Point(514, 101);
            this.txtCount.Margin = new System.Windows.Forms.Padding(4);
            this.txtCount.Name = "txtCount";
            this.txtCount.Size = new System.Drawing.Size(44, 27);
            this.txtCount.TabIndex = 10;
            // 
            // btnCallAhead
            // 
            this.btnCallAhead.Location = new System.Drawing.Point(631, 253);
            this.btnCallAhead.Margin = new System.Windows.Forms.Padding(4);
            this.btnCallAhead.Name = "btnCallAhead";
            this.btnCallAhead.Size = new System.Drawing.Size(96, 27);
            this.btnCallAhead.TabIndex = 11;
            this.btnCallAhead.Text = "CallAhead";
            this.btnCallAhead.UseVisualStyleBackColor = true;
            this.btnCallAhead.Click += new System.EventHandler(this.btnCallAhead_Click);
            // 
            // txtCallAhead
            // 
            this.txtCallAhead.Location = new System.Drawing.Point(514, 253);
            this.txtCallAhead.Margin = new System.Windows.Forms.Padding(4);
            this.txtCallAhead.Name = "txtCallAhead";
            this.txtCallAhead.Size = new System.Drawing.Size(95, 27);
            this.txtCallAhead.TabIndex = 12;
            // 
            // btntrain
            // 
            this.btntrain.Location = new System.Drawing.Point(631, 347);
            this.btntrain.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.btntrain.Name = "btntrain";
            this.btntrain.Size = new System.Drawing.Size(94, 29);
            this.btntrain.TabIndex = 13;
            this.btntrain.Text = "train";
            this.btntrain.UseVisualStyleBackColor = true;
            this.btntrain.Click += new System.EventHandler(this.btntrain_Click);
            // 
            // btnInput
            // 
            this.btnInput.Location = new System.Drawing.Point(645, 49);
            this.btnInput.Margin = new System.Windows.Forms.Padding(4);
            this.btnInput.Name = "btnInput";
            this.btnInput.Size = new System.Drawing.Size(96, 27);
            this.btnInput.TabIndex = 14;
            this.btnInput.Text = "插入";
            this.btnInput.UseVisualStyleBackColor = true;
            this.btnInput.Click += new System.EventHandler(this.btnInput_Click);
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(91, 513);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(94, 29);
            this.button1.TabIndex = 15;
            this.button1.Text = "插入普通";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // txtInsertCount
            // 
            this.txtInsertCount.Location = new System.Drawing.Point(12, 513);
            this.txtInsertCount.Name = "txtInsertCount";
            this.txtInsertCount.Size = new System.Drawing.Size(57, 27);
            this.txtInsertCount.TabIndex = 16;
            this.txtInsertCount.Text = "2";
            // 
            // button2
            // 
            this.button2.Location = new System.Drawing.Point(191, 513);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(94, 29);
            this.button2.TabIndex = 17;
            this.button2.Text = "插入特需T";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // button3
            // 
            this.button3.Location = new System.Drawing.Point(362, 511);
            this.button3.Name = "button3";
            this.button3.Size = new System.Drawing.Size(94, 29);
            this.button3.TabIndex = 18;
            this.button3.Text = "插入特需X";
            this.button3.UseVisualStyleBackColor = true;
            this.button3.Click += new System.EventHandler(this.button3_Click);
            // 
            // txtInsertCount2
            // 
            this.txtInsertCount2.Location = new System.Drawing.Point(475, 512);
            this.txtInsertCount2.Name = "txtInsertCount2";
            this.txtInsertCount2.Size = new System.Drawing.Size(54, 27);
            this.txtInsertCount2.TabIndex = 19;
            this.txtInsertCount2.Text = "3";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(754, 565);
            this.Controls.Add(this.txtInsertCount2);
            this.Controls.Add(this.button3);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.txtInsertCount);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.btnInput);
            this.Controls.Add(this.btntrain);
            this.Controls.Add(this.txtCallAhead);
            this.Controls.Add(this.btnCallAhead);
            this.Controls.Add(this.txtCount);
            this.Controls.Add(this.btnDrop);
            this.Controls.Add(this.btnJump);
            this.Controls.Add(this.listDisplay);
            this.Controls.Add(this.btnCall);
            this.Controls.Add(this.btnTset);
            this.Controls.Add(this.txtObject);
            this.Controls.Add(this.txtScore);
            this.Controls.Add(this.lblCount);
            this.Controls.Add(this.btnAdd);
            this.Margin = new System.Windows.Forms.Padding(4);
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.Shown += new System.EventHandler(this.Form1_Shown);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private Button btnAdd;
        private Label lblCount;
        private TextBox txtScore;
        private TextBox txtObject;
        private Button btnTset;
        private Button btnCall;
        private ListBox listDisplay;
        private Button btnJump;
        private Button btnDrop;
        private TextBox txtCount;
        private Button btnCallAhead;
        private TextBox txtCallAhead;
        private Button btntrain;
        private Button btnInput;
        private Button button1;
        private TextBox txtInsertCount;
        private Button button2;
        private Button button3;
        private TextBox txtInsertCount2;
    }
}