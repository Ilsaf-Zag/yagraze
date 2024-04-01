<template>
    <section data-aos="fade-zoom-in"
             data-aos-easing="ease-in-back"
             data-aos-delay="300"
             data-aos-offset="0"

             class="py-20 sm:py-14 relative"
    >
        <div class="container">
            <Title>Дизайн</Title>
            <IconCircles class="absolute w-32 top-8 right-8 lg:hidden"/>

            <div v-if="isLoading" class="flex justify-center mt-16">
                <Loading v-model="isLoading" class="flex justify-center mt-16"/>
            </div>
            <div ref="wrapper" :class="[!isLoading ?'visible':'invisible']"
                 class="designs grid grid-cols-[repeat(3,minmax(0px,400px))] justify-center lg:grid-cols-[repeat(2,minmax(0px,400px))] gap-8 mt-16 lg:mt-12 sm:mt-10">

                <DesignItem
                    v-for="(design,index) in designs"
                    @click="showModal(index)"
                    :design="design"
                />
            </div>

            <Modal
                v-model="isOpen"
                class="z-[999]"
            >
                <div ref="target">
                    <div class="absolute z-20 top-40 left-2/4 bg-fixed max-w-[1000px] w-full -translate-x-2/4">
                        <img class="h-full w-full" :src="`/images/design/${designs[activeIndex].url}`" alt="">
                    </div>
                    <div v-if="showHint && isOpen"
                         class="relative z-[1000] h-screen">
                        <div
                           class="fixed bottom-0 bg-black2/75 text-white rounded-xl p-4
                            shadow-7 backdrop-blur w-60 left-2/4 -translate-x-1/2 bottom-4"
                        >
                            Чтобы
                            выйти из просмотра, нажмите на любое пустое место вне изображения.
                        </div>
                    </div>
                </div>
            </Modal>
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
import {onClickOutside} from "@vueuse/core";
import IconCircles from "@components/icons/IconCircles.vue";
import Modal from "@components/modal/Modal.vue";

const isOpen = ref(false)
const designs = ref()
const activeIndex = ref(0)
const wrapper = ref()
const showHint = ref(false)
const timerId = ref()
const isLoading = ref(false)
const target = ref()


onMounted(() => {
    getDesigns()
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

    timerId.value = setTimeout(() => {

        showHint.value = false
    }, 3000)

}

onClickOutside(target, () => {
    clearTimeout(timerId.value)
})

</script>

<style scoped>
.designs {

}
</style>
