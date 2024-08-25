<script setup lang="ts">
import { useUserStore } from '~/store/user';

const userStore = useUserStore();
const token = userStore.user.token;

const selectedCategory = ref('')
const searchQuery = ref('')
const categoryData = ref([])
const jobsData = ref([])



const fetchJobs = async () => {
    try {
        const response = await $fetch("https://gsjobhub.pythonanywhere.com/api/jobs/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            },
        });
        jobsData.value = response; // Assuming response is the array of categories
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};

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
    await fetchJobs();
});

const jobs = ref(jobsData || [])
const category = ref(categoryData || [])

function showAllJobs() {
    selectedCategory.value = ''
    searchQuery.value = ''
}

// Computed property to filter jobs based on the selected category
const filteredJobs = computed(() => {
    let filtered = jobs.value

    if (selectedCategory.value) {
        filtered = filtered.filter(job => job.category.name === selectedCategory.value)
    }

    if (searchQuery.value) {
        filtered = filtered.filter(job =>
            job.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            job.company_name.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
    }

    return filtered
})
</script>

<template>
    <main class="main">
        <section class="section-box-2">
            <div class="box-head-single none-bg">
                <div class="container">
                    <h4>There Are {{ jobsData.length }} Jobs<br />Here For you!</h4>
                    <div class="row mt-15 mb-40">
                        <div class="col-lg-7 col-md-9">
                            <span class="text-mutted">Discover your next career move, freelance gig, or
                                internship</span>
                        </div>
                        <div class="col-lg-5 col-md-3 text-lg-end text-start">
                            <ul class="breadcrumbs mt-sm-15">
                                <li><a href="#">Home</a></li>
                                <li>Browse Jobs</li>
                            </ul>
                        </div>
                    </div>
                    <div class="box-shadow-bdrd-15 box-filters">
                        <div class="row">
                            <div class="col-lg-5">
                                <div class="box-search-job">
                                    <form class="form-search-job">
                                        <input v-model="searchQuery" type="text" class="input-search-job"
                                            placeholder="UI Designer" />
                                    </form>
                                </div>

                            </div>
                            <div class="col-lg-7">
                                <button class="btn btn-default float-right">Find Now</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-box mt-80">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
                        <div class="content-page">
                            <div class="box-filters-job mt-15 mb-10">
                                <div class="row">
                                    <div class="col-lg-7">
                                        <span class="text-small">Showing {{ filteredJobs.length }}
                                            jobs</span>
                                    </div>

                                </div>
                            </div>
                            <div class="job-list-list mb-15">
                                <div class="list-recent-jobs">
                                    <!-- Item job -->
                                    <div v-for="job in filteredJobs" :key="job.id"
                                        class="card-job hover-up wow animate__animated animate__fadeIn">
                                        <NuxtLink :to="`/browsejobs/${job.id}`">
                                            <div class="card-job-top">
                                                <div class="card-job-top">
                                                    <h6 class="card-job-top--info-heading">
                                                        <NuxtLink :to="`/browsejobs/${job.id}`">
                                                            {{ job.title }}
                                                        </NuxtLink>
                                                    </h6>
                                                    <div class="row">
                                                        <div class="col-lg-7">
                                                            <NuxtLink :to="`/browsejobs/${job.id}`">
                                                                <NuxtLink :to="`/browsejobs/${job.id}`">
                                                                    <span class="card-job-top--company">{{
                                                                        job.company_name }}</span>
                                                                </NuxtLink>
                                                            </NuxtLink>
                                                        </div>
                                                        <div class="col-lg-5 text-lg-end">
                                                            <span class="card-job-top--price">
                                                                ₹{{ job.salary }}<span>/Annum</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-job-description mt-20">
                                                {{ job.description.slice(0, 200) }} ...
                                            </div>
                                        </NuxtLink>


                                    </div>
                                    <!-- End item job -->


                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12 col-sm-12 col-12">

                        <div class="sidebar-shadow none-shadow mb-30">
                            <div class="sidebar-filters">

                                <div class="filter-block mb-30">
                                    <h5 class="medium-heading mb-15">Categoy</h5>

                                </div>
                                <div class="filter-block mb-30">

                                    <div class="form-group">

                                        <ul class="list-checkbox">
                                            <li>
                                                <label class="cb-container">
                                                    <span class="text-md" @click="showAllJobs">All Jobs</span>
                                                </label>

                                            </li>

                                            <li v-for="cat in category" :key="cat.name">
                                                <label class="cb-container">
                                                    <input type="radio" :value="cat.name" v-model="selectedCategory"
                                                        :id="`category-${cat.name}`" />
                                                    <span class="text-md" :for="`category-${cat.name}`">
                                                        {{ cat.name }}
                                                    </span>
                                                </label>


                                            </li>

                                        </ul>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div class="sidebar-with-bg background-primary bg-sidebar pb-80">
                            <h5 class="medium-heading text-white mb-20 mt-20">Recruiting?</h5>
                            <p class="text-body-999 text-white mb-30">Advertise your jobs to millions of monthly users
                                and
                                search 16.8 million CVs in our database.</p>
                            <a href="job-grid-2.html" class="btn btn-border icon-chevron-right btn-white-sm">Post a
                                Job</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="section-box">
            <div class="container">
                <ul class="list-partners">
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay="0s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/samsung.svg" /></figure>
                        </a>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".1s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/google.svg" /></figure>
                        </a>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".2s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/facebook.svg" /></figure>
                        </a>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".3s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/pinterest.svg" /></figure>
                        </a>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".4s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/avaya.svg" /></figure>
                        </a>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".5s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/forbes.svg" /></figure>
                        </a>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".1s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/avis.svg" /></figure>
                        </a>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".2s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/nielsen.svg" /></figure>
                        </a>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".3s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/doordash.svg" /></figure>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <section class="section-box mt-50 mb-60">
            <div class="container">
                <div class="box-newsletter">
                    <h5 class="text-md-newsletter">Sign up to get</h5>
                    <h6 class="text-lg-newsletter">the latest jobs</h6>
                    <div class="box-form-newsletter mt-30">
                        <form class="form-newsletter">
                            <input type="text" class="input-newsletter" value=""
                                placeholder="contact.alithemes@gmail.com" />
                            <button class="btn btn-default font-heading icon-send-letter">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div class="box-newsletter-bottom">
                    <div class="newsletter-bottom"></div>
                </div>
            </div>
        </section>
    </main>
</template>
