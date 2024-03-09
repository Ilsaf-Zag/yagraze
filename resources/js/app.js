import './../css/app.css'

import {createApp} from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import axiosSettings from './axiosSettings.js'

const pinia = createPinia()
const app = createApp(App)

app.use(router).use(pinia)
app.mount('#app')
