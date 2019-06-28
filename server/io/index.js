let url = require('url');

module.exports=function(io){
	//当用户连接 时候 获取url中的房间号
	io.on('connection',(socket)=>{
		let requestUrl = socket.request.url;
		let uid = url.parse(requestUrl,true).query.uid;
		//添加 到分组
		socket.join(uid);
		//监听 addvcart 事件
		socket.on('addcart',function(data){
			// console.log('addcart')
			//除了自己向 自己所在的分组内发布消息
			socket.broadcast.to(uid).emit('addcart','addcart')
		})
	})
}
// seajs 
