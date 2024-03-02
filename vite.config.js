import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),

    ],
    resolve: {
        alias: {

            '@': fileURLToPath(new URL('./resources', import.meta.url)),
            '@assets':fileURLToPath(new URL('./resources/assets', import.meta.url)),
            '@store':fileURLToPath(new URL('./resources/js/store', import.meta.url)),
            '@images':fileURLToPath(new URL('./resources/assets/images', import.meta.url)),
            '@components': fileURLToPath(new URL('./resources/js/components', import.meta.url)),
            '@layouts': fileURLToPath(new URL('./resources/js/layouts', import.meta.url)),
            '@mixins': fileURLToPath(new URL('./resources/js/mixins', import.meta.url)),
            '@pages': fileURLToPath(new URL('./resources/js/pages', import.meta.url)),
        }
    },

});
