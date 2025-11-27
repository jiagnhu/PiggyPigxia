import { onUnmounted } from "vue";
import { unResume, onResume } from "@/hoLink";

/**
 * @desc 切换到后台
 * @param fn
 */
export const useResume = (fn: Function) => {
  const key = Symbol("useResume");
  onResume(key, fn);
  onUnmounted(() => unResume(key));
};
