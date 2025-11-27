declare interface honorConnect {
  // js bridge 下发指令
  handler(operationName: string, params: string): void;
  handler(
    operationName: string,
    params: string,
    requestId: string | number,
    callbackName: string
  ): void;
}

declare interface Window {
  honorConnect: honorConnect;
  // app 切前台
  onResume(event: any): void;
  // app 切后台
  onPause(event: any): void;
  // 设备属性变化。仅返回变化的属性
  deviceEventCallback(result: any): void;
}
