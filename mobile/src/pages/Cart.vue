<template>

	<div id="cart">
		<div class="cart_content">
			<div class="cart_info">


				<h2>购物车---桌号{{this.$store.state.userInfo.uid}}</h2>
				<div class="p_number">
					<div class="p_number_left">
						<p>用餐人数:{{userInfo.p_num}}</p>
						<p>备注:{{userInfo.p_ts}}</p>
						<p>用餐方式:{{userInfo.p_mark}}</p>
					</div>
					<router-link to="/edituserinfo" tag="div" class="p_number_right">
						<img src="/static/images/edit.png" />
						<p>修改</p>
					</router-link>

				</div>

				<div class="cart_p_num">

					<p>购物车中总共有{{foodlist.length}}个菜</p>

					<p>合计：<span class="price">¥{{count}}</span></p>
				</div>
			</div>
			<div class="cart_list">
				<ul>
					<li class="item" v-for="(item, index) in foodlist">
						<div class="left_food">
							<img :src="api+item.img_url" />
							<div class="food_info">
								<p>{{item.title}}</p>
								<p class="price">¥{{item.price}}</p>
							</div>
						</div>
						<div class="right_cart">
							<div class="cart_num">
								<div class="input_left" @click="desNum(item,index)">-</div>
								<div class="input_center">
									<input type="text" readonly="readonly" v-model="item.num" name="num" id="num" />
								</div>
								<div class="input_right" @click="addNum(item,index)">+</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<StartFoodBtn v-if="this.count===0"></StartFoodBtn>
			<div class="hot_food">

				<h3>本店顾客最长点的菜</h3>

				<div class="item_list_outer">
					<ul class="item_list">
						<li>
							<div class="inner">
								<img src="/static/images/1.jpeg" />
								<p class="title">大蒜腊肉</p>
								<p class="price">¥26</p>
							</div>
						</li>

						<li>
							<div class="inner">
								<img src="/static/images/2.jpeg" />

								<p class="title">家乡扣肉</p>

								<p class="price">¥26</p>
							</div>

						</li>

						<li>
							<div class="inner">
								<img src="/static/images/1.jpeg" />
								<p class="title">大蒜腊肉</p>
								<p class="price">¥26</p>
							</div>
						</li>

						<li>
							<div class="inner">
								<img src="/static/images/2.jpeg" />

								<p class="title">家乡扣肉</p>

								<p class="price">¥26</p>
							</div>

						</li>

						<li>
							<div class="inner">
								<img src="/static/images/2.jpeg" />

								<p class="title">家乡扣肉</p>

								<p class="price">¥26</p>
							</div>

						</li>


					</ul>

				</div>

			</div>
		</div>
		<Footer :foodlist="foodlist" :count="count" :userInfo="userInfo" ></Footer>
	</div>
</template>


<script>
	import Footer from '../components/footer/Footer';
	import StartFoodBtn from '../components/startfoodbtn/StartFoodBtn'
	import Config from '../config/config.js'
	export default {
		components: {
			Footer,
			StartFoodBtn
		},
		data() {
			return {
				foodlist: [],
				api: Config.api,
				msg:'',
				userInfo:{},
				count:0,
			}
		},
		//监听addcart 事件ain
		sockets:{   
		    addcart: function(){  /*接受服务器广播过来的addcart*/
		        //更新购物车的数量
		       // console.log("监听addcart 事件成功返回");
			   //同时更新购物城数量
			   this.getCartData()
		    }            
		},
		methods: {
			getCartData() {
				let {uid} = this.$store.state.userInfo;
				this.$http.get('/food/CartList?uid='+uid, )
					.then(({
						data
					}) => {
						if (data.error === 0) {
							//将返回来的数据更新在data中
							this.foodlist = data.data;
							//现将count清空
							this.count=0;
							this.getAllCount();
						}
							
						if(data.errno==4){
							//跳转到购物车没有数据页面
							this.$router.push("/cartnodata");
						}
					})
			},
			getUserInfo(){
				let {uid} = this.$store.state.userInfo;
				this.$http.get("/food/getUserInfo",{params:{uid}})
						.then(({data})=>{
							if(data.error===0){
								//请求数据返回成功  将用户信息存储在 data中的userInfo
								this.userInfo= data.data[0];
								
							}
						})
			},
			desNum(item,index){
				console.log(item,index);
				this.msg ='';
				//请求远程服务器 执行更新的操作
				let _id = item._id;
				let num = item.num;
				let price =item.price;
				this.count-=price;		
				let {uid} = this.$store.state.userInfo;
				//请求端口
				this.$http.get('/food/desNum?uid='+uid+'&_id='+_id+'&num='+num)
						.then(({data})=>{
							this.msg = data.msg;
							// this.getAllCount();
							//同时向服务器端发布数据
							 this.$socket.emit('addcart','addcart');
						})
				if(item.num==1){
				return	this.data.splice(index,1);
				}
				-- item.num;
				console.log(this.count)
				
				
			},
			addNum(item,index){
				//请求远程的服务器 执行
				let _id = item._id;
				let num = item.num;
				let price =item.price;
				let {uid} = this.$store.state.userInfo;
				this.count+=+price;
				this.msg='';
				this.$http.get('/food/addNum?uid='+uid+'&_id='+_id+'&num='+num)
							.then(({data})=>{
								this.msg= data.msg;
								//同时向服务器端发布数据
								 this.$socket.emit('addcart','addcart');
							})
				++ item.num;
				
			},
			getAllCount(){
				this.foodlist.forEach((item)=>{
					this.count+= (+item.num)*(+item.price);
				})
			},
			
		},
		computed:{
// 			dealAllcount(){
// 				let price=0;
// 				this.data.forEach((item,index)=>{
// 						console.log(item);
// 					price+= +item.price*item.num;
// 					console.log(price);
// 					
// 				})
// 			}
		},
		created() {
			this.getCartData();
			//获取用户相关信息
			this.getUserInfo();
		},
// 		beforeMount(){
// 			//组件
// 			if(this.data.length===0){
// 				//跳转路由
// 				this.$router.push("/cartnodata");
// 			}
// 		},
		watch:{
			$route(){
				let { fullPath } = this.$route;
				console.log(fullPath)
				//判断路由
				console.log(fullPath.indexOf('cart'))
				if( fullPath.indexOf('cart')===1 ){
					this.getCartData();
				}
				}
		}
	}
