<template>
  <header class="bg-white shadow h-16 px-4 flex items-center justify-between ml-64">
    <h1 class="text-xl font-semibold">Welcome</h1>
    <button class="text-sm px-3 py-1 bg-red-500 text-white rounded" @click="user.logout">Logout</button>
  </header>
</template>


<script setup>
import { useUserStore } from '@/store/userStore';

const user = useUserStore()
</script>