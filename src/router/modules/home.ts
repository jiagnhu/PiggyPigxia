const router = [
  {
    path: "/home",
    name: "home",
    component: () => import("@/pages/home/index.vue"),
    meta: {
      isShowNav: true,
      isQuit: true,
      navTitle: "",
      children: [
        {
          title: "设置",
          path: "/setting",
        },
      ],
    },
  },
];

export default router;
