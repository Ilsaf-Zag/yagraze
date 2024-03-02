<script setup>

import {ref, reactive, onMounted} from "vue";
import axios from "axios";
import Loading from "@components/Loading.vue";
import Dropzone from "dropzone";

const isLoading = ref(false)
const previewImage = ref({})
const dropzone = ref()
const errors = ref({})

const form = reactive({
    name: '',
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
    isLoading.value = true

    const file = dropzone.value.dropzone?.getAcceptedFiles()[0] || ''

    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('previewImage', form.image)
    formData.append('image', file)

    axios.post('/api/admin/designs', formData)
        .then(() => {
            form.name = ''
            form.previewImage = ''
            form.image = ''

            previewImage.value.value = null
            dropzone.value.dropzone.removeAllFiles()
        })
        .catch(error => {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors
            }
        })
        .finally(() => {
            isLoading.value = false
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

<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto">
            <Loading v-model="isLoading"/>
            <div class="align-middle inline-block min-w-full ">
                <div class=" shadow overflow-hidden sm:rounded-lg">
                    <div class="p-4 bg-black2 text-white">
                        <h2 class="text-2xl font-bold mb-4">Форма добавления иллюстраций</h2>
                        <form @submit.prevent="store" class="space-y-4">
                            <div>
                                <label for="designName" class="block mb-1">Название</label>
                                <input id="designName" type="text" v-model="form.name"
                                       class="border border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white"
                                       :class="{'border-1 border-red-600':errors?.name}"
                                >
                                <div v-if="errors.name" class="mt-2 text-red-600">{{ errors.name[0] }}</div>
                            </div>
                            <div>
                                <div class="block mb-1">Превью:</div>
                                <input type="file"
                                       @change="onFileChange"
                                       ref="previewImage"
                                       class="border border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white"
                                       :class="{'border-1 border-red-600':errors.image}"
                                >
                                <div v-if="errors.image" class="mt-2 text-red-600">{{ errors.image[0] }}</div>
                            </div>
                            <div>Полное изображение</div>
                            <div
                                ref="dropzone"
                                class="border h-full border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white"
                                :class="{'border-1 border-red-600':errors.image}"
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
</template>

