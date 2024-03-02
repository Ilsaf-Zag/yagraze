<template>

    <DefaultLayout>
        <section class="py-20 relative">
            <div class="container">
                <Title>Дизайн</Title>

                <div ref="wrapper" :class="[isLoaded ?'visible':'invisible']" class="designs min-h-screen grid grid-cols-4 gap-8 mt-16 lg:mt-12 lg:grid-cols-3 sm:grid-cols-2 sm:mt-10">

                    <DesignItem
                        v-for="(design,index) in designs"
                        @click="showModal(index)"
                        :design="design"
                    />
                </div>

                <Modal
                    v-model="isOpen"
                >
                    <div v-if="isOpen">
                        <div class="absolute z-20 top-40 left-2/4 bg-fixed max-w-[600px] w-full -translate-x-2/4">
                            <img class="w-full" :src="`/images/design/${designs[activeIndex].url}`" alt="">
                        </div>
                    </div>
                </Modal>
            </div>
        </section>
    </DefaultLayout>
</template>

<script setup>

import DefaultLayout from "@layouts/DefaultLayout.vue";
import Title from "@components/Title/PageTitle.vue";
import {ref} from "vue";
import {Dialog, DialogPanel, TransitionChild, TransitionRoot} from "@headlessui/vue";
import FeedbackForm from "@components/Forms/FeedbackForm.vue";
import Modal from "@components/Modal.vue";
import axios from "axios";
import DesignItem from "@components/DesignItem.vue";
import imagesLoaded from "imagesloaded";
import Masonry from "masonry-layout";

const isOpen = ref(false)
const designs = ref()
const activeIndex = ref(0)
const wrapper = ref()
const isLoaded = ref(false)

axios.get('/api/designs')
    .then((res) => {
        designs.value = res.data

        setTimeout(()=>{
            imagesLoaded(wrapper.value, () => {

            })
            .on('done', () => {
                isLoaded.value = true
            })
        })
    })

function showModal(id) {
    activeIndex.value = id
    isOpen.value = true
}



</script>

<style scoped>

</style>
