<template>
        <section class="py-20 relative">
            <div class="container">
                <Title>Отзывы</Title>
                <div class="w-full">
                    <div class="max-w-[80%] mx-auto sm:max-w-full">
                    <div v-for="item in list">
                        <h2 class="text-center mt-20 font-semibold text-2xl sm:mt-8">{{item.title}}</h2>
                        <div
                            class="relative shadow-4 w-full h-[450px] pt-[48px] px-[90px] mt-6 bg-smoky rounded-[50px] sm:h-[300px] sm:p-6">
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
import DefaultLayout from "@layouts/DefaultLayout.vue";
import Title from "@components/title/PageTitle.vue";
import '@splidejs/vue-splide/css';
import {ref} from "vue";
import axios from "axios";
import SplideReviews from "@components/splide/SplideReviews.vue";

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
