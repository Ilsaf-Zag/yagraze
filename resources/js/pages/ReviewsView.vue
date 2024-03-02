<template>
    <DefaultLayout>
        <section class="py-20 relative">
            <div class="container">
                <Title>Отзывы</Title>
                <div class="w-full">
                    <div class="max-w-[80%] mx-auto sm:max-w-full">
                        <h2 class="text-center mt-20 font-semibold text-2xl sm:mt-8">По заказам дизайна</h2>
                        <div class="relative shadow-4 w-full h-[450px] pt-[48px] px-[90px] mt-6 bg-smoky rounded-[50px] sm:h-[300px] sm:p-6">
                            <Splide
                                    ref="splide"
                                    @splide:pagination:mounted="onPagintaionMounted"
                                    @splide:moved="ab"
                                    :options="{ perPage:1,height:'300px',arrows:false,pagination:false,speed:500,
                                    classes:{
                                         pagination: 'splide__pagination splide__pagination--custom', // container
		                                        page: 'splide__pagination__page splide__pagination__page--custom', // each button
                                    } }"
                                    aria-label="My Favorite Images"
                                    :has-track="false">
                                <SplideTrack class="text-3xl leading-[45px]">
                                    <SplideSlide v-for="item in items">
                                        <div>{{ item.text }}</div>
                                    </SplideSlide>
                                </SplideTrack>
                            </Splide>

                            <Splide v-if="largerThanSm"
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

                                <SplideTrack >
                                       <SplideSlide class="overflow-y-auto overflow-x-hidden splide__slide--custom" v-for="(item,index) in items">
                                           {{ index + 1 }}
                                       </SplideSlide>
                                </SplideTrack>
                                <div class="splide__arrows w-40 h-12  absolute -top-2 -left-[65px] flex justify-between rounded-lg shadow-12">

                                    <button @click="splide.go('-1')" class="splide__arrow--prev splide__arrow--prev--custom rounded-2xl px-4 mt-0.5">
                                        <IconArrowLeft class="pointer-events-none w-4" />
                                    </button>
                                    <button @click="splide.go('+1')" class=" splide__arrow--next splide__arrow--next--custom rounded-2xl px-4  mt-0.5">
                                        <IconArrowRight class="pointer-events-none w-4" />
                                    </button>
                                </div>
                            </Splide>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@layouts/DefaultLayout.vue";
import IconLongLine from "@components/icons/IconLongLine.vue";
import Title from "@components/Title/PageTitle.vue";

import {Splide, SplideSlide, SplideTrack} from "@splidejs/vue-splide";
import '@splidejs/vue-splide/css';
import {onMounted, ref} from "vue";
import IconArrowLeft from "@components/icons/IconArrowLeft.vue";
import IconArrowRight from "@components/icons/IconArrowRight.vue";
import {breakpoints} from "@mixins/breakpointsMixin.js";

const largerThanSm = breakpoints.greater('sm')

const splide = ref()
const splideArrows = ref()

const items = [{text: "sadasdsad"}, {text: 'dasdasdaq312'}, {text: 'dasdasdaq312'}, {text: 'dasdasdaq312'}, {text: 'dasdasdaq312'}, {text: 'dasdasdaq312'}]

function onPagintaionMounted(splide, current, total) {
    current.list.classList.add('splide__pagination--custom');


    // `items` contains all dot items
    current.items.forEach(function (item) {
        item.button.textContent = String(item.page);
    });
}
function ab(splide,newIndex){
    event.preventDefault()
    if (largerThanSm.value) splideArrows.value.go(newIndex)

}

</script>
<style>
.splide__pagination--custom {

}

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
.splide__arrow--prev--custom svg{
    transform: scaleX(1);
}

.splide__arrow--prev--custom:disabled,
.splide__arrow--next--custom:disabled{
    box-shadow:-3.32483px -3.32483px 3.32483px rgba(255, 255, 255, 0.7), inset 3.32483px 3.32483px 6.64966px rgba(174, 174, 192, 0.2);
    background: #E7E7E7;

}
.splide__arrow--next--custom {
    right: -50px;
}
</style>
