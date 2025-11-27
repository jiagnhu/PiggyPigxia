import { isEqual } from "lodash-es";
import { ResponseCode } from "../constans/request";

import type { ProfileProperty, PropertyParams } from "../types/type";

export const createRequestId = () =>
  `${Date.now().toString()}${Math.round(Math.random() * 1000)}`;

type GetRequestParams = (
  params: PropertyParams | ProfileProperty
) => ProfileProperty;

const custom = {
  serviceId: "",
  propertyId: "",
  propertyValue: "",
};

// 请求参数格式转换
export const getRequestParams: GetRequestParams = (params) => {
  // 判断数据类型
  if (isEqual(Object.keys(params), Object.keys(custom))) {
    const { serviceId, propertyId, propertyValue } = params as PropertyParams;
    return {
      serviceId,
      property: {
        propertyId,
        propertyValue,
      },
    };
  }
  return params as ProfileProperty;
};

export const getRequestTimeout = (responseId: string) => ({
  responseId,
  status: ResponseCode.TIMEOUT,
  msg: "",
});
