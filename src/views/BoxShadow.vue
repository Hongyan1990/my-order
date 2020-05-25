<template>
	<div>
		<h3>box-shadow</h3>
		<div class="card-text">
			<div class="header">
				<h1>1</h1>
			</div>
			<div class="container">
				<p>20200420</p>
			</div>
		</div>
		<div class="card-img">
			<div class="header">
				<img :src="imgURl" alt="hello">
			</div>
			<div class=container>
				<p>20200420</p>
			</div>
		</div>
	</div>
</template>
<script>
	import imgURl from '../static/rock600x400.jpg'
	export default {
		name: 'BoxShadow',
		data () {
			return {
				imgURl
			}
		},
		methods: {
			showName () {
				
			}
		}
	}
</script>
<style >
	
</style>