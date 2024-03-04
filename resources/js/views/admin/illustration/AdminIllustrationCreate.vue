<script setup>

import {ref, reactive} from "vue";
import axios from "axios";
import Loading from "@components/loading/Loading.vue";

const loadingStore =  useLoadingStore()
const image = ref({})
const errors = ref({})

const form = reactive({
    name: '',
    image: ''
})

function onFileChange(event) {
    form.image = event.target.files[0]
}

function store() {
    loadingStore.toggleLoad()

    const formData = new FormData()

    formData.append('image', form.image)
    formData.append('name', form.name)

    axios.post('/api/admin/illustrations', formData)
        .then(() => {
            form.name = ''
            form.image = null

            image.value.value = null

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

<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto">
            <Loading v-model="loadingStore.isLoading"/>
            <div class="align-middle inline-block min-w-full ">
                <div class=" shadow overflow-hidden sm:rounded-lg">
                    <div class="p-4 bg-black2 text-white">
                        <h2 class="text-2xl font-bold mb-4">Форма добавления иллюстраций</h2>
                        <form @submit.prevent="store" class="space-y-4">
                            <div>
                                <label for="illustrationName" class="block mb-1">Название</label>
                                <input id="illustrationName" type="text" v-model="form.name"
                                       class="border border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white"
                                       :class="{'border-2 border-red-600':errors?.name}"
                                >
                                <div v-if="errors.name" class="mt-2 text-red-600">{{ errors.name[0] }}</div>
                            </div>
                            <div>
                                <div class="block mb-1">Изображение:</div>
                                <input type="file"
                                       @change="onFileChange"
                                       ref="image"
                                       class="border border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white"
                                       :class="{'border-2 border-red-600':errors.image}"
                                >
                                <div v-if="errors.image" class="mt-2 text-red-600">{{ errors.image[0] }}</div>
                            </div>
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

