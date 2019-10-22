<template>
	<!--<div @click='login' >-->
		<!--<Calendar></Calendar>
		 <button >click me!</button>-->
		  <!--<mt-switch v-model="value">开关</mt-switch>
		  <el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark">2</div></el-col>
</el-row>
<el-row>
  <el-col :span="12"><div class="grid-content bg-purple">2</div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light">2</div></el-col>
</el-row>
<el-row>
  <el-col :span="8"><div class="grid-content bg-purple">2</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light">2</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">2</div></el-col>
</el-row>-->
<div id="vueapp" class="vue-app">
    <kendo-chart :title-text="'Kendo Chart Example'"
                 :legend-position="'bottom'"
                 :series="series"
                 :category-axis-categories="categories"
                 :value-axis="axis"
                 :theme="'sass'">
    </kendo-chart>
</div>
	<!--</div>-->
</template>

<script>
	import axios from 'axios'



export default{
    name: "vueapp",
     components: {
      
   },
    data: function() {
        return {
            series: [],
            categories: ["Aug", "Sep", "Oct"],
            axis: [{
                name: "temperature",
                labels: {
                    format: "{0}C"
                }
            },
            {
                name: "humidity",
                labels: {
                    format: "{0}%"
                }
            }]
        }
    },
    beforeMount(){
    	setTimeout(()=>{
    		this.ajax()
    	},500)
    	
    },
    methods:{
    	ajax(){
    		this.series=[{
                name: 'Temperature',
                data: [20, 25, 32],
                axis: "temperature"
            },
            {
                name: 'Humidity',
                data: [40, 50, 80],
                axis: "humidity"
            }]
    	}
    }
}

//	export default{
//		name:'login',
//		data:function(){
//			return {
//				
//			}
//		},
//		
//		mounted(){
////			axios.get('service/system/getPublicEncryptKey').then((response) => {
////			  console.log(response.data)
////			});
//			axios.get('/login').then((response) => {
//			  console.log(response.data)
//			})
//		},
//		
//		methods:{
//			login(){
//				this.$router.push({
//					path:'/home',
//					query:{
//						id:1,
//						username:'jack'
//					}
//					
//				})
//			}
//		},
//	}
</script>

<style>
	div,input{
		width:180px
	}
</style>