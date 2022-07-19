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
	</view>
</template>

<script>
	import {connection} from '@/js/signalrUtil.js'

	export default {
		data() {
			return {
				title: 'Hello',
				userId: 'f389b09a-0b3a-461d-924f-4b5b5f51e582',
				roleType: 1,
				askMainId: 'f5528362-5710-453d-9722-2a2349f03f6c',
				content: [],
				msg: ""
			}
		},
		onLoad() {
			connection.start();
		},
		onShow(){
			
			connection.on("LoginCallBack", res => {
				if (res) {				
					let data = {
					askMainId: this.askMainId,
					userId: this.userId,
						RoleType:this.roleType
					}
					
					connection.invoke("JoinTalk",data);
				}
			});
			
			connection.on("JoinTalkCall", res => {
				console.log(res);
			});	
			
			connection.on("ToAppendTalk", res => {
				console.log(res);
			});	
			
		},
		methods: {
			sendm() {

				var data = {
					TalkMainID: this.askMainId,
					userId: this.userId,
					TalkerContent: this.msg,
					messageType: 0
				}
				connection.invoke("SendAToUser", data);
				this.msg = "";
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
