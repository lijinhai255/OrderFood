//将所有页面请求 在次文件下进行打包
var home = require('./home');
//引入后台接口
var admin = require('./admin');
//引入美团
var mtpc =require('./mtpc');
var gwpc = require('./gwpc')
//并暴露解耦
module.exports = {home,admin,mtpc,gwpc}