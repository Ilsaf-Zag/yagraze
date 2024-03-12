<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto">
            <div class="align-middle inline-block min-w-full ">
                <div class=" shadow overflow-hidden sm:rounded-lg">
                    <div class="p-4 bg-black2 text-white">
                        <h2 class="text-2xl font-bold mb-4">Форма редактирования иллюстраций</h2>
                        <form @submit.prevent="update" class="space-y-4">
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
                                <div
                                    ref="dropzonePreview"
                                    class="border h-full border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white"
                                    :class="{'border-2 border-red-600':errors.previewImage}"
                                >
                                    Загрузить
                                </div>
                                <div v-if="errors.previewImage" class="mt-2 text-red-600">{{ errors.previewImage[0] }}</div>

                            </div>

                            <div>
                                <div class="block mb-1">Полное изображение:</div>
                                <div
                                    ref="dropzone"
                                    class="border h-full border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white"
                                    :class="{'border-2 border-red-600':errors.image}"
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
    <ModalLoading />
</template>

<script setup>
import axios from "axios";
import {onMounted, reactive, ref} from "vue";
import Dropzone from "dropzone";
import {useRouter} from "vue-router";
import {useLoadingStore} from "@stores/loadingStore.js";
import ModalLoading from "@components/loading/ModalLoading.vue";

const router = useRouter()
const loadingStore =  useLoadingStore()

const props = defineProps({
    id:Number
})

const design = ref({})
const dropzonePreview = ref({})
const dropzone = ref({})
const errors = ref({})

const form = reactive({
    name: '',
    description: '',
    image: ''
})

onMounted(()=>{
    getDesign()
})

function getDesign () {
    loadingStore.toggleLoad()

    axios.get(`/api/admin/designs/${props.id}/edit`)
        .then(res => {

            design.value = res.data
            form.name = res.data.name
            form.description = res.data.description

            dropzoneInit(dropzonePreview,`preview/${design.value.preview_url}`)
            dropzoneInit(dropzone,design.value.url)
        })
        .catch(error=>{
            if (error.response.status === 404) {
                router.push({name:'404'})
            }
        })
        .finally(() => {
            loadingStore.toggleLoad()
        })
}
function update() {
    loadingStore.toggleLoad()

    const formData = new FormData()

    const previewImage = dropzonePreview.value.dropzone?.getAcceptedFiles()[0] || ''
    const image = dropzone.value.dropzone?.getAcceptedFiles()[0] || ''

    formData.append('_method', 'PATCH');
    formData.append('name', form.name)
    formData.append('description', form.description)
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
            loadingStore.toggleLoad()
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
