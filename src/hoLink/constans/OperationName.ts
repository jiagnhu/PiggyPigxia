/**
 * 设备相关指令
 */
const OptDevice = {
  getDevInfoAll: "getDevInfoAll",
  getDeviceServices: "getDeviceServices",
  setDeviceProperty: "setDeviceProperty",
  getAgentProperties: "getAgentProperties",
  setAgentProperties: "setAgentProperties",
  modifyDeviceName: "modifyDeviceName",
  deleteDevice: "deleteDevice",
  getRoomInfo: "getRoomInfo",
  modifyDeviceRoom: "modifyDeviceRoom",
  createBleConnection: "createBleConnection",
  readCharacteristic: "readCharacteristic",
  writeCharacteristic: "writeCharacteristic",
  getSimpleDeviceInfo: "getSimpleDeviceInfo",
} as const;

/**
 * app 原生相关
 */
const OptNative = {
  toast: "toast",
  setStatusBarMode: "setStatusBarMode",
  getStatusBarHeight: "getStatusBarHeight",
  getAppLanguageSync: "getAppLanguageSync",
  getThemeMode: "getThemeMode",
  getScreenSpreaded: "getScreenSpreaded",
  exitDeviceActivity: "exitDeviceActivity",
  getAppVersion: "getAppVersion",
  jumpLegalInformation: "jumpLegalInformation",
} as const;

/**
 * 存放 honorConnect.handler 参数 operationName 枚举值
 */
const OptNames = {
  ...OptDevice,
  ...OptNative,
} as const;

export default OptNames;
export type IOptNames = typeof OptNames;
