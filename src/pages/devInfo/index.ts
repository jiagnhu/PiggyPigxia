import { computed } from "vue";
import { serviceList } from "@/pages/service";

// *****************************************
export const devInfo = computed(() => {
  const { deviceInfo, baseInfo } = serviceList.value;
  return {
    sn: deviceInfo?.sn?.value,
    devModel: deviceInfo?.devModel?.value,
    manufactureName: baseInfo?.manufactureName?.value,
    firmwareVersion: deviceInfo?.firmwareVersion?.value,
    hardwareVersion: deviceInfo?.hardwareVersion?.value,
    sdkVersion: deviceInfo?.sdkVersion?.value,
  };
});

export const options = [
  [
    {
      title: "厂家名称",
      valueKey: "manufactureName",
    },
    {
      title: "序列号",
      valueKey: "sn",
    },
    {
      title: "设备型号",
      valueKey: "devModel",
    },
    {
      title: "固件版本号",
      valueKey: "firmwareVersion",
    },
    {
      title: "硬件版本号",
      valueKey: "hardwareVersion",
    },
    {
      title: "SDK版本号",
      valueKey: "sdkVersion",
    },
  ],
];
