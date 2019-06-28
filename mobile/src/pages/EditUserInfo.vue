<template>
	<div class="start_content">
	
		<div class="start_header">
			<img src="/static/images/canju.png" alt="">
			修改用餐信息
		</div>
		<p class="notice">请选择正确的用餐人数，小二马上送上餐具</p>
		<div class="content">
			<ul class="usser_list">
				<li 
				v-for="(item, index) in peoplenum" 
				@click="clickchosePeople"
				:class="parseInt(info.p_num)===index+1?'active':''"><span>{{item}}</span></li>
			</ul>
		</div>
		<div class="mark_input">
			<input type="text" v-model="info.p_ts" placeholder="请输入您的口味要求，忌口等（可不填）" >
		</div>
		<div class="mark_list">
			<li v-for="(item, index) in changmark" @click="chooseMark"><span>{{item}}</span></li>
		</div>
		<div class="start" @click="startOrder">
			<span>
				确定修改
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				peoplenum:['1人','2人','3人','4人','5人','6人','7人','8人','9人','10人','11人','12人'],
				changmark:['打包带走','店内就餐'],
				info:{
					p_num:'4人',
					p_mark:'',
					p_ts:'',
					uid:''
				}
			}
		},
		methods:{
			clickchosePeople(e){
				//现将所有的li的清除掉
				let lis = document.querySelectorAll('.usser_list li')
				Array.from(lis)
					.forEach((item,i)=>item.className='')
				this.info.p_num= e.target.innerHTML;
				//给触发元素的父节点添加样式
				e.target.className="active";
				console.log(this.info.p_num);
			},
			chooseMark(e){
				//现将所有的li的清除掉
				let lis = document.querySelectorAll('.mark_list li')
				Array.from(lis)
					.forEach((item,i)=>item.className='');
				//将 获取的文本 添加 	
				this.info.p_mark= e.target.innerHTML;
				//给触发元素的父节点添加样式
				e.target.parentNode.className="active";
			},
			startOrder(){
				//向info 中 存储 桌子号
				this.info.uid=this.$store.state.userInfo.uid;
				let info = this.info;
				console.log(this.info)
				//向服务器端发送请求  将info 信息 根据根据桌子号进行存储
				this.$http
					.post('/food/saveFoodInfo',info)
					.then(({data})=>{
						//说明数据添加或者更行成功 跳转到 订餐页面 进行订餐
						if(data.errno===0){
							//更改路由
							this.$router.push('/foodlist')
						}
					})
			},
			getUserInfo(){
				let uid = this.$store.state.userInfo.uid;
				console.log(uid)
				this.$http.get("/food/getUserInfo",{params:{uid}})
						.then(({data})=>{
							if(data.error===0){
								//请求数据返回成功  将用户信息存储在 data中的userInfo
								this.info= data.data[0];
								console.log(this.info)
								
							}
						})
			},
		},
		created(){
			//当组件创建完成请求数据
			this.getUserInfo()
		},
		//组件创建完成初始化该方法
		mounted(){
		}
	}
</script>

<style type="text/css" lang="scss">
	.start_content{
		position: relative;
		
		.start_header{
			height: 3.2rem;
			line-height: 3.2rem;
			background: #000;
			color:#fff;
			width: 10rem;
			margin: 5rem auto 0 auto;
			border-radius: .5rem;
			img{
				height: 2.2rem;
				line-height: 2.2rem;
				position: relative;
				top:.5rem;
				margin-left: 1rem;
			}
		}
		.notice{
			color:red;
			text-align: center;
			margin: 1rem 0rem;
		}
		.content{
			.usser_list{
				display: flex;
				flex-wrap:wrap;
				padding: .5rem;
				li{
					width:25%;
					padding: .5rem;
					box-sizing: border-box;
					span{
						display: block;
						width:100%;
						height: 3.2rem;
						line-height: 3.2rem;
						text-align: center;
						background: #fff;
						border-radius: .5rem;
						border: 1px solid #ccc;
					}
					&.active{
						span{
							background: red;
							border: 1px solid red;
							color:#fff;
						}
					}
					
				}
			}
		}
		.start{
			position:absolute;
			bottom:-10rem;
			left: 50%;
			margin-left: -3rem;
			width:6rem;
			height: 6rem;
			border-radius: 50%;
			background: red;
			color: #fff;
			span{
			display: block;
			width: 2rem;
			margin: 0 auto;
			position: relative;
			top:1.5rem;
		}
		}
		.mark_input{
			padding: 1rem;
			input{
				height: 3rem;
				line-height: 3rem;
				width:100%;
				border: 1px solid #eee;
				padding-left: 25px;
			}
		}
		.mark_list{
			display: flex;
			flex-wrap: wrap;
			padding: .5rem;
			li{
				width: 25%;
				padding: .5rem;
				box-sizing: border-box;
				span{
					display: block;
					width:100%;
					height: 3.2rem;
					line-height: 3.2rem;
					text-align: center;
					background: #fff;
					border-radius: .5rem;
					border: 1px solid #ccc;
				}
				&.active{
					span{
						background: red;
						border: 1px solid red;
						color:#fff;
					}
				}

			}
		}
		
		
		
	}
</style>
