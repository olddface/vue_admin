import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/pages/Dashboard.vue";
import Users from "@/pages/Users.vue";
import Settings from "@/pages/Settings.vue";
import Login from "@/pages/Login.vue";
import { useUserStore } from "@/store/userStore";

// 1. ROUTES itu buat menentukan tiap endpoint
const routes = [
    { path: '/login', name: 'login', component: Login},
    { path: '/', name: 'Dashboard', component: Dashboard, meta: { requiresAuth: true }},
    { path: '/users', name: 'Users', component: Users, meta: { requiresAuth: true }},
    { path: '/settings', name: 'Settings', component: Settings, meta: { requiresAuth: true }},
]
// 2. ROUTER buat export route supaya bisa di pake
const router = createRouter({
    history: createWebHistory(),
    routes, // variable routes(yang di atas) di pass di sini
})

// 3. buat guard (require auth) supaya gk bisa asal login
router.beforeEach((to, from, next) => {
    const user = useUserStore()
    if (!user.isLoggedIn) {
        user.restoreSession()
    }

    if(to.meta.requiresAuth && !useUserStore.isLoggedIn) {
        next("/login")
    } else {
        next()
    }
})
export default router
