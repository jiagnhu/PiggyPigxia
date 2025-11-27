import { lightMode, ThemeKey, ThemeMode } from "@/config/constans";

export const getThemeKey = (themeMode: ThemeMode) =>
  ThemeKey[themeMode] ?? ThemeKey[themeMode[lightMode]];
