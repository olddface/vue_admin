import { defineStore } from 'pinia'

export const useUserStore = defineStore("user", {
    state: () => ({
        name: "",
        isLoggedIn: false,
    }),
    actions: {
        login(email) {
            this.name = email
            this.isLoggedIn = true
            localStorage.setItem('loggedIn', 'true')
            localStorage.setItem("name", email)
        },
        logout() {
            this.isLoggedIn = false
            this.name = 'user'
            localStorage.removeItem("loggedIn")
            localStorage.removeItem("name")
        },
        restoreSession() {
            const loggedIn = localStorage.getItem("loggedIn")
            const user = localStorage.getItem("name")
            if (loggedIn === "true") {
                this.name = user
                this.isLoggedIn = true
            }
        }
    },
})