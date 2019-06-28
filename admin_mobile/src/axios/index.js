import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'
export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                if (response.status == 'success') {
                    resolve(response);
                } else {
                    reject(response.messsage);
                }
            })
        })
    }
    static ajax(options){
        //添加loading功能
        let loading;
        if (options.data && options.data.isShowLoading !== false){
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }
        let baseURL = 'https://www.easy-mock.com/mock/5c919503402a6524e9cf6554/mockapi/'
        console.log(options,'options')
        return new Promise((resolve,reject)=>{
            //使用axios的API进行对axios 的封装
            axios({
                url:options.url,
                method:options.method,
                baseURL,
                timeOut:5000,
                params:(options.data && options.data.params) || ''
            }).then((res)=>{
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                //如果状态码 200
                if(res.status === 200){
                    //执行resolve 方法
                    let {data} = res;
                    if(data.error === 0){
                        resolve(data);
                    }else{
                        //使用module
                        Modal.info({
                            title:"提示",
                            conten:'获取数据失败 再刷新'
                        })
                    }
                }else{
                    //如果状态码不是200 执行 rejeect方法
                    reject(res.data)
                }
            })
        })
    }
}