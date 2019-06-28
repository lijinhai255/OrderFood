//引入react
import React from "react";
import { HashRouter, Route} from "react-router-dom";
//引入应用程序
import App from "../app/App";
//引入接受数据的方法
import { deal} from "../store/store"
//确定路由策略
// export default (
//     <HashRouter>
//         <App></App>
//     </HashRouter>
// )
//最后一步渲染路由规则

//通过route 引入dealApp
export default (
    <HashRouter>
        <Route path="/" component={ deal(App)}></Route>
    </HashRouter>
)