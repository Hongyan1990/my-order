import Vue from 'vue'
import Router from 'vue-router'
import App from './app.vue'

import router from './routes/router.js'
import cookie from './util/cookie.js'

Vue.use(Router)

router.beforeEach((to, from, next) => {
  const username = cookie.getCookie('username')
  if(username === null && to.path !== '/login') {
  	next('/login')
  }else {
  	next()
  }
  
})
router.beforeResolve((to, from, next) => {
  console.log('router before resolve')
  next()
})
router.afterEach((to, from) => {
  console.log('router after each')
})

new Vue({
	router,
	render: h => h(App)
}).$mount('#root')