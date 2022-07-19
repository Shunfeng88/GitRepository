<template>
	<view class="content">

		<view v-for="item in content" :key="item.id" class="msg-item">
			<view :class="item.isSelf?'right':'left'">
				<text v-if="item.messageType==3" class="card">{{item.talkerContent}}</text>
				<text v-else class="msg">{{item.talkerContent}}</text>
			</view>
		</view>

		<button type="default" @click="getConfig">getConfig</button>
		<input v-model="msg" />
		<button type="default" @click="send">send</button>
	</view>
</template>

<script>
	import {
		connection,
		start
	}  from '@/js/signalrUtil.js'

	export default {
		data() {
			return {
				title: 'Hello',
				userId: 'mobile_13917527217',
				roleType:0,
				// userId: 'cca725db-2236-438d-96f9-87d82d639578',
				// roleType: 1,
				askMainId: '1a4b83dd-0904-49ed-94fd-023a06616a21',	
				content: [],
				msg: ""
			}
		},
		onLoad() {
			start();
			connection.on("LoginCallBack", res => {
				if (res) {
					var data = {
						askMainId: this.askMainId,
						userId: this.userId,
						roleType: this.roleType
					}
					connection.invoke("JoinTalk", data);
				}
			});

			connection.on("JoinTalkCall", res => {
				console.log(res)
				this.content = [];
				this.content = this.content.concat(res.data.talkList);
			});

			connection.on("ToAppendTalk", res => {
				console.log(res);
				if (res.data.createUser == this.userId) {
					res.data.isSelf = true
				} else {
					res.data.isSelf = false
				}

				this.content.push(res.data);
			});

			connection.on("LiveConfigCall", res => {
				console.log(res)
			});

			// connection.on("ToAppendTalk", res => {
			// 	console.log(res);
			// 	if (res.data.createUser == this.userId) {
			// 		res.data.isSelf = true
			// 	} else {
			// 		res.data.isSelf = false
			// 	}

			// 	this.content.push(res.data);
			// });
		},
		methods: {
			send() {
				var data = {
					askMainId: this.askMainId,
					userId: this.userId,
					message: this.msg,
					messageType: 0
				}
				connection.invoke("SendMessage", data);

				// var data = {
				// 	"content": "{\"CardId\":\"9357ec42-4585-4ffd-a4ec-591d85da64d9\",\"DocList\":[{\"DocID\":\"10c1aadb-e505-415a-93be-42115ec19705\",\"DocName\":\"韩朝\",\"DocImg\":\"/photo/202004/ff96a272d45c413abab1bfefcfb49477.jpg\",\"DocTitle\":\"高级专家\",\"CustomerName\":\"复旦大学附属眼耳鼻喉科医院\",\"DeptName\":\"耳鼻喉科互联网门诊\"}],\"IsCancel\":\"false\",\"IsAccept\":\"false\",\"CardType\":\"4\",\"Content\":\"\",\"Patient\":{\"Name\":\"Song\",\"Sex\":\"女\",\"Avator\":\"\"},\"txt\":\"视频咨询已经开始\",\"time\":\"\",\"isend\":1,\"isHasQrCode\":false,\"DocID\":[\"10c1aadb-e505-415a-93be-42115ec19705\"]}",
				// 	"messageType": 3,
				// 	"talkId": "f62e44c2-a6af-4511-ad8b-662812b2cf95",
				// 	"LoginName": "wgk_hc",
				// 	"userId": "mobile_13917527217",
				// 	"connectionId": "6d7d1f98-59c8-4071-93ad-adebbee8a7e6",
				// 	"messageId": "9357ec42-4585-4ffd-a4ec-591d85da64d9"
				// }

				// connection.invoke("SendAToUser", data);
				
				this.msg = "";
			},
			getConfig() {
				var data = {
					askMainId: this.askMainId,
					userId: this.userId,
					callBackName: "LiveConfigCall"
				}
				connection.invoke("GetLiveConfig", data);
			}
		}
	}
</script>

<style>
	.content {
		background-color: #F1F1F1;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.msg-item {
		margin: 10px 0;
		padding: 10px;
	}

	.left {
		text-align: left;
	}

	.right {
		text-align: right;
	}

	.msg {
		padding: 10px;
		border-radius: 3px;
	}

	.left .msg {
		background-color: #fff;
	}

	.right .msg {
		background-color: #16ad90;
		color: #fff;
	}

	.card {}
</style>
