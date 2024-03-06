import {defineStore} from 'pinia';
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core'

export const useAuthStore = defineStore('authStore', () => {
    const isAuth = false


    return {isAuth}
})
