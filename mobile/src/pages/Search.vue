<template>
	<div class="search">
		<div class="search_header">
			<input type="text" class="search">
		</div>
		<div class="search_content">
			<ul>
				<li>
					<img src="/static/images/1.jpeg" alt="">
					<div class="inner">
						<h3>大蒜腊肉</h3>
						<p class="price">￥26</p>
						<span>已售：351份</span>
					</div>
				</li>
				<li>
					<img src="/static/images/2.jpeg" alt="">
					<div class="inner">
						<h3>大蒜腊肉</h3>
						<p class="price">￥26</p>
						<span>已售：351份</span>
					</div>
				</li>
				<li>
					<img src="/static/images/3.jpeg" alt="">
					<div class="inner">
						<h3>大蒜腊肉</h3>
						<p class="price">￥26</p>
						<span>已售：351份</span>
					</div>
				</li>
			</ul>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from '../components/footer/Footer';
	export default {
		components:{ Footer}
	}
</script>

<style type="text/css" lang="scss">
	.search{
		.search_header{
			height: 5rem;
			line-height: 5rem;
			text-align: center;
			width: 100%;
			.search{
			width: 90%;
			
			height: 3.8rem;
			
			line-height:3.8rem;
			
			border-radius: .5rem;
			
			border: 1px solid #eee;	
			}
		}
		.search_content{
			 background:#fff;
			 ul{
				 li{
					display: flex;
					
					border-bottom: 1px solid #EEE;
					
					padding-top: 1rem;
					
					padding-bottom: 1rem; 
					img{
						 width: 6rem;
						height: 6rem;
					}
					.inner{
						flex: 1;
						padding-left: 1rem;
					}
				 }
			 }
		}

		
	}
</style>
