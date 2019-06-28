// // 数据库模块
// var {
// 	collection,
// 	end
// } = require('../../db');
// // 创建课程接口
// module.exports = (req, res) => {
// 	// res.json('success');
// 	// 提交的数据
// 	// console.log(req.body)
// 	// 打开集合
// 	collection('ratings', res, (collection, db) => {
// 		// 操作集合
// 		collection
// 			// 插入操作
// 			.insertMany([ /* 0 */ {
// 					"username": "3******c",
// 					"rateTime": 1469281964000,
// 					"deliveryTime": 30,
// 					"score": 5,
// 					"rateType": 0,
// 					"text": "不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": [
// 						"南瓜粥",
// 						"皮蛋瘦肉粥",
// 						"扁豆焖面",
// 						"娃娃菜炖豆腐",
// 						"牛肉馅饼"
// 					]
// 				},
// 
// 				/* 1 */
// 				{
// 					"username": "2******3",
// 					"rateTime": 1469271264000,
// 					"deliveryTime": "",
// 					"score": 4,
// 					"rateType": 0,
// 					"text": "服务态度不错",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": [
// 						"扁豆焖面"
// 					]
// 				},
// 
// 				/* 2 */
// 				{
// 					"username": "3******b",
// 					"rateTime": 1469261964000,
// 					"score": 3,
// 					"rateType": 1,
// 					"text": "",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": []
// 				},
// 
// 				/* 3 */
// 				{
// 					"username": "1******c",
// 					"rateTime": 1469261864000,
// 					"deliveryTime": 20,
// 					"score": 5,
// 					"rateType": 0,
// 					"text": "良心店铺",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": []
// 				},
// 
// 				/* 4 */
// 				{
// 					"username": "2******d",
// 					"rateTime": 1469251264000,
// 					"deliveryTime": 10,
// 					"score": 4,
// 					"rateType": 0,
// 					"text": "",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": []
// 				},
// 				/* 5 */
// 				{
// 					"username": "9******0",
// 					"rateTime": 1469241964000,
// 					"deliveryTime": 70,
// 					"score": 1,
// 					"rateType": 1,
// 					"text": "送货速度蜗牛一样",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": []
// 				},
// 
// 				/* 6 */
// 				{
// 					"username": "d******c",
// 					"rateTime": 1469231964000,
// 					"deliveryTime": 30,
// 					"score": 5,
// 					"rateType": 0,
// 					"text": "很喜欢的粥店",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": []
// 				},
// 
// 				/* 7 */
// 				{
// 					"username": "2******3",
// 					"rateTime": 1469221264000,
// 					"deliveryTime": "",
// 					"score": 4,
// 					"rateType": 0,
// 					"text": "量给的还可以",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": []
// 				},
// 
// 				/* 8 */
// 				{
// 					"username": "3******8",
// 					"rateTime": 1469211964000,
// 					"deliveryTime": "",
// 					"score": 3,
// 					"rateType": 1,
// 					"text": "",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": []
// 				},
// 
// 				/* 9 */
// 				{
// 					"username": "a******a",
// 					"rateTime": 1469201964000,
// 					"deliveryTime": "",
// 					"score": 4,
// 					"rateType": 0,
// 					"text": "孩子喜欢吃这家",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": [
// 						"南瓜粥"
// 					]
// 				},
// 
// 				/* 10 */
// 				{
// 					"username": "3******3",
// 					"rateTime": 1469191264000,
// 					"deliveryTime": "",
// 					"score": 4,
// 					"rateType": 0,
// 					"text": "粥挺好吃的",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": []
// 				},
// 
// 				/* 11 */
// 				{
// 					"username": "t******b",
// 					"rateTime": 1469181964000,
// 					"deliveryTime": "",
// 					"score": 3,
// 					"rateType": 1,
// 					"text": "",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": []
// 				},
// 
// 				/* 12 */
// 				{
// 					"username": "f******c",
// 					"rateTime": 1469171964000,
// 					"deliveryTime": 15,
// 					"score": 5,
// 					"rateType": 0,
// 					"text": "送货速度很快",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": []
// 				},
// 
// 				/* 13 */
// 				{
// 					"username": "k******3",
// 					"rateTime": 1469161264000,
// 					"deliveryTime": "",
// 					"score": 4,
// 					"rateType": 0,
// 					"text": "",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": []
// 				},
// 
// 				/* 14 */
// 				{
// 					"username": "u******b",
// 					"rateTime": 1469151964000,
// 					"deliveryTime": "",
// 					"score": 4,
// 					"rateType": 0,
// 					"text": "下雨天给快递小哥点个赞",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": []
// 				},
// 
// 				/* 15 */
// 				{
// 					"username": "s******c",
// 					"rateTime": 1469141964000,
// 					"deliveryTime": "",
// 					"score": 4,
// 					"rateType": 0,
// 					"text": "好",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": []
// 				},
// 
// 				/* 16 */
// 				{
// 					"username": "z******3",
// 					"rateTime": 1469131264000,
// 					"deliveryTime": "",
// 					"score": 5,
// 					"rateType": 0,
// 					"text": "吃了还想再吃",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": []
// 				},
// 
// 				/* 17 */
// 				{
// 					"username": "n******b",
// 					"rateTime": 1469121964000,
// 					"deliveryTime": "",
// 					"score": 3,
// 					"rateType": 1,
// 					"text": "发票开的不对",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": []
// 				},
// 
// 				/* 18 */
// 				{
// 					"username": "m******c",
// 					"rateTime": 1469111964000,
// 					"deliveryTime": 30,
// 					"score": 5,
// 					"rateType": 0,
// 					"text": "好吃",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": []
// 				},
// 
// 				/* 19 */
// 				{
// 					"username": "l******3",
// 					"rateTime": 1469101264000,
// 					"deliveryTime": 40,
// 					"score": 5,
// 					"rateType": 0,
// 					"text": "还不错吧",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": []
// 				},
// 
// 				/* 20 */
// 				{
// 					"username": "3******o",
// 					"rateTime": 1469091964000,
// 					"deliveryTime": "",
// 					"score": 2,
// 					"rateType": 1,
// 					"text": "",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": []
// 				},
// 
// 				/* 21 */
// 				{
// 					"username": "3******p",
// 					"rateTime": 1469081964000,
// 					"deliveryTime": "",
// 					"score": 4,
// 					"rateType": 0,
// 					"text": "很喜欢的粥",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": []
// 				},
// 
// 				/* 22 */
// 				{
// 					"username": "o******k",
// 					"rateTime": 1469071264000,
// 					"deliveryTime": "",
// 					"score": 5,
// 					"rateType": 0,
// 					"text": "",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": []
// 				},
// 
// 				/* 23 */
// 				{
// 					"username": "k******b",
// 					"rateTime": 1469061964000,
// 					"deliveryTime": "",
// 					"score": 4,
// 					"rateType": 0,
// 					"text": "",
// 					"avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
// 					"recommend": []
// 				}
// 			], (err, data) => {
// 				// 如果有错误
// 				if (err) {
// 					// 终止执行
// 					return end('collectionInsertError', res, db);
// 				}
// 				// 如果数据存储成功
// 				if (data.result.n > 0) {
// 					// 通知用户成功了
// 					return end('success', res, db);
// 				}
// 				// 插入失败
// 				end('noInsertData', res, db);
// 				// console.log(err, data)
// 			})
// 	})
// }
// 