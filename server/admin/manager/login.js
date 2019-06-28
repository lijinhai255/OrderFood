// 引入数据库模块
var { collection, end } = require('../../db');
// 1 实现登录接口方法
module.exports = (req, res) => {
	// res.json('success');
	// 查看用户数据
	// console.log(req.body)
	// 根据用户登录的数据，查找用户是否存在
	collection('manager', res, (collection, db) => {
		// 操作集合
		collection
			// 查找
			.find(req.body)
			// 转换成数组
			.toArray((err, data) => {
				// 有错误
				if (err) {
					// 提示用户，终止执行
					return end('collectionFindError', res, db)
				}
				// 如果没有数据
				if (data.length === 0) {
					// 提示用户，登录失败
					return end('collectionFindError', res, db)
				}
				// 有用户
				// 更新session
				req.session.username = req.body.username;
				// 返回数据
				end({ 
					errno: 0, 
					data: { username: req.body.username }
				}, res, db)
			})
	})
	// 添加测试数据
	// collection('manager', res, collection => collection.insertOne(req.body))
}