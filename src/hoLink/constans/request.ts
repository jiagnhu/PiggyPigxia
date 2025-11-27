export const RequestTimeOut = 3000;

export const HandlerCallbackName = "onHandlerEventListener";

export enum ResponseCode {
  SUCCESS = 0, // 成功
  DEV_OFFLINE = 11, // 设备不在线
  INVALID_ARGUMENT = 12, // 设备获取错误
  MAGICLINK_DEV_FAIL = 13, // 设备中间件报错
  MAGICLINK_NO_NETWORK = 14, // 网络不可用
  UNKNOWN_ERROR = 100, // 默认错误
  TIMEOUT = 4000, // 超时
}
