import { onUnmounted } from "vue";
import { onPause, unPause } from "@/hoLink";

/**
 * @desc 切换到前台
 * @param fn
 */
export const usePause = (fn: Function) => {
  const key = Symbol("usePause");
  onPause(key, fn);
  onUnmounted(() => unPause(key));
};
