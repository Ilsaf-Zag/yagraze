<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto">
            <div class="align-middle inline-block min-w-full ">
                <div class=" shadow overflow-hidden sm:rounded-lg">
                    <div class="p-4 bg-black2 text-white">
                        <h2 class="text-2xl font-bold mb-4">Форма добавления иллюстраций</h2>
                        <form @submit.prevent="store" class="space-y-4">
                            <div>
                                <label for="designName" class="block mb-1">Название</label>
                                <input id="designName" type="text" v-model="form.name"
                                       class="border border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white"
                                       :class="{'border-2 border-red-600':errors?.name}"
                                >
                                <div v-if="errors.name" class="mt-2 text-red-600">{{ errors.name[0] }}</div>
                            </div>
                            <div>
                                <label for="designDescription" class="block mb-1">Описание</label>
                                <input id="designDescription" type="text" v-model="form.description"
                                       class="border border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white"
                                       :class="{'border-2 border-red-600':errors?.description}"
                                >
                                <div v-if="errors.description" class="mt-2 text-red-600">{{ errors.description[0] }}</div>
                            </div>
                            <div>
                                <div class="block mb-1">Превью:</div>
                                <input type="file"
                                       @change="onFileChange"
                                       ref="previewImage"
                                       class="border border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white"
                                       :class="{'border-2 border-red-600':errors.previewImage}"
                                >
                                <div v-if="errors.previewImage" class="mt-2 text-red-600">{{ errors.previewImage[0] }}</div>
                            </div>
                            <div>Полное изображение</div>
                            <div
                                ref="dropzone"
                                class="border h-full border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white"
                                :class="{'border-2 border-red-600':errors.image}"
                            >
                                Загрузить
                            </div>
                            <div v-if="errors.image" class="mt-2 text-red-600">{{ errors.image[0] }}</div>
                            <button type="submit"
                                    class="bg-blue-500 text-white px-4 py-2 rounded-md">Добавить
                                иллюстрацию
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ModalLoading />
</template>

<script setup>

import {ref, reactive, onMounted} from "vue";
import axios from "axios";
import Dropzone from "dropzone";
import {useLoadingStore} from "@stores/loadingStore.js";
import ModalLoading from "@components/loading/ModalLoading.vue";

const loadingStore =  useLoadingStore()
const previewImage = ref({})
const dropzone = ref()
const errors = ref({})

const form = reactive({
    name: '',
    description: '',
    previewImage: '',
    image:''

})

onMounted(()=>{
    dropzoneInit()
})

function onFileChange(event) {
    form.image = event.target.files[0]
}

function store() {
    loadingStore.toggleLoad()

    const file = dropzone.value.dropzone?.getAcceptedFiles()[0] || ''

    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('description', form.description)
    formData.append('previewImage', form.image)
    formData.append('image', file)

    axios.post('/api/admin/designs', formData)
        .then(() => {
            Object.keys(form).forEach(item => form[item] = "")

            previewImage.value.value = null
            dropzone.value.dropzone.removeAllFiles()

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

function dropzoneInit(){
    dropzone.value = new Dropzone(dropzone.value, {
        url: '/api/admin/designs',
        addRemoveLinks: true,
        autoProcessQueue: false,
        maxFiles: 1,

        init() {
            this.on("addedfile", function (event) {
                while (this.files.length > this.options.maxFiles) {
                    this.removeFile(this.files[0]);
                }
            });
        }
    })
}

</script>

