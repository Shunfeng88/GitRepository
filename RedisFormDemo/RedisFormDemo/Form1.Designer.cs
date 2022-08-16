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
            this.SuspendLayout();
            // 
            // btnAdd
            // 
            this.btnAdd.Location = new System.Drawing.Point(400, 42);
            this.btnAdd.Name = "btnAdd";
            this.btnAdd.Size = new System.Drawing.Size(75, 23);
            this.btnAdd.TabIndex = 1;
            this.btnAdd.Text = "ZAdd";
            this.btnAdd.UseVisualStyleBackColor = true;
            this.btnAdd.Click += new System.EventHandler(this.btnAdd_Click);
            // 
            // lblCount
            // 
            this.lblCount.AutoSize = true;
            this.lblCount.Location = new System.Drawing.Point(3, 315);
            this.lblCount.Name = "lblCount";
            this.lblCount.Size = new System.Drawing.Size(0, 17);
            this.lblCount.TabIndex = 2;
            // 
            // txtScore
            // 
            this.txtScore.Location = new System.Drawing.Point(400, 3);
            this.txtScore.Name = "txtScore";
            this.txtScore.Size = new System.Drawing.Size(38, 23);
            this.txtScore.TabIndex = 3;
            // 
            // txtObject
            // 
            this.txtObject.Location = new System.Drawing.Point(466, 3);
            this.txtObject.Name = "txtObject";
            this.txtObject.Size = new System.Drawing.Size(100, 23);
            this.txtObject.TabIndex = 4;
            // 
            // btnTset
            // 
            this.btnTset.Location = new System.Drawing.Point(491, 306);
            this.btnTset.Name = "btnTset";
            this.btnTset.Size = new System.Drawing.Size(75, 23);
            this.btnTset.TabIndex = 5;
            this.btnTset.Text = "Test";
            this.btnTset.UseVisualStyleBackColor = true;
            this.btnTset.Click += new System.EventHandler(this.btnTset_Click);
            // 
            // btnCall
            // 
            this.btnCall.Location = new System.Drawing.Point(491, 228);
            this.btnCall.Name = "btnCall";
            this.btnCall.Size = new System.Drawing.Size(75, 23);
            this.btnCall.TabIndex = 6;
            this.btnCall.Text = "CallNext";
            this.btnCall.UseVisualStyleBackColor = true;
            this.btnCall.Click += new System.EventHandler(this.btnCall_Click);
            // 
            // listDisplay
            // 
            this.listDisplay.Font = new System.Drawing.Font("Microsoft YaHei UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.listDisplay.FormattingEnabled = true;
            this.listDisplay.ItemHeight = 21;
            this.listDisplay.Location = new System.Drawing.Point(3, 3);
            this.listDisplay.Name = "listDisplay";
            this.listDisplay.Size = new System.Drawing.Size(391, 298);
            this.listDisplay.TabIndex = 7;
            this.listDisplay.Click += new System.EventHandler(this.listDisplay_DoubleClick);
            this.listDisplay.DoubleClick += new System.EventHandler(this.listDisplay_DoubleClick);
            // 
            // btnJump
            // 
            this.btnJump.Location = new System.Drawing.Point(444, 86);
            this.btnJump.Name = "btnJump";
            this.btnJump.Size = new System.Drawing.Size(65, 23);
            this.btnJump.TabIndex = 8;
            this.btnJump.Text = "优先";
            this.btnJump.UseVisualStyleBackColor = true;
            this.btnJump.Click += new System.EventHandler(this.btnJump_Click);
            // 
            // btnDrop
            // 
            this.btnDrop.Location = new System.Drawing.Point(515, 86);
            this.btnDrop.Name = "btnDrop";
            this.btnDrop.Size = new System.Drawing.Size(62, 23);
            this.btnDrop.TabIndex = 9;
            this.btnDrop.Text = "延后";
            this.btnDrop.UseVisualStyleBackColor = true;
            this.btnDrop.Click += new System.EventHandler(this.btnDrop_Click);
            // 
            // txtCount
            // 
            this.txtCount.Location = new System.Drawing.Point(400, 86);
            this.txtCount.Name = "txtCount";
            this.txtCount.Size = new System.Drawing.Size(35, 23);
            this.txtCount.TabIndex = 10;
            // 
            // btnCallAhead
            // 
            this.btnCallAhead.Location = new System.Drawing.Point(491, 268);
            this.btnCallAhead.Name = "btnCallAhead";
            this.btnCallAhead.Size = new System.Drawing.Size(75, 23);
            this.btnCallAhead.TabIndex = 11;
            this.btnCallAhead.Text = "CallAhead";
            this.btnCallAhead.UseVisualStyleBackColor = true;
            this.btnCallAhead.Click += new System.EventHandler(this.btnCallAhead_Click);
            // 
            // txtCallAhead
            // 
            this.txtCallAhead.Location = new System.Drawing.Point(400, 268);
            this.txtCallAhead.Name = "txtCallAhead";
            this.txtCallAhead.Size = new System.Drawing.Size(75, 23);
            this.txtCallAhead.TabIndex = 12;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 17F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(601, 341);
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
    }
}