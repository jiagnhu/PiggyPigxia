import { createStoreMapFromProfile } from "@/utils/createStoreMapFromProfile";

/**
 * store key 与 serviceList 映射表， 同步数据到 store 使用
 *
 * {{ serviceId: { propertyId: storeKey } }}
 */
export const ProfileMapStoreKey = {
  // 设备控制
  switch: {
    on: "power", // 开关
  },
  brightness: {
    brightness: "brightness",
  },
  cct: {
    colorTemperature: "cct",
  },
  AIToy: {
    volume: "volume",
    battery: "battery",
  },
  // 设备名称
  deviceInfo: {
    devName: "devName",
  },
  lightMode: {
    mode: "lightMode",
  },
  dvService: {
    status: "dvService",
  },
} as const;

/**
 * store's key map to profile, used for send data
 *
 * {{ storeKey: [ serviceId, propertyId ]}}
 */
export const StoreMapProfileKey = createStoreMapFromProfile();

// console.log("StoreMapProfileKey -->", StoreMapProfileKey);
