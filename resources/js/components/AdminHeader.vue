<template>
<header class='w-full ml-auto bg-black2 min-h-16 sticky top-0 z-50 flex items-center justify-end lg:justify-between px-6'>

    <template v-if="!isOpen">
        <IconBurger @click="toggleSidebar()"  class="w-6 z-10 text-white hidden lg:block" />
    </template>
    <template v-else>
        <IconMark @click="isOpen = !isOpen" class="w-6 text-white hidden lg:block z-10" />
    </template>

    <div class="h-full flex justify-end px-16 items-center">
            <button class="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Выйти</button>
    </div>
</header>
</template>

<script setup>
import IconBurger from "@components/icons/IconBurger.vue";
import {basicStore} from "@store/basicStore.js";
import {breakpoints} from "@mixins/breakpointsMixin.js";
import IconMark from "@components/icons/IconMark.vue";
import {ref} from "vue";
import IconLogo from "@components/icons/Logos/IconLogo.vue";

const basicStoreInfo = basicStore()
const isOpen = ref(false)
const toggleSidebar =()=>{
    isOpen.value = true
    basicStoreInfo.showSideBar = !basicStoreInfo.showSideBar;
}

function logout(){

}

</script>

<style scoped>

</style>
