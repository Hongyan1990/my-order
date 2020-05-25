<template>
	<div class="my-box">
		<div class="menus">
			<router-link to="/shadow" >box-shadow</router-link>
			<router-link to="/2d" >css3-2d</router-link>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>	
	</div>
</template>

<script>
	export default {
		name: 'app',
		data () {
			return {
				name: 'HELLO SCSS'
			}
		}
	}
</script>

<style >
	
</style>