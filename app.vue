<script setup lang="ts">

useHead(
  {
    link: [{ rel: 'icon', href: 'favicon.svg' }],
  }
)

useSeoMeta({
  title: 'Job hub - Land your first job',
  ogTitle: 'Job hub - Land your first job',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
