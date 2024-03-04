<template>
    <div
        class="text-white border-black/10 border-4 backdrop-blur-2xl rounded-[75px] bg-black/70 shadow-3 w-full max-w-[800px] max-h-[420px] flex  items-center justify-center transform overflow-hidden rounded-2xl px-20 py-70px text-left align-middle shadow-xl transition-all sm:p-0  sm:rounded-[40px] lg:px-10 md:px-2 md:absolute md:left  md:-translate-x-2/4 md:-translate-y-2/4 md:w-full md:w-4/5 md:max-h-[500px]"
    >
        <div class="w-full p-4" v-if="!isFormSent">
            <form action="" @submit.prevent="sendFeedbackForm()">
                <div class="flex bg-inherit space-x-7 sm:flex sm:flex-col sm:space-x-0 sm:space-y-4">
                    <div>
                        <input
                            v-model="form.name"
                            class="bg-black/25 w-full border-black/10 border-2 rounded-[15px] py-2 px-5 xl:text-lg xl:px-3"
                            type="text" placeholder="Имя"
                            :class="{'border-2 border-red-600':errors.name}"
                        >
                        <div v-if="errors.name" class="mt-2 text-red-600">{{ errors.name[0] }}</div>
                    </div>
                    <div>
                        <input v-model="form.surname"
                               class="bg-black/25 w-full border-black/10 border-2 rounded-[15px] py-2 px-5 xl:text-lg xl:px-3"
                               :class="{'border-2 border-red-600':errors.surname}"
                               type="text"
                               placeholder="Фамилия">
                        <div v-if="errors.surname" class="mt-2 text-red-600">{{ errors.surname[0] }}</div>
                    </div>
                    <div>
                        <input v-model="form.phone"
                               class="bg-black/25 w-full border-black/10 border-2 rounded-[15px] py-2 px-5 xl:text-lg xl:px-3"
                               :class="{'border-2 border-red-600':errors.phone}"
                               type="text"
                               placeholder="Номер телефона"
                        >
                        <div v-if="errors.phone" class="mt-2 text-red-600">{{ errors.phone[0] }}</div>
                    </div>
                </div>
                <div class="mt-8">
                        <textarea v-model="form.text"
                                  class="w-full h-32 bg-black/25 rounded-[25px] p-5 resize-none" placeholder="Сообщение"
                                  :class="{'border-2 border-red-600':errors.text}"
                        >
                        </textarea>
                    <div v-if="errors.text" class="mt-2 text-red-600">{{ errors.text[0] }}</div>
                </div>

                <DefaultButton class="mx-auto block w-60 h-8 text-white !bg-orange mt-9">
                    Отправить
                </DefaultButton>
            </form>
        </div>
        <div v-else class="font-semibold text-3xl text-center text-orange">
            <div>Спасибо!</div>
            <div>В скором времени свяжусь с вами.</div>
        </div>
    </div>
    <Loading v-model="loadingStore.isLoading"/>

</template>

<script setup>

import DefaultButton from "@components/UI/Buttons/DefaultButton.vue";
import {reactive, ref} from 'vue'
import axios from "axios";
import Loading from "@components/loading/Loading.vue";

const form = reactive({
    name: '',
    surname: '',
    phone: '',
    text: ''
})
const loadingStore =  useLoadingStore()

const isFormSent = ref(false)
const errors = ref({})

function sendFeedbackForm() {
    loadingStore.toggleLoad()

    axios.post('/api/send-mail', form)
        .then(() => {
            Object.keys(form).forEach(item => form[item] = "")

            if (errors) errors.value = ''
        })
        .catch(error => {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors
            }
        })
        .finally(()=>{
            loadingStore.toggleLoad()
        })
}

</script>
