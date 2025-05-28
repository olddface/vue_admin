<template>
  <div>
    <h1>Welcome, {{ user.name }}</h1>
    <button @click="user.logout">Logout</button>
  </div>
</template>

<script setup>
import { useUserStore } from '../store/userStore'

const user = useUserStore()
</script>
