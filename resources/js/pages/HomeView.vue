<template>
    <DefaultLayout>
        <section class="bg-smoky py-20 relative">
            <div class="flex justify-between items-center">
                <div class="container mx-auto">
                    <div class="w-[560px] mx-auto lg:w-[300px]">
                        <div class="text-light-gray text-5xl xl:text-4xl lg:text-3xl">Портфолио</div>
                        <h1 class="black2 text-[87px] mt-2 leading-[1.2em] font-bold xl:text-[60px] lg:text-5xl">
                            Графического дизайнера</h1>
                        <div class="text-center text-light-gray text-4xl mt-3 xl:text-4xl xl:text-left lg:text-3xl">
                            Владимира Долгова
                        </div>
                        <DefaultButton @click="dialogVisible = true"
                                       class="w-[350px] h-16 text-3xl shadow-8 mt-10 ml-12 lg:w-[280px] lg:h-12 lg:text-2xl lg:ml-2">
                            Сделать заказ
                        </DefaultButton>
                    </div>
                </div>
                <IconLargeLogo v-if="largerThanSm" class="max-w-[1000px] w-full"/>
            </div>

        </section>
        <section>
            <div class='mx-20 lg:mx-4'>
                <div class="about-me relative bg-smoky  rounded-6xl shadow-2 rounded-[70px]">

                    <div class="flex sm:flex-col sm:items-center sm:p-4">
                        <img
                            class="w-[400px] drop-shadow-[0_0_65px_rgba(0,0,0,0.35)] p-2 m-16 bg-white block rounded-[50px] 2xl:w-[350px] 2xl:m-14 xl:w-[300px] xl:m-10 lg:m-4 lg:w-[200px] sm:w-full sm:m-0"
                            src="@images/photo.jpg"
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

        <section class="pt-24">
            <div class="relative">
                <div class="container">
                    <div>
                        <Title>Особенности работы со мной</Title>
                        <IconDefaultLine class="w-[440px] mx-auto mt-9 lg:w-[300px]"/>
                    </div>
                    <div class="flex justify-around flex-wrap mt-12 gap-x-4 max-w-[1250px] mx-auto">
                        <div
                            class="bg-smoky shadow-2 mt-7 rounded-3xl relative text-black2 max-w-[325px] max-h-[260px] w-full py-6 px-6 lg:max-w-[280px]">
                            <h4 class="font-bold text-2xl lg:text-xl">Пошаговое согласование</h4>
                            <div class="mt-2 text-xl text-black2 lg:text-lg">Разработказа шагом. Вы всегда знаете, на
                                каком
                                этапе работы я нахожусь.
                            </div>
                            <IconTriangle class="w-4 absolute top-6 right-6"/>
                        </div>
                        <div
                            class="bg-smoky shadow-2 mt-7 rounded-3xl relative text-black2 max-w-[325px] max-h-[260px] w-full py-6 px-6 lg:max-w-[280px]">
                            <h4 class="font-bold text-2xl lg:text-xl">Пошаговое согласование</h4>
                            <div class="mt-2 text-xl text-black2 lg:text-lg">
                                этапе работы я нахожусь.
                            </div>
                            <IconTriangle class="w-4 absolute top-6 right-6"/>
                        </div>

                        <div
                            class="bg-smoky shadow-2 mt-7 rounded-3xl relative text-black2 max-w-[325px] max-h-[260px] w-full py-6 px-6 lg:max-w-[280px]">
                            <h4 class="font-bold text-2xl lg:text-xl">Пошаговое согласование</h4>
                            <div class="mt-2 text-xl text-black2 lg:text-lg">Разработка шы всегда знаете, на каком
                                этапе работы я нахожусь.
                            </div>
                            <IconTriangle class="w-4 absolute top-6 right-6"/>
                        </div>

                        <div
                            class="bg-smoky shadow-2 mt-7 rounded-3xl relative text-black2 max-w-[325px] max-h-[260px] w-full py-6 px-6 lg:max-w-[280px]">
                            <h4 class="font-bold text-2xl lg:text-xl">Пошаговое согласование</h4>
                            <div class="mt-2 text-xl text-black2 lg:text-lg">аетеРазработка шаг за шагом. Вы всегда
                                знаете, на каком
                                этапе работы я нахожусь.
                            </div>
                            <IconTriangle class="w-4 absolute top-6 right-6"/>
                        </div>

                        <div
                            class="bg-smoky shadow-2 mt-7 rounded-3xl relative text-black2 max-w-[325px] max-h-[260px] w-full py-6 px-6 lg:max-w-[280px] ">
                            <h4 class="font-bold text-2xl lg:text-xl">Пошаговое согласование</h4>
                            <div class="mt-2 text-xl text-black2 lg:text-lg">Разработгом. Вы всегда знаете, на каком
                                этапе работы я нахожусь.
                            </div>
                            <IconTriangle class="w-4 absolute top-6 right-6"/>
                        </div>

                    </div>
                </div>
                <div v-if="largerThanSm" class="absolute -bottom-1/2 w-60 -z-10 lg:w-40 lg:-bottom-1/4">
                    <img src="@images/claims/pit.svg">
                </div>
            </div>
        </section>

        <section class="mt-[150px] sm:mt-16">
            <div class="container">
                <Title>Некоторые отзывы клиентов</Title>
                <IconDefaultLine class="w-[440px] mx-auto mt-9 lg:w-[300px] sm:mt-6"/>
                <div
                    class="relative shadow-4 w-full h-[500px] pt-[48px] pb-[68px] px-[90px] mt-12 bg-smoky rounded-[50px] sm:mt-10 sm:h-[350px] sm:p-6">
                    <Splide
                        :has-track="false"
                        :options="{
                                perPage:1,
                                height:'300px',
                                pagination:false,
                                speed:500,
                                keyboard:'global',
                                 breakpoints: {
                                    639: {
                                        arrows:false
                                     },

                                  },
                                classes:
                                        {

                                            arrow : 'splide__arrow splide__arrow--custom',
                                            prev  : 'splide__arrow--prev splide__arrow--prev--custom',
		                                        next  : 'splide__arrow--next splide__arrow--next--custom',
                                        }
                                    }">

                        <SplideTrack class="text-3xl leading-[45px]">
                            <SplideSlide class="overflow-y-auto overflow-x-hidden" v-for="(item,index) in items">
                                {{ item.text }}
                            </SplideSlide>
                        </SplideTrack>
                        <div
                            class="splide__arrows w-36 absolute -bottom-1/3 shadow-6 rounded-2xl flex items-center justify-around">
                            <button
                                class="splide__arrow--prev splide__arrow--prev--custom px-4 pb-3 pt-3 mt-0.5 rounded-2xl">
                                <IconArrowLeft class="pointer-events-none w-4"/>
                            </button>
                            <IconDevider class="w-4 h-14"/>
                            <button
                                class="splide__arrow--next splide__arrow--next--custom px-4 pb-3 pt-3 mt-0.5 rounded-2xl">
                                <IconArrowRight class="w-4 pointer-events-none"/>
                            </button>
                        </div>
                    </Splide>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="flex justify-center text-5xl my-[120px] 2xl:my-24 lg:my-16 sm:my-12">
                    <DefaultButton
                        class="block shadow-6 w-[500px] h-[100px]  xl:w-[400px] xl:h-20 xl:text-4xl lg:text-3xl lg:w-[350px] sm:w-[300px] sm:h-16"
                        @click="dialogVisible = true">
                        Сделать заказ
                    </DefaultButton>
                </div>
            </div>
        </section>
        <Modal
            class="w-full"
            v-model="dialogVisible"
        >
            <FeedbackForm class="block"/>
        </Modal>
    </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@layouts/DefaultLayout.vue";
