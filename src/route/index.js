import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/pages/Dashboard.vue";
import Users from "@/pages/Users.vue";
import Settings from "@/pages/Settings.vue";

// 1. ROUTES itu buat menentukan tiap endpoint
const routes = [
    { path: '/', name: 'Dashboard', component: Dashboard},
    { path: '/users', name: 'Users', component: Users},
    { path: '/settings', name: 'Settings', component: Settings}
]
// 2. ROUTER buat export route supaya bisa di pake
const router = createRouter({
    history: createWebHistory(),
    routes // variable routes di pass di sini
})

export default router
