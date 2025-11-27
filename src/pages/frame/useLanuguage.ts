import { Locale } from "vant";
// 引入英文语言包
import enUS from "vant/es/locale/lang/en-US";
import zhCN from "vant/es/locale/lang/zh-CN";

const config = {
  zh() {
    Locale.use("zh-CN", zhCN);
  },
  en() {
    Locale.use("en-US", enUS);
  },
};

export const useLanuguage = (languge: "zh" | "en") => {
  config[languge]?.();
};
