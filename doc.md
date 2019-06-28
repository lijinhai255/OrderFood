接口文档：

提交订单接口：
	请求方式:post强求
	请求地址:/food/getOrder
	传递参数说明:
	参数 说明
	 备注 
	 uid 桌号 id 必传
	 p_num 用餐人数 必传
	 p_mark  备注信息 必传
	 order 菜品信息（数组，见菜品参数说明） 序列化的数组total_price  
	 总价格 总价格total_num 
	 总数量 总数量菜
	 品参数说明：
	 参数 说明 备注
	 title 菜品标题
	 price 菜品价格
	 num 菜品数量
	 返回参数说明：参数 说明 备注success true/false 订单 idmsg  