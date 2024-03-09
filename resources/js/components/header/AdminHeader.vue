<template>
<header class='w-full ml-auto bg-black2 min-h-16 sticky top-0 z-50 flex items-center justify-end lg:justify-between px-6'>
    <template v-if="!showSidebarStore.showSideBar">
        <IconBurger @click="toggleSidebar()"  class="w-6 z-10 text-white hidden lg:block" />
    </template>
    <template v-else>
        <IconMark class="w-6 text-white hidden lg:block z-10" />
    </template>

    <div class="h-full flex justify-end px-16 lg:px-0 items-center">
            <button @click="logout" class="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Выйти</button>
    </div>
</header>
</template>

<script setup>
import IconBurger from "@components/icons/IconBurger.vue";
import {useShowSidebarStore} from '@stores/showSidebarStore.js';
import IconMark from "@components/icons/IconMark.vue";
import {ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";
import {useUserStore} from "@stores/userStore.js";


const showSidebarStore = useShowSidebarStore()
const router = useRouter()
const isOpen = ref(false)
const toggleSidebar =()=>{
    showSidebarStore.toggleSideBar()
}

function logout(){
    axios.delete('/api/logout')
        .then(res=>{
            useUserStore().isAdmin = false
            router.push({name:'home'})
        })
}

</script>

<style scoped>

</style>
