<script setup lang="ts">
useSeoMeta({
    title: 'Job hub - Sign Up',
    ogTitle: 'Job hub - Sign Up',
    description: '',
    ogDescription: '',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

const router = useRouter()

let email = ref("")
let password = ref("")
let password2 = ref("")
let errors = ref<string | string[]>([]);

const submitForm = async () => {
    console.log('submitForm');
    await $fetch('https://gsjobhub.pythonanywhere.com/api/auth/users/', {
        method: 'POST',
        body: {
            username: email.value,
            password: password.value,
            email: email.value
        },
    }).then(response => {
        console.log('response', response);
        router.push({ path: '/login' })

    })
        .catch(error => {
            console.log(error.response._data);
            errors.value = error.response._data.non_field_errors.join(' ');

        })
}

</script>
<template>
    <section class="vh-100 bg-image p-15 mt-90 mb-100">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div class="card" style="border-radius: 15px;">
                            <div class="card-body p-5">
                                <h4 class="text-center mb-15">Sign Up</h4>

                                <form @submit.prevent="submitForm">
                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input placeholder="Your email" v-model="email" type="email"
                                            id="form3Example3cg" class="form-control form-control-md" />
                                        <label class="form-label" for="form3Example3cg">Your Email</label>
                                    </div>

                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input v-model="password" type="password" placeholder="Your password"
                                            help="Choose a password" class="form-control form-control-md" />

                                        <label class="form-label" for="form3Example4cg">Password</label>
                                    </div>

                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input placeholder="Confirm password" v-model="password2" type="password"
                                            name="password_confirm" />
                                        <label class="form-label" for="form3Example4cdg">Repeat your
                                            password</label>
                                    </div>

                                    <!-- <p class="text-danger text-center">{{ errors }}</p> -->


                                    <div class="d-flex align-items-center justify-content-center ">
                                        <button type="submit" data-mdb-button-init data-mdb-ripple-init
                                            class="btn btn-default text-white py-2">Register</button>
                                    </div>

                                    <p class="text-center text-muted mt-5 mb-0">Have already an account? <NuxtLink
                                            href="/login" class="fw-bold text-body"><u>Login here</u></NuxtLink>
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

<style scoped>
.formkit-actions {
    display: none;
}
</style>