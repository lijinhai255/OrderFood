<template>
	<div class="search_footer">
		<div class="footer_nav">
			<img src="/static/images/navigation.png" alt="">
			<p>导航</p>
		</div>
		<router-link to="/foodlist"  tag="div" class="footer_book">
			<img src="/static/images/menu.png" alt="">
			<p>菜单</p>
		</router-link>
		<div  class="footer_cart" @click="getOrder">
			<img src="/static/images/doorder.png" alt="">
			<p>下单</p>
		</div>
	</div>
</template>

<script>
	export default {
		props:['foodlist','count','userInfo'],
		methods:{
			getOrder(){
				let {uid} = this.userInfo;
				console.log(uid)
				let {p_num} = this.userInfo;
				let {p_mark} = this.userInfo;
				let { p_ts} = this.userInfo;
				let count = this.count;
				let order = JSON.stringify(this.foodlist);
				let obj ={
					uid,
					p_num,
					p_mark,
					count,
					order
				}
				//向后端发送请求
				this.$http.post('/food/addOrder',obj)
						.then(({data})=>{
							console.log(data)
						})
				console.log(obj)
			}
		}
	}
</script>

<style type="text/css" lang="scss">
			.search_footer{
		display: flex;
		justify-content:space-around;
		position:fixed;
		bottom:10px;
		left: 0px;
		right: 0px;
		color:#fff;
		.footer_nav,.footer_book,.footer_cart{
			background: rgba(0,0,0,.4);
			border-radius: 50%;
			width: 64px;
			height: 64px;
			text-align: center;
			
			img{
				width: 32px;
				height: 32px;
				margin-top: 4px;
				// display: block;
			}
			
		}
		
	}
</style>
