<template>
  <div>
    <Sidebar v-if="userStore.isLoggedIn" />
    <Navbar v-if="userStore.isLoggedIn" />
    <main class="w-full mx-auto">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { useUserStore } from './store/userStore'
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'

const userStore = useUserStore()
userStore.restoreSession()
</script>
