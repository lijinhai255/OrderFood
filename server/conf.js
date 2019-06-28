// 定义配置
module.exports = {
	//端口号
	HTTP_PORT:3000,
	HTTP_PORTS:3001,
	//静态请求
	STATICS:{
		'/static/':'/static/',
		'/fonts/':'/static/fonts',
		'/admin':'/admin'
		
	},
	//数据地址
	MONGODB_URL:'mongodb://localhost:27017/quanzhan_lesson',
	//请求响应 错误配置
	ERRORS: {
		// 操作成功
		success: { errno: 0, msg: '操作成功' },
		// 数据库错误
		// 工作中，错误码表示具体操作，msg提示信息，要委婉一点。
		databaseError: { errno: 1, msg: '数据库错误' },
		// 集合插入数据失败
		collectionInsertError: { errno: 2, msg: '数据库错误' },
		// 集合查找数据失败
		collectionFindError: { errno: 3, msg: '数据库错误' },
		// 集合中没有查找到数据
		noResult: { errno: 4, msg: '没有相应的数据' },
		// 集合中没有查找到数据
		noUser: { errno: 5, msg: '用户名或者密码错误' },
		//用户没有登陆过
		noLogin:{ errno:6, msg:'用户没有登陆过'},
		//集合更新数据失败
		collectionUpdateError:{errno:7,mag:'数据库错误'},
		//更新数据失败
		noUpdateData:{ errno:8,mag:'数据库错误'},
		//图片上传失败
		uploadError:{ errno:9,msg:'上传失败'},
		//移动图片失败
		moveFileError:{ errno:10,msg:'移动图片失败'},
		//删除数据错误
		collectionRemoveError:{errno:11,msg:'数据库错误'},
		//	没有成员可以被删除
		noRemoveData:{errno:12,msg:'数据库错误'},
		//更新数据失败
		collectionUpdateError:{errno:13,msg:'数据库错误'},
		//没有要更新的数据
		noUpdateData:{errno:14,msg:'数据库错误'},

	},
	// 首页展示的数据
	HOME_SHOE_LESSON_NUM: 15,
	// 后台展示课程数量
	ADMIN_SHOW_LESSON_NUM: 16,
	ADMIN_SHOW_NEWS_NUM:5,
	ADMIN_SHOW_USERS_NUM:5,
	// 文件上传缓存目录
	UPLOAD_LESSON_CACHE_DIR: '/cache/lesson/',
	// 文件上传存储目录
	UPLOAD_LESSON_SAVE_DIR: '/static/upload/',
	//商家上传目录
	UPLOAD_SELLER_CACHE_DIR:'/cache/seller',
	//商家上传存储目录
	UPLOAD_SELLER_SAVE_DIR:'/static/upload/seller',
}