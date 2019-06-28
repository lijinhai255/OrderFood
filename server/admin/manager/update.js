// 引入数据库
var { collection, end } = require('../../db');
// 引入配置
var { ERRORS } = require('../../conf');
// 实现接口
module.exports = (req, res) => {
	// res.json('success');
	// console.log(req.session.username, req.body)
	// 用户名在session中，所以可以根据session中的用户名寻找用户
	if (req.session.username) {
		// 更新数据
		collection('manager', res, (collection, db) => {
			// 操作集合
			collection
				// 更新
				.update(
					// 查询数据的条件
					{ username: req.session.username },
					// 更新的数据
					req.body,
					// 监听结果
					(err, data) => {
						// console.log(err, data)
						// 如果有错误，要提示错误
						if (err) {
							// 提示错误，并返回
							return end('collectionUpdateError', res, db)
						}
						// 如果更新了一条数据，说明成功了
						if (data.result.n > 0) {
							// 需要用户重新登录，因此要销毁session中的用户名
							delete req.session.username;
							// 返回客户端
							return end('success', res, db);
						}
						// 否则，更新失败要提示用户
						end('noUpdateData', res, db)
					}
				)
		})
	} else {
		// 提示用户
		res.json(ERRORS.noLogin)
	}
}