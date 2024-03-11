<template>
    <RouterView></RouterView>

    <ModalLoading />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ModalLoading from "@components/loading/ModalLoading.vue";

</script>
