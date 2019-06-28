<template>
	<div class="footer_nav"  @click.stop.prevent="isShowNav">
			<div class="footer_btn" @click.stop.prevent="isShowNav">
				<img src="/static/images/navigation.png" alt="">
				<p>导航</p>
			</div>
		<transition name="move">
			<div class="footer_nav_show" v-show="isShow">
				<ul class="list">
					<router-link v-for="(item,index) in nav" :to="item.path" :key="index" tag="li">
						<img :src="item.img" alt="">
						<p>{{item.text}}</p>
					</router-link >
					<li @click.stop.prevent="isShowNav">
						<img src="/static/images/close.png" alt="">
						<p>返回</p>
					</li>
				</ul>
			</div>
		</transition>
		</div>
			
	
</template>

<script>
	export default{
	
		data(){
			return {
				isShow:false,
				nav:[ 
					{text:"菜单",img:'/static/images/menu.png',path:"/"},
					{text:"购物车",img:"/static/images/cart.png",path:"/order"},
					{text:"我的订单",img:"/static/images/order.png",path:"/order"},
					{text:"结账",img:"/static/images/wallet.png",path:"/order"},
					]
			}
		},
		methods:{
			isShowNav(){
				console.log(12)
				this.isShow =!this.isShow;
			}
		},
		created(){
			console.log(this,12)
		}
	}
</script>

<style type="text/css" lang="scss">
	.footer_nav{
			
			.footer_btn{
				height: 4.4rem;
				width: 4.4rem;
				background: #000;
				background: rgba(0,0,0,0.6);
				color:#fff;
				bottom:.5rem;
				left: .5rem;
				text-align: center;
				border-radius: 50%;
				img{
					width: 1.8rem;
					height: 1.8rem;
					margin-top: .4rem;
				}
				p{
					position: relative;
					top:-0.2rem;
				}
			}
			.footer_nav_show{
				position: fixed;
				width: 100%;
				height: 100%;
				top:0;
				left: 0;
				bottom: 0;
				background: rgba(0,0,0,0.6);
				z-index:0;
				.list{
					li{
						height: 4.4rem;
						width: 4.4rem;
						background: #000;
						position: absolute;
						color: #fff;
						left: .5rem;
						text-align: center;
						border-radius:50%;
						img{
							width: 1.8rem;
							height: 1.8rem;
							margin-top: .4rem;
						}
						p{
							position: relative;
							top:-0.2rem;
							font-size: 1rem;
						}
						&:nth-child(1){
						    bottom: 15.4rem;
						    left: 0px;
						    
						}
						
						 &:nth-child(2){
						    bottom: 12.4rem;
						    left: 25%;
						    margin-left: -2.2rem;                
						}
						&:nth-child(3){
						    
						    bottom: 7.4rem;
						    left: 42%;
						    margin-left: -2.2rem;
						}
						&:nth-child(4){
						    left: 50%;
						    margin-left: -2.2rem;
						    bottom: .5rem;
						}
						&:nth-child(5){
						    left: .5rem;                
						    bottom: .5rem;
						}
						
					}
				}
			}
		}
	
</style>
