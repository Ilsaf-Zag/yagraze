<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto">
            <div class="align-middle inline-block min-w-full">
                <div v-if="reviews"
                     class=" shadow overflow-hidden sm:rounded-lg flex flex-col"
                >
                    <div class="py-2 flex space-x-4">
                        <router-link :to="{name:'admin.reviews.create'}"
                                     class="bg-green-600 text-sm  hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Создать
                        </router-link>
                    </div>
                    <table class="w-full divide-y divide-gray mt-4">
                        <thead class="bg-black2 text-white">
                        <tr class="mt-4">
                            <th scope="col"
                                class="px-4 py-3 sm:px-2 text-left text-xs font-medium text-gray dark:bg-boxdark uppercase tracking-wider">
                                ID
                            </th>
                            <th scope="col"
                                class="px-4 py-3 sm:px-2 text-left text-xs font-medium text-gray uppercase tracking-wider">
                                Текст
                            </th>
                            <th scope="col"
                                class="px-4 py-3 sm:px-2 text-left text-xs font-medium text-gray uppercase tracking-wider">
                                Заказчик
                            </th>
                            <th scope="col"
                                class="px-4 py-3 sm:px-2 text-left text-xs font-medium text-gray uppercase tracking-wider">
                                Изменение
                            </th>
                            <th scope="col"
                                class="px-4 py-3 sm:px-2 text-left text-xs font-medium text-gray uppercase tracking-wider">
                                Удаление
                            </th>
                        </tr>
                        </thead>
                        <tbody class="bg-black2 text-white  divide-y divide-gray">
                        <tr v-for="review in reviews.data" :key="review.id">
                            <td class="px-4 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium">
                                    {{ review.id }}
                                </div>
                            </td>
                            <td class="px-4 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium">
                                    {{ textCropping(review.text) }}
                                </div>
                            </td>
                            <td class="px-4 py-4 whitespace-nowrap">
                                <a :href="review.customer_link" class="text-blue-500 hover:underline text-sm font-medium">
                                    {{ textCropping(review.customer_name) }}
                                </a>
                            </td>
                            <td class=" px-4 py-4 sm:px-2 whitespace-nowrap relative ">
                                <div class="group text-sm font-medium inline-block">
                                    <router-link :to="{name:'admin.reviews.edit',params:{id:review.id}}"
                                                 class="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                        Изменить
                                    </router-link>
                                </div>
                            </td>
                            <td class=" px-4 py-4 sm:px-2 whitespace-nowrap relative">
                                <div class="group text-sm font-medium inline-block">
                                    <button @click="deleteIllustration(review.id)"
                                            class="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                        Удалить
                                    </button>
                                </div>
                            </td>

                        </tr>
                        </tbody>
                    </table>

                    <div class="flex justify-center mt-5 ">
                        <TailwindPagination
                            :data="reviews"
                            @pagination-change-page="getReviews"
                            class="pagination bg-black2 text-white"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ModalLoading />
</template>

<script setup>

import {onMounted, ref} from "vue";
import axios from "axios";
import {TailwindPagination} from 'laravel-vue-pagination';
import {useLoadingStore} from "@stores/loadingStore.js";
import {textCropping} from "@mixins/textCroppingMixin.js";
import ModalLoading from "@components/loading/ModalLoading.vue";

const loadingStore =  useLoadingStore()
const reviews = ref({})

onMounted(()=>{
    getReviews();
})

function getReviews(page = 1) {
    loadingStore.toggleLoad()

    axios.get(`/api/admin/reviews?page=${page}`)
        .then(res => {
            reviews.value = res.data
        })
        .finally(() => {
            loadingStore.toggleLoad()
        })
}
function deleteIllustration(id) {
    loadingStore.toggleLoad()

    if (confirm('Вы точно хотите удалить?')){
        axios.delete(`/api/admin/reviews/${id}`)
            .then(res => {
                getReviews(reviews.value.current_page)
            })
            .finally(()=>{
                loadingStore.toggleLoad()
            })
    } else {
        loadingStore.toggleLoad()
    }
}
</script>


<style>

.pagination button {
    background-color: #1E2222
}

.pagination button:disabled {
    background: #444444;
}

.pagination button svg {
    width: 25px
}
</style>
