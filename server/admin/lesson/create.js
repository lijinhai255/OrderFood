// 数据库模块
var { collection, end } = require('../../db');
// 创建课程接口
module.exports = (req, res) => {
	// res.json('success');
	// 提交的数据
	// console.log(req.body)
	// 打开集合
	collection('lesson', res, (collection, db) => {
		// 操作集合
		collection
			// 插入操作
			.insertOne(req.body, (err, data) => {
				// 如果有错误
				if (err) {
					// 终止执行
					return end('collectionInsertError', res, db);
				}
				// 如果数据存储成功
				if (data.result.n > 0) {
					// 通知用户成功了
					return end('success', res, db);
				}
				// 插入失败
				end('noInsertData', res, db);
				// console.log(err, data)
			})
	})
}