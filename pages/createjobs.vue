<script setup>
import { useUserStore } from '~/store/user';

const userStore = useUserStore();
const router = useRouter();
const token = userStore.user.token;

definePageMeta({
    middleware: [
        'auth',
    ],
});

const title = ref("")
const category = ref("")
console.log(category)
const company_name = ref("")
const company_email = ref("")
const company_website = ref("")
const company_location = ref("")
const job_location = ref("")
const salary = ref("")
const description = ref("")
const categoryData = ref([])


const fetchCategories = async () => {
    try {
        const response = await $fetch("https://gsjobhub.pythonanywhere.com/api/category/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            },
        });
        categoryData.value = response; // Assuming response is the array of categories
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};

onMounted(async () => {
    await fetchCategories();
});

const submitForm = async () => {
    console.log('submitForm');

    await $fetch('https://gsjobhub.pythonanywhere.com/api/jobs/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
        },
        body: {
            title: title.value,
            description: description.value,
            category: {
                name: category.value
            },
            job_location: job_location.value,
            company_location: company_location.value,
            company_name: company_name.value,
            company_website: company_website.value,
            company_email: company_email.value,
            salary: parseFloat(salary.value),
        },
    }).then(response => {
        console.log('response', response);
        router.push({ path: '/browsejobs' })

    })
        .catch(error => {
            console.log(error);
        })
}

</script>


<template>
    <div class="container mt-120 mb-100">
        <div class="row mx-0 justify-content-center">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6 px-xxl-3">
                <form @submit.prevent="submitForm" class="w-100 rounded-1 p-4 border bg-white">
                    <label class="d-block mb-4">
                        <span class="form-label d-block">Job title</span>
                        <input v-model="title" required name="name" type="text" class="form-control"
                            placeholder="Joe Bloggs" />
                    </label>

                    <label class="d-block mb-4">
                        <span class="form-label d-block">Category</span>
                        <select v-model="category" required name="experience" class="form-select">
                            <option v-for="category in categoryData" :value="category.name">{{ category.name }}</option>
                        </select>
                    </label>


                    <label class="d-block mb-4">
                        <span class="form-label d-block">Company name</span>
                        <input v-model="company_name" required name="name" type="text" class="form-control"
                            placeholder="Joe Bloggs" />
                    </label>

                    <label class="d-block mb-4">
                        <span class="form-label d-block">Email address</span>
                        <input v-model="company_email" required type="email" class="form-control"
                            placeholder="joe.bloggs@example.com" />
                    </label>
                    <label class="d-block mb-4">
                        <span class="form-label d-block">Website</span>
                        <input v-model="company_website" required type="text" class="form-control"
                            placeholder="example.com" />
                    </label>
                    <label class="d-block mb-4">
                        <span class="form-label d-block">Company Location</span>
                        <input v-model="company_location" required type="text" class="form-control"
                            placeholder="New delhi, India" />
                    </label>
                    <label class="d-block mb-4">
                        <span class="form-label d-block">Job Location</span>
                        <input v-model="job_location" required type="text" class="form-control"
                            placeholder="Mumbai, India" />
                    </label>
                    <label class="d-block mb-4">
                        <span class="form-label d-block">Position salary
                            <p class="text-sm">in annum</p>
                        </span>
                        <input v-model="salary" required type="text" class="form-control" placeholder="2000" />
                    </label>



                    <label class="d-block mb-4">
                        <span class="form-label d-block">Tell us more company</span>
                        <textarea v-model="description" name="message" class="form-control" rows="3"
                            placeholder="What motivates you?"></textarea>
                    </label>



                    <div class="d-flex align-items-center justify-content-center ">
                        <button type="submit" data-mdb-button-init data-mdb-ripple-init
                            class="btn btn-default text-white py-2">Post</button>
                    </div>


                </form>
            </div>
        </div>
    </div>

</template>