<template>
  <header class="bg-white shadow h-16 px-4 flex items-center justify-between ml-64">
    <h1 class="text-xl font-semibold">Welcome {{ user.user?.name }}</h1>
    <button class="text-sm px-3 py-1 bg-red-500 text-white rounded" @click="Logout">Logout</button>
  </header>
</template>


<script setup>
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'vue-router';

const user = useUserStore()
const router = useRouter()
// fix to make logout have route
const Logout = () => {
  user.logout()
  router.push("/login")
}
</script>