import Vue from 'vue'
import Router from 'vue-router'

//import login from '@/components/login'
//import home from '@/components/home'

const login = r => require.ensure([], () => r(require('@/components/login')), 'login');//webpack.base.conf.js里配置chunkFilename:'[name].js'//按需加载的重命名

const home = r => require.ensure([], () => r(require('@/components/home')), 'home');
//setInterval(()=>{
//	console.log(home)
//},1000)

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/login',
			name: 'login',
			component: login,
			meta: ['登录'],
		},
		{
			path: '/home',
			name: 'home',
			component: home,
			children: [{
					path: '/sy',
					name: 'sy',
					//        component: mainPage
				},
				{
					path: '/kh',
					//        component: manage,
					children: [{
							path: 'user/:uumsid&:userid',
							component: login
						},
						{
							path: 'enterprise/:id',
							component: login
						},
						{
							path: '/',
							component: login
						},
					]
				},
				{
					path: '/yj',
					name: 'yj',
					component: login
				},
				{
					path: '/wd',
					name: 'wd',
					component: login
				},

			]
		},
		{
			path: '*',
			redirect: '/login'
		},
	]
})