//引入react
import React, { Component } from 'react';
import { Card, Button, Table, Form, Select, Modal, message } from 'antd';
// import axios from '../../axios/index';
import axios from "axios";
import Utils from '../../utils/utils';
const FormItem = Form.Item;
const Option = Select.Option;
//引入Button组件
import "./City.less";
//定义组件
export default class City extends Component {
    constructor(props){
        super(props);
        this.state={
            isShowOpenCity:false,
            list:[]
        }
    }
    componentWillMount(){
        this.getCityData()
    }
    
    getCityData(){
        let baseUrl = "https://www.easy-mock.com/mock/5c919503402a6524e9cf6554/mockapi/"
        // axios.ajax({
        //     url:"/open_city",
        //     data:{
        //         page:1
        //     }
        // }).then((res)=>{
        //     console.log(res)
        // })
        axios.get(baseUrl+"open_city")
            .then(({data})=>{
                console.log(data,12345);
                //数据请求成功
                if(data.error === 0){
                    let list = data.data.item_list.map((item, index) => {
                        item.key = index;
                        return item;
                    });
                    console.log(list,'list');
                    this.setState({list})
                }
              
                })
    }
   
    handleOpenCity(){
        this.setState({ isShowOpenCity: true });
    }
   handleSubmit(){
    let baseUrl = "https://www.easy-mock.com/mock/5c919503402a6524e9cf6554/mockapi"   
    let cityInfo = this.cityForm.props.form.getFieldsValue();
    //发送ajax 请求数据
    axios.get(baseUrl+'/cityopen')
        .then(({data})=>{
            if(data.error=== 0){
                message.success("开通成功");
                this.setState({
                    isShowOpenCity:false
                })
                //同时请求新的的数据
                this.getCityData()
            }
        })
   }
    render() {
        //定义colums
        const columns = [
            {
                title:'城市ID',
                dataIndex:'id'
            }, {
                title: '城市名称',
                dataIndex: 'name'
            }, {
                title: '用车模式',
                dataIndex: 'mode',
                render(mode){
                    return mode ==1 ?'停车点':'禁停区';
                }
            }, {
                title: '营运模式',
                dataIndex: 'op_mode',
                render(op_mode) {
                    return op_mode == 1 ? '自营' : '加盟';
                }
            }, {
                title: '授权加盟商',
                dataIndex: 'franchisee_name'
            }, {
                title: '城市管理员',
                dataIndex: 'city_admins',
                render(arr){
                    return arr.map((item)=>{
                        return item.user_name;
                    }).join(',');
                }
            }, {
                title: '城市开通时间',
                dataIndex: 'open_time'
            }, {
                title: '操作时间',
                dataIndex: 'update_time',
                render: Utils.formateDate
            }, {
                title: '操作人',
                dataIndex: 'sys_user_name'
            }
        ]
        return (
            <div>
                <Card>
                    <FilterForm />
                </Card>
                <Card>
                <Button type="primary" onClick={()=>this.handleOpenCity()}>开通城市</Button>
                </Card>
                <div className="content-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                    />
                </div>
                <Modal 
                    title="开通城市"
                    visible={this.state.isShowOpenCity}
                    onCancel={()=>{
                        this.setState({
                            isShowOpenCity:false
                        })
                    }}
                    onOk={()=>this.handleSubmit()}
                >
                {/* 在modal 中嵌套表单 */}
                    <OpenCityForm wrappedComponentRef={(inst)=>{this.cityForm = inst;}}/>
                </Modal>
            </div>
        );
    }
}
class FilterForm extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline">
                <FormItem label="城市">
                    {
                        getFieldDecorator('city_id')(
                            <Select
                                style={{ width: 100 }}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                                <Option value="3">深圳市</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="用车模式">
                    {
                        getFieldDecorator('mode')(
                            <Select
                                style={{ width: 120 }}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">指定停车点模式</Option>
                                <Option value="2">禁停区模式</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="营运模式">
                    {
                        getFieldDecorator('op_mode')(
                            <Select
                                style={{ width: 80 }}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="加盟商授权状态">
                    {
                        getFieldDecorator('auth_status')(
                            <Select
                                style={{ width: 100 }}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">已授权</Option>
                                <Option value="2">未授权</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{ margin: '0 20px' }}>查询</Button>
                    <Button>重置</Button>
                </FormItem>
            </Form>
        )
    }
}
FilterForm = Form.create()(FilterForm);
class OpenCityForm extends Component {

    render(){
        // 设置input的宽度和高度
        const formItemLayout ={
            labelCol:{
                span:5
            },
            wrapperCol:{
                span:19
            }
        }
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="horizontal">
            <FormItem label="选择城市" {...formItemLayout}>
                {
                    getFieldDecorator('city_id',{
                        initialValue:'1'
                    })(
                        <Select style={{ width: 100 }}>
                            <Option value="">全部</Option>
                            <Option value="1">北京市</Option>
                            <Option value="2">天津市</Option>
                        </Select>
                    )
                }
            </FormItem>
            <FormItem label="营运模式" {...formItemLayout}>
                {
                    getFieldDecorator('op_mode', {
                        initialValue: '1'
                    })(
                        <Select style={{ width: 100 }}>
                            <Option value="1">自营</Option>
                            <Option value="2">加盟</Option>
                        </Select>
                    )
                }
            </FormItem>
            <FormItem label="用车模式" {...formItemLayout}>
                {
                    getFieldDecorator('use_mode', {
                        initialValue: '1'
                    })(
                        <Select style={{ width: 100 }}>
                            <Option value="1">指定停车点</Option>
                            <Option value="2">禁停区</Option>
                        </Select>
                    )
                }
            </FormItem>
        </Form>
        )
    }
}
OpenCityForm = Form.create()(OpenCityForm);