<script setup>

import {nextTick, ref} from "vue";
import axios from "axios";
import {useSortable} from '@vueuse/integrations/useSortable'
import { moveArrayElement } from '@vueuse/integrations/useSortable'

const list = ref({})

const designs = ref({})
const designsData = ref({})

useSortable(list, designsData, {
    animation: 150,

    onUpdate(event) {
        moveArrayElement(designsData.value,event.oldIndex, event.newIndex)

        nextTick(() => {
            const ids = designsData.value.map((item)=> item['id'])
            axios.patch('/api/admin/designs/sort',{ids})
        })
    }
})

axios.get(`/api/admin/designs?pageSize=0`)
    .then(res => {
        designs.value = res.data
        designsData.value = res.data.data
    })

</script>

<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto">
            <div class="align-middle inline-block min-w-full">
                <div v-if="designs"
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
                                Превью
                            </th>
                            <th scope="col"
                                class="px-4 py-3 sm:px-2 text-left text-xs font-medium text-gray uppercase tracking-wider md:hidden">
                                Изображение
                            </th>
                        </tr>
                        </thead>
                        <tbody class="bg-black2 text-white  divide-y divide-gray" ref="list">
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
                                    {{ design.order }}
                                </div>
                            </td>
                            <td class=" px-4 py-4 sm:px-2 whitespace-nowrap relative md:hidden">
                                <div class="group text-sm font-medium inline-block max-w-10">
                                    <img :src="`/images/design/preview/${design.preview_url}`"
                                         :alt="design.name" class="">
                                </div>
                            </td>
                            <td class=" px-4 py-4 sm:px-2 whitespace-nowrap relative md:hidden">
                                <div class="group text-sm font-medium inline-block max-w-10">
                                    <img :src="`/images/design/${design.url}`"
                                         :alt="design.name" class="">
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
