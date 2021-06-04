import { createRouter, createWebHistory } from "@ionic/vue-router";
import Home from "../views/Home.vue";
import MemoriesPage from "../pages/MemoriesPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/memories",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/memories",
    name: "MemoriesPage",
    component: MemoriesPage,
  },
  {
    path: "/memories/:id",
    name: "details",
    component: () => import("../pages/MemoryDetails.vue"),
  },
  {
    path: "/memories/add",
    name: "add",
    component: () => import("../pages/AddMemoryPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
