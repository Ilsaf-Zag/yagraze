<template>
        <div>
            <div class="flex justify-center space-x-32 lg:space-x-12 sm:space-x-8">
                <IconCircle class="w-10 lg:w-8" />
                <h2 class="black2 text-bold text-5xl text-center font-bold xl:text-4xl ">
                    <slot/>
                </h2>
                <IconCircle class="w-10 lg:w-8" />
            </div>

            <IconLongLine class="w-[460px] mx-auto mt-9 lg:w-[300px] sm:w-[250px] sm:mt-6"/>
        </div>
</template>

<script setup>

import IconLongLine from "@components/icons/lines/IconLongLine.vue";
import IconCircle from "@components/icons/IconCircle.vue";
</script>

