import {defineStore} from 'pinia';
import {ref} from "vue";

export const useShowSidebarStore = defineStore('showSidebar', () => {
    const showSideBar = ref(false)

    const toggleSideBar = () =>{
        showSideBar.value = !showSideBar.value
    }
    return {showSideBar,toggleSideBar}
})
