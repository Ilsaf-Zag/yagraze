<template>
    <div class="relative design-item">
        <img class="rounded-[40px] md:rounded-[20px] shadow-9" :src="`/images/design/preview/${design.preview_url}`" :alt="design.name">
        <div class="absolute z-10 bottom-10 left-1/2 -translate-x-1/2 w-[80%] text-3xl 2xl:text-2xl font-bold text-white sm:bottom-4 sm:text-base">
            {{design.description}}
        </div>
        <div class="design-blackout rounded-[40px] md:rounded-[20px]"></div>
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
    transition: 0.5s all;
}

.design-item:hover .design-blackout {
    background-color: rgba(0, 0, 0, 0.5);

}
</style>
