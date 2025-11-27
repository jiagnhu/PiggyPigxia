const router = [
  {
    path: "/firmware",
    name: "firmware",
    component: () => import("@/pages/firmware/index.vue"),
    meta: {
      isShowNav: true,
      navTitle: "固件升级",
    },
  },
];

export default router;
