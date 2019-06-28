<template>
	<div class="foodlist">
		<LeftCate :list="list"></LeftCate>
		<div class="foodelist_header">
			<div class="hlist">
				<img src="/static/images/rexiao.png" alt="">
				<p> 热销榜 </p>
			</div>
			<div class="hlist">
				<img src="/static/images/caidan.png" alt="">
				<p> 点过的菜 </p>
			</div>
			<div class="hlist">
				<img src="/static/images/sousuo.png" alt="">
				<p> 搜你喜欢 </p>
			</div>
		</div>
		<div class="foodlist_content">
			
				<div class="item" v-for="item in list">
					<h3 class="item_cate">{{item.title}}</h3>
					
					<ul class="item_list">
						<li  v-for="item in item.list">	
							<router-link :to="'/detail/'+item._id" tag="div" class="inner">
								<img :src="api+item.img_url" />
								<p class="title">{{item.title}}</p>						
								<p class="price">¥{{item.price}}</p>
							</router-link to="/product" tag="div">		
						</li>
						
					</ul>
					
				</div>
			
		</div>
		<!-- <div class="bg"></div> -->
		<div class="nav">
			<FooterNav ></FooterNav>
			<router-link to="/cart" tag="div" class="footer_cart">
				<img src="/static/images/cart.png" alt="">
					<p>购物车</p>
					<span>{{sum}}</span>
				</router-link>
		</div>
		</div>
</template>

<script>
	import LeftCate from "../components/leftcate/LeftCate";
	import FooterNav from "../components/footernav/FooterNav"
	import Config from '../config/config.js';
	export default {
		components:{ LeftCate,FooterNav},
		data(){
			return {
				//存储请求回来的数据
				list:[],
				//设置请求的api
				api:Config.api,
				sum:0
			}
		},
		//监听addcart事件ain
		//监听addcart 事件ain
		sockets:{   
		    addcart: function(){  /*接受服务器广播过来的addcart*/
		        //更新购物车的数量
		       // console.log("监听addcart 事件成功返回");
			   //同时更新购物城数量
			   this.getCount()
		    }            
		},
		//监听服务器过来的addcart 操作
		sockets:{   
		    addcart: function(){  /*接受服务器广播过来的addcart*/
		        //更新购物车的数量
		       console.log("监听addcart 事件成功返回");
			   //同时更新购物城数量
			   this.getCount()
		    }            
		},
		methods:{
			getData(){
				this.$http
					.get("/food/foodList")
					.then(({data})=> {
						this.list=data.data[0].result;
					})
			},
			getCount(){
				let {uid} = this.$store.state.userInfo;
				this.$http
					.get('/food/cartCount?uid='+uid)
					.then(({data})=>{
						this.sum= data.sum;
						console.log(this.sum);
						// this.sum=data.sum
					})
			}
		},
		created(){
			
			this.getData();
			this.getCount();
		},
		watch:{
			$route(){
				this.getCount();
			}
		}
	}
</script>

<style type="text/css" lang="scss">
	.foodlist {
		position: relative;
		.foodelist_header {
			width: 96%;
			margin: 0 auto;
			height: 4.4rem;
			background: #fff;
			margin-top: 1rem;
			display: flex;
			border-radius: .5rem;

			.hlist {
				flex: 1;
				text-align: center;
				padding-top: .2rem;
				border-right: 1px solid #eee;

				img {
					width: 2rem;
					height: 2rem;
					margin: 0 auto;

					&:last-child {
						border-right: none;
					}
				}

			}
		}
		.foodlist_content {
			.item {
				.item_cate {
					text-align: center;
					padding: .5rem;
				}
				.item_list {
					display: flex;
					flex-wrap: wrap;
					padding: 0px .5rem;
					li{
						width: 33.3%;
						padding: .5rem;
						box-sizing: border-box;
						.inner{
							background: #fff;
							width: 100%;
							border-radius: .5rem;
							overflow: hidden;
							img{
								width: 100%;
							}
							p{
								padding: .2rem .5rem;
								.title{
									font-weight: bold;
								}
								.price{
								}
							}
						}
					}
				}

			}

		}
		.footer_cart{
			position: absolute;
			height: 4.4rem;
			width: 4.4rem;
			background: red;
			color:#fff;
			bottom:.5rem;
			right: 2.5rem;
			text-align: center;
			border-radius: 50%;
			img{
				width: 1.8rem;
				height: 1.8rem;
				margin-top: .4rem;
			}
			p{
				position: relative;
				top: -0.2rem;
			}
			span{
				position: absolute;
				font-size: 20px;
				top:-4px;
				left: 50px;
				display: block;
				background: red;
				border-radius: 50%;
			}
		}
		.nav{
			position: fixed;
			z-index: 2;
			bottom: 0;
			left: 0;
			right: 0;
			height: 50px;
			display: flex;
			// justify-content: center;
		}
		}
</style>
