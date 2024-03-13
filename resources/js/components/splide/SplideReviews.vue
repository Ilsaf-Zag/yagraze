<template>
    <Splide
        ref="splide"
        @splide:move="moved"
        :has-track="false"
        :options="{
            perPage:1,
            height:450,
            breakpoints: {
                640: {
                    height:280
                },
            },
            pagination:false,
            arrows:false,
            keyboard:'global',

            classes:
                 {
                    pagination: 'splide__pagination splide__pagination--custom',
                    page: 'splide__pagination__page splide__pagination__page--custom'
                }
        }">

        <SplideTrack class="text-3xl leading-[45px]">
            <template v-for="review in reviews"
                      :key="review.id">
                <SplideSlide v-if="review.category === category" class="overflow-y-auto overflow-x-hidden">
                    <div class="max-h-[300px] sm:max-h-[200px]  sm:text-xl overflow-y-auto">
                        {{ review.text }}
                    </div>
                    <a target="_blank" :href="review.customer_link"
                       class="sm:text-lg font-bold text-right mt-10 sm:mt-4 block z-10">{{
                            review.customer_name
                        }}</a>
                </SplideSlide>
            </template>

        </SplideTrack>
    </Splide>


    <div
        class="splide__arrows  w-40 p-1.5 sm:px-1.5 sm:pb-[2.5px] sm:pt-1 flex items-center justify-between rounded-2xl shadow-12 sm:w-32">

        <button @click="splide.go('-1')"
                class="splide__arrows--left flex justify-center items-center rounded-xl w-10 h-14 sm:w-8 sm:h-12 sm:rounded-lg"
                :class="[activeIndex === 0?'splide__arrow--disabled':'']"
        >
            <IconArrowLeft class="pointer-events-none w-4 sm:w-3.5"/>
        </button>
        <div class="p-2 self-end sm:p-0 sm:pb-1">
            <Splide
                :has-track="false"
                ref="splideArrows"
                :options="
                {
                    fixedWidth:'20px',
                    pagination:false,
                    width:40,
                    keyboard:'global',


                    arrows:false,
                    classes:
                    {

                        arrow : 'splide__arrow splide__arrow--custom',
                        prev  : 'splide__arrow--prev splide__arrow--prev--custom',
                            next  : 'splide__arrow--next splide__arrow--next--custom',
                    }
                }">
                <SplideTrack>
                    <SplideSlide class="overflow-y-auto overflow-x-hidden splide__slide--custom"
                                 v-for="n in getCountCategory(category)">
                        {{ n }}
                    </SplideSlide>
                </SplideTrack>
            </Splide>
        </div>
        <button @click="splide.go('+1')"
                class="splide__arrows--left flex justify-center items-center rounded-xl w-10 h-14 sm:w-8 sm:h-12 sm:rounded-lg"

                :class="[splideArrows?.length - 1 === activeIndex?'splide__arrow--disabled':'']"
        >
            <IconArrowRight class="pointer-events-none w-4 sm:w-3.5"/>

        </button>
    </div>

</template>

<script setup>
import {Splide, SplideSlide, SplideTrack} from "@splidejs/vue-splide";
import IconArrowRight from "@components/icons/arrows/IconArrowRight.vue";
import IconArrowLeft from "@components/icons/arrows/IconArrowLeft.vue";
import {ref} from "vue";

const props = defineProps(['category', 'reviews'])

const splide = ref()
const splideArrows = ref()
const activeIndex = ref(0)

function moved(splide, newIndex) {
    event.preventDefault()
    splideArrows.value.go(newIndex)
    activeIndex.value = splide.index
}

function getCountCategory(category) {
    let count = 0
    for (const review of props.reviews) {
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
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: orange;
}


.splide__arrow--disabled {
    box-shadow: -3.32483px -3.32483px 3.32483px rgba(255, 255, 255, 0.7), inset 3.32483px 3.32483px 6.64966px rgba(174, 174, 192, 0.2);
    background: #E7E7E7;
}

.splide__arrows--left:active,
.splide__arrows--right:active {
    box-shadow: -3.32483px -3.32483px 3.32483px rgba(255, 255, 255, 0.7), inset 3.32483px 3.32483px 6.64966px rgba(174, 174, 192, 0.2);
    background: #E7E7E7;
}
</style>
