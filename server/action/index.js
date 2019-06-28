//获取订餐系统

let addCart = require('./food/addCart');
let getFoodList = require('./food/foodList');
//获取购物车数量
let CartCount = require('./food/CartCount.js');
//获取购车数据
let CartList = require('./food/CartList.js');
//获取 购物车数量减少端口
let desNum =require('./food/desNum.js');
//获取 购物车数量增加端口
let addNum = require('./food/addNum.js');
//引入 增加foodInfo接口
let addFoodInfo = require('./food/addFoodInfo.js');
//引入获取用户信息接口
let getUserInfo = require('./food/getUserInfo.js');
//引入增加订单接口信息
let addOrder = require('./food/addOrder.js');

//暴露接口
module.exports ={
	addCart,
	getFoodList,
	CartCount,
	CartList,
	desNum,
	addNum,
	addFoodInfo,
	getUserInfo,
	addOrder
}