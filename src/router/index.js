import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Vote",
    name: "Vote",
    component: () =>
      import("../views/Vote.vue"),
  },
  {
    path: "/SwapShoot",
    name: "SwapShoot",
    
    component: () =>
      import("../views/SwapShoot.vue"),
  },
  {
    path: "/SwapShootPrivacy",
    name: "SwapShootPrivacy",
    
    component: () =>
      import("../views/SS-Privacy.vue"),
  },
  {
    path: "/RandReddit",
    name: "RandReddit",
    
    component: () =>
      import("../views/RandReddit.vue"),
  },
  {
    path: "/Decrypted",
    name: "Decrypted",
    
    component: () =>
      import("../views/Decrypted.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
