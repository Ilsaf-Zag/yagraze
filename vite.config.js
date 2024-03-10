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
    server: {
        watch: {
            usePolling: true,
        },
        host: true,
        strictPort: true,
        port: 5173
    },
    resolve: {
        alias: {

            '@': fileURLToPath(new URL('./resources', import.meta.url)),
            '@assets':fileURLToPath(new URL('./resources/assets', import.meta.url)),
            '@stores':fileURLToPath(new URL('./resources/js/stores', import.meta.url)),
            '@images':fileURLToPath(new URL('./resources/assets/images', import.meta.url)),
            '@components': fileURLToPath(new URL('./resources/js/components', import.meta.url)),
            '@views': fileURLToPath(new URL('./resources/js/views', import.meta.url)),
            '@layouts': fileURLToPath(new URL('./resources/js/layouts', import.meta.url)),
            '@mixins': fileURLToPath(new URL('./resources/js/mixins', import.meta.url)),
            '@pages': fileURLToPath(new URL('./resources/js/pages', import.meta.url)),
        }
    },

});
