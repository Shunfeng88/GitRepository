const signalR = require('@microsoft/signalr');

//const token ='22';
//医生端
//const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiY2NhNzI1ZGItMjIzNi00MzhkLTk2ZjktODdkODJkNjM5NTc4IiwiQ3VzdG9tZXJJRCI6IjA1ZGNjNGE1LTBkZDUtNDViNy1iYmZlLTliMzYzMzgwYTFlMCIsIkN1c3RvbWVyTmFtZSI6IuWkjeaXpuWkp-WtpumZhOWxnuecvOiAs-m8u-WWieenkeWMu-mZoiIsIkN1c3RvbWVyU2hvcnROYW1lIjoi5aSN5pem5aSn5a2m6ZmE5bGe55y86ICz6by75ZaJ56eR5Yy76ZmiIiwiRW1wbG95ZWVJRCI6ImNjYTcyNWRiLTIyMzYtNDM4ZC05NmY5LTg3ZDgyZDYzOTU3OCIsIkVtcGxveWVlQ29kZSI6IjAyXzAxXzM1NzciLCJFbXBsb3llZU5hbWUiOiLpn6nmnJ0iLCJMb2dpbklEIjoiMjAyMTA1MTExMTAzMDIxMzkxOTUxOTU3OTE5NzY4NTc2IiwiUHJvdmlkZXIiOiIiLCJPcGVuVW5pb25JZCI6IiIsIk9wZW5JZCI6IiIsIk9wZW5FbXBsb3llZUNvZGUiOiIiLCJzdWIiOiJjY2E3MjVkYi0yMjM2LTQzOGQtOTZmOS04N2Q4MmQ2Mzk1NzgiLCJ0b2tlbl91c2FnZSI6ImFjY2Vzc190b2tlbiIsImp0aSI6Ijg2MGRjY2ZlLTFjNDAtNGY3YS1hMzkzLTcxNmI4MjNmMjZhYSIsImNmZF9sdmwiOiJwcml2YXRlIiwic2NvcGUiOiJvcGVuaWQiLCJhdWQiOlsicmVzb3VyY2Vfc2VydmVyIiwicmVzb3VyY2Vfc2VydmVyX2NvcmUiLCJyZXNvdXJjZV9oaXNhcGkiXSwiYXpwIjoiMDVkY2M0YTUtMGRkNS00NWI3LWJiZmUtOWIzNjMzODBhMWUwIiwibmJmIjoxNjIwNzAyMTgyLCJleHAiOjE2MjA3MDU3ODIsImlhdCI6MTYyMDcwMjE4MiwiaXNzIjoiaHR0cHM6Ly9tcGx1cy5saW5raW5nY2xvdWQuY24vIn0.8VFaGbjG1Iqe4fDc7-5iefmBvA-9S4uCNXur3ewcdps';

//患者端
//const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQ0xTMDAxIiwiQ3VzdG9tZXJJRCI6ImFhZjgwY2VmLTA5MzktNDBhZC1iN2M4LTI1MDZjZmI1ZWNkOSIsIkN1c3RvbWVyTmFtZSI6IiIsIkFyZWFJRCI6IiIsIkFyZWFOYW1lIjoiIiwiRW1wbG95ZWVDb2RlIjoiQ0xTMDAxIiwibmJmIjoxNjUxMDQ4ODY5LCJleHAiOjE2NTEwNzA0NjksImlzcyI6Imh0dHBzOi8vbXBsdXMubGlua2luZ2Nsb3VkLmNuLyIsImF1ZCI6InJlc291cmNlX3NlcnZlcl9jb3JlIn0.Os46Q22tIq5DPhtA4Uw91A-phgi9rrc0LyjhMy8EN1c';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQ0xTMTAxIiwiQ3VzdG9tZXJJRCI6IjA1ZGNjNGE1LTBkZDUtNDViNy1iYmZlLTliMzYzMzgwYTFlMCIsIkN1c3RvbWVyTmFtZSI6IiIsIkFyZWFJRCI6IiIsIkFyZWFOYW1lIjoiIiwiRW1wbG95ZWVDb2RlIjoiQ0xTMTAxIiwibmJmIjoxNjY2MTQ2NjI1LCJleHAiOjE2NjYxNjgyMjUsImlzcyI6Imh0dHBzOi8vbXBsdXMubGlua2luZ2Nsb3VkLmNuLyIsImF1ZCI6InJlc291cmNlX3NlcnZlcl9jb3JlIn0.ENXQEkmCd1tG6Ak37_uzSicYISPIuEYVavX1uF_pq_Y';

const connection = new signalR.HubConnectionBuilder()
	//.withUrl("https://mplus.linkingcloud.cn/signalr/talkhub", { accessTokenFactory: () => token })
	//.withUrl("https://mplus.linkingcloud.cn/signalr/qahub", { accessTokenFactory: () => token })
	//.withUrl("http://10.81.102.55:6028/qahub", { accessTokenFactory: () => token })
	//.withUrl("https://mplusmtest.linkingcloud.cn/waiting/waitinghub", { accessTokenFactory: () => token })
	.withUrl("http://127.0.0.1:8293/waitinghub", {	accessTokenFactory: () => token})
	//.withUrl("https://fwcs.linkingcloud.cn/waitingapi/waitinghub", {	accessTokenFactory: () => token})
	//.withUrl("https://mplusdemo.linkingcloud.cn/signalr/qahub", {	accessTokenFactory: () => token})
	.withAutomaticReconnect([5000, 5000, 10000, 10000])
	.build();

//心跳检查间隔30s
//connection.keepAliveIntervalInmillisecods = 30;

connection.onclose(() => {
	console.log("服务器30秒无响应，连接已断开")
});

connection.onreconnecting((error) => {
	console.log("断线后尝试重连")
})

connection.onreconnected((error) => {
	console.log("重新连接成功")
})

module.exports = {
	connection: connection
}
