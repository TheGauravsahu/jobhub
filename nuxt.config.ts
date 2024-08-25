// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          type: "text/javascript",
          src: "/assets/js/vendor/modernizr-3.6.0.min.js",
        },
        {
          type: "text/javascript",
          src: "/assets/js/vendor/jquery-3.6.0.min.js",
        },
        {
          type: "text/javascript",
          src: "/assets/js/vendor/jquery-migrate-3.3.0.min.js",
        },
        {
          type: "text/javascript",
          src: "/assets/js/vendor/bootstrap.bundle.min.js",
        },
        {
          type: "text/javascript",
          src: "/assets/js/vendor/bootstrap.bundle.min.js.map",
        },
        { type: "text/javascript", src: "/assets/js/plugins/waypoints.js" },
        { type: "text/javascript", src: "/assets/js/plugins/wow.js" },
        { type: "text/javascript", src: "/assets/js/plugins/magnific-popup.js" },
        {
          type: "text/javascript",
          src: "/assets/js/plugins/perfect-scrollbar.min.js",
        },
        { type: "text/javascript", src: "/assets/js/plugins/select2.min.js" },
        { type: "text/javascript", src: "/assets/js/plugins/isotope.js" },
        { type: "text/javascript", src: "/assets/js/plugins/scrollup.js" },
        {
          type: "text/javascript",
          src: "/assets/js/plugins/swiper-bundle.min.js",
        },
        { type: "text/javascript", src: "/assets/js/main.js" },
        { type: "text/javascript", src: "/assets/js/slider.js" },
        // { type: 'text/javascript', src: 'assets/js/noUISlider.js' },
      ],
    },
  },
  css: [
    "~/assets/css/main.css",
    "~/assets/css/plugins/animate.min.css",
    "~/assets/css/plugins/swiper-bundle.min.css",
  ],
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt",],
});
