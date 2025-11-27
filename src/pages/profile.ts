// serviceList
export const SERVICELIST = {
  BASEINFO: "baseInfo", //产品基础信息
  DEVICEINFO: "deviceInfo", //设备基础信息
  NETINFO: "netInfo", //网络信息
  OTA: "ota", //升级服务
  LIGHT: "switch", //电源开关
  BRIGHTNESS: "brightness", //亮度
  LIGHTMODE: "lightMode", //灯光模式
  DEFINITETIME: "definiteTime", //定时
  COUNTDOWN: "countdown", //倒计时
  TOMATOCLK: "tomatoClk", //番茄钟
  VOLUME: "volume", //声音设置
  DVSERVICE: "dvService", //设备虚拟化
  CCT: "cct", //色温
};

// baseInfo 产品基础信息
export const BASEINFO = {
  PRDID: "prdID", //产品的唯一标识
  PRDNAME: "prdName", //产品名称
  MANUFACTUREID: "manufactureID", //产品厂商唯一标识
  MANUFACTURENAME: "manufactureName", //产品厂商名称
  PRDTYPEID: "prdTypeId", //产品类别唯一表示
  PRDTYPENAME: "prdTypeName", //产品类别名称
  PRDICON: "prdIcon", //产品图标
  UITYPE: "uiType", //UI类型
  PROTOCOLTYPE: "protocolType", //协议类型
  SUPPORTNETCFG: "supportNetCfg", //是否需要配网
  SUPPORTREGISTER: "supportRegister", //是否支持注册到设备云
  PINMODE: "pinMode", //pin码方式：0,默认pin码; 1,输入pin码; 2,扫码
  AUTHMODE: "authMode", //设备云认证设备的方式：0,PKI; 1,license; 2,固定密钥; 3,账号认证
  SUPPORTCLOUDCTRL: "supportCloudCtrl", //是否支持云端控制：0,不支持; 1,支持
  NETCFGWLAN: "netCfgWlan", //softAp配网使用的wlan名称
  PLUGINNAME: "pluginName", //插件名
  MODELID: "modelId", //Model ID
  OFFERINGCODE: "offeringCode", //offering code
  PRDSUBTYPEID: "prdSubTypeId", //产品子类别标识
  PRDSUBTYPENAME: "prdSubTypeName", //产品子类别名称
};

// deviceInfo 设备基础信息
export const DEVICEINFO = {
  SN: "sn", //设备序列号
  UDID: "udid", //设备udid
  MAC: "mac", //设备mac
  DEVNAME: "devName", //设备名称
  DEVMODEL: "devModel", //设备型号
  SUBDEVTYPE: "subDevType", //子设备型号
  FIRMWAREVERSION: "firmwareVersion", //固件版本号
  SDKVERSION: "sdkVersion", //SDK版本号
  HARDWAREVERSION: "hardwareVersion", //硬件版本号
};

// 电源开关
export const LIGHT = {
  POWER: "on", // 电源开关状态
};

// 亮度
export const BRIGHTNESS = {
  BRIGHTNESS: "brightness", // 亮度设置
};

// 灯光模式
export const LIGHTMODE = {
  MODE: "mode", // 灯光模式
};

// 色温
export const CCT = {
  COLORTEMPERATURE: "colorTemperature", // 色温
};

// 声音设置
export const VOLUME = {
  VOLUME: "volume", // 声音
};

// 摄像头
export const DVSERVICE = {
  SWITCH: "status", // 开关
};
