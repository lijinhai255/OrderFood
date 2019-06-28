//引入react jsx语法
import React from 'react';
//引入渲染库 
import { render} from 'react-dom';

// 引入路由规则
import routes from "./router/Router"
//引入Provider
import { Provider} from "react-redux"
//引入应用程序
import App from './app/App';
//引入store
import store from "./store/store"
console.log(store,111)
//渲染组件
// render(<App></App>,document.getElementById('app'));
// render(routes,document.getElementById('app'));
//通过provider 为routes 的app 提供store
render( <Provider store={ store}>{ routes}</Provider>, document.getElementById("app"))