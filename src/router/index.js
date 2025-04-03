import { createRouter, createWebHistory } from 'vue-router'

import AuthPage from '../views/AuthPage.vue'
import CabinetPage from '../views/CabinetPage.vue'
import HomePage from '../views/HomePage.vue'
import RegPage from '../views/RegPage.vue'
import ResetPassword from '../views/ResetPassword.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomePage,
	},
	{
		path: '/auth',
		name: 'Auth',
		component: AuthPage,
	},
	{
		path: '/registration',
		name: 'Reg',
		component: RegPage,
	},
	{
		path: '/reset-password',
		name: 'ResetPassword',
		component: ResetPassword,
	},
	{
		path: '/cabinet',
		name: 'Cabinet',
		component: CabinetPage,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
