<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto">
            <Loading v-model="isLoading"/>
            <div class="align-middle inline-block min-w-full ">
                <div class=" shadow overflow-hidden sm:rounded-lg">
                    <div class="p-4 bg-black2 text-white">
                        <h2 class="text-2xl font-bold mb-4">Форма редактирования иллюстраций</h2>
                        <form @submit.prevent="update" class="space-y-4">
                            <div>
                                <label for="illustrationName" class="block mb-1">Название</label>
                                <input id="illustrationName" type="text" v-model="form.name"
                                       class="border border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white"
                                       :class="{'border-1 border-red-600':errors?.name}"
                                >
                                <div v-if="errors.name" class="mt-2 text-red-600">{{ errors.name[0] }}</div>

                            </div>
                            <div>
                                <div class="block mb-1">Превью:</div>
                                <div
                                    ref="dropzonePreview"
                                    class="border h-full border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white"
                                    :class="{'border-1 border-red-600':errors.image}"
                                >
                                    Загрузить
                                </div>
                                <div v-if="errors.image" class="mt-2 text-red-600">{{ errors.image[0] }}</div>

                            </div>

                            <div>
                                <div class="block mb-1">Полное изображение:</div>
                                <div
                                    ref="dropzone"
                                    class="border h-full border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white"
                                    :class="{'border-1 border-red-600':errors.image}"
                                >
                                    Загрузить
                                </div>
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

<script setup>
import axios from "axios";
import {onMounted, reactive, ref} from "vue";
import Loading from "@components/Loading.vue";
import Dropzone from "dropzone";
import {useRouter} from "vue-router";

const router = useRouter()
const isLoading = ref(false)

const props = defineProps({
    id:Number
})

const design = ref({})
const dropzonePreview = ref({})
const dropzone = ref({})

const form = reactive({
    name: '',
    image: ''
})

const errors = ref({})


onMounted(()=>{
    getDesign()
})

function getDesign () {
    isLoading.value = true

    axios.get(`/api/admin/designs/${props.id}`)
        .then(res => {
            isLoading.value = true

            design.value = res.data
            form.name = res.data.name

            dropzoneInit(dropzonePreview,`preview/${design.value.preview_url}`)
            dropzoneInit(dropzone,design.value.url)
        })
        .catch(error=>{
            if (error.response.status === 404) {
                router.push({name:'404'})
            }
        })
        .finally(() => {
            isLoading.value = false
        })
}
function update() {
    isLoading.value = true

    const formData = new FormData()

    const previewImage = dropzonePreview.value.dropzone?.getAcceptedFiles()[0] || ''
    const image = dropzone.value.dropzone?.getAcceptedFiles()[0] || ''

    formData.append('_method', 'PATCH');
    formData.append('name', form.name)
    formData.append('previewImage', previewImage)
    formData.append('image', image)

    axios.post(`/api/admin/designs/${props.id}`, formData)
        .then(() => {
            router.push({name:'admin.designs'})
        })
        .catch(error => {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors
            }
        })
        .finally(()=>{
            isLoading.value = false
        })
}
function dropzoneInit(dropzone,imageUrl) {
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

            const mockFile = {
                name: design.value.name,
            };

            this.files.push(mockFile);
            this.displayExistingFile(mockFile, `/images/design/${imageUrl}`)
        }
    })
}

</script>
