<template>
    <div class="relative">
        <img class="rounded-[40px] sm:rounded-[30px] shadow-9" :src="`/images/design/preview/${design.preview_url}`" :alt="design.name">
        <div class="absolute bottom-10 left-10 text-3xl font-bold text-white sm:text-sm">Презентация для приемной
            компании «КГЭУ»
        </div>
    </div>
</template>

<script setup >

defineProps(['design'])
</script>
