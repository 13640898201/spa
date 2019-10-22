// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import ElementUI from 'element-ui'
import axios from 'axios'
import 'amfe-flexible'
import './assets/styles/reset.css'
//import Mint from 'mint-ui'


import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import {
	Chart,
	ChartSeriesItem,
	Sparkline,
	SparklineSeriesItem,
	StockChart,
	ChartInstaller
} from '@progress/kendo-charts-vue-wrapper'
Vue.use(ChartInstaller)


Vue.config.productionTip = false
//Vue.use(ElementUI)
//Vue.use(Mint)
axios.defaults.baseURL = process.env.API_ROOT;
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
	// 在发送请求之前做些什么
	console.log(config)
	return config;
}, function(error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
	// 对响应数据做点什么
	//   console.log(response)
	return response;
}, function(error) {
	// 对响应错误做点什么
	return Promise.reject(error);
});
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App,
		 Chart,
       Sparkline,
       StockChart
	},
	template: '<App/>'
})