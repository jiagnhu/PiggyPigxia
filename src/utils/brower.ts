import { Language } from "@/config/constans/language";

export const getLanguage = () => {
  const browerLang = navigator.language.toLowerCase();
  return browerLang.includes(Language.en) ? Language.en : Language.zh;
};
