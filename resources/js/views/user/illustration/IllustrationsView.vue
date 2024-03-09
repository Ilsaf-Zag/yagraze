<template>
        <section class="py-20 relative min-h-screen">
            <Title>Иллюстрации</Title>
            <IconCircles class="absolute w-32 top-8 right-8 lg:hidden" />

            <div v-if="loadingStore.isLoading" class="flex justify-center mt-16">
                <Loading />
            </div>
            <div :class="[!loadingStore.isLoading ?'visible':'invisible']" class="illustrations__wrapper mx-auto mt-16 sm:mt-8">
                <div v-for="(illustration,index) in illustrations">
                    <IllustrationItem
                        @click="showSlider(index)"
                        :illustration="illustration"
                    />
                </div>
            </div>
            <Modal class="z-[999]" v-model="isOpen">
                <Splide :options="{
                    start:activeIndex,
                    perPage:1,
                    pagination:false,
                    arrows:true,
                    height:'calc(100vh - 40px)',
                    width:'calc(100vw - 100px)',
                    keyboard:'global'
                    }">

                <SplideSlide class="flex items-center justify-center" v-for="illustration in illustrations"
                                 @click.stop="isOpen = false">
                        <img class="illustrations__image mx-auto" @click.stop
                             :src="'/images/illustration/' + illustration.url" :alt="illustration.name">
                    </SplideSlide>
                </Splide>
            </Modal>
        </section>

</template>

<script setup>
import Loading from "@components/loading/Loading.vue";

import Masonry from 'masonry-layout';
import Title from "@components/title/PageTitle.vue";
import {onMounted, ref} from "vue";
import imagesLoaded from 'imagesloaded'
import axios from "axios";
import IllustrationItem from "@components/illustration/IllustrationItem.vue";
import Modal from "@components/modal/Modal.vue";
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import {useLoadingStore} from "@stores/loadingStore.js";
import IconCircles from "@components/icons/IconCircles.vue";

const isOpen = ref(false)
const activeIndex = ref(0)
const illustrations = ref();
const loadingStore =  useLoadingStore()

function showSlider(id) {
    isOpen.value = true
    activeIndex.value = id
}

onMounted(()=>{
    getIllustrations()
})

function getIllustrations(){
    loadingStore.toggleLoad()

    axios.get('/api/illustrations')
        .then(res => {
            illustrations.value = res.data
            setTimeout(() => {
                const wrapper = document.querySelector('.illustrations__wrapper')
                const b = imagesLoaded(wrapper, () => {
                    const a = new Masonry(wrapper, {
                        itemSelector: ".illustrations__block", width: 280, gutter: 30, fitWidth: true
                    })

                })
                b.on('done', () => {
                    loadingStore.toggleLoad()
                })
            })
        })
}
</script>
<style>
.illustrations__image {
    max-height: 100%;
    max-width:100%;

}
</style>
