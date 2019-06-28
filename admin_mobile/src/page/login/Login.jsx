//引入react
import React, { Component} from 'react';
// 引入组件
import { Button,Radio,Form,Input   } from 'element-react';
//引入工具模块
import { checkPassword, checkUserName} from "../../tools/validator"
//引入axios
import axios from "axios";
// 引入样式
import 'element-theme-default';
import "./login.less"
//定义组件
export default class Login extends Component{ 
	constructor(props){
			super(props);
			this.state= {
				form:{
					username:'',
					password:''
				}
			}
	}

onPositionChange(value) {
  this.setState({ labelPosition: value });
}

onChange(key, value) {
  this.setState({
    form: Object.assign(this.state.form, { [key]: value })
  });
}
	submitData(){
		//解构数据
		let { username,password} = this.state.form;
		if(
			checkUserName(username)&&
			checkPassword(password)
		){
			//通过验证之后 发送请求 
			axios
					.post("/admin/login",this.state.form)
					.then(({data})=> {
						//如果 erron为0 向父组件传递用户名信息
						if(data.errno===0){
							//向父组件传递信息
							this.props.method(data.data.username)
						}else{
							//提示错误
							alert(data.msg)
						}
					}) 
		}
	}

	render(){
		return (
			<div className="app-login">
				<div className="login-container">
				<h2>请您登录</h2>
				<div style={{ margin: 20 }}></div>
				<Form labelPosition={this.state.labelPosition} labelWidth="100" model={this.state.form} className="demo-form-stacked">
					<Form.Item label="用户名">
					<Input placeholder="请输入用户名" value={this.state.form.username} onChange={this.onChange.bind(this, 'username' )}></Input>
					</Form.Item>
					<Form.Item label="密码">
						<Input placeholder="请输入密码" value={this.state.form.password} onChange={this.onChange.bind(this, 'password' )}></Input>
					</Form.Item>
				</Form>
				  <Button type="primary" size="large" className="submit-btn" onClick={ e=> this.submitData()} >点击登陆</Button>
				</div>
			</div>
		)
	}
} 