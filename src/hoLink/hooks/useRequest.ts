import { isString } from "lodash-es";
import { useHandler } from "../hooks/useHandler";
import observe from "../sdk/event/onHandler/onHandlerObserve";
import { createRequestId, getRequestTimeout, log2 } from "@/hoLink/utils";
import { HandlerCallbackName, RequestTimeOut } from "../constans/request";

import type { TimeOut, BaseResponse } from "../types/type";

export type UseRequest = (url: string, data?: any) => Promise<any>;

/** 有回调请求 */
export const useRequest: UseRequest = (url, data) =>
  new Promise((resolve) => {
    const requestId = createRequestId();
    let timer: TimeOut = null;

    const clear = () => {
      observe.off(requestId);
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };

    // 注册监听
    observe.on(requestId, (result: BaseResponse) => {
      log2(`【响应：${url}；id: ${requestId}】`, result);
      resolve(result);
      clear();
    });

    // 超时处理
    timer = setTimeout(() => {
      log2(`【超时：${url}; id: ${requestId}】`);
      resolve(getRequestTimeout(requestId));
      clear();
    }, RequestTimeOut);

    // 发请求
    useHandler(
      url,
      isString(data) ? data : JSON.stringify(data),
      requestId,
      HandlerCallbackName
    );
  });

/** 无回调请求 */
export const useRequestNoop = (url: string, data: any): void => {
  log2(`【请求：${url}】 data: `, data);
  useHandler(url, isString(data) ? data : JSON.stringify(data));
};
