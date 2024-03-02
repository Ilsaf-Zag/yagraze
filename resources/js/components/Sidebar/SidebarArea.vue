<template>

    <aside ref="target" class="w-1/5  bg-black2 gray min-h-screen flex flex-col px-6 z-10 lg:fixed lg:w-1/4 lg:px-3 md:w-1/3 sm:w-1/2"
        :class="[basicStoreInfo.showSideBar && !largerThanLg?'w-2/4 visible lg:px-8 ':'lg:w-0 lg:invisible lg:px-0']"
    >
       <div class="min-h-16 flex items-center">
            <router-link :to="{name:'home'}">
                <IconLogo class="w-12 lg:hidden lg:w-10" />
            </router-link>
       </div>
        <div class="min-h-screen">
            <nav>
                <div class="border-b-2">
                    <h2 class="text-white mt-12 text-xl lg:text-base">Администрирование</h2>
                    <ul class="px-4 py-4 text-lg text-gray2 space-y-2">
                        <li>
                            <router-link :to="{name:'admin.designs'}">Дизайн</router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'admin.illustrations'}">Иллюстрации</router-link>
                        </li>
                    </ul>
                </div>
                <div class="border-b-2">
                    <h2 class="text-white mt-4 text-xl lg:text-base">Settings</h2>
                    <ul class="px-4 py-4 text-lg text-gray2 space-y-2">
                        <li>
                            <router-link :to="{name:'admin.settings'}">Настройки</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </aside>
</template>
<script setup>
import IconLogo from "@components/icons/Logos/IconLogo.vue";
import {breakpoints} from "@mixins/breakpointsMixin.js";
import { onClickOutside } from '@vueuse/core'
import {basicStore} from "@store/basicStore.js";
import {ref} from "vue";
import login from "@/js/views/auth/Login.vue";
const basicStoreInfo = basicStore()
const largerThanLg = breakpoints.greater('lg')

const target = ref(null)

onClickOutside(target,()=>{
    if(basicStoreInfo.showSideBar)
    {
        toggleSidebar()
    }
})

const toggleSidebar =()=>{
    basicStoreInfo.showSideBar = !basicStoreInfo.showSideBar;
}
</script>
