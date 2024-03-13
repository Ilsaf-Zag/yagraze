<template>
    <section class="py-20 sm:py-14 relative"
    >
        <div class="container">
            <Title>Дизайн</Title>
            <IconCircles class="absolute w-32 top-8 right-8 lg:hidden" />

            <div v-if="isLoading" class="flex justify-center mt-16">
                <Loading v-model="isLoading" class="flex justify-center mt-16" />
            </div>
            <div ref="wrapper" :class="[!loadingStore.isLoading ?'visible':'invisible']"
                 class="designs grid grid-cols-[repeat(3,minmax(0px,400px))] justify-center lg:grid-cols-[repeat(2,minmax(0px,400px))] gap-8 mt-16 lg:mt-12 sm:mt-10">

                <DesignItem
                    v-for="(design,index) in designs"
                    @click="showModal(index)"
                    :design="design"
                />
            </div>
            <div v-if="isOpen" class="z-[999] bg-black/25 px-4 fixed z-20 w-full h-full top-0 left-0 overflow-y-auto">
                <div  ref="target"
                     class="max-w-[600px] mx-auto mt-32">
                    <img class="h-full w-full" :src="`/images/design/${designs[activeIndex].url}`" alt="">
                    <div v-if="showHint && isOpen"
                         class="fixed bottom-8 left-2/4 -translate-x-1/2 bg-black2/75 text-white rounded-xl p-4 shadow-14 backdrop-blur w-60">Чтобы
                        выйти из просмотра, нажмите на любое пустое место вне изображения.
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import Title from "@components/title/PageTitle.vue";
import {onMounted, ref} from "vue";
import axios from "axios";
import DesignItem from "@components/design/DesignItem.vue";
import imagesLoaded from "imagesloaded";
import Loading from "@components/loading/Loading.vue";
import {useLoadingStore} from "@stores/loadingStore.js";
import {onClickOutside} from "@vueuse/core";
import IconCircles from "@components/icons/IconCircles.vue";

const isOpen = ref(false)
const designs = ref()
const activeIndex = ref(0)
const wrapper = ref()
const showHint = ref(false)
const loadingStore = useLoadingStore()
const target = ref(null)
const timerId = ref()
const isLoading = ref(false)


onMounted(() => {
    getDesigns()
})

onClickOutside(target, () => {
    {
        isOpen.value = false
        document.body.style.overflow = "";

        clearTimeout(timerId.value);
    }
})

function getDesigns() {
    isLoading.value = true

    axios.get('/api/designs')
        .then((res) => {
            designs.value = res.data

            setTimeout(() => {
                imagesLoaded(wrapper.value, () => {

                })
                    .on('done', () => {
                        isLoading.value = false
                    })
            })
        })
}

function showModal(id) {
    activeIndex.value = id
    isOpen.value = true
    showHint.value = true
    document.body.style.overflow = "hidden";

    timerId.value = setTimeout(() => {
        showHint.value = false
    }, 3000)
}

</script>

<style scoped>
.designs{

}
</style>
