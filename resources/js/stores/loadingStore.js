import {defineStore} from 'pinia';
import {ref} from "vue";

export const useLoadingStore = defineStore('loadingStore', () => {

    const isLoading = ref(false)
    const toggleLoad = () =>{
        isLoading.value = !isLoading.value
    }
    return {isLoading,toggleLoad}
})
