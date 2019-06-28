//引入react
import React, { Component } from 'react';
//引入antd
import { Row, Col } from "antd";
//引入 路由组件
import { Route, Switch} from "react-router-dom"
import "antd/dist/antd.css";
// 引入路由组件
// import {Switch, Route} from 'react-router-dom';
//引入头部钻进
import Header from "../../components/header/Header";
//引入左侧导航
import LeftNav from "../../components/leftnav/LeftNav"
//引入主体内容
import Main from "../main/Main"
//引入底部组件
import Footer from "../../components/footer/Footer";
//引入ui页面 
import UiButton from "../../page/ui/button/Button";
import Modals from "../../page/ui/modals/Modals";
import Loading from "../../page/ui/loading/Loading";
import Notification from "../../page/ui/notification/Notification";
import Message from "../../page/ui/message/Message";
import Tab from "../../page/ui/tab/Tab";
import Gallery from "../../page/ui/gallery/Gallery";
import MakeCarousel from "../../page/ui/carousel/Carousel";
//引入表单组件
import MakeLogin from "../../page/form/login/Login";
import MakeReg from "../../page/form/reg/Reg";
//引入表格page
import  TableBasic from "../../page/table/basic/Basic";
import  HeightTable from "../../page/table/height/Height";
import  LoadeTable from "../../page/table/loade/Loade";
import  UserList from '../../page/table/userList/index'
//引入城市管理page
import City from "../../page/city/City";
//引入图标
import Bar from "../../page/echart/bar/Bar";
import Line from "../../page/echart/line/Line";
import Pine from "../../page/echart/pine/Pine";
//引入富文本
import Rich from "../../page/rich/Rich";
//引入主页
// import Main from "../main/Main"
//引入组件 商家桌号组件
// import SellerDeskOrderCreate from '../seller/deskorder/create/Create';
// import SellerDeskOrderEdit from '../seller/deskorder/edit/Edit';
// import SellerDeskOrderList from '../seller/deskorder/list/List';
// // //引入组件 食品组件
// // import SellerFooderCreate from '../seller/fooder/create/Create';
// // import SellerFooderEdit from '../seller/fooder/edit/Edit';
// // import SellerFooderList from '../seller/fooder/list/List';
// // //引入订单组件 
// // import SellerOrderList from '../seller/fooder/list/List';
// // import SellerOrderEdit from '../seller/fooder/edit/Edit';
// // import SellerOrderCreate from '../seller/fooder/create/Create';
//引入样式
import "../../style/common.less";
//定义组件
export default class Home extends Component {
	constructor(props){
		super(props);
		this.state={
			msg:''
		}
	}
	render() {
		return (
			<div>
				<Row className="container">
					<Col span={4} className="nav-left">
					{/* 子组件向父组件通信   */}
					{/* 1 父组件向子组件传递方法 并绑定父组件的实例化对象 */}
						<LeftNav methond= { msg=> this.setState({ msg}) }  ></LeftNav>
					</Col> 
					<Col span={20} className="main">
						<Header  msg={this.state.msg}></Header>
						<Row className="content">
							{/* 定义路由的渲染位置 */}
							<Switch>
								<Route path='/ui/buttons' component={UiButton}></Route>
								<Route path='/ui/modals' component={Modals}></Route>								
								<Route path='/ui/loadings' component={Loading}></Route>								
								<Route path='/ui/notification' component={Notification}></Route>	
								<Route path='/ui/messages' component={Message}></Route>							
								<Route path='/ui/tabs' component={Tab}></Route>							
								<Route path='/ui/gallery' component={Gallery}></Route>							
								<Route path='/ui/carousel' component={MakeCarousel}></Route>							
								<Route path='/form/login' component={MakeLogin}></Route>							
								<Route path='/form/reg' component={MakeReg}></Route>							
								<Route path='/table/basic' component={TableBasic}></Route>							
								<Route path='/table/high' component={HeightTable}></Route>							
								<Route path='/table/onlade' component={LoadeTable}></Route>							
								<Route path='/table/userlist' component={UserList}></Route>															
								<Route path='/charts/bar' component={Bar}></Route>							
								<Route path='/charts/pie' component={Pine}></Route>							
								<Route path='/charts/line' component={Line}></Route>							
								<Route path='/city' component={City}></Route>							
								<Route path="/rich" component={ Rich} ></Route>
								<Route path="/main" component={ Main} ></Route>
								<Route path="*" Component={UiButton} ></Route>
							</Switch>
							{/* <Main></Main> */}
							{/* <Home/> */}
							{/* {this.props.children} */}
						</Row>
						<Footer></Footer>
					</Col>
				</Row>
			</div>
		)
	}
}
