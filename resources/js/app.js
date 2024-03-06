import './../css/app.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import axiosSettings from './axiosSettings.js'

const pinia = createPinia()
const app = createApp(App)


app.use(pinia).use(router)
app.mount('#app')
