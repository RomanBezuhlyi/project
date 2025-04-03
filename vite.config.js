import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue()],
	// Вказуємо базовий шлях для деплою на GitHub Pages
	base: '/project/', // Замість 'proty-diia' поставте ваш репозиторій
})
