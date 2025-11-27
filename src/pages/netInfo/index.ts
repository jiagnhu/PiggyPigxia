import { computed } from "vue";
import { serviceList } from "@/pages/service";

// *****************************************
export const netInfo = computed(() => {
  const { netInfo } = serviceList.value;
  return {
    ssid: netInfo?.ssid?.value,
    rssi: netInfo?.rssi?.value,
    ip: netInfo?.ip?.value,
    bssid: netInfo?.bssid?.value,
  };
});

export const options = [
  [
    {
      title: "WLAN名称",
      valueKey: "ssid",
    },
    {
      title: "WLAN强度",
      valueKey: "rssi",
    },
    {
      title: "RSSI",
      valueKey: "rssi",
    },
    {
      title: "IP地址",
      valueKey: "ip",
    },
    {
      title: "BSSID",
      valueKey: "bssid",
    },
  ],
];
