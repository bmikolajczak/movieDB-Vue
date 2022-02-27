import { createWebHistory, createRouter } from "vue-router";
import store from "@/store";
// import Search from "@/components/Search.vue";
// import Profile from "@/views/Profile.vue";
// import Movie from "@/views/Movie.vue";
// import About from "@/views/About.vue";
const Search = () => import("@/components/Search.vue");
const About = () => import("@/views/About.vue");
const Movie = () => import("@/views/Movie.vue");
const Profile = () => import("@/views/Profile.vue");
const routes = [
  {
    path: "/",
    component: Search,
    name: "home",
  },
  {
    path: "/about",
    component: About,
    name: "about",
  },
  {
    path: "/movie/:id",
    component: Movie,
    name: "movie",
  },
  {
    path: "/profile",
    component: Profile,
    name: "profile",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "orange-class",
});
router.beforeEach((to, from, next) => {
  if (!to.matched.some((record) => record.meta.requiresAuth)) {
    next();
    return;
  }
  if (store.state.userLoggedIn) {
    next();
    return;
  } else {
    next({ name: "home" });
    return;
  }
});

export default router;
