<template>
    <footer class="relative z-10 bg-black pt-20 pb-10 lg:pt-[120px] lg:pb-10 lg:pt-10 sm:py-4">
        <div class="container mx-auto">
            <div class="flex justify-between items-center">
                <div class="w-full px-4 ">
                    <div class="w-full flex flex-col space-y-4 sm:mb-0">
                        <div class="flex items-center sm:justify-center">
                            <a href="" class="max-w-[160px] mr-2">
                                <IconFooterLogo class="w-10 h-14"/>
                            </a>
                            <div class="text-white">
                                <a href="">yagraze.ru</a>
                                <div>Vladimir Dolgov</div>
                            </div>
                        </div>
                        <div class="flex space-x-7 ml-6 md:ml-0 md:justify-center">
                            <a target="_blank" :href ="socialMediaLinks.telegram"
                               class="rounded-[50px] shadow-13 w-7 h-7 flex items-center justify-center p-[6px]">
                                <IconTelegram class="bg-black w-6 pointer-events-none"/>
                            </a>

                            <a target="_blank" :href ="socialMediaLinks.vk"
                               class="rounded-[50px] shadow-13 w-7 h-7 flex items-center justify-center p-[6px]">
                                <IconVk class="bg-black w-6 pointer-events-none"/>
                            </a>
                            <a target="_blank" :href ="socialMediaLinks.behance"
                               class="rounded-[50px] shadow-13 w-7 h-7 flex items-center justify-center p-[6px]">
                                <IconBehance class="bg-black w-6 pointer-events-none"/>
                            </a>
                        </div>
                        <span class="text-white text-sm block mt-6 lg:text-xs sm:text-center sm:mt-4">© {{
                                new Date().getFullYear()
                            }} Vladimir Dolgov. Designed by Graze.</span>
                    </div>
                </div>

                <div
                    class="sm:hidden flex justify-between  max-w-[800px] w-full pr-0 shadow-7 rounded-[50px] py-11 px-11 lg:px-4 lg:py-4">
                    <div v-for="menu in menus" :key="menu.title" class="w-full px-4">
                        <div class="w-full mb-10 lg:mb-4">
                            <h4 class="text-lg text-gray2 font-semibold mb-9 lg:my-4 lg:text-base">{{ menu.title }}</h4>
                            <ul class="space-y-3 lg:space-y-2">
                                <li v-for="item in menu.items" :key="item.text">
                                    <template v-if="menu.title === 'Меню' ">
                                        <router-link
                                            :to="{name:item.routeName}"
                                            class="inline-block hover:text-gray3 transition-colors text-base leading-loose text-light-gray hover:text-primary lg:text-base"
                                        >
                                            {{ item.text }}
                                        </router-link>
                                    </template>
                                    <template v-else>
                                        <a target="_blank" :href ="item.link"
                                           class="inline-block hover:text-gray3 transition-colors text-base leading-loose text-light-gray hover:text-primary lg:text-base"
                                        >
                                            {{ item.text }}
                                        </a>
                                    </template>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import {ref, toRef} from 'vue'
import IconFooterLogo from "@components/icons/logos/IconFooterLogo.vue";
import IconTelegram from "@components/icons/socialNetwork/IconTelegram.vue";
import IconVk from "@components/icons/socialNetwork/IconVk.vue";
import IconBehance from "@components/icons/socialNetwork/IconBehance.vue";
import {useSettingsStore} from "@stores/settingsStore.js";

const socialMediaLinks = useSettingsStore().settings.socialMediaLinks
const googleFormLink = useSettingsStore().settings.googleFormLink

const menus = ref([
    {
        title: 'Меню',
        items: [
            {text: 'Главная', routeName: "home"},
            {text: 'Дизайн', routeName: "designs"},
            {text: 'Иллюстрации', routeName: "illustrations"},
            {text: 'Контакты', routeName: 'contacts'}
        ]
    },
    {
        title: "Соц.сети",
        items: [
            {text: 'Vkontakte', link: toRef(() => socialMediaLinks.vk)},
            {text: 'Telegram', link: toRef(() => socialMediaLinks.telegram)},
            {text: 'Behance', link: toRef(() => socialMediaLinks.behance)},
        ]
    },
    {
        title: 'Полезное',
        items: [
            {text: 'Бриф на заказ', link: toRef(() => googleFormLink.googleForm)},

        ]
    }
])

</script>

