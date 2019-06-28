//引入react
import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import { Link} from "react-router-dom";
//引入导航
import MenuConfig from "../../config/menuConfig"
const SubMenu = Menu.SubMenu;
//引入样式 
import "./LeftNav.less";
//定义组件
export default class LeftNav extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			collapsed: false,
		  }
	}
	  toggleCollapsed (){
		this.setState({
		  collapsed: !this.state.collapsed,
		});
	  }
	  sendMessage(e){
		  console.log(e.item.props.children.props.children,12345)
		}
	  createMenu(data){
		return data.map((item, index)=>{
			// 如果itme中有children属性 返回超级导航
			if(item.children){
				return(
					<SubMenu  key={index} title={<span><span>{item.title}</span></span>}>
					 { this.createMenu(item.children)}
			  		</SubMenu>
				)
			}
			//否则返回普通的导航
			return (
				// 在子组件中执行方法 并传递数据
				<Menu.Item key={index+'1'} onClick={e=> this.props.methond(e.item.props.children.props.children) }>
				<Link to={item.key}>{ item.title}</Link>
			  </Menu.Item>
			)
		})
	  }
	  
	  render() {
		return (
		  <div className="navleft" style={{ width: 256 }}>
			<Menu
			  defaultSelectedKeys={['1']}
			  defaultOpenKeys={['sub1']}
			  mode="inline"
			  theme="dark"
			  selectable={false}
			  inlineCollapsed={this.state.collapsed}
			>
			 { this.createMenu(MenuConfig)}
			</Menu>
		  </div>
		);
	  }
}
