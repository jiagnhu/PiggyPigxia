import { initHandlerListener } from "./sdk/event/onHandler";

export * from "./sdk/handler";
export * from "./sdk/event/onDeviceEventCallback";
export * from "./sdk/event/onPause";
export * from "./sdk/event/onResume";

import { showLog, isHandlerInit, handlerInit } from "./global";

export const useHonorLink = (options: { log: boolean }) => {
  showLog(options.log);
  // todo 初始化订阅判断是否订阅过，否则会出现多次执行
  if (!isHandlerInit()) {
    // 防止重复订阅
    handlerInit(true);
    initHandlerListener();
  }
};
