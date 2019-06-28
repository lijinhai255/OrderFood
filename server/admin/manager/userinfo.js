var conf  = require('../../conf');

// 引入数据库模块
var { collection, end } = require('../../db');
// 1 实现登录接口方法
module.exports = (req, res) => {
	// res.json('success');
	//如果session 中有用户名说明已经登陆过
	if(req.session.username){
		//表示用户已经登陆过
		res.json({
			error:0,
			data:{
				username:req.session.username
			}
		})
	}else{
		res.json(conf.ERRORS.noLogin)
	}
	
}