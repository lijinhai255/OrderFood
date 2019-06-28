// 数据库模块
var { collection, end } = require('../../db');
var  { ObjectId} = require('mongodb');
// 创建课程接口
module.exports = (req, res) => {
	// res.json('数据链接成功');
	let uid = req.query.uid;
	// let _id = req.query._id;
	// console.log(_id,2);
	let num = req.query.num;
	//操作集合
	collection('addcart',res,(collection,db)=>{
		//查找数据
		collection
			.find({'uid':uid,'_id':ObjectId(req.query._id)})
			.toArray((err,data)=>{
				if(err){
					return end('collectionFindError',res,db);
				}
				collection.update({'uid':uid,'_id':ObjectId(req.query._id)},{$set:{'num':+num+1}})
				//有数据 将数据返回给前端
				end({
					error:0,
					data
				},res,db)
			})
	})
}

