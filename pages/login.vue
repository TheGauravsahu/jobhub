<script setup lang="ts">
useSeoMeta({
    title: 'Job hub - Login',
    ogTitle: 'Job hub - Login',
    description: '',
    ogDescription: '',
})
import { useUserStore } from '~/store/user';
const userStore = useUserStore()

const router = useRouter()

let email = ref("")
let password = ref("")
let errors = ref("")

const submitForm = async () => {
    // console.log('submitForm');
    await $fetch('https://gsjobhub.pythonanywhere.com/api/auth/token/login/', {
        method: 'POST',
        body: {
            username: email.value,
            password: password.value,
        },
    }).then(response => {
        // console.log('response', response);
        userStore.setToken(response.auth_token, email.value)

        router.push({ path: '/' })

    }).catch(error => {
        console.log(error.response._data);
        errors.value = error.response._data.non_field_errors.join(' ');
    })
}

</script>

<template>
    <section class="vh-100 bg-image p-15">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div class="card" style="border-radius: 15px;">
                            <div class="card-body p-5">
                                <h4 class="text-center mb-15">Login</h4>

                                <form @submit.prevent="submitForm">

                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input v-model="email" type="email" id="form3Example3cg"
                                            class="form-control form-control-md" />
                                        <label class="form-label" for="form3Example3cg">Your Email</label>
                                    </div>

                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input v-model="password" type="password" id="form3Example4cg"
                                            class="form-control form-control-md" />
                                        <label class="form-label" for="form3Example4cg">Password</label>
                                    </div>


                                    <p class="text-danger text-center">{{ errors }}</p>
                                    <br>
                                    <div class="d-flex align-items-center justify-content-center ">
                                        <button type="submit" data-mdb-button-init data-mdb-ripple-init
                                            class="btn btn-default text-white py-2">Login</button>
                                    </div>

                                    <p class="text-center text-muted mt-5 mb-0">Don't have an account? <NuxtLink
                                            to="/signup" class="fw-bold text-body"><u>SignUp here</u></NuxtLink>
                                    </p>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>