<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto">
            <div class="align-middle inline-block min-w-full">
                <div v-if="illustrations"
                     class=" shadow overflow-hidden sm:rounded-lg flex flex-col"
                >
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
                                Пор.номер
                            </th>
                            <th scope="col"
                                class="px-4 py-3 sm:px-2 text-left text-xs font-medium text-gray uppercase tracking-wider md:hidden">
                                Изображение
                            </th>
                        </tr>
                        </thead>
                        <tbody class="bg-black2 text-white  divide-y divide-gray" ref="list">
                        <tr v-for="illustration in illustrations.data" :key="illustration.id">
                            <td class="px-4 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium">
                                    {{ illustration.id }}
                                </div>
                            </td>
                            <td class="px-4 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium">
                                    {{ illustration.name }}
                                </div>
                            </td>
                            <td class="px-4 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium">
                                    {{ illustration.order }}
                                </div>
                            </td>
                            <td class=" px-4 py-4 sm:px-2 whitespace-nowrap relative md:hidden">
                                <div class="group text-sm font-medium inline-block max-w-10">
                                    <img :src="`/images/illustration/${illustration.url}`"
                                         :alt="illustration.name" class="">
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <ModalLoading />
</template>

<script setup>

import {nextTick, onMounted, ref} from "vue";
import axios from "axios";
import {useSortable} from '@vueuse/integrations/useSortable'
import { moveArrayElement } from '@vueuse/integrations/useSortable'
import ModalLoading from "@components/loading/ModalLoading.vue";
import {useLoadingStore} from "@stores/loadingStore.js";

const loadingStore = useLoadingStore()
const list = ref({})
const illustrations = ref({})
const illustrationsData = ref({})

onMounted(()=>{
    getIllustration()
})

function getIllustration(){
    loadingStore.toggleLoad()

    axios.get(`/api/admin/illustrations?pageSize=0`)
        .then(res => {
            illustrations.value = res.data
            illustrationsData.value = res.data.data
        })
        .finally(()=>{
            loadingStore.toggleLoad()
        })
}

useSortable(list, illustrationsData, {
    animation: 150,

    onUpdate(event) {
        moveArrayElement(illustrationsData.value,event.oldIndex, event.newIndex)

        nextTick(() => {
            const ids = illustrationsData.value.map((item)=> item['id'])
            axios.patch('/api/admin/illustrations/sort',{ids})
        })
    }
})

</script>
