//引入消息类型
import { LOGIN } from "../conts/consts";
//动态消息:存储用户名
export let saveUsername = (username)=>{
    return { type: LOGIN, data: username }
} 