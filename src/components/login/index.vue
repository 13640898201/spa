<template>
	<div @click='login' >
		<!--<Calendar></Calendar>
		 <button >click me!</button>-->
		  <mt-switch v-model="value">开关</mt-switch>
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
</el-row>
	</div>
 
	<!---->
</template>

<script>
	import axios from 'axios'

	export default{
		name:'login',
		data:function(){
			return {
				
			}
		},
		
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
	div,input{
		width:180px
	}
</style>