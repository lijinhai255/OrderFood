//引入路由
var page = require('./page');
//引入路由
var action = require('./action');
//引入路由
var admin = require('./admin')
//定义并暴露接口
module.exports = function(app){
	//第三步、 安装路由中间件 
	//安装页面请求中间件
	app.use(page);
	//安装异步请求 中间件
	app.use(action);
	app.use(admin);
}
