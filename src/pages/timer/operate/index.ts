import { computed, ref } from "vue";
import {
  getRepeatTypes,
  RepeatTypeEnum,
  RepeatTypeTitle,
  TimeType,
  WeekDayList,
} from "../enum";

export const isOpen = ref(false);
export const isClose = ref(false);
export const showRepeat = ref(false);
export const showCustomDay = ref(false);
export const showTimeSelect = ref(false);
export const closeTime = ref("00:00");
export const openTime = ref("00:00");
export const currentTimeType = ref(TimeType.open);
// 选择自定义
export const customSelected = ref([]);
// 自定义
export const customDayEnum = ref(WeekDayList);
// 自定义弹窗按钮禁用
export const customDayBtnDisable = computed(
  () => customSelected.value.length === 0
);

// 重复类型
export const repeatType = ref<RepeatTypeEnum>(RepeatTypeEnum.once);
// 重复列表
export const repeatTypeList = ref<{ title: string; type: RepeatTypeEnum }[]>(
  getRepeatTypes()
);

// 重复title
export const repeatTitle = computed(() => {
  return repeatType.value === RepeatTypeEnum.custom
    ? "每" + customSelected.value.join("、")
    : RepeatTypeTitle[repeatType.value];
});

export const handleCustom = (type) => {
  if (type === RepeatTypeEnum.custom) {
    showCustomDay.value = true;
  }
  repeatType.value = type;
};

// 自定义日期checkbox refs
export const checkboxRefs = ref([]);

export const toggle = (index) => {
  checkboxRefs.value[index].toggle();
};

export const handleRepeatConfirm = () => {
  console.log("repeat --> ", repeatType.value);
  showRepeat.value = false;
};

export const handleCustomConfirm = () => {
  console.log("--> custom confirm", customSelected.value);
  showCustomDay.value = false;
  showRepeat.value = false;
};

export const onSelectTime = ({ selectedValues }) => {
  const [hour, minute] = selectedValues;
  const time = `${hour}:${minute}`;
  if (currentTimeType.value === TimeType.open) {
    openTime.value = time;
  } else {
    closeTime.value = time;
  }
  showTimeSelect.value = false;
};

export const onOpenTime = () => {
  currentTimeType.value = TimeType.open;
  showTimeSelect.value = true;
};

export const onCloseTime = () => {
  currentTimeType.value = TimeType.close;
  showTimeSelect.value = true;
};

export const resetForm = () => {
  isOpen.value = false;
  isClose.value = false;
  showRepeat.value = false;
  showCustomDay.value = false;
  showTimeSelect.value = false;
  closeTime.value = "00:00";
  openTime.value = "00:00";
  currentTimeType.value = TimeType.open;
  customSelected.value = [];
  checkboxRefs.value = [];
  repeatType.value = RepeatTypeEnum.once;
};

export const initForm = (timer) => {
  isOpen.value = timer.open === 1;
  isClose.value = timer.close === 1;
  closeTime.value = timer.closeTime;
  openTime.value = timer.openTime;
  showRepeat.value = false;
  showCustomDay.value = false;
  showTimeSelect.value = false;
  repeatType.value = timer.repeat.type;
  if (timer.repeat.type === RepeatTypeEnum.custom) {
    customSelected.value = timer.repeat.custom;
  }
  currentTimeType.value = TimeType.open;
  checkboxRefs.value = [];
};
