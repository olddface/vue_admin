<template>
  <div>
    <h1 class="text-white text-2xl w-full">Welcome, {{ user.name }}</h1>
    <div class="mt-3 text-white"> is login? {{ user.isLoggedIn ? "yes" : "no"}} </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/userStore'

const user = useUserStore()
</script>
