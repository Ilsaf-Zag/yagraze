<template>
        <section class="py-20 relative">
            <div class="container">
                <Title>Мои услуги</Title>

                <div class="mt-12 space-y-40 flex flex-col mx-auto items-center justify-center">
                    <div v-html="services.text"></div>

                    <!--                        <div class="text-4xl leading-[60px]">-->
                    <!--                            <h2 class="font-bold">С чего начинаем</h2>-->
                    <!--                            <div class="mt-2">Дизайн или иллюстрация разрабатываются на основе описания того, что вам нужно, желательно подробно, в деталях. Это может быть как текстовое, так и визуальное описание, в виде рисунка, либо каких-то заготовок или же всё вместе, для лучшего видения нужного результата. В начале нашего общения я отправлю вам бриф.</div>-->
                    <!--                        </div>-->
                    <!--                        <div class="text-4xl leading-[60px]">-->
                    <!--                            <h2 class="font-bold ">С чего начинаем</h2>-->
                    <!--                            <div class="mt-2">Дизайн или иллюстрация разрабатываются на основе описания того, что вам нужно, желательно подробно, в деталях. Это может быть как текстовое, так и визуальное описание, в виде рисунка, либо каких-то заготовок или же всё вместе, для лучшего видения нужного результата. В начале нашего общения я отправлю вам бриф.</div>-->
                    <!--                        </div>-->
                    <!--                        <div class="text-4xl leading-[60px]">-->
                    <!--                            <h2 class="font-bold ">С чего начинаем</h2>-->
                    <!--                            <div class="mt-2">Дизайн или иллюстрация разрабатываются на основе описания того, что вам нужно, желательно подробно, в деталях. Это может быть как текстовое, так и визуальное описание, в виде рисунка, либо каких-то заготовок или же всё вместе, для лучшего видения нужного результата. В начале нашего общения я отправлю вам бриф.</div>-->
                    <!--                        </div>-->
                </div>
                <!--                    <IconLargeLogo class="-z-10 w-[800px] absolute top-1/2 right-0 w-full -translate-y-1/2" />-->
            </div>
        </section>
</template>

<script setup>

import Title from "@components/title/PageTitle.vue";
import DefaultLayout from "@layouts/DefaultLayout.vue";
import axios from "axios";
import {reactive} from "vue";

const services = reactive({
    text: ''
})

axios.get('/api/admin/settings', {params: ['services']})
    .then(res => {
        if (res.data) {
            Object.assign(services, res.data.services)
        }
    })
</script>

<style scoped>

</style>
