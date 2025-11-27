const router = [
  {
    path: "/setting",
    name: "setting",
    component: () => import("@/pages/setting/index.vue"),
    meta: {
      isShowNav: true,
      navTitle: "设置",
    },
  },
  {
    path: "/devInfo",
    name: "devInfo",
    component: () => import("@/pages/devInfo/index.vue"),
    meta: {
      isShowNav: true,
      navTitle: "设备信息",
    },
  },
  {
    path: "/netInfo",
    name: "netInfo",
    component: () => import("@/pages/netInfo/index.vue"),
    meta: {
      isShowNav: true,
      navTitle: "设备网络信息",
    },
  },
];

export default router;
