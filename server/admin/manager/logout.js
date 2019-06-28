// 实现接口
module.exports = (req, res) => {
	// 退出就是清除session
	delete req.session.username;
	// 返回到首页
	res.redirect('/admin/')
}