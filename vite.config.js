import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from 'node:url'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    server: {
        hmr: {
            host: '77.222.53.167'
        },
    },
    plugins: [
        vue({
            template: {
                transformAssetUrls: {
                    // The Vue plugin will re-write asset URLs, when referenced
                    // in Single File Components, to point to the Laravel web
                    // server. Setting this to `null` allows the Laravel plugin
                    // to instead re-write asset URLs to point to the Vite
                    // server instead.
                    base: null,

                    // The Vue plugin will parse absolute URLs and treat them
                    // as absolute paths to files on disk. Setting this to
                    // `false` will leave absolute URLs un-touched so they can
                    // reference assets in the public directory as expected.
                    includeAbsolute: false,
                },
            },
        }),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),

        VitePWA({
            includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
            manifest: {
                name: 'My Awesome App',
                short_name: 'MyApp',
                description: 'My Awesome App description',
                theme_color: '#F0F0F3',
                start_url: '/',
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        })
    ],
    resolve: {
        alias: {

            '@': fileURLToPath(new URL('./resources', import.meta.url)),
            '@assets': fileURLToPath(new URL('./resources/assets', import.meta.url)),
            '@stores': fileURLToPath(new URL('./resources/js/stores', import.meta.url)),
            '@images': fileURLToPath(new URL('./resources/assets/images', import.meta.url)),
            '@components': fileURLToPath(new URL('./resources/js/components', import.meta.url)),
            '@views': fileURLToPath(new URL('./resources/js/views', import.meta.url)),
            '@layouts': fileURLToPath(new URL('./resources/js/layouts', import.meta.url)),
            '@mixins': fileURLToPath(new URL('./resources/js/mixins', import.meta.url)),
            '@pages': fileURLToPath(new URL('./resources/js/pages', import.meta.url)),
        }
    },

});
