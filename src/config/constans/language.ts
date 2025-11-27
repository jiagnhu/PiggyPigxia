import { getLanguage } from "@/utils/brower";

export const Language = {
  zh: "zh",
  en: "en",
} as const;

export type LanguageType = keyof typeof Language;

// 默认使用浏览器语言
// todo，可以优化将获取的语言进行缓存，获取缓存的语言
export const defaultLanguage = getLanguage();
