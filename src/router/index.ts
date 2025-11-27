import { createRouter, createWebHashHistory } from "vue-router";

const files = import.meta.globEager("./modules/**/*.ts");

const modules = Object.values(files)
  .map((item) => item.default)
  .flat();

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/pages/frame/index.vue"),
      children: modules,
      redirect: "/home-preview", //页面默认加载的路由
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
