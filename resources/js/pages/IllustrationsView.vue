<template>
    <DefaultLayout>
        <section class="py-20 relative min-h-screen">
            <Title>Иллюстрации</Title>


            <div :class="[isLoaded ?'visible':'invisible']" class="illustrations__wrapper mx-auto mt-16 sm:mt-8">
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
                    keyboard:'global',
                    breakpoints: {
                        639: {
                            arrows:false
                         },

                                  },}" aria-label="My Favorite Images">
                    <SplideSlide class="illustrations__block" v-for="illustration in illustrations"
                                 @click.stop="isOpen = false">
                        <img class="illustrations__image mx-auto" @click.stop
                             :src="'/images/illustration/' + illustration.url" :alt="illustration.name">
                    </SplideSlide>
                </Splide>
            </Modal>
        </section>
    </DefaultLayout>
</template>

<script setup>

import Masonry from 'masonry-layout';

import DefaultLayout from "@layouts/DefaultLayout.vue";
import IconLongLine from "@components/icons/IconLongLine.vue";
import Title from "@components/Title/PageTitle.vue";
import {computed, onMounted, ref, toRef} from "vue";
import imagesLoaded from 'imagesLoaded'
import axios from "axios";
import IllustrationItem from "@components/IllustrationItem.vue";


import Modal from "@components/Modal.vue";
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const isOpen = ref(false)
const activeIndex = ref(0)
const illustrations = ref();
const isLoaded = ref()

function showSlider(id) {
    isOpen.value = true
    activeIndex.value = id
}

axios.get('/api/illustrations')
    .then(res => {
        isLoaded.value = false

        illustrations.value = res.data
        setTimeout(() => {
            const wrapper = document.querySelector('.illustrations__wrapper')
            const b = imagesLoaded(wrapper, () => {
                const a = new Masonry(wrapper, {
                    itemSelector: ".illustrations__block", width: 280, gutter: 30, fitWidth: true
                })

            })
            b.on('done', () => {
                isLoaded.value = true
            })
        })
    })


</script>
<style>
.illustrations__image {
    height: 100%;

}
</style>
