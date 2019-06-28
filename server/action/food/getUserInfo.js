//引入数据库模块
var { collection, end} = require('../../db');
//引入数据
var {ADMIN_SHOW_LESSON_NUM} =require('../../conf') 
//获取课程数据列表
module.exports =(req,res)=>{
	// res.json('success');
	//获取query数据
	let uid = req.query.uid;
	// console.log(uid);
	//链接数据库
	collection('addFoodInfo',res,(collection,db)=>{
		//操作集合
		collection
			.find({'uid':uid})
			.toArray((err,data)=>{
				if(err){
					return end('collectionFindError',res,db)

				}
				//如果没有数据
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