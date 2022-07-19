<template>
	<view class="content">

		<view v-for="item in content" :key="item.id" class="msg-item">
			<view :class="item.isSelf?'right':'left'">
				<text v-if="item.messageType==3" class="card">{{item.talkerContent}}</text>
				<text v-else class="msg">{{item.talkerContent}}</text>
			</view>
		</view>

		<input v-model="msg" />
		<button type="default" @click="sendm">send</button>
		<button type="default" @click="getlive">getlive</button>
	</view>
</template>

<script>
	import {connection} from '@/js/signalrUtil.js'

	export default {
		data() {
			return {
				title: 'Hello',
				userId: 'mobile_13917527217',
				roleType: 0,
				// userId: 'f389b09a-0b3a-461d-924f-4b5b5f51e582',
				// roleType: 1,
				askMainId: '61fb01cd-677d-4b85-b68d-4878dd79f25c',
				content: [],
				msg: ""
			}
		},
		onLoad() { 
			connection.start();
		},
		onShow(){
			connection.on("LoginCallBack", res => {
				console.log(res);
			});
			
			connection.on("CallBack", res => {
				console.log("callback: "+ res);
			});
			
			connection.on("JoinTalkCall", res => {
				console.log(res);
			});	
			
			connection.on("ToAppendTalk", res => {
				console.log(res);
			});	
			
			connection.on("ToAppendMessage", res => {
				console.log(res);
			});	
			
			connection.on("GetLiveConfigCall", res => {
				console.log(res);
			});	
			
		},
		methods: {
			sendm() {
				
				// var data = {
				// 	message: this.msg,
				// 	messageType: 0,
				// }
				// connection.invoke("SendMessage", data);
				
				var data = {
					content: this.msg,
					askMainID:this.askMainId,
				}
				connection.invoke("SendQToUser", data);
			},
			getlive(){
				var data = {
					talkID: this.askMainId,
					callBackName: "GetLiveConfigCall"
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
