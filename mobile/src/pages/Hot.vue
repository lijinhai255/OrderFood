<template>
	<div class="hot">
		<div class="title_ts">
			本店热销榜
		</div>
		<div class="hot_content">
			<ul class="item_list">
				<li>
					<img src="/static/images/1.jpeg" alt="" class="item_img">
					<div class="info">
						<h3 class="title">大蒜腊肉</h3>
						<p class="price">￥26</p>
						<span>已售：351份</span>
					</div>
				</li>
				<li>
					<img src="/static/images/1.jpeg" alt="" class="item_img">
					<div class="info">
						<h3 class="title">大蒜腊肉</h3>
						<p class="price">￥26</p>
						<span>已售：351份</span>
					</div>
				</li>
				<li>
					<img src="/static/images/1.jpeg" alt="" class="item_img">
					<div class="info">
						<h3 class="title">大蒜腊肉</h3>
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
	.hot{
		.title_ts{
			height: 5rem;
			line-height: 5rem;
			text-align: center;
			width: 100%;
		}
		.hot_content{
			background: #fff;
			.item_list{
				padding: 0rem .5rem;
				li{
					display: flex;
					border-bottom: 1px solid #eee;
					padding-top: 1rem;
					img{
						width:6rem;
						height: 6rem;
					}
				}
				.info{
					flex: 1;
					padding-left: 1rem;
					.title{
						line-height: 36px;
					}
					p{
						padding-bottom: 10px;
					}
				}
			}
		}
	}
</style>
