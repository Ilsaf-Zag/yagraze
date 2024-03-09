import {defineStore} from 'pinia';
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core'
import axios from "axios";
import {ref} from "vue";

export const useUserStore = defineStore('user',()=> {
    const isAdmin = ref(false)


    const checkAdmin = async()=>{
        const res = await axios.get('/api/check-admin')
        if (res.data) isAdmin.value = true
    }

    return {isAdmin,checkAdmin}
})
