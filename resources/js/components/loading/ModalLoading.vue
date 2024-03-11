<template>
    <div v-if="loading.isLoading" class="fixed flex items-center justify-center min-w-full min-h-full bg-black2/25 left-0 top-0 z-[99999]">
        <Loading v-model="loading.isLoading" />
    </div>
</template>

<script setup>
import Loading from "@components/loading/Loading.vue";
import {useLoadingStore} from "@stores/loadingStore.js";

const loading = useLoadingStore()

</script>

<style scoped>

</style>
