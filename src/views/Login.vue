<template>
	<div>
		<h1>Login</h1>
		<button @click="login">登录</button>
	</div>
</template>

<script>
	import cookie from '../util/cookie.js'
	export default {
		data () {
			return {}
		},
		methods: {
			login() {
				cookie.setCookie('username', 'admin')
			}
		}
	}
</script>
<style></style>