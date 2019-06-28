// 数据库模块
var { collection, end } = require('../../db');
// 创建课程接口
module.exports = (req, res) => {
	// res.json('插入数据连接成功了');
	// 提交的数据
	// console.log(req.body);
	//获取桌号
	var uid = req.body.uid;
	// 打开集合
	collection('addcart', res, (collection, db) => {
		// 操作集合 先对集合进行查找
		collection
			.findOne({uid:uid},(err,data)=>{
				// console.log(data);
				//数据第一次插入 或者data中的title不等于req中的title是 往数据库中存入data
				if(data===null||data.title!==req.body.title){
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
				}else if(data.title==req.body.title ){
					collection
						.update({uid:uid},req.body,(err,data)=>{
							if(err){
								return end('collectionUpdateError',res,db);
							}
							//如果修改成功
							if(data.result.n>0){
								//修改成功
								return end('success',res,db);
							}
							//没有修改的数据
							end('noUpdateData',res,db)
						})
				}
				// if()
			})
	})
}

