pc端后台管理系统：
技术架构： react jsx element-react router redux redux-react less|scss  axios
		  webpack ES6 ES Module 等实现单页面 后端信息管理系统
目录部署：
			view  存储模板
			admin 发布的静态资源
			admin_pc 主开发目录
				public 静态资源目录
					index.html 入口文件
				src    开发目录
					app  应用程序
					pages  所有的页面
						user   管理用户页面
						seller 商家页面
							fooder
							order
							deskorder
					components 所有的公用组件
					router   路由
					tools    工具
					store    应用程序的store
					actions   所有的消息
					reducers 所有的调度者
					consts   存储所有的常量
					main.jsx 入口文件
					webpack.config.js  webpack 配置文件
命名规范：组件名称 首字母大写					