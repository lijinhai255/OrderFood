//引入数据库
var { collection, end} = require('../../db');
//引入mongdb
var  mongodb = require('mongodb');
module.exports= (req,res)=>{
	// res.json('ssuccess')
	//获取课程id 
	//打开集合
	collection('lesson',res,(collection,db)=>{
		//操作集合
		collection
			.removeOne({_id:mongodb.ObjectId(req.body.id)},(err,data)=>{
				// console.log(err,data);
				if(err){
					return end('collectionRemoveError',res,db)
				}
				//成员删除成功
				if(data.result.n>0){
					//提示用户
					return end('success',res,db)
				}
				//没有可以删除的成员
				end('noRemoveData',res,db)
			})
	})
}