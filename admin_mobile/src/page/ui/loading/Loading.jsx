//引入react
import React, { Component} from 'react';
import { Card, Button, Spin, Icon, Alert} from  'antd'
import "../ui.less"
//引入Button组件
import "./Loading.less";
//定义组件
export default class UiButton extends Component{
	
	render (){
        const icon = <Icon  type="loading" style={{fontSize:24}}/>
        const iconLoading = <Icon type="loading" style={{ fontSize: 24 }} />
		return (
			<div>
                <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small"/>
                    <Spin style={{margin:'0 10px'}}/>
                    <Spin size="large"/>
                    <Spin indicator={icon} style={{ marginLeft: 10 }} spinning={true}/>
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Alert
                        message="React"
                        description="欢迎内容管理系统"
                        type="info"
                        style={{ marginBottom: 10 }}
                    />
                    <Spin>
                        <Alert
                            message="React"
                            description="欢迎内容管理系统"
                            type="warning"
                            style={{ marginBottom: 10 }}
                        />
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert
                            message="React"
                            description="欢迎内容管理系统"
                            type="warning"
                            style={{ marginBottom: 10 }}
                        />
                    </Spin>
                    <Spin indicator={iconLoading}>
                        <Alert
                            message="React"
                            description="欢迎内容管理系统"
                            type="warning"
                        />
                    </Spin>
                </Card>
            </div>
       
		    </div>
		)
	}
}
