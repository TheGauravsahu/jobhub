<script setup>

useHead(
    {
        link: [{ rel: 'icon', href: 'favicon.svg' }],
    }
)

import { useUserStore } from '~/store/user';
const userStore = useUserStore();
const token = userStore.user.token;
const job = ref({})
const route = useRoute();
const id = route.params.id;

useHead({
    link: [{ rel: 'icon', href: '/favicon.svg' }],
});

const fetchJob = async () => {
    if (!token) {
        console.error('No token available');
        return;
    }

    try {
        const response = await fetch(`https://gsjobhub.pythonanywhere.com/api/jobs/${id}/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        job.value = data;
    } catch (err) {
        console.error('Error fetching job details:', err);
    }
};

onMounted(() => {
    fetchJob();
});


</script>

<template>

    <main class="main">
        <section class="section-box">
            <div class="box-head-single">
                <div class="container">
                    <h3>{{ job.title }}</h3>
                    <ul class="breadcrumbs">
                        <li><a href="#">Home</a></li>
                        <li>Jobs listing</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="section-box mt-50">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12">

                        <div class="content-single">

                            <p>{{ job.description }}</p>

                        </div>

                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
                        <div class="sidebar-shadow">
                            <div class="sidebar-heading">
                                <div class="avatar-sidebar">

                                    <div class="sidebar">
                                        <h5 class="sidebar-company">{{ job.company_name }}</h5>
                                        <a :href="job.company_website" class="sidebar-website-text">{{
                                            job.company_website }}</a>

                                    </div>
                                </div>
                            </div>
                            <div class="text-description mt-15">
                                {{ job.company_location }}
                            </div>

                            <div class="sidebar-list-job">
                                <ul>
                                    <li>
                                        <div class="sidebar-icon-item"><i class="fi-rr-briefcase"></i></div>
                                    </li>
                                    <li>
                                        <div class="sidebar-icon-item"><i class="fi-rr-marker"></i></div>
                                        <div class="sidebar-text-info">
                                            <span class="text-description">Location</span>
                                            <strong class="small-heading">{{ job.job_location }}</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="sidebar-icon-item"><i class="fi-rr-dollar"></i></div>
                                        <div class="sidebar-text-info">
                                            <span class="text-description">Salary</span>
                                            <strong class="small-heading">₹{{ job.salary }}</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="sidebar-icon-item"><i class="fi-rr-clock"></i></div>
                                        <div class="sidebar-text-info">
                                            <span class="text-description">Date posted</span>
                                            <strong class="small-heading">{{ job.formatted_created_at }}</strong>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                            <div class="sidebar-team-member pt-40">
                                <h6 class="small-heading">Contact Info</h6>
                                <div class="info-address">
                                    <span><i class="fi-rr-marker"></i> <span>{{ job.company_location }}
                                    </span></span>
                                    <span><i class="fi-rr-paper-plane"></i> <span>{{ job.company_email }}</span></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
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