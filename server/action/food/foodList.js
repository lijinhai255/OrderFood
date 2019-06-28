//引入数据库模块
var { collection, end} = require('../../db');
//引入数据
var {ADMIN_SHOW_LESSON_NUM} =require('../../conf') 
//获取课程数据列表
module.exports =(req,res)=>{
	// res.json('sucess')
	//获取页面
	let page = req.query.page;
	//从0 开始记数的
	page =page < 1?0: page-1;
	//操作集合
	collection('foodList',res,(collection,db)=>{
		//查找数据
		collection
			.find()
			//倒叙
			.sort({_id:-1})
			//转化成数据
			.toArray((err,data)=>{
				//如果有错误
				if(err){
					return end('collectionFindError',res,db)
				}
				//没有数据
				if(data.length===0){
					return end('noResult',res,db)
				}
				//有数据 返回给前端
				end({
					error:0,
					data
				},res,db)
			})
	})
}