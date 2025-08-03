<!-- component -->
<template>
    <div class="max-w-lg mx-auto flex justify-center mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
        <h1 class="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">Welcome to My Company</h1>
        <form @submit.prevent="handleLogin" class="w-full flex flex-col gap-4">
            <div class="flex items-start flex-col justify-start">
                <label for="email" class="text-sm text-gray-700 dark:text-gray-200 mr-2 pt-3">Name:</label>
                <input
                    class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                    v-model="email"
                    placeholder="Name"
                    type="name" 
                    id="email" 
                    name="email"
                    required>
            </div>

            <div class="flex items-start flex-col justify-start">
                <label for="password" class="text-sm text-gray-700 dark:text-gray-200 mr-2">Password:</label>
                <input
                    class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    v-model="password"
                    placeholder="Password"
                    type="password" 
                    id="password" 
                    name="password"
                    required>
            </div>
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm">Login</button>
        </form>


    </div>
</template>

<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/userStore';
import api from '@/lib/axios';

const email = ref('')
const password = ref('')    

const user = useUserStore()
const router = useRouter()


// handle login... when you wanna login and press the button
async function handleLogin() {
    try {
        const res = await api.post('/login', {
            email: email.value,
            password: password.value
        })

        const token = res.data.token
        localStorage.setItem("token", token)

        const me = await api.get("/me")
        user.setUser(me.data)
        router.push("/")
    } catch (err){
        alert("login failed: ")
        console.error("login err: ", JSON.stringify(err))
    }
}
</script>