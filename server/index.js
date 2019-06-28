//搭建服务器 遵循CommonJs规范 require
//搭建服务器 第一步 引入express
var express = require("express");
// 引入服务器
let server = require('./server');
//引入中间件
let middleware = require('./middleware');
//引入路由
var router = require('./router');
//引入连接数据库模块
var {collection, end}= require('./db');


// var fs =require("fs");
// //5.2 引入http协议
// var http =require("http");
// //6.2 引入https
// var https =require("https");
// 引入path模块 用于指令文件路径与static目录进行拼接 path.join() 进行路径的拼接
// var path = require("path");
// 引入ejs 更改ejs 拓展名’
// var ejs =require("ejs");
// //6.3 引入协议文件 引入fs模块 读取文件
// var key = fs.readFileSync('./ssl/private.pem');
// var cert = fs.readFileSync('./ssl/file.crt');
// 定义端口号 http端口号 https端口号
// const HTTP_PORT  = 3000;
// const HTTPS_PORT =3001;
//第二步创建项目
var app = express();

//使用服务模块
server(app);
//使用过中间件
middleware(app);
//使用路由中间件
router(app);


//连接数据库 并操作数据库
// app.get('/create', function(req, res) {
// 	// 直接操作集合
// 	collection('lesson', res, function(collection, database, res) {
// 		// 直接操作集合
// 		// 插入一条数据
// 		collection.insertOne({
// 			"img": "/static/img/lesson/11.jpg",
// 			"title": "初始时高级课程",
// 			"sales": "200",
// 			"price": "800.00",
// 			"type": "middle"
// 		}, function(err) {
// 			// 如果有错误
// 			if (err) {
// 				// 提示用户
// 				// res.json({ errno: 2, msg: '集合操作失败' })
// 				// // 关闭数据
// 				// database.close();
// 				// // 终止执行
// 				// return;
// 				return end('collectionInsertError', res, database)
// 			}
// 			// 返回数据
// 			// res.json({ errno: 0, msg: '操作成功' });
// 			// // 关闭数据库
// 			// database.close();
// 			end('success', res, database)
// 		})
// 	})
	//向数据库中插入一条数据
// 	var mongodb = require('mongodb');
// 	//定义数据库地址
// 	var mongoUrl = 'mongodb://localhost:27017/quanzhan_lesson';
// 	//获取客户端
// 	var MongoClient = mongodb.MongoClient;
// 	MongoClient.connect(mongoUrl,function(err,db){
// 		if(err){
// 			res.json('连接数据出错了');
// 			db.close();
// 			return ;
// 		}
// 		//获取集合
// 		let collection = db.collection('lesson');
// 		//插入数据
// 		collection.insertOne({
// 			"_id": 1,
// 			"img": "static/img/lesson/01.jpg",
// 			"title": "爱创课堂Javscript进阶课程",
// 			"sales": "12345",
// 			"price": "200.00",
// 			"type": "react"
// 		},function(err){
// 			if(err){
// 				res.json('集合插入失败');
// 				db.close();
// 				return;
// 			}
// 			//没有错误  通知客户daunting操作成功
// 			res.json('操作成功');
// 			db.close();
// 		}) 
// 	})
// 	// console.log(MongoClient)
	
// })
// 

// //更改ejs 模板引擎的差值语法
// ejs.delimiter="$";
// // 更该ejs拓展名 1 引入ejs 2 通过app.engine 更改ejs模板引擎拓展名
// app.engine('.html',ejs.__express);
// 
// //第三步 模版引擎设置为 ejs 
// app.set('view engine' , 'ejs');

// //将请求资源静态化
// app.use('/action',(req,res,next)=>{
// 	// req.url+='.json';
// 	//对字符串进行切割
// 	let arr = req.url.split('?');
// 	//在第一个成员后面 添加.json
// 	arr[0]+='.json';
// 	//通过？ 拼接
// 	req.url=arr.join('?');
// 	next();
// },express.static(path.join(process.cwd(),'/static/data')))
// 
// 
// //第四步：创建路由 使用get和post方法
// // app.verbs(pathName,handler) 该方法用于处理方式的请求
// // verbs 指的是动词 get post
// // pathName: 接口地址
// // handler 针对该请求的处理方式
// app.get('/',(req,res)=>{
// 	//判断Ua 是否包含mobile 决定去渲染 那个页面
// 	let ua =req.header('User-Agent');
// 	if (/mobile/i.test(ua)) {
// 		//移动端
// 	 	return res.render('mobile.html')
// 	}
// 	//渲染模板
// 	res.render('pc.html',{
// 		title:"爱创课堂"
// 	})
// })
// 路由中间件 还可以通过中间件的方法进行定义
// //第一步路由实例化
// var router = new express.Router();
// //第二步 实现路由请求
// router.get('/',(req,res)=>{
// 	// 判断Ua 是否包含mobile 决定去渲染 那个页面
// 		let ua =req.header('User-Agent');
// 		if (/mobile/i.test(ua)) {
// 			//移动端
// 		 	return res.render('mobile.html')
// 		}
// 		//渲染模板
// 		res.render('pc.html',{
// 			title:"爱创课堂"
// 		})
// })
// //第三步、 安装路由中间件 
// app.use(router);
// // 第六步 将static目录静态化 使用app.use方法
// app.use('/static',express.static(path.join(process.cwd(),'/static/')))
// // cwd 指的是指令执行的所在的目录 将指令执行的目录与static目录拼接在一起 引入path模块
// // dirname 当前文件所在的的目录
// //将字体图标请求静态化
// 
// app.use('/fonts/',express.static(path.join(process.cwd(),'/static/fonts')))
// 
//第五步 使用http 首先要引入http模块
// //5.2 创建http协议
// http.createServer(app)
// 	//监听端口号
// 	.listen(HTTP_PORT,()=>console.log('http server start at 3000'))
// 
// //第六步创建https模块 也要首先引入https模块 
// https.createServer({key, cert},app)
// 	//监听端口号
// 	.listen(HTTPS_PORT,()=>console.log('https srever start at 3001'))	