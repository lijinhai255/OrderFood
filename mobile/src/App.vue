<template>
<div class="app">
	<keep-alive>
		<router-view></router-view>
	</keep-alive>
</div>
</template>
<script type="text/javascript">

// 组件
export default {

	data(){
		return {
			seller:[]
		}
	},
	//创建获取数据方法
	methods:{

		
	},//组件创建完成 发送请求
	created(){
		
	},
	//监听路由的变化
	watch:{
		//路由变化
		$route(){
		}
	}
	
}
</script>