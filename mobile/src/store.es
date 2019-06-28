// 引入vue
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
// 1 安装
Vue.use(Vuex);
// 2 定义store
export default new Store({
	// state数据
	state: {
		userInfo:{
			uid:''
		}
	},
	// 同步消息
	mutations: {
		getuid(state,uid){
			console.log(uid);
			this.state.userInfo.uid=uid;
			console.log(this.state.userInfo);
		}
	}
})