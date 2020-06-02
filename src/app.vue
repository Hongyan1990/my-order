<template>
	<div class="my-box">
		<div class="content">
			<order-header v-if="showHeader"></order-header>
			<router-view></router-view>
		</div>	
	</div>
</template>

<script>
	import cookie from './util/cookie.js'
	import OrderHeader from './views/OrderHeader.vue'
	export default {
		name: 'app',
		components: {
			OrderHeader
		},
		data () {
			return {
			}
		},
		computed: {
			showHeader () {
				return cookie.getCookie('username')
			}
		}
	}
</script>

<style >
	
</style>