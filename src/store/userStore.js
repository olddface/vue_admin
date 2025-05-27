import { defineStore } from 'pinia'

export const useUserStore = defineStore("user", {
    state: () => ({
        name: "Admin",
        isLoggedIn: true,
    }),
    actions: {
        logout() {
            this.isLoggedIn = false
            this.name = ''
        },
    },
})