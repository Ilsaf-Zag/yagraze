<template>
    <header class="sticky top-0 flex items-center w-full z-50 bg-black max-h-[125px] h-full py-8 2xl:px-20 2xl:max-h-[100px] 2xl:py-4 xl:px-8 lg:max-h-24 lg:px-2 sm:max-h-16 sm:py-3">
        <div class="container">
            <div class="flex items-center justify-between">
                <router-link :to="{name:'home'}">
                    <IconDefaultLogo class="w-20 md:w-16 sm:w-10 "/>
                </router-link>
                <template v-if="largerThanSm">
                    <nav>
                        <ul class="flex items-center text-white text-xl space-x-28 xl:space-x-20 lg:space-x-12 lg:text-lg">
                            <li>
                                <router-link :to="{name:'home'}" class="hover:text-gray3 transition-colors duration-200">Главная</router-link>
                            </li>
                            <li class="relative py-4 group">
                                Портфолио
                                <ul
                                    class="z-10 text-center overflow-hidden -translate-y-1/4 group-hover:translate-y-0 transition-transform invisible group-hover:visible -left-2/4 w-52 bg-black absolute px-7 py-5  rounded-b-2xl space-y-4 lg:w-40 lg:-left-[35%] lg:px-5">
                                    <li class="border-t border-white/15 border-solid pt-4">
                                        <router-link :to="{name:'designs'}" class="py-1 hover:text-gray3 transition-colors duration-200">Дизайн</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{name:'illustrations'}" class="py-1 hover:text-gray3 transition-colors duration-200">Иллюстрации
                                        </router-link>
                                    </li>
                                </ul>

                            </li>
                            <li class="relative py-4 group">
                                Информация
                                <ul class="z-10 text-center overflow-hidden invisible -translate-y-1/4 group-hover:translate-y-0 transition-transform group-hover:visible group-hover:overflow-visible right-2/4 translate-x-2/4 w-52 bg-black absolute px-7 py-5 rounded-b-2xl  space-y-4 lg:w-40 lg: lg:px-5">
                                    <li class="border-t border-white/15 border-solid pt-4">
                                        <router-link :to="{name:'services'}" class="py-1 hover:text-gray3 transition-colors duration-200">Мои услуги</router-link>
                                    </li>
                                    <li class="">
                                        <router-link :to="{name:'reviews'}" class="py-1 hover:text-gray3 transition-colors duration-200">Отзывы</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <router-link :to="{name:'contacts'}" class="hover:text-gray3 transition-colors duration-200">Контакты</router-link>
                            </li>
                        </ul>
                    </nav>
                </template>
                <template v-else>
                       <nav class="absolute right-0 top-0 min-h-screen flex items-center bg-black2/75 text-white transition-all duration-700"
                            :class="[isOpen ?'visible w-full':'invisible w-0']"
                       >
                           <ul class="w-full flex flex-col items-end text-2xl space-y-5 mt-24 mr-4 transition-all duration-300 delay-100"
                               :class="[isOpen ?'visible opacity-100':'invisible opacity-0']"
                           >
                               <li @click="isOpen = false"  v-for="item of routesListMobile">
                                   <router-link :to="{name:item.name}">{{ item.text }}</router-link>
                               </li>
                           </ul>
                       </nav>
                </template>

                <div v-if="!largerThanSm" class="z-50" @click="isOpen = !isOpen">
                    <template v-if="isOpen">
                        <IconMark class="w-10 text-white" />
                    </template>
                    <template v-else>
                        <IconBurger v class="w-10 text-white" />
                    </template>
                </div>
            </div>
        </div>
    </header>
</template>


<script setup>
import IconDefaultLogo from "@components/icons/logos/IconDefaultLogo.vue";
import IconBurger from "@components/icons/IconBurger.vue";
import {ref} from "vue";
import IconMark from "@components/icons/IconMark.vue";
import {useBreakpointsStore} from "@stores/breakpointsStore.js";

const breakpoints = useBreakpointsStore().breakpoints

const largerThanSm = breakpoints.greater('sm')
const isOpen = ref(false)

const routesListMobile = [
    {
        name:'home',
        text:'Главная'
    },
    {
        name:'designs',
        text:'Дизайн'
    },
    {
        name:'illustrations',
        text:'Иллюстрации'
    },
    {
        name:'services',
        text:'Мои услуги'
    },
    {
        name:'reviews',
        text:'Отзывы'
    },
    {
        name:'contacts',
        text:'Контакты'
    },
]

</script>
