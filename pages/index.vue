<script setup>
import { useUserStore } from '~/store/user';
const userStore = useUserStore();
const router = useRouter();
const token = userStore.user.token;
const jobs = ref([])

const fetchJobs = async () => {
    try {
        const response = await $fetch("https://gsjobhub.pythonanywhere.com/api/jobs/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            },
        });
        jobs.value = response; // Assuming response is the array of categories
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};

onMounted(async () => {
    await fetchJobs();
});

jobs.value = jobs.value.slice(0, 10)


</script>

<template>
    <main class="main">
        <section class="section-box">
            <div class="banner-hero hero-1">
                <div class="banner-inner">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="block-banner">
                                <span
                                    class="text-small-primary text-small-primary--disk text-uppercase wow animate__animated animate__fadeInUp">Best
                                    jobs place</span>
                                <h1 class="heading-banner wow animate__animated animate__fadeInUp">The Easiest Way to
                                    Get Your New Job</h1>
                                <div class="banner-description mt-30 wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".1s">Each month, more than 3 million job seekers turn to website in
                                    their search for work, making over 140,000 applications every single day</div>

                                <div class="list-tags-banner mt-60 wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".3s">
                                    <strong>Popular Searches:</strong>
                                    <NuxtLink> Designer</NuxtLink>, <NuxtLink>Developer</NuxtLink>, <NuxtLink>Web
                                    </NuxtLink>, <NuxtLink>Senior</NuxtLink>,
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="banner-imgs">
                                <img alt="jobhub" src="assets/imgs/banner/banner.png" class="img-responsive shape-1" />
                                <span class="union-icon"><img alt="jobhub" src="assets/imgs/banner/union.svg"
                                        class="img-responsive shape-3" /></span>
                                <span class="congratulation-icon"><img alt="jobhub"
                                        src="assets/imgs/banner/congratulation.svg"
                                        class="img-responsive shape-2" /></span>
                                <span class="docs-icon"><img alt="jobhub" src="assets/imgs/banner/docs.svg"
                                        class="img-responsive shape-2" /></span>
                                <span class="course-icon"><img alt="jobhub" src="assets/imgs/banner/course.svg"
                                        class="img-responsive shape-3" /></span>
                                <span class="web-dev-icon"><img alt="jobhub" src="assets/imgs/banner/web-dev.svg"
                                        class="img-responsive shape-3" /></span>
                                <span class="tick-icon"><img alt="jobhub" src="assets/imgs/banner/tick.svg"
                                        class="img-responsive shape-3" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <br>
        <section class="section-box">
            <div class="container">
                <div class="row align-items-end">
                    <div class="col-lg-7">
                        <h2 class="section-title mb-20 wow animate__animated animate__fadeInUp">Browse by category</h2>
                        <p class="text-md-lh28 color-black-5 wow animate__animated animate__fadeInUp">Find the type of
                            work
                            you need, clearly defined and ready to start. Work begins as soon as you purchase and
                            provide
                            requirements.</p>
                    </div>
                    <div class="col-lg-5 text-lg-end text-start wow animate__animated animate__fadeInUp"
                        data-wow-delay=".2s">
                        <NuxtLink to="/browsejobs" class="mt-sm-15 mt-lg-30 btn btn-border icon-chevron-right">Browse
                            all</NuxtLink>
                    </div>
                </div>
                <div class="row mt-70">
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="card-grid hover-up wow animate__animated animate__fadeInUp">
                            <div class="text-center">
                                <NuxtLink to="/">
                                    <figure><img alt="jobhub" src="assets/imgs/theme/icons/marketing.svg" /></figure>
                                </NuxtLink>
                            </div>
                            <h5 class="text-center mt-20 card-heading">
                                <NuxtLink to="/">Marketing &
                                    Communication</NuxtLink>
                            </h5>
                            <p class="text-center text-stroke-40 mt-20">156 Available Vacancy</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="card-grid hover-up wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                            <div class="text-center">
                                <NuxtLink to="/">
                                    <figure><img alt="jobhub" src="assets/imgs/theme/icons/content-writer.svg" />
                                    </figure>
                                </NuxtLink>
                            </div>
                            <h5 class="text-center mt-20 card-heading">
                                <NuxtLink to="/">Content <br>Writer</NuxtLink>
                            </h5>
                            <p class="text-center text-stroke-40 mt-20">268 Available Vacancy</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12 wow animate__animated animate__fadeInUp"
                        data-wow-delay=".2s">
                        <div class="card-grid hover-up">
                            <div class="text-center">
                                <NuxtLink to="/">
                                    <figure><img src="assets/imgs/theme/icons/marketing-director.svg" alt="jobhub" />
                                    </figure>
                                </NuxtLink>
                            </div>
                            <h5 class="text-center mt-20 card-heading">
                                <NuxtLink to="/">Marketing
                                    <br>Director
                                </NuxtLink>
                            </h5>
                            <p class="text-center text-stroke-40 mt-20">145 Available Vacancy</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="card-grid hover-up wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                            <div class="text-center">
                                <NuxtLink to="/">
                                    <figure><img src="assets/imgs/theme/icons/system-analyst.svg" alt="jobhub" />
                                    </figure>
                                </NuxtLink>
                            </div>
                            <h5 class="text-center mt-20 card-heading">
                                <NuxtLink to="/">System <br>Analyst</NuxtLink>
                            </h5>
                            <p class="text-center text-stroke-40 mt-20">236 Available Vacancy</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="card-grid hover-up wow animate__animated animate__fadeInUp">
                            <div class="text-center">
                                <NuxtLink to="/">
                                    <figure><img src="assets/imgs/theme/icons/business-development.svg" alt="jobhub" />
                                    </figure>
                                </NuxtLink>
                            </div>
                            <h5 class="text-center mt-20 card-heading">
                                <NuxtLink to="/">Digital<br> Designer</NuxtLink>
                            </h5>
                            <p class="text-center text-stroke-40 mt-20">56 Available Vacancy</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="card-grid hover-up wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                            <div class="text-center">
                                <NuxtLink to="/">
                                    <figure><img src="assets/imgs/theme/icons/proof-reading.svg" alt="jobhub" />
                                    </figure>
                                </NuxtLink>
                            </div>
                            <h5 class="text-center mt-20 card-heading">
                                <NuxtLink to="/">Market <br>Research</NuxtLink>
                            </h5>
                            <p class="text-center text-stroke-40 mt-20">168 Available Vacancy</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="card-grid hover-up wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                            <div class="text-center card-img">
                                <NuxtLink to="/">
                                    <figure>
                                        <img src="assets/imgs/theme/icons/testing.svg" alt="jobhub" />
                                    </figure>
                                </NuxtLink>
                            </div>
                            <h5 class="text-center mt-20 card-heading">
                                <NuxtLink to="/">Human<br> Resource</NuxtLink>
                            </h5>
                            <p class="text-center text-stroke-40 mt-20">628 Available Vacancy</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="card-grid hover-up wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                            <div class="text-center mt-15">
                                <h3>18,265+</h3>
                            </div>
                            <p class="text-center mt-30 text-stroke-40">Jobs are waiting for you</p>
                            <div class="text-center mt-30">
                                <div class="box-button-shadow">
                                    <NuxtLink to="/browsejobs" class="btn btn-default">Explore
                                        more</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-box mt-40">
            <div class="container">
                <div class="row align-items-end">
                    <div class="col-lg-4">
                        <h2 class="section-title mb-20 wow animate__animated animate__fadeInUp">Recent Jobs</h2>
                        <p class="text-md-lh28 color-black-5wow animate__animated animate__fadeInUp"
                            data-wow-delay=".1s">{{ jobs.length }} new
                            opportunities posted today!</p>
                    </div>

                </div>
                <div class="mt-70">
                    <div class="tab-content" id="myTabContent-1">
                        <div class="tab-pane fade show active" id="tab-one-1" role="tabpanel"
                            aria-labelledby="tab-one-1">
                            <div class="row">

                                <div v-for="job in jobs" class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img
                                                                src="assets/imgs/jobs/logos/logo-1.svg"
                                                                alt="jobhub" /></span> <span>{{ job.company_name
                                                            }}</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">{{
                                                        job.category.name
                                                    }}</NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink :to="`/browsejobs/${job.id}`">{{ job.title }}</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">{{ job.formatted_created_at }}</span>
                                                <span class="card-location">{{ job.job_location }}</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price d-flex">₹{{ job.salary
                                                            }}<span>/Annum</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img src="assets/imgs/theme/icons/shield-check.svg"
                                                                alt="jobhub" /></span>
                                                        <span class="ml-5"><img
                                                                src="assets/imgs/theme/icons/bookmark.svg"
                                                                alt="jobhub" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="tab-pane fade" id="tab-two-1" role="tabpanel" aria-labelledby="tab-two-1">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink>
                                                <figure><img src="assets/imgs/jobs/job-7.png" alt="jobhub" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent22</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img
                                                                src="assets/imgs/jobs/logos/logo-1.svg"
                                                                alt="jobhub" /></span> <span>Levis</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">Senior Full Stack Engineer,
                                                    Creator Success Full Time</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">35 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $4200<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img src="assets/imgs/theme/icons/shield-check.svg"
                                                                alt="jobhub" /></span>
                                                        <span class="ml-5"><img
                                                                src="assets/imgs/theme/icons/bookmark.svg"
                                                                alt="jobhub" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img src="assets/imgs/jobs/job-8.png" alt="jobhub" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img
                                                                src="assets/imgs/jobs/logos/logo-2.svg"
                                                                alt="jobhub" /></span> <span>Armani</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">A professional Facebook cover
                                                    photo banner design</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $1200<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img
                                                                src="assets/imgs/theme/icons/bookmark.svg"
                                                                alt="jobhub" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-9.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-3.svg" /></span>
                                                        <span>Prada</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">Unique and aesthetic Instagram
                                                    post images</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $2600<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-10.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-4.svg" /></span>
                                                        <span>Adidas</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">Premium quality Instagram post
                                                    and stories</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $120<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-1.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-5.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">An amazing facebook banner,
                                                    cover design</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $125<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-2.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-6.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">A complete social media pages
                                                    setup for your business.</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $120<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tab-three-1" role="tabpanel" aria-labelledby="tab-three-1">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-1.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-1.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">Senior Full Stack Engineer,
                                                    Creator Success Full Time</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">39 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $5200<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-2.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-2.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">A professional Facebook cover
                                                    photo banner design</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $1200<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-3.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-3.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">Unique and aesthetic Instagram
                                                    post images</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $2600<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-4.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-4.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">Premium quality Instagram post
                                                    and stories</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $120<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-5.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-5.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">An amazing facebook banner,
                                                    cover design</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $125<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-6.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-6.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">A complete social media pages
                                                    setup for your business.</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $120<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tab-four-1" role="tabpanel" aria-labelledby="tab-four-1">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-1.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-1.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">Senior Full Stack Engineer,
                                                    Creator Success Full Time</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">53 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $700<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-2.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-2.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">A professional Facebook cover
                                                    photo banner design</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $1200<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-3.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-3.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">Unique and aesthetic Instagram
                                                    post images</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $2600<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-4.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-4.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">Premium quality Instagram post
                                                    and stories</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $120<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-5.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-5.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">An amazing facebook banner,
                                                    cover design</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $125<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-6.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-6.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">A complete social media pages
                                                    setup for your business.</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $120<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tab-five-1" role="tabpanel" aria-labelledby="tab-five-1">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-1.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-1.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">Senior Full Stack Engineer,
                                                    Creator Success Full Time</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">46 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $800<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-2.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-2.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">A professional Facebook cover
                                                    photo banner design</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $1200<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-3.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-3.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">Unique and aesthetic Instagram
                                                    post images</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $2600<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-4.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-4.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">Premium quality Instagram post
                                                    and stories</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $120<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-5.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-5.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">An amazing facebook banner,
                                                    cover design</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $125<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-6.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-6.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">A complete social media pages
                                                    setup for your business.</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $120<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tab-six-1" role="tabpanel" aria-labelledby="tab-six-1">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-1.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-1.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">Senior Full Stack Engineer,
                                                    Creator Success Full Time</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $3200<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-2.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-2.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">A professional Facebook cover
                                                    photo banner design</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $1200<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-3.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-3.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">Unique and aesthetic Instagram
                                                    post images</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $2600<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-4.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-4.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">Premium quality Instagram post
                                                    and stories</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $120<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-5.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-5.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">An amazing facebook banner,
                                                    cover design</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $125<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="card-grid-2 hover-up">
                                        <div class="text-center card-grid-2-image">
                                            <NuxtLink to="/">
                                                <figure><img alt="jobhub" src="assets/imgs/jobs/job-6.png" /></figure>
                                            </NuxtLink>
                                            <label class="btn-urgent">Urgent</label>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-7 col-6">
                                                    <NuxtLink to="/" class="card-2-img-text">
                                                        <span class="card-grid-2-img-small"><img alt="jobhub"
                                                                src="assets/imgs/jobs/logos/logo-6.svg" /></span>
                                                        <span>Alithemes</span>
                                                    </NuxtLink>
                                                </div>
                                                <div class="col-lg-5 col-6 text-end">
                                                    <NuxtLink to="/" class="btn btn-grey-small disc-btn">Fulltime
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <h5 class="mt-20">
                                                <NuxtLink to="/">A complete social media pages
                                                    setup for your business.</NuxtLink>
                                            </h5>
                                            <div class="mt-15">
                                                <span class="card-time">3 mins ago</span>
                                                <span class="card-location">Chicago</span>
                                            </div>
                                            <div class="card-2-bottom mt-30">
                                                <div class="row">
                                                    <div class="col-lg-7 col-8">
                                                        <span class="card-text-price"> $120<span>/Month</span> </span>
                                                    </div>
                                                    <div class="col-lg-5 col-4 text-end">
                                                        <span><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/shield-check.svg" /></span>
                                                        <span class="ml-5"><img alt="jobhub"
                                                                src="assets/imgs/theme/icons/bookmark.svg" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-box mt-50 mb-70 bg-patern">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-sm-12">
                        <div class="content-job-inner">
                            <h2 class="section-title heading-lg wow animate__animated animate__fadeInUp">The #1 Job
                                Board for Graphic Design Jobs</h2>
                            <div class="mt-40 pr-50 text-md-lh28 wow animate__animated animate__fadeInUp">Search and
                                connect with the right candidates faster. This talent seach gives you the opportunity to
                                find candidates who may be a perfect fit for your role</div>
                            <div class="mt-40">
                                <div class="box-button-shadow wow animate__animated animate__fadeInUp">
                                    <NuxtLink to="/createjobs" class="btn btn-default">Post a job now</NuxtLink>
                                </div>
                                <NuxtLink to="/browsejobs" class="btn btn-link wow animate__animated animate__fadeInUp">
                                    Learn more</NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                        <div class="box-image-job">
                            <figure class=" wow animate__animated animate__fadeIn"><img alt="jobhub"
                                    src="assets/imgs/blog/img-job.png" /></figure>
                            <div class="job-top-creator">
                                <div class="job-top-creator-head">
                                    <h5>Top Freelancers</h5>
                                </div>
                                <ul>
                                    <li>
                                        <div>
                                            <figure><img alt="jobhub" src="assets/imgs/avatar/ava_13.png" /></figure>
                                            <div class="job-info-creator">
                                                <strong>Kate Adie</strong>
                                                <span>UI/UX Designer</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <figure><img alt="jobhub" src="assets/imgs/avatar/ava_14.png" /></figure>
                                            <div class="job-info-creator">
                                                <strong>John Lennon</strong>
                                                <span>Senior Art Director</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <figure><img alt="jobhub" src="assets/imgs/avatar/ava_15.png" /></figure>
                                            <div class="job-info-creator">
                                                <strong>Nadine Coyle</strong>
                                                <span>Photographer</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <figure><img alt="jobhub" src="assets/imgs/avatar/ava_16.png" /></figure>
                                            <div class="job-info-creator">
                                                <strong>Sarah Harding</strong>
                                                <span>Motion Designer</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="section-box">
            <div class="container">
                <ul class="list-partners">
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay="0s">
                        <NuxtLink>
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/samsung.svg" /></figure>
                        </NuxtLink>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".1s">
                        <NuxtLink>
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/google.svg" /></figure>
                        </NuxtLink>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".2s">
                        <NuxtLink>
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/facebook.svg" /></figure>
                        </NuxtLink>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".3s">
                        <NuxtLink>
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/pinterest.svg" /></figure>
                        </NuxtLink>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".4s">
                        <NuxtLink>
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/avaya.svg" /></figure>
                        </NuxtLink>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".5s">
                        <NuxtLink>
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/forbes.svg" /></figure>
                        </NuxtLink>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".1s">
                        <NuxtLink>
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/avis.svg" /></figure>
                        </NuxtLink>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".2s">
                        <NuxtLink>
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/nielsen.svg" /></figure>
                        </NuxtLink>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".3s">
                        <NuxtLink>
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/doordash.svg" /></figure>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>

        <section class="section-box mt-50 mb-60">
            <div class="container">
                <div class="box-newsletter">
                    <h5 class="text-md-newsletter">Sign up to get</h5>
                    <h6 class="text-lg-newsletter">the latest jobs</h6>

                </div>
                <div class="box-newsletter-bottom">
                    <div class="newsletter-bottom"></div>
                </div>
            </div>
        </section>
    </main>
</template>
