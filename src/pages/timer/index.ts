import { computed, ref } from "vue";
import router from "@/router";
import { RepeatTypeEnum, RepeatTypeTitle } from "./enum";

// 是否多选 true: 多选；
export const isMultiple = ref(false);

export const getDay = ({ repeat }) =>
  repeat.type === RepeatTypeEnum.custom
    ? "每" + repeat.custom?.join("、")
    : RepeatTypeTitle[repeat.type];

// 导航栏 ----------------------------
export const navIcon = computed(() =>
  isMultiple.value ? "cross" : "arrow-left"
);

export const navTitle = computed(() =>
  isMultiple.value ? `已选择${selectedTimeList.value.length}项` : "定时"
);

// 多选相关 ----------------------------
// 选择的时间
export const selectedTimeList = ref([]);

export const onLongPressCallBack = () => {
  isMultiple.value = true;
  selectedTimeList.value = [];
};

// 路由相关 -----------------------------
export const onAddTimer = () => {
  router.push({ path: "/addTimer" });
};

export const onClickLeft = () => {
  if (isMultiple.value) {
    isMultiple.value = false;
  } else {
    router.push({ path: "/home" });
  }
};
