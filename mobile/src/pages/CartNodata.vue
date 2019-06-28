<template>
	<div class="cat_content">
		<div class="hot_food">
			<h3>本顾客最长点的菜</h3>
			<div class="item_list_outer">
				<ul class="item_list">
					<li>
						<div class="inner">
							<img src="/static/images/1.jpeg" alt="">
							<p class="title">大蒜腊肠</p>
							<p class="price">￥26</p>
						</div>
					</li>
					<li>
						<div class="inner">
							<img src="/static/images/1.jpeg" alt="">
							<p class="title">大蒜腊肠</p>
							<p class="price">￥26</p>
						</div>
					</li>
					<li>
						<div class="inner">
							<img src="/static/images/1.jpeg" alt="">
							<p class="title">大蒜腊肠</p>
							<p class="price">￥26</p>
						</div>
					</li>
					<li>
						<div class="inner">
							<img src="/static/images/1.jpeg" alt="">
							<p class="title">大蒜腊肠</p>
							<p class="price">￥26</p>
						</div>
					</li>
					<li>
						<div class="inner">
							<img src="/static/images/1.jpeg" alt="">
							<p class="title">大蒜腊肠</p>
							<p class="price">￥26</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="cart_empty">
			<h3>购物车空空的</h3>
			<p>请点击下面的菜单开始点菜</p>
		</div>
		<StartFoodBtn></StartFoodBtn>
		<Food></Food>
	</div>
</template>

<script>
	import Food from '../components/footer/Footer';
	import StartFoodBtn from '../components/startfoodbtn/StartFoodBtn'
	export default {
		components:{ Food,StartFoodBtn},
		
	}
</script>

<style type="text/css" lang="scss">
	.cat_content{
		padding: 1rem;
		 .hot_food{
		    
		    background: #fff;
		    
		    margin-top: 1rem;
		    
		    border-radius: .5rem;
		    
		    margin-bottom: 4rem;
		    
		    h3{
		        
		        font-size: 1.4rem;
		        
		        padding: .5rem 0px;
		    }
		    
		    .item_list_outer{
		        
		          width: 100%;
		          
		          overflow-x:auto;
		          .item_list{
		        
		           
		              padding: 0px .5rem;                
		              width: 50rem;
		              
		              li{
		                  
		                      width: 8rem;
		                      padding: .5rem;
		                      box-sizing: border-box;                    
		                      float: left;
		                      
		                      .inner{
		                              background: #fff;
		                              width: 100%;
		                              border-radius: .5rem;
		                              overflow: hidden;
		                              
		                              img{
		                                  
		                                  width:100%;
		                              }
		                              
		                      }
		              }
		        }
		    
		        
		    }
		  
		    
		    
		     
		}
		.cart_empty{
			 text-align: center;
			line-height: 3;
			
			h3{
			    font-size: 1.8rem;
			}
		}  
		
	}
</style>
 