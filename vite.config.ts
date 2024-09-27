import react            from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(
{
    plugins: [react()],
    resolve: {
        alias: {
            src: '/src',
            data: '/src/data',
            view: '/src/views',
            services: '/src/services'
        }
    }
})