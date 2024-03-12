<template>
        <section class="py-20 sm:py-14 relative">
            <div class="container">
                <Title>Мои услуги</Title>
                <IconCircles class="absolute w-32 top-8 right-8 lg:hidden" />

                <div class="mt-12 space-y-40 flex flex-col mx-auto items-center justify-center sm:px-2">
                    <div v-html="services.text"></div>
                </div>
            </div>
        </section>
</template>

<script setup>

import Title from "@components/title/PageTitle.vue";
import DefaultLayout from "@layouts/DefaultLayout.vue";
import axios from "axios";
import {reactive} from "vue";
import IconCircles from "@components/icons/IconCircles.vue";

const services = reactive({
    text: ''
})

axios.get('/api/settings', {params: ['services']})
    .then(res => {
        if (res.data) {
            Object.assign(services, res.data.services)
        }
    })
</script>

<style scoped>

</style>
