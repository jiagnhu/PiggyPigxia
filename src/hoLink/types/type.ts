import type { LanguageType } from "@/config/constans/language";

export type TimeOut = null | ReturnType<typeof setTimeout>;

/** 返回数据类型 */
export interface BaseResponse {
  responseId: string;
  status: string | number;
  msg: string;
}
export type CommonRequestPromise = Promise<BaseResponse>;

/** 请求参数类型 */
export interface PropertyParams {
  serviceId: string;
  propertyId: string;
  propertyValue: any;
}
export type ProfileProperty = {
  serviceId: string;
  property: {
    propertyId: string;
    propertyValue: string;
  };
};
export type SetDeviceProperty = (
  params: PropertyParams | ProfileProperty
) => CommonRequestPromise;

/** 获取所有状态 */
export interface DeviceInfo extends BaseResponse {
  prdID: string;
  serviceList: [];
  onlineStatus: string;
}
export type GetDeviceInfo = () => Promise<DeviceInfo>;

export interface RoomInfo extends BaseResponse {
  currentRoomId: string;
  roomList: [{ roomId: string; roomName: string; roomType: string }];
}
export type GetRoomInfo = () => Promise<RoomInfo>;

export type ModifyDeviceRoom = (params: {
  destRoomId: string;
}) => CommonRequestPromise;

export type BleInfo = {
  serviceUUID: string;
  chrctUUID: string;
  uuidType: 1 | 2;
};

export type CreateBleConnect = (params: {
  characteristics: [BleInfo];
}) => CommonRequestPromise;

export type ReadCharacteristic = (param: BleInfo) => CommonRequestPromise;

export interface BleInfoData extends BleInfo {
  data: string;
}
export type WriteCharacteristic = (param: BleInfoData) => CommonRequestPromise;

export type UseToast = (param: {
  toastLength: 0 | 1;
  body: string;
}) => CommonRequestPromise;

/** 状态栏 */
export interface StatusBarHeight extends BaseResponse {
  statusBarHeight: number;
}
export type GetStatusBarHeight = () => Promise<StatusBarHeight>;

/** 语言 */
export interface AppLanguage extends BaseResponse {
  language: LanguageType;
}
export type GetAppLanguageSync = () => Promise<AppLanguage>;

/** 主题 */
export interface ThemeMode extends BaseResponse {
  // 1: light ；2：dark
  themeMode: 1 | 2;
}
export type GetThemeMode = () => Promise<ThemeMode>;

/** 折叠屏状态 */
export interface ScreenSpread extends BaseResponse {
  // 1：展开状态；2：折叠状态
  spreadedMode: 1 | 2;
}
export type GetScreenSpreaded = () => Promise<ScreenSpread>;

/** app 版本 */
export interface AppVersion extends BaseResponse {
  versionCode: string;
  versionName: string;
}
export type GetAppVersion = () => Promise<AppVersion>;
