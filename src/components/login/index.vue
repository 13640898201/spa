<template>
	
	<div>

		 <kendo-maskedtextbox v-model="phoneNumber" ></kendo-maskedtextbox>
		<div @click='login' >登录</div>
	</div>
</template>

<script>
	import axios from 'axios'
    import { userMessageMixin } from '../../utils/mixin.js'


//export default{
//  name: "vueapp",
//   components: {
//    
// },
//  data: function() {
//      return {
//          series: [],
//          categories: ["Aug", "Sep", "Oct"],
//          axis: [{
//              name: "temperature",
//              labels: {
//                  format: "{0}C"
//              }
//          },
//          {
//              name: "humidity",
//              labels: {
//                  format: "{0}%"
//              }
//          }]
//      }
//  },
//  beforeMount(){
//  	setTimeout(()=>{
//  		this.ajax()
//  	},500)
//  	
//  },
//  methods:{
//  	ajax(){
//  		this.series=[{
//              name: 'Temperature',
//              data: [20, 25, 32],
//              axis: "temperature"
//          },
//          {
//              name: 'Humidity',
//              data: [40, 50, 80],
//              axis: "humidity"
//          }]
//  	}
//  }
//}

	export default{
		name:'login',
		data:function(){
			return {
				phoneNumber:""
			}
		},
		mixins: [userMessageMixin],
		mounted(){
//			axios.get('service/system/getPublicEncryptKey').then((response) => {
//			  console.log(response.data)
//			});
			axios.get('/login').then((response) => {
			  console.log(response.data)
			})
		},
		
		methods:{
			login(){
				
//				this.setHymc(this.phoneNumber);
//				console.log(this.hymc)
				this.$router.push({
					path:'/home',
					query:{
						id:1,
						username:'jack'
					}
					
				})
			}
		},
	}
</script>

<style>
	/*div,input{
		width:180px
	}*/
</style>