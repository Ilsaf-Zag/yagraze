<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="text-center">
            <h1 class="text-4xl font-bold mb-6">404 Not Found</h1>
            <p class="text-gray-600 text-lg mb-8">Страница, которую вы ищете, не существует.</p>
            <div class="flex space-x-8 justify-between">
                <button class="text-blue-500 hover:underline" @click="back">Вернуться назад</button>
                <router-link :to="{name:'home'}" class="text-blue-500 hover:underline">Перейти на главную</router-link>
            </div>

        </div>
    </div>
</template>
<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
function back(){
    router.go(-1)
}
</script>
