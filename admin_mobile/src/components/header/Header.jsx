//引入react
import React, { Component} from 'react';
//引入样式
import "./Header.less";
import { Row,Col } from "antd"
import Util from '../../utils/utils';
import axios from '../../axios'
//定义组件
export default class Header extends Component{ 
	constructor(props){
		super(props);
		this.state={
			usernname:'',
			sysTime:'',
			dayPictureUrl:"",
			weather:''
		}
	}
	componentWillMount(){
		this.setState({ usernname:"lijinahi"})
		//定义定时器  用于更新事件
		setInterval(()=>{
			let sysTime = Util.formateDate(new Date().getTime() );
			this.setState({
				sysTime
			})
		},1000)
		//初始化更新天气的方法
		this.getWeatherAPIData()
	}
	getWeatherAPIData(){
		//定义城市
		let city = "北京";
		axios.jsonp({
			url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
		}).then((res)=>{
			if(res.status === 'success'){
				let data = res.results[0].weather_data[0];
				this.setState({
						dayPictureUrl:data.dayPictureUrl,
						weather:data.weather
				})
		}
		})
	}
	render (){
		return (
			<div className="header">
					<Row className="header-top">
					<Col span={6} className="logo">
						<img src=""></img>
						<span >后台管理系统</span>
					</Col>
					<Col span={18}>
						<span> 欢迎， {this.state.usernname}</span>
						<a href="#"> 退出</a>
					</Col>
					</Row>
					<Row className="breadcrumb">
						<Col span={4} className="breadcrumb-title">
							{ this.props.msg? this.props.msg :"首页"}
						</Col>
						<Col span={20} className="weather" >
							<span className="date">{ this.state.sysTime}</span>
							<span className="weather-img">
								<img src={this.state.dayPictureUrl} />
							</span>
							<span className="weather-detail">
								{ this.state.weather}
							</span>
						</Col>
					</Row>
			</div>
		)
    }
}