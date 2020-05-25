import Router from 'vue-router'

const routes = [
	{
		path: '/',
		redirect: '/shadow'
	},
	{
		path: '/shadow',
		component: () => import('../views/BoxShadow.vue')
	},
	{
		path: '/2d',
		component: () => import('../views/Css2D.vue')
	},
	{
		path: '/login',
		component: () => import('../views/Login.vue')
	}
]

export default new Router({
	routes,
	mode: 'history'
})