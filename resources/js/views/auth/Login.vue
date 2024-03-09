<template>
    <div class="min-h-[85%] flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded shadow-md">
            <h1 class="text-2xl font-semibold mb-6">Login Page</h1>

            <!-- Form -->
            <form @submit.prevent="login">
                <!-- Username Input -->
                <div class="mb-4">
                    <label for="username" class="block text-gray-600 text-sm font-medium mb-2">Email:</label>
                    <input
                        type="email"
                        id="username"
                        v-model="form.email"
                        class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        required
                        :class="{'border border-red-700':errors.email}"
                    />
                </div>

                <!-- Password Input -->
                <div>
                    <label for="password" class="block text-gray-600 text-sm font-medium mb-2">Password:</label>
                    <input
                        type="password"
                        id="password"
                        v-model="form.password"
                        class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        required
                        :class="{'border border-red-700':errors.email}"
                    />
                </div>
                <div class="text-red-700 mt-2" v-if="errors.email">{{ errors.email }}</div>

                <!-- Submit Button -->
                <button
                    type="submit"
                    class="w-full mt-6 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                >
                    Login
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import {reactive} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

const router = useRouter()
const errors = reactive({
    email: ''
})

const form = reactive({
    email: '',
    password: ''
})

function login() {
    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/api/login', form)
            .then(res => {
                if (res.data.success) {
                    router.push({name:'admin.home'})
                } else {
                    errors.email = res.data.message
                }
            })

    });

}
</script>
