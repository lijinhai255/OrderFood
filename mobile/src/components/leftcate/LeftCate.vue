<template>
	<div class="left_cate" id="left_cate" @click.stop.prevent="isShowCateNav">
		<transition name="demo">
			<div class="cate_nav"  v-show="isShow">
				<ul>
					<li v-for="(item,index) in list" :key="index" @click="changePosition(index)">{{item.title}}--{{index}}</li>
				</ul>
			</div>
		</transition>
			<div class="cate_btn" >
				<img src="/static/images/nav.png"/>
				<p>菜单</p>
			</div>
	</div>
	
</template>

<script>
	export default{
		props:['list'],
		data(){
			return{
				isShow:false,
			}
		},
		methods:{
			isShowCateNav(){
				console.log(10)
				this.isShow = !this.isShow;
			},
			changePosition(index){
				console.log(index);
				var itemCatesDom = document.querySelectorAll('.item_cate');;
				console.log(itemCatesDom)
				document.documentElement.scrollTop=itemCatesDom[index].offsetTop;
				
			}
		},
		created(){
			console.log(this)
		}
	}
</script>

<style type="text/css" lang="scss">
	.left_cate{
		position: fixed;
		top:0px;
		bottom: 0px;
		left: 0px;
		display: flex;
		z-index: 0;
		//添加隐藏态
		.demo-enter,.demo-leave-to{
			transform: translate3d(-50%, 0, 0);
			
		}
		//添加显示态
		.demo-leave,.demo-enter-to{
			opacity: 1;
		}
		//添加显示过程和 隐藏过程动画
		.demo-enter-active,
		.demo-leave-active{
			transition: all 0.2s linear;
			transform: translate3d(0, 0, 0);
		}
		.cate_nav{
			// display: none;
			height: 100%;
			background: #efefef;
			z-index: 1;
			ul{
				li{
					line-height: 4.4rem;
				}
			}
		}
		.cate_btn{
			margin-top:200px;
			background: rgba(132, 128, 128, 0.9);
			width: 4rem;
			height: 4rem;
			text-align: center;
			z-index: 10;
			border-radius: 0rem 50% 50% 0rem;
			
			img{
				width: 1.8rem;
				height: 1.8rem;
				margin-top: .4rem;
			}
			p{
				color: #fff;
				margin-top: .3rem;
				font-size: 14px;
			}
			
		}
	}
	
</style>
