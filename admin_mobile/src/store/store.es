//引入创建store的方法
import { createStore} from "redux";
//引入connect 方法
import { connect} from "react-redux";
//引入 reducer 
import reducer from "../reducer/reducer"
//定义组件 接受store数据的方法
//如何接受state
function mapStateToProps(state) {
    return { state};
}
function mapDispathToProps(dispath){
    return { dispath}
}
//定义接收的方法
export let deal = connect( mapStateToProps,mapDispathToProps );

//创建store
export default createStore ( reducer);
//