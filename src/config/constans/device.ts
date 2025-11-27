export enum LightMode {
  read = 0,
  coffee = 1,
  pad = 2,
  artboard = 3,
  smart = 4,
  customize = 5,
}

export const CCT_MIN = 2000;
export const CCT_MAX = 6500;

export enum ColorTemperatureRange {
  min = CCT_MIN,
  max = CCT_MAX,
}

export enum OnLineEnum {
  online = "Online",
  offline = "Offline",
}
