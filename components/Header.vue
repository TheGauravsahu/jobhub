<script setup>
const isOpen = ref(false)
import { useUserStore } from '~/store/user';

const userStore = useUserStore();
const router = useRouter()

const logout = () => {
    userStore.removeToken()
    isOpen = false;
    router.push({ path: '/login' })
}

</script>

<template>

    <header class="header sticky-bar">
        <div class="container">
            <div class="main-header">
                <div class="header-left">
                    <div class="header-logo">
                        <NuxtLink to="/" class="d-flex"><img alt="jobhub" src="assets/imgs/theme/jobhub-logo.svg" />
                        </NuxtLink>
                    </div>
                    <div class="header-nav align-items-center">
                        <nav class="nav-main-menu d-none d-xl-block">
                            <ul class="main-menu align-items-center d-flex">
                                <li class="">
                                    <NuxtLink to="/" class="active">Home</NuxtLink>
                                </li>
                                <li class="">
                                    <NuxtLink to="/browsejobs">Browse Jobs</NuxtLink>
                                </li>
                                <li v-show="userStore.user.isAuthenticated">
                                    <NuxtLink to="/createjobs">Create a job</NuxtLink>
                                </li>
                                <li v-if="userStore.user.isAuthenticated">
                                    <button type="submit" @click="logout"
                                        class="btn btn-default text-white py-2">Logout</button>
                                </li>
                                <li v-else>
                                    <NuxtLink to="/login" class="btn btn-default text-white py-2">Login</NuxtLink>
                                </li>

                            </ul>
                        </nav>
                        <div @click="isOpen = !isOpen" class="burger-icon burger-icon-white">
                            <span class="burger-icon-top"></span>
                            <span class="burger-icon-mid"></span>
                            <span class="burger-icon-bottom"></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </header>
    <div v-show="isOpen" class="mobile-header-active mobile-header-wrapper-style perfect-scrollbar  sidebar-visible">
        <div class="mobile-header-wrapper-inner">
            <div class="mobile-header-top">
                <div class="user-account">
                    <img src="assets/imgs/avatar/ava_1.png" alt="jobhub" />
                    <div class="content">
                        <h6 class="user-name">{{ userStore.user.email }}</h6>
                    </div>
                </div>
                <div @click="isOpen = !isOpen" class="burger-icon burger-icon-white">
                    <span class="burger-icon-top"></span>
                    <span class="burger-icon-mid"></span>
                    <span class="burger-icon-bottom"></span>
                </div>
            </div>
            <div class="mobile-header-content-area">
                <div class="perfect-scroll">

                    <div class="mobile-menu-wrap mobile-header-border">
                        <!-- mobile menu start -->
                        <nav>
                            <ul class="mobile-menu font-heading d-flex flex-column gap-0">
                                <li class="">
                                    <NuxtLink @click="isOpen = !isOpen" to="/" class="active">Home</NuxtLink>
                                </li>
                                <li class="">
                                    <NuxtLink @click="isOpen = !isOpen" to="/browsejobs">Browse Jobs</NuxtLink>
                                </li>
                                <li v-show="userStore.user.isAuthenticated">
                                    <NuxtLink @click="isOpen = !isOpen" to="/createjobs">Create a job</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink @click="isOpen = !isOpen" to="/login">Login</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink @click="isOpen = !isOpen" to="/signup">Sign up</NuxtLink>
                                </li>
                            </ul>
                        </nav>
                        <!-- mobile menu end -->
                    </div>
                    <div class="mobile-account">
                        <ul class="mobile-menu font-heading">

                            <li  @click="isOpen = !isOpen" v-show="userStore.user.isAuthenticated">
                                <NuxtLink @click="logout" to="/login">Log Out</NuxtLink>
                            </li>
                        </ul>
                    </div>
                  
                    <div class="site-copyright">Copyright 2022 © JobHub.</div>
                </div>
            </div>
        </div>
    </div>
</template>
