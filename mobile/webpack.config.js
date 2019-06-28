// 引入path模块
var path = require('path');
// 引入处理模块的插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 配置
module.exports = {
	// vue入口
	resolve: {
		alias: {
			vue$: 'vue/dist/vue.js'
		},
		// 拓展名
		extensions: ['.vue', '.es', '.js']
	},
	// 入口
	entry: './src/main.es',
	// 发布
	output: {
		// 修改根目录
		path: path.join(process.cwd(), '../'),
		// 发布
		filename: './static/dist/mobile.js'
	},
	// 模块
	module: {
		// 加载机
		rules: [
			// es6
			{
				test: /\.es$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			// vue
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			// css
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
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
			// 字体图标
			{
				test: /\.(ttf|woff)$/,
				loader: 'url-loader'
			}
		]
	},
	// 插件
	plugins: [
		// 处理模块
		new HtmlWebpackPlugin({
			// 模板
			template: './public/index.html',
			// 发布
			filename: './views/mobile.html',
			// 添加指纹
			hash: true
		})
	]
}