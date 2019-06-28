//引入express
var express = require("express");
//引入page
var page = require('../page');
//第一步路由实例化
var router = new express.Router();
//第二步 实现路由请求
module.exports =  router
			.get('/',page.home)
			.get('/admin',page.admin)
			.get('/mtpc',page.mtpc)
			.get('/gwpc',page.gwpc)
//暴露接口
// module.exports = router;