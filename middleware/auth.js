import { useUserStore } from "~~/store/user";

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const userStore = useUserStore();
    const token = localStorage.getItem("user.token");

    if (!userStore.user.isAuthenticated && !token) {
      return navigateTo("/login");
    }
  }
});
