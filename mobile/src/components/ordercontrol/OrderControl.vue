<template>
	<div class="pfooter">
		<div class="cart">				
			<strong>数量:</strong>
			<div class="cart_num">
	          <div class="input_left" @click="decNum">-</div>
	          <div class="input_center">
	              <input type="text"  readonly="readonly" v-model="num" name="num" id="num" />
	          </div>
	          <div class="input_right" @click="addNum">+</div>				      
	        </div>								
		
		</div>
		
		<button class="addcart" @click="sendMsg">加入购物车</button>			
	</div>
</template>

<script>
	import Config from '../../config/config.js'
	export default {
		props:['list'],
		data(){
			return {
				num:0,
				api:Config.api
			}
		},
		methods:{
			addNum(){
				++this.num;
			},
			decNum(){
				console.log(this.list);
				   if(this.num>1){
				    --this.num;
				}
			},
			sendMsg(){
				//创建信息对象
				var api = this;
				let {uid} = this.$store.state.userInfo;
				var obj ={
					uid:uid,
					title:this.list.title,
					price:this.list.price,
					num:this.num,
					product_id:this.list._id,
					img_url:this.list.img_url
				}
				console.log(obj);
				this.$http.post('/food/addCart',obj)
						.then(({data})=> {
							if(data.errno===0){
								//跳转到 订餐页面
								this.$router.push('/foodlist');
								//同时向服务器端发布数据
								 this.$socket.emit('addcart','addcart');
							}
						})
				
			}
		}
		
	}
</script>

<style type="text/css" lang="scss">
	.pfooter{
	    
	  position: fixed;  
	  
	  bottom: 0px;  
	  height: 4.4rem;  
	  line-height: 4.4rem;
	  
	  background: #fff;
	  
	  left: 0px;
	  
	  width: 100%;
	  
	  border-top: 1px solid #eee;
	  
	  .cart{
	      
	      float: left;
	      
	         
	      display:flex;   
	      
	      strong{
	          
	          flex: 1;
	          
	          font-size: 1.6rem;
	          
	          padding: 0rem .5rem;
	      }
	      
	      .cart_num{
	          
	          width: 10rem;      
	          
	          display: flex;
	          margin-top: .8rem;
	          
	          
	          .input_left,.input_right{
	              flex: 1;
	              
	              width: 2.8rem;
	              height: 2.8rem;
	              
	              line-height: 2.8rem;
	              
	              text-align: center;
	              
	              color: red;
	              
	              border: 1px solid #eee;
	              
	              font-size: 2.4rem;
	          }    
	          
	          .input_center{
	              
	              flex: 1;
	              
	              input{
	                  
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
	      
	  }
	  
	  .addcart{
	      
	        float: right;
	      
	        background: red;
	        color: #fff;
	        height: 3rem;
	        border: none;
	        padding: 0 .5rem;
	        border-radius: .5rem;
	        margin-top: .8rem;
	        margin-right: .5rem;
			line-height: 3rem;
	  }
	    
	}
</style>
