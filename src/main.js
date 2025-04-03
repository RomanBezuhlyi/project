import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.scss'
import router from './router/index'
import VueTheMask from 'vue-the-mask' // Імпортуємо бібліотеку

createApp(App)
	.use(router)
	.use(VueTheMask) // Додаємо бібліотеку до Vue
	.mount('#app')
