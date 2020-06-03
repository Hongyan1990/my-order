<template>
	<div class="my-box">
		<div class="content">
			<order-header v-if="showHeader"></order-header>
			<div class="main" :style="{height: localHeight + 'px'}">
				<router-view></router-view>
			</div>
			
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
			},
			localHeight () {
				return window.innerHeight - 90;
			}
		}
	}
</script>

<style >
	.main {
		width: 90%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    margin-top: 20px;
	}
</style>