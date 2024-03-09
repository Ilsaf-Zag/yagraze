<template>
    <div class="relative design-item">
        <img class="rounded-[40px] sm:rounded-[30px] shadow-9" :src="`/images/design/preview/${design.preview_url}`" :alt="design.name">
        <div class="absolute z-10 bottom-10 left-10 text-xl font-bold text-white sm:text-sm">
            {{design.description}}
        </div>
        <div class="design-blackout rounded-[40px] sm:rounded-[30px]"></div>
    </div>
</template>

<script setup>

defineProps(['design'])
</script>

<style scoped>
.design-blackout {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    overflow: hidden;
    transition: 0.5s all;
}

.design-item:hover .design-blackout {
    opacity: 1;
    overflow: visible;
}
</style>
