<template>
				<div class="cart_list">
		<ul>
			<li class="item" v-for="(item, index) in data">
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
</template>

<script>
	import Config from '../../config/config.js';
	export default {
		props:["data"],
		data(){
			return {
				api: Config.api,
			}
		}
	}
</script>

<style>
</style>
