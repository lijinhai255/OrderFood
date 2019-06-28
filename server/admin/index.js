//引入解耦
var managerLogin = require('./manager/login');
var managerUserInfo = require('./manager/userinfo');
//引入修改用户信息
var managerUpdate =require('./manager/update');
//引入课程信息
var LessonCreate = require('./lesson/create');
var LessonUpload = require('./lesson/upload');
var LessonList = require('./lesson/list');
var LessonMove = require('./lesson/remove');
var LessonEdit = require('./lesson/edit')
var LessonUpdate= require('./lesson/update')
//引入用户信息
var UserCreate = require('./user/create');
var UserList = require('./user/list');
var UserRemove = require('./user/remove');
var UserEdit = require('./user/edit');
var UserUpdate = require('./user/update');
//引入新闻信息
var NewsCreate = require('./news/create');
var NewsList = require('./news/list');
var NewsRemove = require('./news/remove');
var NewsEdit =require('./news/edit');
var NewsUpdate = require('./news/update');
//引入商家信息接口
var SellerUplod = require('./seller/upload');
var SellerUplods = require('./seller/uploads');
var SellerCreate = require('./seller/create');
var SellerDeom =require('./seller/creatdemo');
var SellerList = require('./seller/list');

//暴露接口
module.exports ={
	managerLogin,
	managerUserInfo,
	managerUpdate,
	//课程信息
	LessonCreate,
	LessonUpload,
	LessonList,
	LessonMove,
	LessonEdit,
	LessonUpdate,
	//用户信息
	UserCreate,
	UserList,
	UserRemove,
	UserEdit,
	UserUpdate,
	//新闻信息
	NewsCreate,
	NewsList,
	NewsRemove,
	NewsEdit,
	NewsUpdate,
	//商家信息接口
	SellerUplod,
	SellerUplods,
	SellerCreate,
	SellerDeom,
	SellerList
}