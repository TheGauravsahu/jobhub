import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",

  state: () => ({
    user: {
      isAuthenticated: false,
      email: null,
      token: null,
    },
  }),

  actions: {
    setToken(token, email) {
      console.log(token, email);
      this.user.token = token;
      this.user.email = email;
      this.user.isAuthenticated = true;

      localStorage.setItem("user.email", email);
      localStorage.setItem("user.token", token);
    },

    removeToken() {
      console.log("removing token");
      this.user.token = null;
      this.user.email = null;
      this.user.isAuthenticated = false;

      localStorage.removeItem("user.email");
      localStorage.removeItem("user.token");
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
