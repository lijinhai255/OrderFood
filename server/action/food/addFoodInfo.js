// 数据库模块
var { collection, end } = require('../../db');
var  { ObjectId} = require('mongodb');
// 创建课程接口
module.exports = (req, res) => {
	// res.json('success')
	let uid = req.body.uid;
	// console.log(uid);
	let id = req.body._id;
	delete req.body._id;
	//链接数据库 对数据库进行操作
	collection('addFoodInfo',res,(collection,db)=>{
		//先在集合中对数据进行查找
		collection
			.findOne({'uid':uid},(err,data)=>{
				if(data===null){
					//说明数据中没有数据
					collection
						.insertOne(req.body,(err,data)=>{
							if(err){
								return end('collectionInsertError',res,db);
							}
							if(data.result.n>0){
								//通知用户更新成功
								return end ('success', res,db)
							}
							//插入失败
							end('noInsertData', res, db);
						})
				}else if(data.uid===req.body.uid ){
					// 操作集合
					collection
						// 操作
						.update({ uid: uid }, req.body, (err, data) => {
							// 有错误
							if (err) {
								// 终止执行，提示用户
								return end('collectionUpdateError', res, db);
							}
							// 如果修改成功
							if (data.result.n > 0) {
								// 修改成功
								return end('success', res, db)
							}
							// 没有修改数据
							end('noUpdateData', res, db);
						})
				}
			})
	})
}

