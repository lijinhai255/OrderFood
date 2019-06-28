// 引入数据库
var mongodb = require('mongodb');
// 引入配置
var conf = require('../conf');
// 数据库地址
let mongodbUrl = conf.MONGODB_URL;
// 获取客户端
var MongoClient = mongodb.MongoClient;

/***
 * 封装提示错误，并且关闭数据方法
 * @msg 		返回给客户端的信息
 * @db 			数据库对象的引用
 **/ 
function end(msg, res, db) {
	// 如果msg是字符串，要去配置里面寻找具体的错误
	if (typeof msg === 'string') {
		// 提示客户端
		res.json(conf.ERRORS[msg])
	} else {
		// 否则msg是对象，直接返回
		res.json(msg);
	}	
	// 关闭数据库
	db.close();
}
/***
 * 操作集合的方法
 * @name 		数据库集合名称
 * @res 		请求响应对象
 * @callback 	操作集合的回调函数
 **/ 
function collection(name, res, callback) {
	// 链接集合
	MongoClient.connect(mongodbUrl, function(err, db) {
		// 如果是3.0版本db是client，要执行let db = client('ickt_18_quanzhan')，并且url不要包括数据名称
		// 如果有错误
		if (err) {
			// 提示客户端
			// 响应对象返回数据
			// res.json({ errno: 1, msg: '链接数据库失败' });
			// // 关闭数据库
			// db.close();
			// // 终止执行
			// return;
			return end('databaseError', res, db)
		}
		// 获取集合
		// let collection = db.collection(name)
		// // 执行回调函数，并传递集合等参数
		// callback(collection, db, res)
		// 合并成一句话
		callback(db.collection(name), db, res)
	})
}
// 暴露接口
module.exports = { collection, end }