</script>

<style lang="scss">
	.cart_content {

		padding: 1rem;

		/*头部信息*/
		.cart_info {

			background: #fff;

			h2 {
				text-align: center;
				font-size: 1.8rem;
				padding: .8rem 0px;
				border-bottom: 1px solid #eee;
			}

			border-radius:.5rem;
			padding: .5rem;

			.p_number {


				display: flex;

				padding: .5rem 0;
				border-bottom: 1px solid #eee;

				.p_number_left {

					flex: 1;


					p {
						line-height: 2;

						&:first-child {

							color: red;
						}
					}
				}

				.p_number_right {
					width: 4rem;
					height: 4rem;
					text-align: center;

					img {

						width: 1.8rem;
						height: 1.8rem;
						margin: 0 auto;
					}
				}



			}

			/*购物车总数量*/


			.cart_p_num {
				border-bottom: 1px solid #eee;

				p {

					line-height: 2;

					.price {

						font-size: 2.4rem;
						color: red;
					}
				}
			}


		}

		/*购物车列表*/

		.cart_list {
			margin-top: 1rem;

			padding: .5rem;

			background: #fff;

			border-radius: .5rem;



			display: flex;

			ul {
				width: 100%;

				.item {
					display: flex;
					width: 100%;

					border-bottom: 1px solid #eee;

					padding: 1rem 0px;

					.left_food {
						flex: 1;

						display: flex;

						img {
							width: 4rem;
							height: 4rem;
							border-radius: 10%;
							margin-right: .8rem;

						}

						.food_info {

							flex: 1;
						}


					}

					.right_cart {

						width: 10rem;
					}
				}
			}



		}

		/*最长点的菜*/

		.hot_food {

			background: #fff;

			margin-top: 1rem;

			border-radius: .5rem;

			margin-bottom: 4rem;

			h3 {

				font-size: 1.4rem;

				padding: .5rem 0px;
			}

			.item_list_outer {

				width: 100%;

				overflow-x: auto;

				.item_list {


					padding: 0px .5rem;
					width: 50rem;

					li {

						width: 8rem;
						padding: .5rem;
						box-sizing: border-box;
						float: left;

						.inner {
							background: #fff;
							width: 100%;
							border-radius: .5rem;
							overflow: hidden;

							img {

								width: 100%;
							}

						}
					}
				}


			}




		}


	}

	/*购车加减*/
	.cart_num {

		width: 10rem;

		display: flex;
		margin-top: .8rem;


		.input_left,
		.input_right {
			flex: 1;

			width: 2.8rem;
			height: 2.8rem;

			line-height: 2.8rem;

			text-align: center;

			color: red;

			border: 1px solid #eee;

			font-size: 2.4rem;
		}

		.input_center {

			flex: 1;

			input {

				width: 2rem;
				text-align: center;
				width: 100%;
				height: 2.8rem;
				border: none;

				border-top: 1px solid #eee;

				border-bottom: 1px solid #eee;

				float: left;
			}
		}
	}



	/*购车空*/


	.cart_empty {

		text-align: center;
		line-height: 3;

		h3 {
			font-size: 1.8rem;
		}
	}
</style>
