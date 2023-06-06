import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupVue from "../views/SignupView.vue";
import SigninVue from "../views/SigninVue.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomeView,
  },
  {
    name: "Sign Up",
    path: "/auth/signup",
    component: SignupVue,
  },
  {
    name: "Sign In",
    path: "/auth/signin",
    component: SigninVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
