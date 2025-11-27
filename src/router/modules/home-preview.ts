const router = [
  {
    path: "/home-preview",
    name: "home-preview",
    component: () => import("@/pages/home/home-preview.vue"),
    meta: {
      isShowNav: true,
      isQuit: true,
      navTitle: "猪猪侠AI毛绒",
    },
  },
];

export default router;
