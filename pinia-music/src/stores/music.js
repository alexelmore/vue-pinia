import { defineStore } from 'pinia'

export const useMusicStore = defineStore({
    id: "music",
    state: () => ({
        authStatus: false,
    }),
    getters: {
        isAuth() {
            return this.authStatus
        }
    }
})
