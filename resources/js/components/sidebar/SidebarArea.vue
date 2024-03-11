<template>

    <aside ref="target"
           class="w-1/5  bg-black2 gray min-h-screen flex flex-col px-6 z-10 lg:fixed lg:w-1/4 lg:px-3 md:w-1/3 sm:w-1/2"
           :class="[showSidebarStore.showSideBar ?'w-2/4 visible lg:px-8 ':'lg:w-0 lg:invisible lg:px-0']"
    >
        <div class="min-h-16 flex items-center">
            <router-link :to="{name:'home'}">
                <IconLogo class="w-12 lg:hidden lg:w-10"/>
            </router-link>
        </div>
        <div class="min-h-screen">
            <nav class="mt-12 lg:mt-2 ">
                <div v-for="item of routesList" class="border-b-2 py-4">
                    <h2 class="text-white text-xl lg:text-base">
                        <template v-if="!item.sections">
                            <router-link @click="toggleSidebar()" :to="{name:item.routeName}">
                                {{ item.title }}
                            </router-link>
                        </template>
                        <template v-else>
                            {{ item.title }}
                        </template>
                    </h2>

                    <ul v-if="item.sections" class="px-4 py-4 text-lg text-gray2 space-y-2">
                        <li @click="toggleSidebar()" v-for="section of item.sections">
                            <router-link class="py-2" :to="{name:section.routeName}">
                                {{ section.text }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </aside>
</template>
<script setup>
import IconLogo from "@components/icons/logos/IconLogo.vue";
import {onClickOutside} from '@vueuse/core'
import {useShowSidebarStore} from '@stores/showSidebarStore.js';
import {ref} from "vue";
import {useBreakpointsStore} from "@stores/breakpointsStore.js";

const showSidebarStore = useShowSidebarStore()

const target = ref(null)
const breakpoints = useBreakpointsStore().breakpoints
const routesList = [
    {
        title: 'Главная',
        routeName: 'admin.home',
    },
    {
        title: 'Администрирование',
        sections: [
            {
                text: 'Дизайны',
                routeName: 'admin.designs'
            },
            {
                text: 'Иллюстрации',
                routeName: 'admin.illustrations'
            },
            {
                text: 'Отзывы',
                routeName: 'admin.reviews'
            },
        ]
    },
    {
        title: 'Настройки',
        routeName: 'admin.settings',
    },
]

onClickOutside(target, () => {
    {
        if (showSidebarStore.showSideBar) toggleSidebar()
    }
})

const toggleSidebar = () => {
    if (breakpoints.smaller('lg').value){
        showSidebarStore.toggleSideBar()
    }
}
</script>
