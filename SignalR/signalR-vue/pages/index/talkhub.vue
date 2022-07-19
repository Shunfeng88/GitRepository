<template>
	<view class="content">
		<button type="default" @click="join">加入房间</button>


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
				userId: 'mobile_13917527217',
				roleType: 0,
				// userId: 'cca725db-2236-438d-96f9-87d82d639578',
				// roleType: 1,
				askMainId: '1a4b83dd-0904-49ed-94fd-023a06616a21',
				content: [],
				msg: ""
			}
		},
		onLoad() {
			connection.start();
			connection.on("JoinCall",res=>{
				console.log(res)
			})
			
			connection.on("SendCall",res=>{
				console.log(res)
			})
			
			connection.on("TestCall",res=>{
				console.log(res)
			})
		},
		methods: {
			join(){
				let data={
					callbackName:"JoinCall",
					outTradeNo:"2101N113150202920022",
					token:"%24LC%24jhXEzsp07hksFTjn%2bTYYyWFFPAc%2bibPQarawZH2nzoduQXChmVBdXPPUHQnuaeBDioDM6DasWP36CxV6%2bF2DJdr8zTmu%2fvh2qSClunCevG3auSwyBsoDSUH36aRpuShTcX1Y%2f%2bBY1QuLLRPAyMS4sJeSjyGACeThW1PI%2b8dLi6YTg%2bA2XNr%2bKlgD12l%2fbaJf5S%2bVuKS91jywvnXNAwa3%2bw%3d%3d%24LC%24"
				}
				connection.invoke("UserJoinTalk", data);
			},
			sendm() {
				
				// uni.request({
				// 	url: "http://localhost:7624/doctor/baby/GetBabyMilkVolumeWeight",
				// 	method: 'POST',
				// 	header: {
				// 		"Content-Type":"application/x-www-form-urlencoded",
				// 		"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMGE1MDMyODMtYTQzMC00MmM5LTlmYmEtOWJiZDU5OTI5MWVjIiwiQ3VzdG9tZXJJRCI6ImYzYjVjNjE3LTQwN2YtNDhmZS05YTNhLWQ0ZjNjZWUyM2YwMyIsIkN1c3RvbWVyTmFtZSI6IuS4iua1t-W4guesrOS4gOWmh-WptOS_neWBpemZoiIsIkN1c3RvbWVyU2hvcnROYW1lIjoi5LiK5rW35biC56ys5LiA5aaH5am05L-d5YGl6ZmiIiwiRW1wbG95ZWVJRCI6IjBhNTAzMjgzLWE0MzAtNDJjOS05ZmJhLTliYmQ1OTkyOTFlYyIsIkVtcGxveWVlQ29kZSI6Imhsdzk1NSIsIkVtcGxveWVlTmFtZSI6IumZiOeRnuiLsSIsIkxvZ2luSUQiOiIyMDIwMTIxODE2MjQxMDEzMzk4NDg5MTkzMTMxNTQwNDgiLCJzdWIiOiIwYTUwMzI4My1hNDMwLTQyYzktOWZiYS05YmJkNTk5MjkxZWMiLCJ0b2tlbl91c2FnZSI6ImFjY2Vzc190b2tlbiIsImp0aSI6IjM4ZTEyZjAwLTZiYTktNDNiOS04NWJiLTgzY2I1NjEzYzJhZiIsImNmZF9sdmwiOiJwcml2YXRlIiwic2NvcGUiOiJvcGVuaWQiLCJhdWQiOlsicmVzb3VyY2Vfc2VydmVyIiwicmVzb3VyY2Vfc2VydmVyX2NvcmUiLCJyZXNvdXJjZV9oaXNhcGkiXSwiYXpwIjoiZjNiNWM2MTctNDA3Zi00OGZlLTlhM2EtZDRmM2NlZTIzZjAzIiwibmJmIjoxNjA4Mjc5ODUwLCJleHAiOjE2MDgyODM0NTAsImlhdCI6MTYwODI3OTg1MCwiaXNzIjoiaHR0cHM6Ly9tcGx1cy5saW5raW5nY2xvdWQuY24vIn0.HeYYT7XFYLCmP6kLkXjTR_7Zv2AFZ6W5S6z4Akk8s2c"
				// 	},
				// 	data:{},
				// 	success: function(res) {
				// 		console.log(res);
				// 	},
				// 	fail: (err) => {
				// 		console.log(err);
				// 	}
				// })
				var data = {
					askMainId: this.askMainId,
					userId: this.userId,
					message: this.msg,
					messageType: 0,
					callbackName: "SendCall"
				}
				connection.invoke("send", data);
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
