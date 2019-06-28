//引入express
var  express = require('express');
//引入接口
var action = require ('../action/index.js');
//创建路由实例化对象
var router  = new express.Router();
//配置路由 并返回接口
module.exports = router
	.post('/food/addCart',action.addCart)
	.get('/food/foodList',action.getFoodList)
	.get('/food/cartCount',action.CartCount)
	.get('/food/CartList',action.CartList)
	.get('/food/desNum',action.desNum)
	.get('/food/addNum',action.addNum)
	.post('/food/saveFoodInfo/',action.addFoodInfo)
	.get('/food/getUserInfo',action.getUserInfo)
	.post('/food/addOrder',action.addOrder)