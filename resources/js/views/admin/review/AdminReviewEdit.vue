<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto">
            <div class="align-middle inline-block min-w-full ">
                <div class=" shadow overflow-hidden sm:rounded-lg">
                    <div class="p-4 bg-black2 text-white">
                        <h2 class="text-2xl font-bold mb-4">Форма редактирования отзыва</h2>
                        <form @submit.prevent="update" class="space-y-4">
                            <div>
                                <label for="reviewText" class="block mb-1">Текст</label>
                                <textarea id="reviewText" type="text" v-model="form.text"
                                          class="border border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white resize-none h-48"
                                          :class="{'border-2 border-red-600':errors?.text}"
                                ></textarea>
                                <div v-if="errors.text" class="mt-2 text-red-600">{{ errors.text[0] }}</div>
                            </div>
                            <div>
                                <label for="reviewCategory" class="block mb-1">Категория</label>
                                <select id="reviewCategory"
                                        class="border border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white"
                                        :class="{'border-2 border-red-600':errors?.category}"
                                        v-model="form.category">
                                    <option disabled value="">Выберите категорию</option>
                                    <option v-for="category in categories"
                                            :value="category.value">
                                        {{ category.name }}
                                    </option>
                                </select>
                                <div v-if="errors.category" class="mt-2 text-red-600">{{ errors.category[0] }}</div>
                            </div>
                            <div>
                                <label for="reviewCustomerName" class="block mb-1">Имя заказчика / Название
                                    компании</label>
                                <input id="reviewCustomerName" type="text" v-model="form.customerName"
                                       class="border border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white"
                                       :class="{'border-2 border-red-600':errors?.customerName}"
                                >
                                <div v-if="errors.customerName" class="mt-2 text-red-600">{{
                                        errors.customerName[0]
                                    }}
                                </div>
                            </div>
                            <div>
                                <label for="reviewCustomerLink" class="block mb-1">Ссылка</label>
                                <input id="reviewCustomerLink" type="text" v-model="form.customerLink"
                                       class="border border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white"
                                       :class="{'border-2 border-red-600':errors?.customerLink}"
                                >
                                <div v-if="errors.customerLink" class="mt-2 text-red-600">{{
                                        errors.customerLink[0]
                                    }}
                                </div>
                            </div>
                            <button type="submit"
                                    class="bg-blue-500 text-white px-4 py-2 rounded-md">Изменить
                                отзыв
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
import { reactive, ref} from "vue";
import {useRouter} from "vue-router";
import ModalLoading from "@components/loading/ModalLoading.vue";
import {useLoadingStore} from "@stores/loadingStore.js";

const router = useRouter()
const loadingStore = useLoadingStore()

const props = defineProps({
    id: Number
})

const categories = [
    {name: 'Дизайн', value: 'design'},
    {name: 'Иллюстрация', value: 'illustration'}
]

const form = reactive({
    text: '',
    category: '',
    customerName: '',
    customerLink: ''
})

const errors = ref({})

loadingStore.toggleLoad()

axios.get(`/api/admin/reviews/${props.id}`)
    .then(res => {
        form.text = res.data.text
        form.category = res.data.category
        form.customerName = res.data.customer_name
        form.customerLink = res.data.customer_link
    })
    .catch(error => {
        if (error.response.status === 404) {
            router.push({name: '404'})
        }
    })
    .finally(() => {
        loadingStore.toggleLoad()
    })

function update() {
    loadingStore.toggleLoad()

    axios.patch(`/api/admin/reviews/${props.id}/edit`, form)
        .then(() => {
            router.push({name: 'admin.reviews'})
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
