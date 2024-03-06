<template>
    <Splide
        ref="splide"
        @splide:moved="moved"
        :options="{

            perPage:1,
            height:'300px',
            arrows:false,
            pagination:false,
            speed:1000,
            classes:{
                 pagination: 'splide__pagination splide__pagination--custom', // container
                        page: 'splide__pagination__page splide__pagination__page--custom', // each button
            } }"
        aria-label="My Favorite Images"
        :has-track="false">
        <SplideTrack class="text-3xl leading-[45px]">
            <template v-for="review in reviews"
                      :key="review.id">
                <SplideSlide
                    v-if="review.category === category"
                >
                    {{ review.text }}
                </SplideSlide>
            </template>

        </SplideTrack>
    </Splide>


    <div
        class="splide__arrows  w-36 p-1.5 sm:p-1 sm:w-20  flex items-center justify-between rounded-lg shadow-12">

        <button @click="splide.go('-1')"
                class="w-full flex justify-center items-center rounded-2xl w-7 h-14 sm:h-10 sm:w-7 mt-0.5"
                :class="[activeIndex === 0?'splide__arrow--disabled':'']"
        >
            <IconArrowLeft class="pointer-events-none w-4 sm:w-3"/>
        </button>
        <div>
            <Splide
                v-if="reviews"
                :has-track="false"
                ref="splideArrows"
                :options="
                {
                    fixedWidth:'20px',
                    pagination:false,
                    perPage:2,
                    width:40,
                    speed:500,
                    keyboard:'global',
                    perMove:1,
                    focus:'center',
                    arrows:false,
                    classes:
                    {

                        arrow : 'splide__arrow splide__arrow--custom',
                        prev  : 'splide__arrow--prev splide__arrow--prev--custom',
                            next  : 'splide__arrow--next splide__arrow--next--custom',
                    }
                }">
                <SplideTrack>
                    <SplideSlide v-if="reviews" class="overflow-y-auto overflow-x-hidden splide__slide--custom"
                                 v-for="n in getCountCategory(category)">
                        {{ n }}
                    </SplideSlide>
                </SplideTrack>
            </Splide>
        </div>
        <button @click="splide.go('+1')"
                class="w-full flex justify-center items-center rounded-2xl w-7 h-14 sm:h-10 sm:w-7  mt-0.5">
            <IconArrowRight class="pointer-events-none w-4 sm:w-3"/>
        </button>
    </div>

</template>

<script setup>
import {Splide, SplideSlide, SplideTrack} from "@splidejs/vue-splide";
import IconArrowRight from "@components/icons/arrows/IconArrowRight.vue";
import IconArrowLeft from "@components/icons/arrows/IconArrowLeft.vue";
import {ref} from "vue";

import axios from "axios";
import {useBreakpointsStore} from "@stores/breakpointsStore.js";

defineProps(['category'])

const breakpoints = useBreakpointsStore().breakpoints
const splide = ref()
const splideArrows = ref()
const reviews = ref()
const activeIndex = ref(0)

axios.get('/api/reviews/all')
    .then(res => {
        reviews.value = res.data
    })

function moved(splide, newIndex) {
    event.preventDefault()
    splideArrows.value.go(newIndex)

    activeIndex.value = splide.index
}

function getCountCategory(category) {
    let count = 0

    for (const review of reviews.value) {
        if (review.category === category) count++
    }

    return count
}

</script>

<style>

.splide__pagination__page--custom {
    align-items: center;
    background: #363e40;
    border-radius: 4px;
    color: #c4d5d7;
    display: inline-flex;

    font-size: 1.1rem;
    height: 2.2rem;
    justify-content: center;
    line-height: 1;
    margin-left: 0.5rem;
    width: 2.2rem;
}

.splide__slide--custom {
    font-size: 18px;
    position: relative;
}

.splide__slide--custom.is-active::after {
    content: '';
    display: block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: orange;
}


.splide__arrow--disabled{
    box-shadow: -3.32483px -3.32483px 3.32483px rgba(255, 255, 255, 0.7), inset 3.32483px 3.32483px 6.64966px rgba(174, 174, 192, 0.2);
    background: #E7E7E7;
}
</style>
