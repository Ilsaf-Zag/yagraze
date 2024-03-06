<template>
    <section class="pt-24">
        <div class="relative">
            <div class="container">
                <div>
                    <DefaultTitle>Особенности работы со мной</DefaultTitle>
                    <IconDefaultLine class="w-[440px] mx-auto mt-9 lg:w-[300px]"/>
                </div>
                <div class="flex justify-around flex-wrap mt-12 gap-x-4 max-w-[1250px] mx-auto">
                    <div
                        v-for="item of benifits"
                        class="bg-smoky shadow-2 mt-7 rounded-3xl relative text-black2 max-w-[325px] max-h-[260px] w-full py-6 px-6 lg:max-w-[280px]">
                        <h4 class="font-bold text-2xl lg:text-xl">{{item.title}}</h4>
                        <div class="mt-2 text-xl text-black2 lg:text-lg">
                            {{item.text}}
                        </div>
                        <IconTriangle class="w-4 absolute top-6 right-6"/>
                    </div>
                </div>
            </div>
            <div  class="absolute sm:hidden -bottom-1/2 w-60 -z-10 lg:w-40 lg:-bottom-1/4">
                <img src="@images/claims/pit.svg" alt="pit">
            </div>
        </div>
    </section>
</template>
<script setup>
import IconDefaultLine from "@components/icons/lines/IconDefaultLine.vue";
import DefaultTitle from "@components/title/DefaultTitle.vue";
import IconTriangle from "@components/icons/IconTriangle.vue";

const benifits = [
    {title:'Пошаговое согласование',text:'Разработка шаг за шагом. Вы всегда знаете, на каком этапе работы я нахожусь.'},
    {title:'Бесплатная консультация',text:'Во время работы над вашим заказом делюсь советами по деталям касательно визуала.'},
    {title:'Максимум два проекта одновременно',text:'Избегаю дедлайны, уделяя больше времени для работы над вашим заказом.'},
    {title:'Никогда не пропадаю',text:'Если я взял заказ, значит я буду на связи для вас почти 24/7.'},
    {title:'Всегда соблюдаю сроки',text:'Если я назвал сроки, то будьте уверены, что я в них уложусь.'},

]
</script>
