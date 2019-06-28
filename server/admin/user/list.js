//引入数据库模块
var { collection, end} = require('../../db');
//ADMIN_SHOW_NEWS_NUM 
var {ADMIN_SHOW_NEWS_NUM,} = require('../../conf');
module.exports= (req,res)=>{
	// res.json('success');
	//获取当前的页面
	let page = req.query.page;
	//修改page
	page= page<1?0:page-1;
	//操作集合
	collection('user',res,(collection,db)=>{
		//在集合中查找数据
		collection
			.find()
			//倒叙
			.sort({_id:-1})
			//跳过页数
			.skip(ADMIN_SHOW_NEWS_NUM*page)
			//显示个数
			.limit(ADMIN_SHOW_NEWS_NUM)
			.toArray((err,data)=>{
				//如果有错误
				if(err){
					return end('collectionFindError',res,db)
				}
				//如果没有数据
				if(data.length===0){
					//显示在前端
					return end('noResult',res,db)
				}
				//有数据 返回给前端
				end({
					error:0,
					data
				},res,db)
			})
	})
}