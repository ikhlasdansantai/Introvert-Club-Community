import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: async () => import("../views/HomeViews.vue"),
    },
    {
      path: "/karya-kami",
      name: "karya-kami",
      component: async () => import("../views/OurWorks.vue"),
    },
    {
      path: "/tentang-kami",
      name: "tentang-kami",
      component: async () => import("../views/AboutViews.vue"),
    },
  ],
});

export default router;
