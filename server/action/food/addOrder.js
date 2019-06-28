//引入数据库模块
var { collection, end} = require('../../db');
//引入数据
var {ADMIN_SHOW_LESSON_NUM} =require('../../conf') 
//获取课程数据列表
module.exports =(req,res)=>{
	//获取数据
	let data  =req.body;
	let uid = data.uid;
	console.log(uid)
	let p_num =data.p_num;
	let p_mark = data.p_mark;
	let order = JSON.parse(data.order);
	let order_id= 1;
	let total_price = data.count;
	let total_num=data.total_num;
	let order_status=0;// 0表示 未确认 1表示已经确认 2 表示取消
	let pay_status= 0;// 0 表示未支付 1表示已经支付
	// let pay_type = data.pay_type; //表示支付方式 1 微信支付 2 支付宝支付
	let d =new Date();
	//链接数据库 在数据库中进行查找 如果有的话更新数据 没有的话更新数据
	collection('shop_order',res,(collection,db)=>{
		//在数据库中进行查找
		collection
			.find({"uid":uid,"pay_status":0})
			.toArray((err,data)=>{
				
			})
	})
	
	res.json('success');
}