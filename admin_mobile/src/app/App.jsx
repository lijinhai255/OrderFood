//引入react
import React , { Component} from 'react';
//引入axios
import axios  from 'axios';
//引入组件
import Home from '../page/home/Home';
import Login from '../page/login/Login'
 //引入样式
 import './App.less'

//定义组件
export default class App extends Component {
	
	constructor(props){
		super(props);
		this.state={
			username:'lijinhai'
		}
	}
	
	//当组件创建完成时候请求数据
	componentWillMount(){
		//组件创建完成的时候请求数据
		axios.get('/admin/userinfo')
			//监听数据返回
			.then(({data})=>{
				//如果请求成功 将数据存储在 state里边
				if(data.erron===0){
					//存储用户名
					// this.setState(data.data.username);
				}
			})
	}
	//定义渲染方法
	render(){
		console.log(this.props)
		//如果有用户名 要渲染首页
		//否则渲染登陆页面 
		if(this.state.username){
				return <Home></Home>
		}else{
			// 子组件向向父组件通信 
				return <Login method={ username=>this.setState({ username})}></Login>
		}
	}
}