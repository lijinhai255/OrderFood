import React, { Component } from 'react';
import { Card, Table, Modal, Button, message, Badge } from 'antd';
import Export from "../../../tools/toExal";
import {data,Conts} from "../../../conts/conts";
import "./Loader.less"
export default class HeightTable extends Component {
    //定义构造函数 用于存储 状态数据
    constructor(props) {
        super(props)
        this.state = {
            data:[],
            value:''
        }
    }
    //组件创建完成 将外部数据流入到内部
    componentWillMount(){
        this.setState({data:data.list})
    }
    getTime(timestamp){
        var date = new Date(timestamp)
				var year = date.getFullYear()
				var month = date.getMonth() + 1
				var day = date.getDate()
				return year + "-" + month + "-" + day
    }
    createTable(){
      return  this.state.data.map((item,index)=><tr key={index}><th>{item.orderid}</th><td>{item.userid}</td><td>{item.charge}</td><td>{this.getTime(item.datatime)}</td><td>{item.commission}</td></tr>)
    //   return this.state.list.map((item, index) => <li style={{ color: '#f30' }} key={index}>{item}</li>)
    }
    changeTabList(){
        let userid = this.state.value;
        let newData = this.state.data.filter((item)=> item.userid === +userid)
        this.setState({data: newData })
        //调用渲染列表的方法
        this.createTable();
    }
    onLoadeAll(){
        // var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>sheet</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>{htmldata}</body></html>';
        // var Excel_URL = 'data:application/vnd.ms-excel;base64,';
        // var result = JSON.stringify(this.refs.table);
        // console.log(result,"result")
        // this.refs.table.toString;
        new Export(Conts.template,Conts.Excel_URL,this.refs.table.id)
    }
    render() {
        let { value}  = this.state;
        return (
            <div>
                <div style={{padding:'20px', textAlign: 'center'}}>
                    <input type="text" value={value} onChange={e=> this.setState({value: e.target.value})} style={{width: "100px",
    display: "-webkit-inline-box"}}  className="search_input" id="userid" placeholder="玩家ID搜索" />
                    <Button type="primary" onClick={ e=> this.changeTabList()} icon="search">搜索</Button>
                </div>
                <div className="down">
                    <Button className="btn-primary" type="primary" onClick={e=> this.onLoadeAll()}>下载当前数据</Button>
                    <Button className="btn-success" type="danger">下载所有数据</Button>
                </div>
                    <table className="table table-bordered" ref="table" id="table">
                        <thead>
                            <tr>
                                <th>订单编号</th>
                                <th>邀请的玩家ID</th>
                                <th>玩家充值金额(元)</th>
                                <th>充值时间</th>
                                <th>获得返利(元)</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
                            { this.createTable()}
                        </tbody>
                </table>
           
            </div>
        )
    }
}