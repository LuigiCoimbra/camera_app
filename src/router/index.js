import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import ParcView from "@/views/ParcView.vue";
import EvidenceView from "@/views/EvidenceView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/login",
    name: "home",
    component: HomeView,
  },
  {
    path: "/parc",
    name: "parc",
    component: ParcView,
  },
  {
    path: "/evidence",
    name: "evidence",
    component: EvidenceView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
