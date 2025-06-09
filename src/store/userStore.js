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
            this.name = ''
            localStorage.removeItem("loggedIn")
            localStorage.removeItem("name")
        },
        restoreSession() {
            const loggedIn = localStorage.getItem("loggedIn")
            const user = localStorage.getItem("name")
            if (loggedIn === "true" && user) {
                this.name = user
                this.isLoggedIn = true
            } else {
                this.name = ''
                this.isLoggedIn = false
            }
        },
        currentStatus() {
            console.log(`name: ${this.name}---status: ${this.isLoggedIn}`)
        }
    },
})