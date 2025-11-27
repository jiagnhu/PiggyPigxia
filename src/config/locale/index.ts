import { createI18n } from "vue-i18n";
import { Language } from "@/config/constans/language";
import { getAppLanguageSync } from "@/api/api";

/**
 * TODO
 * 多语言 message 使用插件导入
 * 语言去除 module， 使用单文件
 * 使用命名空间命名，如：'com_confirm'
 */

// 当前文件属于的语言
let localeName;
try {
  localeName = await getAppLanguageSync();
} catch (e) {
  localeName = Language.zh;
}

// 当前文件属于的语言
const getLocal = (path: string) => {
  return path.includes(`/${Language.en}/`) ? Language.en : Language.zh;
};

export const i18n = createI18n({
  locale: localeName,
  allowComposition: true,
  legacy: false,
  globalInjection: true,
  fallbackWarn: false,
  fallbackLocale: Language.zh,
});

const files = import.meta.glob("./**/*.json", {
  import: "default",
  eager: true,
});

// !这里将模块化的 json 合并为一个
const initMessages = () =>
  Object.entries(files).forEach(([key, lang]) => {
    i18n.global.mergeLocaleMessage(getLocal(key), lang);
  });

initMessages();

export const t = (key: string) => i18n.global.t(key);
