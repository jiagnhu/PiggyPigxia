import { ref } from "vue";
import { getDevInfoAll } from "@/api/api";
import { merge } from "lodash-es";
import { ResponseCode } from "@/config/constans";
import { fromPairsByKey, propertyFn } from "@/utils/commonUtil";

import { useStore } from "@/pages/store.ts";

/**
 * @desc 设备实际的状态，实际数据与获取的serviceList 一致
 * 代码里面熟悉是为了开发时候方便 以及 ts 推导使用
 */
export const serviceList = ref({
  baseInfo: {
    manufactureName: { value: "" },
  },
  deviceInfo: {
    devName: { value: "" },
    firmwareVersion: { value: "" },
    sn: { value: "" },
    devModel: { value: "" },
    hardwareVersion: { value: "" },
    sdkVersion: { value: "" },
  },
  netInfo: {
    ssid: { value: "" },
    rssi: { value: "" },
    ip: { value: "" },
    bssid: { value: "" },
  },
  ota: {},
  batteryPower: {
    battery: { value: 0 },
    chargingStatus: { value: 0 },
  },
});

// 获取缓存值
export const getPropetyValue = ([serviceId, propertyId]) =>
  serviceList.value[serviceId]?.[propertyId]?.value;

export const dealServiceData = (data) => {
  // const { updateStoreData } = useStore();
  // updateStoreData(data);
  // 数据格式转换
  const info = fromPairsByKey(
    data,
    "id",
    ({ propertyList = [], id, ...args }) => ({
      id,
      ...args,
      ...fromPairsByKey(propertyList, "id", (item) => propertyFn(id, item)),
    })
  );
  // merge 数据，info 可能只是部分数据，不一定是完全的数据
  serviceList.value = merge(serviceList.value, info);
};
