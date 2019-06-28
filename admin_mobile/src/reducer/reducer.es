//引入类型
import { LOGIN} from '../conts/conts'
//定义rdducer 
export default function reducer (state={ username:''},action ) {
    //判断消息类型
    //如果是登陆成功
    //定义结果对象 用于存储信息
    let result = {};
    switch (action.type) {
        case LOGIN:
            //更新用户名
            result.username = action.data
            break;
    }
    //合并对象
    return Object.assign({},state,result);
}