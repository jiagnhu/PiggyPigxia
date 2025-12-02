import { StoreMapProfileKey } from "@/config/ProfileMap";
import * as hoLink from "@/hoLink";
import {
  SpreadMode,
  ResponseCode,
  ThemeMode,
  StatusBarHeightKey,
  Language,
} from "@/config/constans";
import { getAgentProperties, setAgentProperties } from "@/hoLink";
import { getSimpleDeviceInfo } from "@/hoLink";

export const isReqSuccess = (responseCode: any) =>
  typeof responseCode === "object"
    ? responseCode.status === ResponseCode.SUCCESS
    : responseCode === ResponseCode.SUCCESS;

export const getDevInfoAll = () => hoLink.getDevInfoAll();

/**
 * 一次获取多个属性
 * @param {{ serviceId: propertyId[] }} param 获取的多个属性列表
 * @example param:
 *  {{
 *    serviceId1 : [propertyId1, propertyId2],
 *    serviceId2: [propertyId3, propertyId4],
 *    ...
 *  }}
 */
export const getDeviceServices = (param: { [p: string]: string[] }) =>
  hoLink.getDeviceServices(param);

export const setDevicePropertyCurry = (
  [serviceId, propertyId]: [string, string],
  value: any
) =>
  hoLink.setDeviceProperty({
    serviceId,
    property: {
      propertyId,
      propertyValue: value,
    },
  });
// 设置电源
export const setPower = (value: 0 | 1) =>
  setDevicePropertyCurry(StoreMapProfileKey.power, value);
// 设置色温
export const setColorTemperature = (value: number) =>
  setDevicePropertyCurry(StoreMapProfileKey.cct, value);
// 设置台灯模式
export const setLightMode = (value: number) =>
  setDevicePropertyCurry(StoreMapProfileKey.lightMode, value);
// 设置台灯亮度
export const setBrightness = (value: number) =>
  setDevicePropertyCurry(StoreMapProfileKey.brightness, value);
// 设置音量
export const setVolume = (value: number) =>
  setDevicePropertyCurry(StoreMapProfileKey.volume, value);

export const setDvService = (value: number) =>
  setDevicePropertyCurry(StoreMapProfileKey.dvService, value);

export const setDevName = (value: string) =>
  hoLink.modifyDeviceName({
    deviceName: value,
  });

// 用户/智能体属性
export const fetchAgentProperties = (params: any) => getAgentProperties(params);
export const saveAgentProperties = (params: any) => setAgentProperties(params);
export const fetchSimpleDeviceInfo = () => getSimpleDeviceInfo();

/** UI相关 *********************/

export const setRoom = (value: any) => hoLink.modifyDeviceRoom(value);

// 获取当前所属空间及列表
export const getRoomList = async () => {
  const result = await hoLink.getRoomInfo();
  return result ?? { currentRoomId: "", roomList: [] };
};

// TODO local 处理为通用方法
// 获取手机状态栏高度
export const getStatusBarHeight = async (isRefresh = false) => {
  const cache = localStorage.getItem(StatusBarHeightKey);
  if (!isRefresh && cache) {
    return Number(cache) || 0;
  } else {
    const result: any = await hoLink.getStatusBarHeight();
    if (result.status === ResponseCode.SUCCESS) {
      localStorage.setItem(StatusBarHeightKey, result.statusBarHeight);
      return result.statusBarHeight ?? 0;
    } else {
      return 0;
    }
  }
};

// 获取APP语言
export const getAppLanguageSync = async () => {
  const result = await hoLink.getAppLanguageSync();
  return result?.language ?? Language.zh;
};

// 获取APP dark模式
export const getThemeMode = async () => {
  const result = await hoLink.getThemeMode();
  return result?.themeMode ?? ThemeMode.light;
};

// 获取折叠屏状态
export const getScreenSpreaded = async () => {
  const result = await hoLink.getScreenSpreaded();
  return result?.spreadedMode ?? SpreadMode.folded;
};
