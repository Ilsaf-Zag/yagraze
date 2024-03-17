<template>
    <div class="border-4 rounded-[75px] px-20 py-70px sm:p-0 sm:rounded-[40px] lg:px-10">
        <div class="w-full p-4" v-if="!isFormSent">
            <form  action="" @submit.prevent="sendFeedbackForm()">
                <div class="flex space-x-7 sm:flex sm:flex-col sm:space-x-0 sm:space-y-2">
                    <div>
                        <input
                            v-model="form.name"
                            class="w-full rounded-[15px] py-2 px-5 xl:text-lg xl:px-3"
                            type="text" placeholder="Имя"
                            :class="{'border border-red-600':errors.name}"
                        >
                    </div>
                    <div>
                        <input v-model="form.surname"
                               class="w-full rounded-[15px] py-2 px-5 xl:text-lg xl:px-3"
                               :class="{'border border-red-600':errors.surname}"
                               type="text"
                               placeholder="Фамилия">
                    </div>
                    <div>
                        <input v-model="form.phone"
                               class="w-full rounded-[15px] py-2 px-5 xl:text-lg xl:px-3"
                               :class="{'border border-red-600':errors.phone}"
                               type="text"
                               placeholder="Номер телефона"
                        >
                    </div>
                </div>
                <div class="mt-8 sm:mt-4">
                        <textarea v-model="form.text"
                                  class="w-full h-32 rounded-[25px] p-5 xl:text-lg xl:px-3 resize-none" placeholder="Сообщение"
                                  :class="{'border  border-red-600':errors.text}"
                        >
                        </textarea>
                </div>

                <DefaultButton class="mx-auto block w-60 h-8 text-white !bg-orange mt-9 sm:mt-2">
                    <slot />
                </DefaultButton>
            </form>
        </div>
        <div v-else class="font-semibold text-3xl text-center text-orange sm:text-xl sm:p-8">
            <div>Спасибо!</div>
            <div>В скором времени свяжусь с вами.</div>
        </div>
    </div>
</template>

<script setup>

import DefaultButton from "@components/UI/Buttons/DefaultButton.vue";
import {reactive, ref} from 'vue'
import axios from "axios";
import ModalLoading from "@components/loading/ModalLoading.vue";
import {useLoadingStore} from "@stores/loadingStore.js";

const form = reactive({
    name: '',
    surname: '',
    phone: '',
    text: ''
})
const loadingStore = useLoadingStore()

const isFormSent = defineModel()
const errors = ref({})

function sendFeedbackForm() {
    loadingStore.toggleLoad()

    axios.post('/api/send-mail', form)
        .then(() => {
            Object.keys(form).forEach(item => form[item] = "")
            isFormSent.value = true

            if (errors) errors.value = ''
        })
        .catch(error => {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors
            }
        })
        .finally(() => {
            loadingStore.toggleLoad()
        })
}

</script>
