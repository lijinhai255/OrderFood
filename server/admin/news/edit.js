//引入数据库
var { collection, end} = require('../../db');
var  { ObjectId} = require('mongodb');
//引入mongodb
module.exports= ( req,res)=>{
	collection('news', res, (collection, db) => {
		// 操作集合
		collection
			// 查找
			.findOne({ _id: ObjectId(req.query.id) }, (err, data) => {
				// console.log(err, data)
				// 如果有错误
				if (err) {
					return end('collectionFindError', res, db)
				}
				// 如果没有找到数据
				if (!data) {
					// 没有找到数据
					return end('noResult', res, db);
				}
				// 找到数据
				end({
					errno: 0,
					data
				}, res, db)
			})
	})
}