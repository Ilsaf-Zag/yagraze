<template>
    <Splide
        ref="splide"
        @splide:pagination:mounted="onPagintaionMounted"
        @splide:moved="ab"
        :options="{
            perPage:1,
            height:'300px',
            arrows:false,
            pagination:false,
            speed:500,
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

    <Splide
        v-show="reviews"
        v-if="largerThanSm"
            :has-track="false"
            ref="splideArrows"
            @splide:arrows:mounted="onArrowsMounted"
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
        <div class="splide__arrows w-40 h-12  absolute -top-2 -left-[65px] flex justify-between rounded-lg shadow-12">

            <button @click="splide.go('-1')"
                    class="splide__arrow--prev splide__arrow--prev--custom rounded-2xl px-4 mt-0.5">
                <IconArrowLeft class="pointer-events-none w-4"/>
            </button>
            <button @click="splide.go('+1')"
                    class=" splide__arrow--next splide__arrow--next--custom rounded-2xl px-4  mt-0.5">
                <IconArrowRight class="pointer-events-none w-4"/>
            </button>
        </div>
    </Splide>

</template>

<script setup>
import {Splide, SplideSlide, SplideTrack} from "@splidejs/vue-splide";
import IconArrowRight from "@components/icons/IconArrowRight.vue";
import IconArrowLeft from "@components/icons/IconArrowLeft.vue";
import {ref} from "vue";
import {breakpoints} from "@mixins/breakpointsMixin.js";
import axios from "axios";

defineProps(['category'])

const splide = ref()
const splideArrows = ref()
const largerThanSm = breakpoints.greater('sm')

function onPagintaionMounted(splide, current, total) {
    current.list.classList.add('splide__pagination--custom');

    current.items.forEach(function (item) {
        item.button.textContent = String(item.page);
    });
}

function ab(splide, newIndex) {
    event.preventDefault()
    if (largerThanSm.value) splideArrows.value.go(newIndex)

}

const reviews = ref()

axios.get('/api/reviews/all')

    .then(res => {
        reviews.value = res.data
    })

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

.splide__arrow--custom {

}

.splide__arrow--prev--custom {
    left: -50px;
}

.splide__arrow--prev--custom svg {
    transform: scaleX(1);
}

.splide__arrow--prev--custom:disabled,
.splide__arrow--next--custom:disabled {
    box-shadow: -3.32483px -3.32483px 3.32483px rgba(255, 255, 255, 0.7), inset 3.32483px 3.32483px 6.64966px rgba(174, 174, 192, 0.2);
    background: #E7E7E7;

}

.splide__arrow--next--custom {
    right: -50px;
}
</style>
