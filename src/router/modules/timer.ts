const router = [
  {
    path: "/timer",
    name: "timer",
    component: () => import("@/pages/timer/index.vue"),
    meta: {
      isShowNav: false,
    },
  },
  {
    path: "/addTimer",
    name: "addTimer",
    component: () => import("@/pages/timer/operate/index.vue"),
    meta: {
      isShowNav: true,
      navTitle: "新增定时",
    },
    beforeEnter: (to: any, from: any, next: any) => {
      if (to.query.timer) {
        to.meta.navTitle = "编辑定时";
      }
      next();
    },
  },
];

export default router;
