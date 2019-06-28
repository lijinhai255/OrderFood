<template>
	
	<div class="ordercontent">
		 <router-link to="/foodlist">
		
		    <div class="back">返回</div>
		
		</router-link>
		<div class="orderlist">
			<img :src="api+list.img_url" alt="">
			<h2>{{list.title}}</h2>
			<p class="price">{{list.price}}/份</p>
		</div>
		<div class="orderdetail">
			<h3>商品详情</h3>
			<div class="orderdetailcontent">
				<img :src="api+list.img_url" alt="">
					<br>
					<p v-html="list.content"></p>
			</div>
		</div>
		<OrderControl :list="list"></OrderControl>
	</div>
	
</template>

<script>
	import OrderControl from '../components/ordercontrol/OrderControl'
	import Config from "../config/config.js"
	export default {
		components:{OrderControl},
		data(){
			return {
				api:Config.api,
				list:[],
			}
		},
		methods:{
			//根据 params 获取数据
			getData(id){
				var {id} = this.$route.params;
				var api = this.api+'api/productcontent?id='+id;
				this.$http
					.get(api)
					.then(({data})=>{
						this.list= data.result[0];
						console.log(this.list,12)
					})
			}
		},
		//组件创建完成 请求数据
		created(){
			
			this.getData();
		},
		//监听路由的变化请求数据
		watch:{
			$route(){
				let { fullPath} = this.$route;
				if(fullPath.indexOf('/detail/')===0){
					this.getData();
				}
			}
		}
	}
</script>

<style type="text/css" lang="scss">
	.ordercontent{
			padding-bottom: 50px;
			.back{
			    
			    
			    height: 3.8rem;
			    line-height: 3.8rem;
			    width: 3.8rem;
			    
			    border-radius: 50%;
			    
			    
			    background: #000;
			    
			    
			    position: fixed;
			    
			    
			    top: .5rem;
			    
			    left: .5rem;
			    
			    color: #fff;
			    
			    
			    &:before{
			        
			        
			         content: "";
			        
			         display: block;
			        
			         width: .8rem;
			         height: .8rem;
			         
			         border-left: .2rem solid #fff;
			         border-bottom: .2rem solid #fff;
			         
			         float: left;
			         
			         position: relative;
			         
			         top:1.3rem;
			         
			         left:.6rem;
			         
			         transform: rotate(45deg);
			         
			         margin-right: .4rem;
			   
			    }
			}
		.orderlist{
			padding: 20px;
			background: #fff;
			img{
				width: 100%;
				height: 18rem;
			}
			h2{
				padding: .2rem .5rem;
			}
			.price{
				padding: .2rem .5rem;
				color: red;
			}
		}
		.orderdetail{
			background: #fff;
			margin-top: 1rem;
			h3{
				padding: .5rem;
			}
			.orderdetailcontent{
				padding: 1rem;
				img{
					max-width: 100%;
					display: block;
					margin: 0 auto;
					width: 100%;
				}
				p{
					line-height: 1.5;
					color: #666;
				}
			}
		}
	}
</style>
