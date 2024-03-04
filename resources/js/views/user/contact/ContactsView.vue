<template>
        <section class="py-20 relative">
            <div class="container">
                <Title>Контакты</Title>

                <div class="mt-20 flex flex-col items-center lg:mt-10 sm:mt-6">
                    <h2 class="text-center font-semibold text-3xl xl:text-2xl sm:text-xl">Вы можете связаться со мной через форму ниже:</h2>
                    <div class="mt-9 mx-auto rounded-[75px] bg-smoky shadow-2 w-full max-w-[800px] flex items-center justify-center px-10 py-10 sm:p-0  sm:rounded-[40px]">
                            <div class="w-full p-4" v-if="!isFormSent">
                                <form action="">
                                    <div class="flex bg-inherit space-x-6 sm:flex sm:flex-col sm:space-x-0 sm:space-y-4">
                                        <input class="text-xl bg-smoky shadow-10 w-full rounded-[15px] py-2 px-5 xl:text-lg xl:px-3"
                                               type="text" placeholder="Имя">
                                        <input class="text-xl shadow-10 bg-smoky w-full rounded-[15px] py-2 px-5 xl:text-lg xl:px-3"
                                               type="text" placeholder="Фамилия">
                                        <input class="text-xl bg-smoky shadow-10 w-full rounded-[15px] py-2 px-5 xl:text-lg xl:px-3"
                                               type="text" placeholder="Номер телефона">

                                    </div>
                                    <div class="mt-8 sm:mt-2">
                                        <textarea
                                                class="text-xl w-full h-[200px] shadow-10 bg-smoky rounded-[25px] p-5 resize-none"
                                                placeholder="Сообщение"></textarea>
                                    </div>
                                    <DefaultButton @click="isFormSent = true"
                                                   class="mx-auto block text-xl w-[320px] h-12 text-orange mt-9 shadow-8 sm:w-[200px] sm:mt-6 sm:mb-4">
                                        Сделать заказ
                                    </DefaultButton>
                                </form>
                            </div>
                            <div v-else class="font-semibold text-3xl text-center text-orange sm:text-lg">
                                <div>Спасибо!</div>
                                <div>В скором времени свяжусь с вами.</div>
                            </div>
                    </div>
                    <div>
                        <h3 class="text-3xl font-semibold mt-16 text-center sm:text-xl sm:mt-12">Либо через социальные сети:</h3>
                        <div class="mt-7 flex space-x-16 justify-center sm:space-x-8">

                            <a :href="socialMediaLinks.telegram" class="shadow-11 rounded-3xl bg-smoky w-[120px] h-[120px] 2xl:w-24 2xl:h-24 xl:w-20 xl:h-20  p-8 xl:p-6 flex items-center justify-center">
                                <IconTelegram/>
                            </a>
                            <a :href="socialMediaLinks.vk" class="shadow-11 rounded-3xl bg-smoky w-[120px] h-[120px] 2xl:w-24 2xl:h-24 xl:w-20 xl:h-20  p-8 xl:p-6 flex items-center justify-center">
                                <IconVk />
                            </a>
                            <a :href="socialMediaLinks.whatsApp" class="shadow-11 rounded-3xl bg-smoky w-[120px] h-[120px] 2xl:w-24 2xl:h-24 xl:w-20 xl:h-20  p-8 xl:p-6 flex items-center justify-center">
                                <IconWhatsUp />
                            </a>

                        </div>
                    </div>
                </div>

            </div>
        </section>
</template>

<script setup>
import DefaultLayout from "@layouts/DefaultLayout.vue";
import IconLongLine from "@components/icons/IconLongLine.vue";
import Title from "@components/title/PageTitle.vue";
import {DialogPanel} from "@headlessui/vue";
import FeedbackForm from "@components/form/FeedbackForm.vue";
import DefaultButton from "@components/UI/Buttons/DefaultButton.vue";
import {reactive, ref} from "vue";
import IconTelegram from "@components/icons/SocialNetwork/IconTelegram.vue";
import IconVk from "@components/icons/SocialNetwork/IconVk.vue";
import IconWhatsUp from "@components/icons/SocialNetwork/IconWhatsUp.vue";
import axios from "axios";

const socialMediaLinks = reactive({
    vk: '',
    telegram: '',
    whatsApp:''
})

axios.get('/api/admin/settings', {params: ['socialMediaLinks']})
    .then(res => {
        if (res.data) {
            Object.assign(socialMediaLinks, res.data.socialMediaLinks)
        }
    })
const isFormSent = ref(false)
</script>

<style >

</style>
