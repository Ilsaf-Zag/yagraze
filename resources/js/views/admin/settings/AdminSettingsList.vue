<template>

    <div>
        <Loading v-model="isLoading"/>
        <div class="flex space-x-6">
            <button @click="canEdit= !canEdit"
                    class="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Редактировать
            </button>
        </div>

        <form action="" @submit.prevent="store">
            <fieldset :disabled="!canEdit">
                <div class="flex flex-col space-y-8 py-6">
                    <div class="flex flex-col space-y-6">
                        <h2 class="text-white text-2xl">Обо мне</h2>
                        <div>
                            <label class="text-white" for="infoAboutDesignerTitle">Заголовок</label>
                            <input id="infoAboutDesignerTitle" v-model="infoAboutDesigner.title" type="text"
                                   class="mt-2 border border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white">
                        </div>
                        <div>
                            <label class="text-white" for="infoAboutDesignerSubtitle">Подзаголовок</label>
                            <input id="infoAboutDesignerSubtitle" v-model="infoAboutDesigner.subtitle" type="text"
                                   class="mt-2 border border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white">
                        </div>
                        <div>
                            <div class="text-white mb-4">Текст</div>
                            <EditorText
                                :disabled="!canEdit"
                                v-model="infoAboutDesigner.text"
                            />
                        </div>
                    </div>
                    <div class="flex flex-col space-y-6">
                        <h2 class="text-white text-2xl">Услуги</h2>
                        <div>
                            <div class="text-white mb-4">Текст</div>
                            <EditorText
                                :disabled="!canEdit"
                                v-model="services.text"
                            />
                        </div>

                    </div>

                    <div class="flex flex-col space-y-6">
                        <h2 class="text-white text-2xl">Ссылки на социальные сети</h2>
                        <div>
                            <label class="text-white" for="socialMediaLinkVk">VK</label>
                            <input id="socialMediaLinkVk" v-model="socialMediaLinks.vk" type="text"
                                   class="mt-2 border border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white">
                        </div>
                        <div>
                            <label class="text-white" for="socialMediaLinkTelegram">Telegram</label>
                            <input id="socialMediaLinkTelegram" v-model="socialMediaLinks.telegram" type="text"
                                   class="mt-2 border border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white">
                        </div>
                        <div>
                            <label class="text-white" for="socialMediaLinkBehance">Behance</label>
                            <input id="socialMediaLinkBehance" v-model="socialMediaLinks.behance" type="text"
                                   class="mt-2 border border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white">
                        </div>
                        <div>
                            <label class="text-white" for="socialMediaLinkWhatsApp">WhatApp</label>
                            <input id="socialMediaLinkWhatsApp" v-model="socialMediaLinks.whatsApp" type="text"
                                   class="mt-2 border border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white">
                        </div>
                    </div>
                    <div>
                        <h2 class="text-white text-2xl">Ссылка на Google форму</h2>
                        <input id="socialMediaLinkBehance" v-model="googleFormLink.googleForm" type="text"
                               class="mt-2 border border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white">
                    </div>
                </div>
                <button v-if="canEdit" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Сохранить изменения
                </button>
            </fieldset>
        </form>
    </div>

    <div v-if="isShowMessage" class="fixed left-2/4 -translate-x-1/2 rounded-b-xl p-8 z-[999] top-0 left-0 bg-green-700">
        Данные успешно обновлены
    </div>

</template>

<script setup>
import EditorText from "@components/editor/EditorText.vue";
import {onMounted, reactive, ref} from "vue";
import axios from "axios";
import Loading from "@components/Loading.vue";

const isLoading = ref(false)
const canEdit = ref(false)
const isShowMessage = ref(false)

const infoAboutDesigner = reactive({
    title: '',
    subtitle: '',
    text: ''
})

const services = reactive({
    text: ''
})

const socialMediaLinks = reactive({
    vk: '',
    telegram: '',
    behance: '',
    whatsApp:''
})

const googleFormLink = reactive({
    googleForm:''
})

onMounted(() => {
    getData()
})

function getData() {
    isLoading.value = true

    axios.get('/api/admin/settings/all')
        .then((res) => {
            if (res.data) {
                const data = res.data.data

                Object.assign(infoAboutDesigner, data.infoAboutDesigner)
                Object.assign(services, data.services)
                Object.assign(socialMediaLinks, data.socialMediaLinks)
                Object.assign(googleFormLink, data.googleFormLink)
            }
        })
        .finally(() => {
            isLoading.value = false
        })
}


function store() {
    isLoading.value = true

    axios.post('/api/admin/settings', {
        infoAboutDesigner,
        services,
        socialMediaLinks,
        googleFormLink
    })
        .then(() => {
            canEdit.value = false
            showMessage()
        })
        .finally(() => {
            isLoading.value = false
        })

}

function showMessage(){
    isShowMessage.value = true

    setTimeout(()=>{
        isShowMessage.value = false
    },3000)
}

</script>

<style scoped>

</style>
