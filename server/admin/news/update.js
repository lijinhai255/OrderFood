// 引入数据库模块
var { collection, end } = require('../../db');
// 引入获取id的方法
var { ObjectId } = require('mongodb');
// 课程修改接口
module.exports = (req, res) => {
	// res.json('sucess')
	// 获取课程数据
	// console.log(req.body)
	// 获取课程id
	let id = req.body._id;
	// 删除请求体中的id
	delete req.body._id;
	// 操作集合
	collection('news', res, (collection, db) => {
		// 操作集合
		collection
			// 操作
			.update({ _id: ObjectId(id) }, req.body, (err, data) => {
				// console.log(err, data)
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
	})
}