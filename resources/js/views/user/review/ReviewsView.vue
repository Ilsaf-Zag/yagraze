<template>
        <section class="py-20 sm:py-14 relative min-h-screen">
            <div class="container">
                <Title>Отзывы</Title>
                <IconCircles class="absolute w-32 top-8 right-8 lg:hidden" />

                <div v-if="isLoading" class="flex justify-center mt-16">
                    <Loading v-model="isLoading" class="flex justify-center mt-16" />
                </div>

                <div v-if="reviews" class="w-full">
                    <div class="mx-auto sm:max-w-full">
                    <div v-for="item in list">
                        <h2 class="text-center my-20 sm:my-8 font-semibold text-2xl">{{item.title}}</h2>
                        <div
                            class="relative shadow-4 w-full pt-[48px] pb-[68px] px-[90px] lg:px-10 bg-smoky rounded-[50px] sm:rounded-[30px] sm:p-6">
                            <SplideReviews
                                :reviews="reviews"
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
import axios from "axios";
import {onMounted, ref} from "vue";
import Loading from "@components/loading/Loading.vue";

const reviews = ref()
const isLoading = ref(false)

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

onMounted(()=>{
    getReviews()
})
function getReviews(){
    isLoading.value = true

    axios.get('/api/reviews/all')
        .then(res => {
            reviews.value = res.data
        })
        .finally(()=>{
            isLoading.value = false
        })
}
</script>
<style>

</style>
