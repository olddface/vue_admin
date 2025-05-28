<template>
  <div>
    <Sidebar />
    <Navbar />
    <main class="ml-64 mt-16 p-4">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
</script>
