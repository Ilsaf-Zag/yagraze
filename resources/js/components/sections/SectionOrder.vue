<template>
    <section>
        <div class="container">
            <div class="flex justify-center text-5xl my-[120px] 2xl:my-24 lg:my-16 sm:mt-4 sm:mb-12">
                <DefaultButton
                    class="block shadow-6 w-[500px] h-[100px]  xl:w-[400px] xl:h-20 xl:text-4xl lg:text-3xl lg:w-[350px] sm:w-[300px] sm:h-16"
                    @click="$emit('showDialog')">
                    Сделать заказ
                </DefaultButton>
            </div>
        </div>
    </section>
</template>
<script setup>
import DefaultButton from "@components/UI/Buttons/DefaultButton.vue";
</script>
