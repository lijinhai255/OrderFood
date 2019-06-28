//引入数据库模块
var { collection, end} = require('../../db');
//引入数据
var {ADMIN_SHOW_LESSON_NUM} =require('../../conf') 
//获取课程数据列表
module.exports =(req,res)=>{
	// res.json('sucess')
	let uid = req.query.uid;
	//操作集合
	collection('addcart',res,(collection,db)=>{
		collection
			.find({'uid':uid})
			.toArray((err,data)=>{
				if(err){
					return end('collectionFindError',res,db)
				}
				//没有数据
				if(data.length===0){
					return end('noResult',res,db);
				}
				// console.log(data);
				let sum=0;
				//遍历data
				data.forEach((item,index)=>{
					// console.log(item.num);
					sum+= +item.num;
				})
				//前面几项都符合要求 向前端返回数据
				end({
					error:0,
					sum
				},res,db)
				
			})
			
	})
	
}