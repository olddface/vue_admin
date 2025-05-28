<template>
  <aside class="w-64 bg-gray-800 text-white h-screen p-4 absolute top-0 left-0">
    <h2 class="text-xl font-bold mb-4">Admin Panel</h2>
    <nav class="flex flex-col gap-3 pt-5">
      <RouterLink to="/" class="hover:text-gray-300">Dashboard</RouterLink>
      <RouterLink to="/users" class="hover:text-gray-300">Users</RouterLink>
      <RouterLink to="/settings" class="hover:text-gray-300">Settings</RouterLink>
    </nav>
  </aside>
</template>
