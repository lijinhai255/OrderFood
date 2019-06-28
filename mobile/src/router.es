// 引入vue
import Vue from 'vue';
// 引入路由
import VueRouter from 'vue-router';
// 3 引入组件
import Start from './pages/Start';
import FoodList from './pages/FoodList';
// import Order from './pages/Order';
import Search from './pages/Search';
import Hot from './pages/Hot';
import Cart from './pages/Cart';
import CartNodea from './pages/CartNodata';
import OrderPlay from './pages/OrderPlay';
import Detail from './pages/Detail';
import EditUserInfo from './pages/EditUserInfo'
console.log(Detail)
// 1 安装路由
Vue.use(VueRouter);
// 4 定义路由规则
let routes = [
	// 首页
	{ path:'/start' , component: Start },
	// 默认路由
	{ path: '/foodlist', component: FoodList },
	// { path: '/order', component: Order },
	{ path: '/search', component: Search },
	{ path: '/search', component: Search },
	{ path: '/hot', component: Hot },
	{ path: '/cart', component: Cart },
	{ path: '/cartnodata', component: CartNodea },
	{ path: '/orderplay', component: OrderPlay },
	{ path: '/detail/:id', component: Detail },
	{ path: '/edituserinfo', component: EditUserInfo },
	// 重定向到首页
	// { path: '*', redirect: '/start' }
]
// 5 实例化并暴露接口
export default new VueRouter({ routes })