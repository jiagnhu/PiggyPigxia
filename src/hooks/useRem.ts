import { watchEffect } from "vue";
import { useWindowSize } from "@vueuse/core";

export const useRem = () => {
  const { width } = useWindowSize();

  watchEffect(() => {
    document.documentElement.style.fontSize =
      36 * (Math.min(width.value, 414) / 360) + "px";
  });
};
