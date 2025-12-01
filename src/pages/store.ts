import { defineStore } from "pinia";
import { dealServiceData } from "@/pages/service";
import {
  ColorTemperatureRange,
  OnLineEnum,
  ResponseCode,
  StatusBarHeightKey,
} from "@/config/constans";
import { ProfileMapStoreKey } from "@/config/ProfileMap";
import {
  getDevInfoAll,
  getRoomList,
  getStatusBarHeight,
  isReqSuccess,
  setBrightness,
  setColorTemperature,
  setDevName,
  setDvService,
  setLightMode,
  setPower,
  setRoom,
  setVolume,
  getDeviceServices,
} from "@/api/api";

export type Power = 0 | 1;

export const togglePower = (power: number): Power => (power === 1 ? 0 : 1);

export const toggleOnline = (onlineStatus: string): boolean =>
  onlineStatus !== OnLineEnum.online;

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const useStore = defineStore("main", {
  // state: 返回对象的函数
  state: () => ({
    // 台灯开关
    power: 0, // 1-开，0-关
    // 是否离线
    offline: false,
    // 电量
    battery: 0,
    // 当前灯光模式
    currentMode: -1,
    lightMode: -1,
    // 当前亮度
    brightness: 0,
    //色温
    colorTemperature: ColorTemperatureRange.min,
    // 声音
    volume: 0,
    // 摄像头
    dvServicePower: 0, // 1-开，0-关,
    dvServicePowerShowTips: true,

    //UI相关
    uiInfo: {
      statusBarHeight: 0,
      themeMode: 1,
    },

    devName: "",
    roomId: "",
    roomList: [],
  }),
  actions: {
    setNavHeight(height: number) {
      this.uiInfo.statusBarHeight = height;
      localStorage.setItem(StatusBarHeightKey, height + "");
    },
    async updateNavHeight() {
      try {
        // 如果是pad需要设置高度为0
        this.uiInfo.statusBarHeight = await getStatusBarHeight();
      } catch (e) {
        console.error(e);
        this.uiInfo.statusBarHeight = 0;
      }
    },
    // 切换台灯开关
    async lightSwitchClick() {
      this.power = togglePower(this.power);
      // 注意ux设置属性失败是否需要重置状态
      await setPower(this.power as Power);
    },

    // 设置台灯模式
    async changeLightMode(oldVal: number, newVal: number) {
      await setLightMode(newVal);
    },

    // 设置亮度
    async changeBrightness(oldVal: number, newVal: number) {
      this.brightness = newVal;
      setBrightness(newVal)
        .then((res) => {
          if (res.status !== ResponseCode.SUCCESS) {
            this.brightness = oldVal;
          }
        })
        .catch(() => {
          this.brightness = oldVal;
        });
    },

    // 设置色温
    async changeColorTemperature() {
      await setColorTemperature(this.colorTemperature);
    },

    // 设置音量
    async changeVolume() {
      await setVolume(this.volume);
    },

    // 切换摄像头开关
    changeDvService() {
      const oldVal = this.dvServicePower;
      const newVal = this.dvServicePower === 1 ? 0 : 1;
      this.dvServicePower = newVal;
      setDvService(newVal)
        .then((res) => {
          if (res.status !== ResponseCode.SUCCESS) {
            this.dvServicePower = oldVal;
          }
        })
        .catch(() => {
          this.dvServicePower = oldVal;
        });
    },

    // 获取台灯所有信息
    async getDevInfoAll() {
      try {
        const result = await getDevInfoAll();
        if (isReqSuccess(result?.status)) {
          this.updateService(result);
        }
      } catch (e) {
        console.error(e);
      }
    },

    async getSomeServices() {
      try {
        const res = await getDeviceServices({
          switch: ["on"],
          cct: ["colorTemperature"],
          AIToy: ["volume"],
        });
        if (isReqSuccess(res?.status)) {
          this.updateStoreData(res.serviceList);
          dealServiceData(res.serviceList);
        }
      } catch (e) {
        console.error(e);
      }
    },

    // 更新状态
    updateService(data: any) {
      const { onlineStatus, serviceList } = data ?? {};
      this.offline = toggleOnline(onlineStatus);
      this.updateStoreData(serviceList);
      dealServiceData(serviceList);
    },

    // 修改设备名称
    changeDevName(oldVal: string, newVal: string) {
      setDevName(newVal)
        .then((res) => {
          if (res.status !== ResponseCode.SUCCESS) {
            this.devName = oldVal;
          }
        })
        .catch(() => {
          this.devName = oldVal;
        });
    },

    // 修改所属空间
    changeRoom(oldVal: any, newVal: any) {
      setRoom(newVal)
        .then((res) => {
          if (res.status !== ResponseCode.SUCCESS) {
            this.roomId = oldVal;
          }
        })
        .catch(() => {
          this.roomId = oldVal;
        });
    },

    // 获取台灯所属空间及所属空间列表
    async getRoomInfo() {
      const { currentRoomId = "", roomList = [] } = await getRoomList();
      this.roomId = currentRoomId;
      this.roomList = roomList as [];
    },

    // serviceList数据同步至store
    updateStoreData(
      info = [{ id: "", propertyList: [{ id: "", value: "" }] }]
    ) {
      info.forEach((serviceItem) => {
        if (!Array.isArray(serviceItem?.propertyList)) {
          return;
        }

        const updateStoreItem = (
          serviceId: string,
          propertyId: string,
          value: any
        ) => {
          const key = (ProfileMapStoreKey as any)[serviceId]?.[propertyId];
          if (key) {
            // @ts-ignore
            this[key] = value;
          }
        };

        serviceItem.propertyList.forEach((propertyItem: any) => {
          updateStoreItem(serviceItem.id, propertyItem.id, propertyItem.value);
        });
      });
    },
  },
});
