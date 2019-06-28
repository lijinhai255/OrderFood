//引入express
var  express = require('express');
//引入接口
var admin = require ('../admin/index.js');
//创建路由实例化对象
var router  = new express.Router();
//配置路由 并返回接口
module.exports = router
	.post('/admin/login',admin.managerLogin)
	.get('/admin/userinfo',admin.managerUserInfo)
	.post('/admin/manager/update',admin.managerUpdate)
	.post ('/admin/lesson/upload',admin.LessonUpload)
	.post('/admin/lesson/create',admin.LessonCreate)
	.post('/admin/lesson/remove',admin.LessonMove)
	.get('/admin/lesson/detail',admin.LessonEdit)
	.post('/admin/lesson/update',admin.LessonUpdate)
	//获取课程列表
	.get('/admin/lesson/list',admin.LessonList)
	.post('/admin/user/create',admin.UserCreate)
	.get('/admin/user/list',admin.UserList)
	.post('/admin/user/remove',admin.UserRemove)
	.get('/admin/user/detail',admin.UserEdit)
	.post('/admin/user/update',admin.UserUpdate)
	//获取用户信息列表
	.get('/admin/news/list',admin.NewsList)
	.post('/admin/news/create',admin.NewsCreate)
	.post('/admin/news/remove',admin.NewsRemove)
	.get('/admin/news/detail',admin.NewsEdit)
	.post('/admin/news/update',admin.NewsUpdate)
	//获取商家 路由
	.post('/admin/seller/upload',admin.SellerUplod)
	.post('/admin/seller/uploads',admin.SellerUplods)
	.post('/admin/seller/create',admin.SellerCreate)
	// .get('/admin/seller/createdemo',admin.SellerDeom)
	.get('/admin/seller/list',admin.SellerList)
// //另一种配置路由的方法
// 	var { Router} = require('express');
// 	var router = new Router();
// 	module.exports = router
	
