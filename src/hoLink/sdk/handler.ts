import OptNames from "../constans/OperationName";
import { useRequest, useRequestNoop } from "../hooks/useRequest";

import type {
  SetDeviceProperty,
  CommonRequestPromise,
  GetRoomInfo,
  ModifyDeviceRoom,
  CreateBleConnect,
  ReadCharacteristic,
  WriteCharacteristic,
  GetAppLanguageSync,
  GetAppVersion,
  GetScreenSpreaded,
  GetStatusBarHeight,
  GetThemeMode,
  UseToast,
  GetDeviceInfo,
} from "../types/type";

export type RequestNoParam = () => CommonRequestPromise;

// 获取所有参数
export const getDevInfoAll: GetDeviceInfo = () =>
  useRequest(OptNames.getDevInfoAll, "");

/**
 * 一次获取多个属性
 *  - !疑问： 这里获取多个属性是否区分 app属性 和 设备属性
 * @param {{ serviceId: propertyId[] }} param 获取的多个属性列表
 * @example param:
 *  {{
 *    serviceId1 : [propertyId1, propertyId2],
 *    serviceId2: [propertyId3, propertyId4],
 *    ...
 *  }}
 */
export const getDeviceServices = (param: {
  [SERVICEID: string]: string[];
}): Promise<{
  msg: string;
  status: number;
  prdId: string;
  serviceList: {
    id: string;
    propertyList: {
      id: string;
      value: any;
      [K: string]: any;
    }[];
  }[];
}> => useRequest(OptNames.getDeviceServices, param);

// 设置设备属性值
export const setDeviceProperty: SetDeviceProperty = (params) =>
  useRequest(OptNames.setDeviceProperty, params);

// 修改设备名称
export const modifyDeviceName = (params: { deviceName: string }) =>
  useRequest(OptNames.modifyDeviceName, params);

// 删除设备
export const deleteDevice: RequestNoParam = () =>
  useRequest(OptNames.deleteDevice, "");

// 获取设备所属空间
export const getRoomInfo: GetRoomInfo = () =>
  useRequest(OptNames.getRoomInfo, "");

// 修改设备所属空间
export const modifyDeviceRoom: ModifyDeviceRoom = (params) =>
  useRequest(OptNames.modifyDeviceRoom, params);

// 创建蓝牙链接
export const createBleConnection: CreateBleConnect = (params) =>
  useRequest(OptNames.createBleConnection, params);

// 下发指令给蓝牙设备，读特征数据
export const readCharacteristic: ReadCharacteristic = (param) =>
  useRequest(OptNames.readCharacteristic, param);

// 下发指令给蓝牙设备，写特性数据
export const writeCharacteristic: WriteCharacteristic = (param) =>
  useRequest(OptNames.writeCharacteristic, param);

/** UX 相关接口 ***********************/
/**
 * toast tips
 * @param param.toastLength 提示显示时长。0：短提示，1：长提示
 */
export const toast: UseToast = (param) => useRequest(OptNames.toast, param);

/**
 * 设置APP状态栏颜色模式
 * @param param 1：light模式；2：dark 模式
 */
export const setStatusBarMode = (param: 1 | 2) =>
  useRequest(OptNames.setStatusBarMode, param);

// 获取手机状态栏高度
export const getStatusBarHeight: GetStatusBarHeight = () =>
  useRequest(OptNames.getStatusBarHeight, "");

// 获取APP语言，注意非手机语言
export const getAppLanguageSync: GetAppLanguageSync = () =>
  useRequest(OptNames.getAppLanguageSync, "");

// 获取 APP 颜色模式
export const getThemeMode: GetThemeMode = () =>
  useRequest(OptNames.getThemeMode, "");

// 获取折叠屏当前折叠状态
export const getScreenSpreaded: GetScreenSpreaded = () =>
  useRequest(OptNames.getScreenSpreaded, "");

// 退出页面
export const exitDeviceActivity = () =>
  useRequestNoop(OptNames.exitDeviceActivity, "");

// 获取 APP 版本
export const getAppVersion: GetAppVersion = () =>
  useRequest(OptNames.getAppVersion, "");

// 跳转法律信息
export const jumpLegalInformation = (url: string) =>
  useRequestNoop(OptNames.jumpLegalInformation, url);

export const showNativeToast = (tips: string) =>
  useRequestNoop(OptNames.toast, tips);
