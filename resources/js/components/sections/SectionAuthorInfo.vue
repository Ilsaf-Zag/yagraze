<template>
    <section>
        <div class='mx-20 lg:mx-4'>
            <div class="about-me relative bg-smoky  rounded-6xl shadow-2 rounded-[70px]">

                <div class="flex sm:flex-col sm:items-center sm:p-4">
                    <img
                        class="w-[400px] drop-shadow-[0_0_65px_rgba(0,0,0,0.35)] p-2 m-16 bg-white block rounded-[50px] 2xl:w-[350px] 2xl:m-14 xl:w-[300px] xl:m-10 lg:m-4 lg:w-[200px] sm:w-full sm:m-0"
                        src="@images/author.jpg"
                        alt="">
                    <div class="flex flex-col justify-center pr-40 2xl:pr-20 xl:pr-10 lg:pt-6 lg:pb-20 lg:pr-5">
                        <div>
                            <h2 class="text-4xl text-light-gray uppercase 2xl:text-3xl xl:text-2xl lg:text-xl">
                                {{ infoAboutDesigner.title }}
                            </h2>
                            <h3 class="font-semibold text-black2 text-4xl mt-4 2xl:text-3xl xl:text-2xl xl:mt-3 lg:text-xl">
                                {{ infoAboutDesigner.subtitle }}
                            </h3>
                            <div v-html="infoAboutDesigner.text"
                                 class="text-[28px] leading-10 2xl:text-2xl mt-4 xl:text-xl xl:mt-3 lg:text-base">
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <router-link :to="{name:'services'}"
                             class="flex items-center justify-center bg-smoky font-bold text-1xl text-orange rounded-[30px] lg:rounded-[16px] w-[400px] h-[80px] shadow-1 h-16 text-3xl absolute bottom-12 right-12 2xl:w-[300px] 2xl:h-16 2xl:text-2xl xl:w-[250px] xl:h-14 xl:text-xl xl:bottom-8 xl:right-8 lg:bottom-6 lg:right-14 lg:w-[200px] lg:h-11 lg:text-lg sm:right-1/2 sm:translate-x-1/2">
                    Узнать об услугах
                </router-link>
                <IconCircles v-if="largerThanSm" class="absolute right-4 top-4 w-40"/>
            </div>
        </div>
    </section>
</template>

<script setup>

import IconCircles from "@components/icons/IconCircles.vue";
import {reactive} from "vue";
import axios from "axios";

const infoAboutDesigner = reactive({
    title: '',
    subtitle: '',
    text: ''
})
axios.get('/api/admin/settings', {params: ['infoAboutDesigner']})
    .then(res => {
        if (res.data) {
            Object.assign(infoAboutDesigner, res.data.infoAboutDesigner)
        }
    })

</script>

<style scoped>

</style>
