import { reactive } from "vue";
import router from "@/router";
import { showToast } from "@/hooks";
import { colorBlend } from "@/utils/commonUtil";
import { ColorTemperatureRange } from "@/config/constans";

// 灯光模式信息相关
export const lightModeInfo = reactive({
  showColorPopupFlag: false, // 是否打开色温选择弹框
  colorTempSliderBg: "", // 色温滚动条背景颜色
  curSliderColorTemp: 0, // 当前滚动条绑定的色温
  showInputFlag: false, // 是否展示色温输入框和键盘
  curFieldColorTemp: "0", // 当前输入框绑定的色温
});

// 设置色温滚动条背景颜色
const setBackGround = (value: number) => {
  const { min, max } = ColorTemperatureRange;
  // 混入颜色
  lightModeInfo.colorTempSliderBg = colorBlend(
    "#ffba74",
    "#eaf2ff",
    (value - min) / (max - min)
  );
};
// 打开色温选择popup
export const onClickShowColorTempPopup = (colorTemperature) => {
  lightModeInfo.curSliderColorTemp = colorTemperature;
  setBackGround(lightModeInfo.curSliderColorTemp);
  lightModeInfo.showColorPopupFlag = true;
};
// 色温change时，实时变换背景色
export const updateSliderColorTemp = (value) => {
  setBackGround(value);
};
// 色温输入框键盘打开
export const onColorTempInputOpen = () => {
  lightModeInfo.showColorPopupFlag = false;
  lightModeInfo.showInputFlag = true;
  lightModeInfo.curFieldColorTemp = lightModeInfo.curSliderColorTemp.toString();
};
// 色温校验
export const checkColorTemp = (value) => {
  const { min, max } = ColorTemperatureRange;

  if (value < min || value > max) {
    showToast("输入2000-6500之间的整数");
    return false;
  }
  return true;
};
// 色温输入框关闭前
export const colorTempDialogBeforeClose = (action) => {
  if (action === "confirm" && lightModeInfo.showInputFlag) {
    return false;
  }
};
// 色温输入框取消
export const onColorTempInputCancel = () => {
  lightModeInfo.showColorPopupFlag = true;
  lightModeInfo.showInputFlag = false;
};
// 色温输入框确认
export const onColorTempInputConfirm = () => {
  if (checkColorTemp(lightModeInfo.curFieldColorTemp)) {
    lightModeInfo.showColorPopupFlag = true;
    lightModeInfo.showInputFlag = false;
    lightModeInfo.curSliderColorTemp = Number(lightModeInfo.curFieldColorTemp);
    updateSliderColorTemp(lightModeInfo.curSliderColorTemp);
  }
};

// 定时信息相关
export const definiteTimeInfo = reactive({
  isUseLength: 0,
  timeTips: "",
});
// 路由到定时列表
export const onJumpTiming = (toAddFlag) => {
  router.push({
    path: toAddFlag ? "/addTimer" : "/timer",
  });
};

// 倒计时信息相关
export const countdownInfo = reactive({
  countdownTime: 0,
  showTimeSelectFlag: false,
  tips: "",
});
// 倒计时时间选择确认
export const onCountdownSelectTime = ({ selectedValues }) => {
  const [hour, minute] = selectedValues;
  // const [hour, minute] = time;
  const millisecond = (Number(hour) * 60 + Number(minute)) * 60 * 1000;
  countdownInfo.countdownTime = millisecond > 0 ? millisecond : 0;
  countdownInfo.showTimeSelectFlag = false;
};

// 番茄钟相关信息
export const tomatoInfo = reactive({
  openTomatoFlag: false,
  showTomatoPopupFlag: false,
  times: 1,
  cycleTime: 1,
  tomatoTime: 25 * 60 * 1000,
  tips: "番茄钟是时间效率管理工具。25分钟后，灯光会闪烁或变暗提醒休息，持续时间5分钟。",
});

// 摄像头信息相关
export const dvServiceInfo = reactive({
  showDvServicePopupFlag: false,
  tips1: "xxxx由xxxx公司开发并提供服务，需要使用您的xxx权限。",
  tips2:
    "以下用户协议及隐私声明均由xxxx公司提供：xxxx用户协议、关于xxxx隐私的声明。",
});

// 页面数据初始化
export const initHomeData = (timerList) => {
  const isUseTimeList = timerList.filter((item) => item.use);
  definiteTimeInfo.isUseLength = isUseTimeList.length;
  if (definiteTimeInfo.isUseLength === 1) {
    const [{ close, closeTime, open, openTime }] = isUseTimeList;
    if (close === 1 && open === 1) {
      definiteTimeInfo.timeTips = `${openTime}~${closeTime}`;
    } else if (close === 1) {
      definiteTimeInfo.timeTips = `${closeTime}关`;
    } else if (open === 1) {
      definiteTimeInfo.timeTips = `${openTime}开`;
    } else {
      definiteTimeInfo.timeTips = "";
    }
  } else if (definiteTimeInfo.isUseLength > 1) {
    definiteTimeInfo.timeTips = `${definiteTimeInfo.isUseLength}个定时已开启`;
  }
};
