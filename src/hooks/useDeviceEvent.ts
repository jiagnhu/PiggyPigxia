import { onUnmounted } from "vue";
import { onDeviceEvent, unDeviceEvent } from "@/hoLink/index";

/**
 * @desc 监听设备数据上报。当设备的某个数据发生变化时，需要上报给 APP。
 *  APP 自动触发该函数，接收变化的数据，用于更新 UI。
 * @param fn
 */
export const useDeviceEvent = (fn: Function) => {
  const key = Symbol("useDeviceEvent");
  onDeviceEvent(key, fn);
  onUnmounted(() => unDeviceEvent(key));
};

