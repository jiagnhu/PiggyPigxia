import { isFunction } from "lodash-es";

export interface Handler {
  (operationName: string, params: string | number): void;
  (
    operationName: string,
    params: string | number,
    requestId: string,
    callbackName: string
  ): void;
}

export interface HonorConnect {
  handler: Handler;
}

const getHonorConnect = () => window?.honorConnect as HonorConnect;

export const useHandler: Handler = (url, data, requestId?, callbackName?) => {
  const honorConnect = getHonorConnect();
  if (isFunction(honorConnect?.handler)) {
    // 这里需要使用apply或者call，否则在app内调用时报错
    honorConnect.handler.call(honorConnect, url, data, requestId, callbackName);
  } else {
    throw new Error("window.honorConnect.handler does not exist!!!");
  }
};
