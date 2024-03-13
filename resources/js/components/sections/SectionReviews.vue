<template>
    <section class="mt-[150px] sm:mt-16">
        <div class="container">
            <Title>Некоторые отзывы клиентов</Title>
            <IconDefaultLine class="w-[440px] mx-auto mt-9 lg:w-[300px] sm:mt-6"/>
            <div
                v-if="reviews"
                class="relative shadow-4 w-full py-12 px-[90px] lg:px-10 mt-12 bg-smoky rounded-[50px] lg:py-8 sm:mt-10 sm:p-6 sm:rounded-[30px]">
                <Splide
                    :has-track="false"
                    :options="{
                                perPage:1,
                                height:500,
                                 breakpoints: {
                                    1024:{
                                        height:350
                                    },

                                    640: {
                                        arrows:false,
                                        height:300
                                    },
                                },
                                pagination:false,

                                keyboard:'global',
                                classes:
                                        {

                                            arrow : 'splide__arrow splide__arrow--custom',
                                            prev  : 'splide__arrow--prev splide__arrow--prev--custom',
		                                        next  : 'splide__arrow--next splide__arrow--next--custom',
                                        }
                                    }">

                    <SplideTrack class="text-3xl leading-[45px] relative">
                        <SplideSlide class="overflow-y-auto overflow-x-hidden" v-for="review in reviews"
                                     :key="review.id">
                            <div class="max-h-[300px] lg:max-h-[250px]  sm:max-h-[200px]  sm:text-xl overflow-y-auto">
                                {{ review.text }}
                            </div>
                            <a target="_blank" :href ="review.customer_link"
                               class=" flex absolute bottom-[100px] lg:bottom-10 sm:text-lg sm:bottom-9 right-0 z-10 font-bold text-right">{{
                                    review.customer_name
                                }}</a>
                        </SplideSlide>
                    </SplideTrack>
                    <div class="flex justify-between items-center">
                        <div
                            class="splide__arrows w-36 p-1.5 sm:p-1 sm:w-20  shadow-6 rounded-2xl flex items-center justify-between">
                            <button
                                class="w-full flex items-center justify-center w-7 h-14 sm:h-10 sm:w-7  splide__arrow--prev splide__arrow--prev--custom mt-0.5 rounded-2xl sm:rounded-lg">
                                <IconArrowLeft class="pointer-events-none w-4 sm:w-3"/>
                            </button>
                            <div class="w-4 h-14 sm:w-3 sm:h-10 flex items-center">
                                <IconDevider class="w-4 h-14"/>
                            </div>
                            <button
                                class="w-full flex items-center justify-center w-7 h-14  sm:h-10 sm:w-7  splide__arrow--next splide__arrow--next--custom mt-0.5 rounded-2xl sm:rounded-lg">
                                <IconArrowRight class="w-4 sm:w-3 pointer-events-none"/>
                            </button>
                        </div>
                        <router-link :to="{name:'reviews'}" class="sm:mx-auto">
                            <DefaultButton
                                class="block shadow-6 w-72 h-14 text-2xl "
                            >Все отзывы
                            </DefaultButton>
                        </router-link>
                    </div>
                </Splide>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconDefaultLine from "@components/icons/lines/IconDefaultLine.vue";
import {Splide, SplideSlide, SplideTrack} from "@splidejs/vue-splide";
import IconArrowRight from "@components/icons/arrows/IconArrowRight.vue";
import Title from "@components/title/DefaultTitle.vue";
import IconDevider from "@components/icons/IconDevider.vue";
import IconArrowLeft from "@components/icons/arrows/IconArrowLeft.vue";
import {onMounted, ref} from "vue";
import axios from "axios";
import '@splidejs/vue-splide/css';
import DefaultButton from "@components/UI/Buttons/DefaultButton.vue";

const reviews = ref()

onMounted(() => {
    getRandomComments(5)

})

function getRandomComments(quantity = 5) {
    axios.get('/api/reviews/randomValues', {
        params: {
            quantity
        }
    })
        .then(res => {
            reviews.value = res.data
        })
}

</script>

<style scoped>
.splide__arrow--prev--custom {
    left: -50px;
}

.splide__arrow--prev--custom:disabled,
.splide__arrow--next--custom:disabled {
    box-shadow: -3.32483px -3.32483px 3.32483px rgba(255, 255, 255, 0.7), inset 3.32483px 3.32483px 6.64966px rgba(174, 174, 192, 0.2);
    background: #E7E7E7;
}

.splide__arrow--prev--custom:active,
.splide__arrow--next--custom:active{
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
