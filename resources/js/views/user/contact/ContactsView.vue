<template>
    <section class="py-20 sm:py-14 relative">
        <div class="container">
            <Title>Контакты</Title>
            <IconCircles class="absolute w-32 top-8 right-8 lg:hidden"/>
            <div class="mt-20 flex flex-col items-center lg:mt-10 sm:mt-6">
                <h2 class="text-center font-semibold text-3xl xl:text-2xl sm:text-xl">Вы можете связаться со мной через
                    форму ниже:</h2>

                <FeedbackForm class="form border-none mt-9 mx-auto rounded-[40px] bg-smoky shadow-2 w-full max-w-[800px] flex items-center justify-center p-10 sm:p-6  sm:rounded-[40px]" v-if="!isFormSent">
                    Сделать заказ
                </FeedbackForm>
                <div v-else class="font-semibold text-3xl text-center text-orange sm:text-lg">
                    <div>Спасибо!</div>
                    <div>В скором времени свяжусь с вами.</div>
                </div>
                <div>
                    <h3 class="text-3xl font-semibold mt-16 text-center sm:text-xl sm:mt-12">Либо через социальные
                        сети:</h3>
                    <div class="mt-7 flex space-x-16 justify-center sm:space-x-8">

                        <a target="_blank" :href ="socialMediaLinks.telegram"
                           class="shadow-11 rounded-3xl bg-smoky w-[120px] h-[120px] 2xl:w-24 2xl:h-24 xl:w-20 xl:h-20  p-8 xl:p-6 flex items-center justify-center">
                            <IconTelegram/>
                        </a>
                        <a target="_blank" :href ="socialMediaLinks.vk"
                           class="shadow-11 rounded-3xl bg-smoky w-[120px] h-[120px] 2xl:w-24 2xl:h-24 xl:w-20 xl:h-20  p-8 xl:p-6 flex items-center justify-center">
                            <IconVk/>
                        </a>
                        <a target="_blank" :href ="socialMediaLinks.whatsApp"
                           class="shadow-11 rounded-3xl bg-smoky w-[120px] h-[120px] 2xl:w-24 2xl:h-24 xl:w-20 xl:h-20  p-8 xl:p-6 flex items-center justify-center">
                            <IconWhatsUp/>
                        </a>

                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>

import Title from "@components/title/PageTitle.vue";
import DefaultButton from "@components/UI/Buttons/DefaultButton.vue";
import {ref} from "vue";
import IconTelegram from "@components/icons/socialNetwork/IconTelegram.vue";
import IconVk from "@components/icons/socialNetwork/IconVk.vue";
import IconWhatsUp from "@components/icons/socialNetwork/IconWhatsUp.vue";
import axios from "axios";
import {useSettingsStore} from "@stores/settingsStore.js";
import IconCircles from "@components/icons/IconCircles.vue";
import FeedbackForm from "@components/form/FeedbackForm.vue";

const socialMediaLinks = useSettingsStore().settings.socialMediaLinks

const isFormSent = ref(false)
</script>

<style scoped>
.form :deep(input),
.form :deep(textarea) {
    background: #EEEEEE;
    box-shadow: inset -5px -5px 10px rgba(255, 255, 255, 0.7), inset 5px 5px 25px rgba(174, 174, 192, 0.2);
}

.form :deep(button){
    background: #F0F0F3 !important;
    box-shadow: -4.03862px -4.03862px 12.1159px #FFFFFF, 6.05794px 6.05794px 12.1159px rgba(174, 174, 192, 0.4);
    color:orange !important;
}


</style>
