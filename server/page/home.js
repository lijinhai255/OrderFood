//将路由的实现 放在该目录下
module.exports = (req,res)=>{
	// 判断Ua 是否包含mobile 决定去渲染 那个页面
		let ua =req.header('User-Agent');
		if (/mobile/i.test(ua)) {
			//移动端
		 	return res.render('mobile.html')
		}
		//渲染模板
		res.render('pc.html')
}