
var ejs =require("ejs");
var express = require("express");
var path = require("path");
//引入session 
var  session = require('express-session');
//引入请求解析中间件
var bodyParser =require('body-parser');
//引入配置
var conf = require('../conf');

//暴露接口
module.exports = function( app){
	//更改ejs 模板引擎的差值语法
	ejs.delimiter="$";
	// 更该ejs拓展名 1 引入ejs 2 通过app.engine 更改ejs模板引擎拓展名
	app.engine('.html',ejs.__express);
	
	//第三步 模版引擎设置为 ejs 
	app.set('view engine' , 'ejs');
	//使用session中间件
	app.use(session({
		secret: 'icketang',
		resave:true,
		saveUninitialized:false,
	}));
	//解析数据
	app.use(bodyParser.json())
	//获取静态化
	let STATICS = conf.STATICS;
	//遍历静态化配置
	for(let key in STATICS ){
		//key 表示请求
		//STATICS[key] 表示静态化的目录
		app.use(key,express.static(path.join(process.cwd(),STATICS[key])))
	}
	//将请求资源静态化
// 	app.use('/action',(req,res,next)=>{
// 		// req.url+='.json';
// 		//对字符串进行切割
// 		let arr = req.url.split('?');
// 		//在第一个成员后面 添加.json
// 		arr[0]+='.json';
// 		//通过？ 拼接
// 		req.url=arr.join('?');
// 		next();
// 	},express.static(path.join(process.cwd(),'/static/data')))
// 	// 第六步 将static目录静态化 使用app.use方法
	// app.use('/static/',express.static(path.join(process.cwd(),'/static/')))
	// cwd 指的是指令执行的所在的目录 将指令执行的目录与static目录拼接在一起 引入path模块
	// dirname 当前文件所在的的目录
	//将字体图标请求静态化
	
	// app.use('/fonts/',express.static(path.join(process.cwd(),'/static/fonts')))
	
}