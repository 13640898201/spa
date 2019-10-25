<template>
	
<div id="vueapp" class="vue-app">
	<kendo-maskedtextbox v-model="phoneNumber" ></kendo-maskedtextbox>
		 <kendo-chart :title-text="'Kendo Chart Example'"
                 :legend-position="'bottom'"
                 :series="series"
                 :category-axis-categories="categories"
                 :value-axis="axis"
                 :theme="'sass'"  style='height:500px'>
    </kendo-chart>

   
</div>
<!--<div id="vueapp" class="vue-app">
    <kendo-chart :title-text="'Site Visitors Stats \n /thousands/'"
                 :legend-visible="false"
                 :series-defaults-type="'bar'"
                 :series="series"
                 :category-axis="categoryAxis"
                 :value-axis="valueAxis"
                 :tooltip="tooltip"
                 :theme="'sass'">
    </kendo-chart>
</div>-->
</template>

<script>
	import axios from 'axios'

//import '@progress/kendo-ui'
//import '@progress/kendo-theme-default/dist/all.css'
//import {
//	Chart,
//	ChartSeriesItem,
//	Sparkline,
//	SparklineSeriesItem,
//	StockChart,
//	ChartInstaller
//} from '@progress/kendo-charts-vue-wrapper'


export default{
    name: "vueapp",
     components: {
//    Chart,
//   		
//		Sparkline,
//		StockChart,
		
   },
    data: function() {
        return {
        	phoneNumber:"",
//      	series: [{
//              name: "Total Visits",
//              data: [56000, 63000, 74000, 91000, 117000, 138000]
//          },
//          {
//              name: "Unique visitors",
//              data: [52000, 34000, 23000, 48000, 67000, 83000]
//          }],
//          valueAxis: [{
//              max: 140000,
//              line: {
//                  visible: false
//              },
//              minorGridLines: {
//                  visible: true
//              },
//              labels: {
//                  rotation: "auto"
//              }
//          }],
//          categoryAxis: {
//              categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//              majorGridLines: {
//                  visible: false
//              }
//          },
//          tooltip: {
//              visible: true,
//              template: "#= series.name #: #= value #"
//          }
            series: [{
                name: 'Temperature',
                data: [32],
                axis: "temperature"
            },
            {
                name: 'Humidity',
                data: [80],
                axis: "humidity"
            }],
            categories: ["Oct"],
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
    mounted(){
    	setTimeout(()=>{
    		
    		this.ajax();
    		console.log(this.series)
    	},1000)
    	
    },
    methods:{
    	navigatorSeries(){
    		
    	},
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
            }];
            this.categories=["Oct"];
             this.axis=[{
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
		/*width:180px*/
	}
</style>