import { isNumber, isObject, isString } from "lodash-es";
import { OnHandlerCallbackName } from "@magic/constants";
import { useHandler } from "../hooks/useHandler";
import observe from "../sdk/event/onHandler/onHandlerObserve";
import { createRequestId } from "@/hoLink/utils";

export const formatRequestData = (data: any): string | number => {
  if (isString(data) || isNumber(data)) {
    return data;
  }
  return isObject(data) ? JSON.stringify(data) : `${data}`;
};

/**
 * @description 单次请求，多次响应
 * @param url operation name
 * @param data 数据
 * @param cb 回调函数，持续响应. todo 如果返回false，则表明终止订阅
 */
export const useListenRequest = (
  url: string,
  data: any,
  cb: (p:any) => void | false
) => {
  const requestId = createRequestId();

  // 注册监听
  observe.on(requestId, async (result: any) => {
      cb(result);
  });

  // 发请求
  useHandler(url, formatRequestData(data), requestId, OnHandlerCallbackName);
};
