const router = [
  {
    path: "/user",
    name: "user",
    component: () => import("@/pages/user/index.vue"),
    meta: {
      isShowNav: true,
      navTitle: "用户信息",
    },
  },
];

export default router;
