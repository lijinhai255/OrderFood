// 引入path
var path = require('path');
// 引入webpack
var webpack = require('webpack');
// 模板插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 定义配置
module.exports = {
	// 拓展名
	resolve: {
		extensions: ['.jsx', '.js', '.es']
	},
	// 入口
	entry: './src/main',
	// 发布
	output: {
		// 根路径
		path: path.join(process.cwd(), '../'),
		// 发布地址
		filename: './admin/dist/admin_pc.js'
	},
	// 模块
	module: {
		// 加载机
		rules: [
			// jsx
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				// // 插件
				// query: {
				// 	presets: ['es2015', 'react']
				// }
				// 配置
				options: {
					presets: ['es2015', 'react'],
					// 插件
					plugins: [
						// 按需加载
						['import', {
							style: 'css',
							libraryName: 'antd-mobile'
						}]
					]
				}
			},
			// es6
			{
				test: /\.es$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			// less
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			},
			// scss
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			// css
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			// 字体图标
			{
				test: /\.(ttf|woff)$/,
				loader: 'url-loader'
			}
		]
	},
	// 插件
	plugins: [
		// 实例化
		new HtmlWebpackPlugin({
			// 模板
			template: './public/index.html',
			// 发布
			filename: './views/admin_pc.html',
			// 指纹
			hash: true
		}),
		// 压缩js
		// new webpack.optimize.UglifyJsPlugin()
	]
}