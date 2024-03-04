<script setup>

import {onMounted, ref} from "vue";
import axios from "axios";
import {TailwindPagination} from 'laravel-vue-pagination';
import Loading from "@components/loading/Loading.vue";
import {useLoadingStore} from "@stores/loadingStore.js";
import {textCropping} from "@mixins/textCroppingMixin.js";

const designs = ref({})
const loadingStore =  useLoadingStore()

onMounted(()=>{
    getDesigns();
})

function getDesigns(page = 1) {
    loadingStore.toggleLoad()

    axios.get(`/api/admin/designs?page=${page}`)
        .then(res => {
            designs.value = res.data
        })
        .finally(() => {
            loadingStore.toggleLoad()
        })
}
function deleteDesign(id) {
    loadingStore.toggleLoad()

    if (confirm('Вы точно хотите удалить?')){
        axios.delete(`/api/admin/designs/${id}`)
            .then(res => {
                getDesigns(designs.value.current_page)
            })
            .finally(()=>{
                loadingStore.toggleLoad()
            })
    } else {
        loadingStore.toggleLoad()
    }
}


</script>

<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto">
            <div class="align-middle inline-block min-w-full">
                <Loading v-model="loadingStore.isLoading"/>
                <div v-if="designs"
                     class=" shadow overflow-hidden sm:rounded-lg flex flex-col"
                >
                    <div class="py-2 flex space-x-4">
                        <router-link :to="{name:'admin.designs.create'}"
                                     class="bg-green-600 text-sm  hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Создать
                        </router-link>
                        <router-link :to="{name:'admin.designs.sort'}"
                                     class="bg-yellow-600 text-sm  hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                            Изменить порядок
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
                                Название
                            </th>
                            <th scope="col"
                                class="px-4 py-3 sm:px-2 text-left text-xs font-medium text-gray uppercase tracking-wider">
                                Описание
                            </th>
                            <th scope="col"
                                class="px-4 py-3 sm:px-2 text-left text-xs font-medium text-gray uppercase tracking-wider md:hidden">
                                Превью
                            </th>
                            <th scope="col"
                                class="px-4 py-3 sm:px-2 text-left text-xs font-medium text-gray uppercase tracking-wider md:hidden">
                                Изображение
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
                        <tr v-for="design in designs.data" :key="design.id">
                            <td class="px-4 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium">
                                    {{ design.id }}
                                </div>
                            </td>
                            <td class="px-4 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium">
                                    {{ design.name }}
                                </div>
                            </td>
                            <td class="px-4 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium">
                                    {{ textCropping(design.description) }}
                                </div>
                            </td>
                            <td class=" px-4 py-4 sm:px-2 whitespace-nowrap relative md:hidden">
                                <div class="group text-sm font-medium inline-block">
                                    <img :src="`/images/design/preview/${design.preview_url}`"
                                         :alt="design.name" class="">
                                </div>
                            </td>
                            <td class=" px-4 py-4 sm:px-2 whitespace-nowrap relative md:hidden">
                                <div class="group text-sm font-medium inline-block">
                                    <img :src="`/images/design/${design.url}`"
                                         :alt="design.name" class="">
                                </div>
                            </td>
                            <td class=" px-4 py-4 sm:px-2 whitespace-nowrap relative ">
                                <div class="group text-sm font-medium inline-block">
                                    <router-link :to="{name:'admin.designs.edit',params:{id:design.id}}"
                                                 class="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                        Изменить
                                    </router-link>
                                </div>
                            </td>
                            <td class=" px-4 py-4 sm:px-2 whitespace-nowrap relative">
                                <div class="group text-sm font-medium inline-block">
                                    <button @click="deleteDesign(design.id)"
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
                            :data="designs"
                            @pagination-change-page="getDesigns"
                            class="pagination bg-black2 text-white"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

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