import DefaultButton from "@components/UI/Buttons/DefaultButton.vue"
import IconCircles from "@components/icons/IconCircles.vue";
import Modal from "@components/Modal.vue";
import {reactive, ref} from 'vue'

import Title from "@components/Title/DefaultTitle.vue";
import IconLargeLogo from "@components/icons/Logos/IconLargeLogo.vue";
import IconTriangle from "@components/icons/IconTriangle.vue";
import IconDefaultLine from "@components/icons/IconDefaultLine.vue";
import FeedbackForm from "@components/Forms/FeedbackForm.vue";
import {breakpoints} from "@mixins/breakpointsMixin.js";
import {Splide, SplideSlide, SplideTrack} from "@splidejs/vue-splide";
import '@splidejs/vue-splide/css';
import IconArrowRight from "@components/icons/IconArrowRight.vue";
import IconArrowLeft from "@components/icons/IconArrowLeft.vue";
import IconDevider from "@components/icons/Logos/IconDevider.vue";
import axios from 'axios'

const items = [{text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut autem culpa esse exercitationem hic, inventore libero nobis odio optio                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut autem culpa esse exercitationem hic, inventore libero nobis odio optio pariatur quas quasi quos rerum sit sunt temporibus voluptates voluptatum.\npariatur quas quasi quos rerum sit sunt temporibus voluptates voluptatum.\n                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut autem culpa esse exercitationem hic, inventore libero nobis odio optio pariatur quas quasi quos rerum sit sunt temporibus voluptates voluptatum.\n"}, {text: 'dasdasdaq3 12dasdas daq312da sd as d a q312da sdasdaq 312das dasdaq312dasdasdaq312dasdasdaq312'}, {text: 'dasdasdaq312'}, {text: 'dasdasdaq312'}, {text: 'dasdasdaq312'}, {text: 'dasdasdaq312'}]

const largerThanSm = breakpoints.greater('sm')
const dialogVisible = ref(false)

const infoAboutDesigner = reactive({
    title: '',
    subtitle: '',
    text: ''
})

axios.get('/api/admin/settings/get', {params: ['infoAboutDesigner']})
    .then(res => {
        if (res.data) {
            Object.assign(infoAboutDesigner, res.data.infoAboutDesigner)
        }
    })


</script>

<style>
.splide__arrow--prev--custom {
    left: -50px;
}

.splide__arrow--prev--custom:disabled,
.splide__arrow--next--custom:disabled {
    box-shadow: -3.32483px -3.32483px 3.32483px rgba(255, 255, 255, 0.7), inset 3.32483px 3.32483px 6.64966px rgba(174, 174, 192, 0.2);
    background: #E7E7E7;

}

.splide__arrow--prev--custom svg {
    transform: scaleX(1);
}

.splide__arrow--next--custom {
    right: -50px;
}
</style>
