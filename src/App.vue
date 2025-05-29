<template>
  <div>
    <Sidebar v-if="loggedIn"/>
    <Navbar v-if="loggedIn"/>
    <main class="ml-64 mt-16 p-4">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { useUserStore } from './store/userStore';
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'

const loggedIn = useUserStore().isLoggedIn
</script>
