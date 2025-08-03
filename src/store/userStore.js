import { defineStore } from 'pinia'
import api from '../lib/axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isLoggedIn: false,
  }),
  actions: {
    setUser(data) {
      this.user = data
      this.isLoggedIn = true
    },
    logout() {
      this.user = null
      this.isLoggedIn = false
      localStorage.removeItem('token')
    },
    async restoreSession() {
      const token = localStorage.getItem('token')
      if (!token) return

      try {
        const res = await api.get('/me')
        this.setUser(res.data)
      } catch {
        this.logout()
      }
    }
  },
})
