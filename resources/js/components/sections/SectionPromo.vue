<template>
    <section class="bg-smoky py-20 relative">
        <div class="flex justify-between items-center">
            <div class="container mx-auto">
                <div class="w-[560px] mx-auto lg:w-[300px]">
                    <div class="text-light-gray text-5xl xl:text-4xl lg:text-3xl">Портфолио</div>
                    <h1 class="black2 text-[87px] mt-2 leading-[1.2em] font-bold xl:text-[60px] lg:text-5xl">
                        Графического дизайнера</h1>
                    <div class="text-center text-light-gray text-4xl mt-3 xl:text-4xl xl:text-left lg:text-3xl">
                        Владимира Долгова
                    </div>
                    <DefaultButton @click="$emit('showDialog')"
                                   class="w-[350px] rounded-[20px] h-16 text-3xl shadow-8 mt-10 ml-12 lg:w-[280px] lg:h-12 lg:text-2xl lg:ml-2">
                        Сделать заказ
                    </DefaultButton>
                </div>
            </div>
            <IconLargeLogo class="sm:hidden max-w-[1000px] w-full"/>
        </div>

    </section>
</template>
<script setup>
import IconLargeLogo from "@components/icons/logos/IconLargeLogo.vue";
import DefaultButton from "@components/UI/Buttons/DefaultButton.vue";
</script>
