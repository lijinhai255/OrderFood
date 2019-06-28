//引入react
import React, { Component } from 'react';
//引入axios
import axios from "../../../axios/index";
// import axios from "axios";
import { Card, Table, Modal, Button, message} from 'antd';

//引入Button组件
import "./Basic.less";
//定义组件
export default class TableBasic extends Component {
    //定义构造函数 用于存储 状态数据
    constructor(props){
        super(props)
        this.state={
            dataSource:[],
            dataSource2:[],
            selectedRowKeys:[],
            selectedItem:{}
        }
    }
    componentWillMount(){
        this.getTabData()
    }
    //定义获取数据的方法
    getTabData(){
        // axios.get(' https://www.easy-mock.com/mock/5c919503402a6524e9cf6554/mockapi/tablelist')
        //     .then((req)=>{
        //         if(req.status=== 200){
        //             this.setState({
        //                 dataSource2:req.data.data
        //             })
        //         }
        //     })
        axios.ajax({
                url:'/tablelist',
                method:"get",
                data:{
                    params:{
                        page:1
                    },
                    isShowLoading:false,

                }
        }).then(({data})=>{
            data.map((item,index)=>{
                item.key = index;
            })
            //在存储数据前 遍历数据 添加key
            this.setState({
                dataSource2:data
             })
        })
        
    }
    //定义数据源
    componentDidMount(){
        const dataSource = [
            {
                id:'0',
                key:'0',
                userName:'Jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'北京市海淀区奥林匹克公园',
                time:'09:00'
            },
            {
                id: '1',
                key:'1',
                userName: 'Tom',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
            {
                id: '2',
                key:'2',
                userName: 'Lily',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
        ]
        //将外部的数据引入到内部
        this.setState({dataSource})
    }
    onRowClick(record,index){
        //record 当前所选行的信息
        //index 当前的索引值
        let selectKey = [index];
        
        Modal.info({
            title:'信息',
            content:`用户名：${record.userName},用户爱好：${record.interest}`
        })
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem: record
        })

    }
    handleDelete(){
        let rows = this.state.selectedRows;
        let ids = [];
        rows.map((item)=>{
            ids.push(item.id)
        })
        Modal.confirm({
            title:'删除提示',
            content: `您确定要删除这些数据吗？${ids.join(',')}`,
            onOk:()=>{
                message.success('删除成功');
                this.getTabData();
            }
        })
    }
    render(){
        //定义colums
        const columns = [
            {
                title:'id',
                key:'id',
                dataIndex:'id'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                render(sex){
                    return sex ==1 ?'男':'女'
                }
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                render(state){
                    let config  = {
                        '1':'咸鱼一条',
                        '2':'风华浪子',
                        '3':'北大才子',
                        '4':'百度FE',
                        '5':'创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time'
            }
        ]
        const selectedRowKeys = this.state.selectedRowKeys;
        //确定选框是单选还是多选 并且添加rowkeys
        const rowSelection ={
            type:"radio",
            selectedRowKeys
        }
        //确定多选框
        const rowSelections ={
            type: 'checkbox',
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }
        return (
            <div>
            <Card title="基础表格">
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        // pagination={false}
                    />
                </Card>
                <Card title="动态获取数据渲染表格" style={{ 'marginTop':'10px',}}>
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        // pagination={false}
                    />
                </Card>
                <Card title="动态获取数据可选表格--单选框" style={{ 'marginTop':'10px',}}>
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        // pagination={false}
                        //表格可选择
                        rowSelection={rowSelection}
                        //onRow 获取当前列的数据
                        onRow={(record,index)=>{
                            return {
                                onClick:()=>{
                                    this.onRowClick(record,index);
                                }
                            }
                        }}
                    />
                </Card>
                <Card title="动态获取数据可选表格--多选框" style={{ 'marginTop':'10px',}}>
                    <div style={{marginBottom:10}}>
                        <Button onClick={()=>this.handleDelete()}>删除</Button>
                    </div>
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        // pagination={false}
                        //表格可选择
                        rowSelection={rowSelections}
                        //onRow 获取当前列的数据
                        
                    />
                </Card>
                <Card title="动态获取数据可选表格--分页" style={{ 'marginTop':'10px',}}>
                    <div style={{marginBottom:10}}>
                        <Button onClick={()=>this.handleDelete()}>删除</Button>
                    </div>
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        // pagination={false}
                        //表格可选择
                        rowSelection={rowSelections}
                        //onRow 获取当前列的数据
                        
                    />
                </Card>
            </div>
        );
    }
}
