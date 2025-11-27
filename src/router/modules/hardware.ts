const router = [
  {
    path: "/hardware",
    name: "hardware",
    component: () => import("@/pages/hardware/index.vue"),
    meta: {
      isShowNav: true,
      navTitle: "硬件设备",
    },
  },
];

export default router;
