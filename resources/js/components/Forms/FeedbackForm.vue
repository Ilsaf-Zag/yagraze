<template>
    <div
            class="text-white border-black/10 border-4 backdrop-blur-2xl rounded-[75px] bg-black/70 shadow-3 w-full max-w-[800px] max-h-[420px] flex  items-center justify-center transform overflow-hidden rounded-2xl px-20 py-70px text-left align-middle shadow-xl transition-all sm:p-0  sm:rounded-[40px] lg:px-10 md:px-2 md:absolute md:left  md:-translate-x-2/4 md:-translate-y-2/4 md:w-full md:w-4/5 md:max-h-[500px]"
    >

        <div class="w-full p-4" v-if="!isFormSent">
            <form action="">
                <div class="flex bg-inherit space-x-7 sm:flex sm:flex-col sm:space-x-0 sm:space-y-4">
                    <input class="bg-black/25 w-full border-black/10 border-[3px] rounded-[15px] py-2 px-5 xl:text-lg xl:px-3" type="text" placeholder="Имя">
                    <input class="bg-black/25 w-full border-black/10 border-[3px] rounded-[15px] py-2 px-5 xl:text-lg xl:px-3" type="text" placeholder="Фамилия">
                    <input class="bg-black/25 w-full border-black/10 border-[3px] rounded-[15px] py-2 px-5 xl:text-lg xl:px-3" type="number"
                           placeholder="Номер телефона">
                </div>
                <div class="mt-8">
                <textarea class="w-full h-32 bg-black/25 rounded-[25px] p-5 resize-none"
                          placeholder="Сообщение"></textarea>
                </div>
                <DefaultButton @click="isFormSent = true" class="mx-auto block w-60 h-8 text-white !bg-orange mt-9">
                    Отправить
                </DefaultButton>
            </form>
        </div>
        <div v-else class="font-semibold text-3xl text-center text-orange">
            <div>Спасибо!</div>
            <div>В скором времени свяжусь с вами.</div>
        </div>

    </div>
</template>

<script setup>

import DefaultButton from "@components/UI/Buttons/DefaultButton.vue";
import {ref} from 'vue'
import {DialogPanel} from "@headlessui/vue";

const isFormSent = ref(false)
</script>

<style scoped>
</style>
