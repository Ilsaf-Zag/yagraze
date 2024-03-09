<template>
        <section class="py-20 relative">
            <div class="container">
                <Title>Отзывы</Title>
                <IconCircles class="absolute w-32 top-8 right-8 lg:hidden" />

                <div class="w-full">
                    <div class="mx-auto sm:max-w-full">
                    <div v-for="item in list">
                        <h2 class="text-center mt-20 font-semibold text-2xl sm:mt-8">{{item.title}}</h2>
                        <div
                            class="relative shadow-4 w-full pt-[48px] pb-[68px] px-[90px] lg:px-10 mt-12 bg-smoky rounded-[50px] sm:rounded-[30px] sm:mt-10  sm:p-6">
                            <SplideReviews
                                :category="item.category"
                            />
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>

import Title from "@components/title/PageTitle.vue";
import '@splidejs/vue-splide/css';
import SplideReviews from "@components/splide/SplideReviews.vue";
import IconCircles from "@components/icons/IconCircles.vue";

const list =[
    {
        title:'По заказам дизайна',
        category:'design'
    },
    {
        title: "По заказам иллюстраций",
        category: 'illustration'
    }
]

</script>
<style>

</style>
