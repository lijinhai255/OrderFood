//引入数据库模块
var { collection, end} = require('../../db');
//引入数据
var {ADMIN_SHOW_LESSON_NUM} =require('../../conf') 
//获取课程数据列表
module.exports =(req,res)=>{
	// res.json('success');
	// console.log(req.query.uid);
	//链接数据库 根据获取到的uid 查找向匹配的的数据
	var uid = req.query.uid;
	//打开集合
	collection('addcart',res,(collection,db)=>{
		//操作集合
		collection
			.find({uid:uid})
			.toArray((err,data)=>{
				if(err){
					console.log(err,data)
					return end('collectionFindError',res,db);
				}
				//如果没有数据
				if(data.length===0){
					return end('noResult', res , db);
				}
				//有数据 将数据返回给前端
				end({
					error:0,
					data
				},res,db)
			})
			
	})
	
}