<template>
    <div>
        <h2 class="black2 text-bold text-5xl text-center font-bold xl:text-4xl ">
            <slot/>
        </h2>
        <IconLongLine class="w-[460px] mx-auto mt-9 lg:w-[300px] sm:w-[250px] sm:mt-6"/>
    </div>
</template>

<script setup>

import IconLongLine from "@components/icons/lines/IconLongLine.vue";
</script>

