

# 智慧空间JSAPI接口文档



## 修订记录

|     时间     | 修改描述                                                     | 修改人 |
|:----------:| :----------------------------------------------------------- |::|
|   -/-/-    | 初稿                                                         |  |
| 2023/06/16 | 接口分类：iOT设备管理接口、APP通用能力接口、设备隐私接口     | 王豪 |
| 2023/07/20 | 接口分类：APP通用能力接口、基础分类、历史数据查询            | 姚玉龙 |
| 2023/07/25 | 新增window.eventNotifyCallback接口                           | 王豪 |
| 2023/08/17 | APP通知添加EVENT_THR_REF_TOKEN_SUCCESS类型                   | 陈涛 |
| 2023/08/23 | getAppLanguageSync接口增加appLanguage字段返回                | 王豪 |
| 2023/08/29 | 新增接口：事件（用户操作日志）存储及过滤查询-增加时间筛选    | 张建飞 |
| 2023/08/25 | APP添加HONORCONNECT_THR_TOKEN_EXPIRED错误码24，三方云云设备使用，代表token过期 | 陈涛 |
| 2023/09/13 | 新增接口：检测三方app是否安装                                | 张建飞 |
| 2023/09/14 | 新增云云设备刷新设备信息接口                                 | 陈涛 |
| 2023/09/19 | printLog 和 printLogDebug文档修改                            | 王豪 |
| 2023/09/19 | 废弃接收方取消设备分享的接口-deleteShareDevice                 | 张建飞 |
| 2023/09/28 | 新增蓝牙连接状态通知和跳转系统蓝牙设置界面接口                 | 程鸿斌 |
| 2023/10/20 | 删除接口新增errorCode参数，返回删除失败具体原因 | 陈涛 |
| 2023/11/02 | 新增权限管理、录音管理、文件管理三个模块接口 | 王豪 |
| 2023/11/16 | showEditDialog接口增加appHandleClick参数，支持改名上云 | 程旋乐 |
| 2023/11/30 | 单设备跳转固件更新页 | 程鸿斌 |
| 2023/12/29 | 新增requestDevCloudService接口，代理访问设备云 | 程旋乐 |
| 2024/1/05 | 添加APVideo设备连接(apConnectDevice)断开接口(apDisConnectDevice)，添加保存图片到本地接口(savePicToLocal) | 陈涛 |
| 2024/1/24 | requestDevCloudService增加5和6接口 | 王豪 |
| 2024/3/11 | 修改getSimpleDeviceInfo接口，新增prdId产品id字段 | 陈涛 |
| 2024/4/17 | 新增reportDeviceEvent接口，上报设备运营打点 | 姚玉龙 |
| 2024/5/6 | 新增getProductModel接口，上报设备运营打点 | 吴添 |
| 2024/5/27 | 新增提供插件通知 app 是否禁用手势导航退出、获取当前系统是否为手势导航接口 | 姚玉龙 |
| 2024/6/24 | eventNotifyCallback增加EVENT_ONLINE_CHANGE通知 | 王豪 |
| 2024/6/25 | 新增黑电kit相关接口，新增getDetailPageDeeplinkBySnMac接口 | 陈涛 |
| 2024/7/2 | 新增dispatchTouchEvent接口;修改eventNotifyCallback接口，增加TOUCH事件;修改getVersion接口，新增widthPixels、heightPixels字段 | 姚玉龙 |
| 2024/7/17 | 新增supportProductEncyclopedia接口，新增jumpProductEncyclopedia接口 | 姚玉龙 |
| 2024/7/19 | 修改queryMessageList接口，支持事件消息搜索 | 程旋乐 |
| 2024/7/31 | APP通知添加EVENT_SEND_PAGE_EXTRA类型，用于通知黑电设备跳转控鼠页 | 陈涛 |
| 2024/8/16 | 新增jumpToThirdApp接口，支持跳转三方app。 | 程旋乐 |
| 2024/8/24 | 新增getWifiInfo接口 | 王豪 |
| 2024/9/4 | 新增jumpH5LoadUrl接口，用于跳转单独的H5加载页 | 陈涛 |
| 2024/10/8 | 新增标记消息状态接口 | 王豪 |
| 2025/1/17 | 新增getProductIcon接口 | 程旋乐 |
| 2025/1/21 | 更新获取场景列表接口入参 | 吴添 |
| 2025/2/24 | 创建场景新增additionalConditionReqs字段 | 吴添 |
| 2025/2/24 | 更新场景新增updateAdditionalConditionReqs字段 | 吴添 |
| 2025/3/3 | jumpToThirdApp接口新增isClearTask参数，跳转外部应用是否清理栈，解决中转跳转场景，直接跳转目标页 | 陈涛 |
| 2025/7/10 | 新增registerDevMsgObserver接口 | 程旋乐 |
| 2025/7/9 | 新增queryCurrentDeviceSceneList接口 | 王豪 |
| 2025/7/7 | 新增jumpAction接口，新增自研空鼠接口，eventNotifyCallback新增NOTIFY_AIR_MOUSE_STATE_CHANGED通知 | 王豪 |
| 2025/7/16 | 新增downloadAndSaveVideo、jumpFullScreenPage、getMicInfo接口 | 王豪 |
| 2025/7/12 | 新增获取三方登录鉴权请求地址 | 吴添 |
| 2025/9/8 | 更新requestPermission的permission取值说明，增加PHOTOLIBRARYADD和PHOTOLIBRARYTOTAL | 姚玉龙 |
| 2025/9/25 | 新增Ai智能体相关接口（角色相关、音色相关、AI陪伴设备相关） | 吴添 |
| 2025/10/25 | 新增AI宠物商业化接口宠物问诊-图片上传新增 | 吴添 |
| 2025/10/29 | 更新创建角色接口、设置角色属性值接口针对角色描述的约束条件 | 吴添 |
| 2025/10/30 | 更新Ai陪伴（queryMsgCenterList，markMsg） | 杨昌伟 |
| 2025/11/6 | 新增产品级用户体验改进计划配置查询相关接口，requestDevCloudService接口新增用户体验改进计划开关的查询和更新 | 石圣宇 |



## 概述

智慧空间APP提供JSAPI，用于在APP的H5界面控制HONOR CONNECT 生态设备，可以实现设备联动、交互功能。

智慧空间APP提供了在APP内部加载呈现HTML格式web页面的功能，允许页面中通过JavaScript调用APP所特有的JSAPI接口，从而实现对智能家居APP native功能的联动控制。



## 流程介绍

1. 智慧空间APP提供了一套JSAPI供页面调用。

2. H5页面可使用JavaScript调用JSAPI接口，将命令下发给APP。

3. APP将收到该JSAPI调用，进行解析处理。例如，智能设备的控制命令将通过智能家居云/网关下发到智能设备。

   

## JSAPI通道的安全性

- 传输的安全
  APP连接到内容平台去下载H5页面，这个过程是通过HTTPS协议加密传输的，APP会持有云端数字证书，对云的合法性进行验证，避免云端的仿冒攻击、劫持攻击、篡改攻击。

- 运行的安全
  在APP执行页面阶段，H5运行环境会判断所加载的所有页面资源的URL进行校验，是否为内容平台云地址前缀，避免加载未经授权页面内容。且运行环境中，对页面跳转做了禁止限制。
  
  

## JSAPI状态码

响应消息里的 `status`字段取值，0表示成功，其它值表示失败，详情见下表。

| 状态值 | 枚举宏                               | 说明                               |
| ------ | ------------------------------------ | ---------------------------------- |
| 0      | SUCCESS                              | 成功                               |
| 11     | HONORCONNECT_DEV_OFFLINE             | 设备不在线                         |
| 12     | HONORCONNECT_INVALID_ARGUMENT        | 参数错误                           |
| 13     | HONORCONNECT_DEV_FAIL                | 设备获取错误                       |
| 14     | HONORCONNECT_NO_NETWORK              | 网络不可用                         |
| 15     | HONORCONNECT_NO_EXIST_FILE           | 文件不存在                         |
| 16     | HONORCONNECT_BT_SWITCH_OFF           | 蓝牙开关关闭                       |
| 17     | HONORCONNECT_SENSITIVE_WORD          | 设备名为敏感词                     |
| 18     | HONORCONNECT_NO_EXIST_DEVICE         | 设备不存在                         |
| 19     | HONORCONNECT_NO_EXIST_USER_IN_HOME   | 当前家庭详情里没找到当前用户的成员 |
| 20     | HONORCONNECT_NO_EXIST_MEMBER_IN_HOME | 当前家庭详情缺少家庭成员信息       |
| 21     | HONORCONNECT_NO_EXIST_HOME_DETAIL    | 当前家庭详情不存在                 |
| 22     | HONORCONNECT_DEVICE_NOT_SHARED       | 该设备不是共享设备                 |
| 24     | HONORCONNECT_THR_TOKEN_EXPIRED       | 三方云云设备使用，代表token过期    |
| 25     | HONORCONNECT_OPERATE_CANCEL          | 弹窗取消   |
| 100    | HONORCONNECT_UNKNOWN_ERROR           | 默认错误                           |



## Native调用JS接口

当设备或APP状态变化时会主动通知H5插件，H5插件提供如下js方法供智慧空间APP调用，开发者根据实际需要在window对象中添加js对应方法。

例如：APP切换到前台时，会调用js的window.onResume方法，开发者需要在 H5 插件代码中的 window 对象上添加 onResume 函数给 APP 调用:

```javascript
// 此方法由开发者实现
window.onResume= function() {
  console.log("callback data")
}
```



###  APP切换到前台

**接口名称**

window.onResume

**接口描述**

APP切换到前台触发 JS 该方法

**JS定义示例**

``` javascript
window.onResume= function() {
  console.log("callback data")
}
```



###  APP切换到后台

**接口名称**

window.onPause 

**接口描述**

APP切换到后台触发 JS 该方法

**JS定义示例**

``` javascript
window.onPause = function() {
  console.log("callback data")
}
```



###  设备状态变化

**接口名称**

window.deviceEventCallback(event) 

**接口描述**

使用 **荣耀功能定义规范** 的设备状态变化时 APP 触发 JS 该方法，将设备变化信息（示例如下）传入`event`；仅返回变化的属性。

**JS定义示例**

``` javascript
window.deviceEventCallback = function(event) {
  console.log("callback data" + event)
}
```


`event `格式如下:

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "prdID": "B501",
  "onlineStatus": "Online", // string, 设备在线状态 "Online" or "Offline"
  "serviceList": [
    {
      "propertyList": [
        {
          "access": 0,
          "index": 0,
          "id": "devSvcStatus",
          "type": "double",
          "value": "3.0"
        }
      ],
      "index": 0,
      "id": "dvService",
      "title": ""
    }
  ]
}
```



###  蓝牙设备状态变化

**接口名称**

window.bleDeviceEventCallback(event) 

**接口描述**

蓝牙设备变化时 APP 触发该 JS 方法，将设备变化信息（示例如下）传入`event`。

**JS定义示例**

``` javascript
window.bleDeviceEventCallback = function(event) {
  console.log("callback data" + event)
}
```


`event` 格式如下:

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "serviceUUID": "serviceUUID",  //string，serviceUUID
  "chrctUUID": "chrctUUID", //string，chrctUUID
  "uuidType": 1, //int,  用于标识对设备特征的操作类型
  "data": "data" // string, 特征数据，编码格式："UTF_8"
}
```



###  蓝牙设备连接状态变化

**接口名称**

window.bleLinkStateCallback(event) 

**接口描述**

蓝牙设备连接状态变化时 APP 触发 JS 该方法，将当前状态（示例如下）传入`event`。

**JS定义示例**

``` javascript
window.bleDeviceEventCallback = function(event) {
  console.log("callback data" + event)
}
```



`event` 格式如下:

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "linkState": "LINK_SUCCESS",  //string，NOT_LINK(未连接),LINKING(连接中),LINK_SUCCESS(已连接)
}
```


###  WIFI设备状态变化

**接口名称**

window.deviceEventChangedCallback(event) 

**接口描述**

WIFI设备变化时 APP触发 JS 该方法，将设备变化信息（示例如下）传入`event`；仅返回变化的属性。

**JS定义示例**

``` javascript
window.deviceEventChangedCallback = function(event) {
  console.log("callback data" + event)
}
```



`event `格式如下:

``` JSON
{
 "msg": "SUCCESS",
 "status": 0,
 "responseId": "1650600291901",
 "prdID": "B501",
 "onlineStatus": "Online", // string, 设备在线状态 "Online" or "Offline"
 "serviceList": [
 {
   "index": 1004,
   "id": "event",
   "title": "事件上报",
   "description": "事件上报",
   "eventList": [
     {
       "index": 0,
       "id": "feed",
       "description": "上报路由feed流消息",
       "outDataList": [
         {
           "index": 0,
           "type": "string",
           "description": "feed流事件",
           "value": ""
         }
       ]
     }
   ]
 }
 ]
}
```



###  APP通知 JS的通用接口

**接口名称**

window.eventNotifyCallback(event) 

**接口描述**

历史由于各类状态较多，导致 JS需要在 window下添加多个不同 JS方法，后续新增的通知尽量都调用此接口，减少 JS的接口定义。JS侧需要根据 `eventType  `来区分不同的通知类型，不同的  `eventType  `对应的 `data`格式不一样

**JS定义示例**

``` javascript
window.eventNotifyCallback = function(event) {
  console.log("callback data" + event)
}
```



`event `格式如下:

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "eventType", // "EVENT_DEVICE_SPECIFIC_PROPERTY"|"EVENT_THR_REF_TOKEN_SUCCESS"|"EVENT_BLUETOOTH_CONNECTION_STATUS"|"SYSTEM_GESTURE_NAVI_BACK_TRIGGERED"|"SYSTEM_DISPATCH_TOUCH_EVENT"|"EVENT_SEND_PAGE_EXTRA", 事件类型
  "data"
}
```



`eventType  ` 取值如下：

```javascript
// 在调用`批量订阅指定属性变化`接口后，本地指定属性变化时触发该事件
EVENT_DEVICE_SPECIFIC_PROPERTY 
// 三方云设备调用设备控制，删除设备等触发token过期场景，弹框重新绑定，成功后通知此消息，无data
EVENT_THR_REF_TOKEN_SUCCESS 
// 蓝牙连接状态发生变化时，断开或者连接时触发场景，通知蓝牙连接状态
EVENT_BLUETOOTH_CONNECTION_STATUS
// 告知插件触发了系统手势返回，空鼠可以给大屏发送返回上一级页面的指令
SYSTEM_GESTURE_NAVI_BACK_TRIGGERED
// 设备在线类型变化的通知
EVENT_ONLINE_CHANGE
// 告知插件触发了touch事件
SYSTEM_DISPATCH_TOUCH_EVENT
// 告知插件控鼠页参数
EVENT_SEND_PAGE_EXTRA
// 设备被删除
EVENT_DEVICE_UNREGISTERED
// 设备消息
MSG_DEVICE_PROPERTY_ALTER
// 动态profile变化通知，前提是设备需支持动态profile
EVENT_DYNAMIC_PRODUCT_CHANGE
// 空鼠状态变化
NOTIFY_AIR_MOUSE_STATE_CHANGED
```



`eventType  `  为 EVENT_DEVICE_SPECIFIC_PROPERTY 时，`data` 格式如下：

```javascript
{
    "serviceId", // string
    "propertyId", // string
    "propertyValue", // object
}
```

`eventType  `  为 EVENT_BLUETOOTH_CONNECTION_STATUS时，`data` 格式如下：

```javascript
{
    "state", // boolean  true：蓝牙已连接，false:蓝牙断开
}
```

`eventType  `  为 EVENT_ONLINE_CHANGE时，`data` 格式如下：

```javascript
["COAP_ONLINE","MQTT_ONLINE"]
```

`eventType  `  为 EVENT_SEND_PAGE_EXTRA时，`data` 格式如下：

```javascript
{"autoJumpSecondPageExtraData":{"handleType":1,"busType":1}}
```

`eventType`  为 NOTIFY_AIR_MOUSE_STATE_CHANGED时，`data` 格式如下：

```javascript
{
    "state", // int, 0:连接中；1:连接成功；-1：连接失败
}
```



## JS调用Native方法

智慧空间APP提供如下两个方法供js调用：

1. 当H5界面调用native方法（如控制设备），并需要回调时调用：

``` javascript
honorConnect.handler( 
"operationName",	//string 执行方法 见下描述 
"json_body",	//body,string 请求参数，见下描述 
"requestId",  //string，请求Id
"resultCallback" //string， 回调方法名，成功或失败时，将调用传入resultStr返回结果 ，见下描述 
)
```

2. 当H5界面调用native方法（如控制设备）不需要回调时可使用此方法：

``` javascript
honorConnect.handler( 
"operationName",	//string， 执行方法 见下描述 
"json_body"	//body,string 请求参数，见下描述 
)
```



### iOT设备管理接口



#### 基础能力

#####  查询设备模型（PS：如果有设备动态模型则获取设备动态模型）

**接口名称**

getProductModel

**接口描述**

当需要查询设备模型时，WEB中调用JS方法如下。

**请求消息** 

``` javascript
honorConnect.handler(
"getProductModel", //string 执行方法
"", //不需要传值
"requestId", //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息**

``` JSON
{
	"msg": "SUCCESS",
	"status": 0,
	"responseId": "1650600291901",
	"prdID": "A2M2", //产品id
	"nodeId": "xxxx", //设备id
	"title": "海信冰箱", //产品名称
	"description": "海信冰箱", //产品描述
	"version": "19", //产品版本号
	"adjustable": true, //是否支持动态profile
	"serviceList": [{ //产品模板信息
		"propertyList": [{
			"access": 0,
			"defaultValue": "A2M2",
			"description": "产品的唯一标识",
			"index": 0,
			"id": "prdID",
			"type": "string",
			"value": "A2M2",
			"maxLength": 4
		}, {
			"access": 0,
			"defaultValue": "海信冰箱",
			"description": "产品名称",
			"index": 1,
			"id": "prdName",
			"type": "string",
			"value": "海信冰箱"
		}, {
			"access": 0,
			"defaultValue": "A086",
			"description": "产品厂商唯一标识",
			"index": 2,
			"id": "manufactureID",
			"type": "string",
			"value": "A086",
			"maxLength": 4
		}, {
			"access": 0,
			"defaultValue": "青岛海信智慧生活科技股份有限公司",
			"description": "产品厂商名称",
			"index": 3,
			"id": "manufactureName",
			"type": "string",
			"value": "青岛海信智慧生活科技股份有限公司"
		}, {
			"access": 0,
			"defaultValue": "G000",
			"description": "产品类别唯一表示",
			"index": 4,
			"id": "prdTypeId",
			"type": "string",
			"value": "G000",
			"maxLength": 4
		}, {
			"access": 0,
			"defaultValue": "厨电",
			"description": "产品类别名称",
			"index": 5,
			"id": "prdTypeName",
			"type": "string",
			"value": "厨电"
		}, {
			"access": 0,
			"defaultValue": "WiFi",
			"description": "协议类型",
			"index": 6,
			"id": "protocolType",
			"type": "string",
			"value": "WiFi",
			"maxLength": 4
		}, {
			"access": 0,
			"defaultValue": 0,
			"description": "是否需要配网：0,否;1,是",
			"index": 7,
			"id": "supportNetCfg",
			"type": "int",
			"value": 0
		}, {
			"access": 0,
			"defaultValue": 1,
			"description": "是否支持注册到设备云：0,否;1,是",
			"index": 8,
			"id": "supportRegister",
			"type": "int",
			"value": 1
		}, {
			"access": 0,
			"defaultValue": 1,
			"description": "是否支持云端控制：0,不支持; 1,支持",
			"index": 9,
			"id": "supportCloudCtrl",
			"type": "int",
			"value": 1
		}, {
			"access": 0,
			"defaultValue": "",
			"description": "softAp配网使用的wlan名称",
			"index": 10,
			"id": "netCfgWlan",
			"type": "string",
			"value": ""
		}, {
			"access": 0,
			"defaultValue": "0",
			"description": "Model ID",
			"index": 11,
			"id": "modelId",
			"type": "string",
			"value": "00A2M2",
			"maxLength": 6
		}, {
			"access": 0,
			"defaultValue": "",
			"description": "offering code",
			"index": 12,
			"id": "offeringCode",
			"type": "string",
			"value": "",
			"maxLength": 16
		}, {
			"access": 0,
			"defaultValue": "11L",
			"description": "产品子类别标识",
			"index": 13,
			"id": "prdSubTypeId",
			"type": "string",
			"value": "11L",
			"maxLength": 3
		}, {
			"access": 0,
			"defaultValue": "冰箱",
			"description": "产品子类别名称",
			"index": 14,
			"id": "prdSubTypeName",
			"type": "string",
			"value": "冰箱"
		}],
		"description": "产品基础信息",
		"index": 0,
		"id": "baseInfo",
		"title": "产品基础信息"
	}, {
		"propertyList": [{
			"access": 5,
			"maxlength": 32,
			"defaultValue": "",
			"index": 0,
			"description": "设备序列号",
			"id": "sn",
			"type": "string",
			"value": ""
		}, {
			"access": 5,
			"maxlength": 64,
			"defaultValue": "",
			"index": 1,
			"description": "设备udid",
			"id": "udid",
			"type": "string",
			"value": ""
		}, {
			"access": 5,
			"maxlength": 17,
			"defaultValue": "",
			"index": 2,
			"description": "设备mac",
			"id": "mac",
			"type": "string",
			"value": ""
		}, {
			"access": 7,
			"maxlength": 63,
			"defaultValue": "",
			"index": 3,
			"description": "设备名称",
			"id": "devName",
			"type": "string",
			"value": ""
		}, {
			"access": 5,
			"maxlength": 15,
			"defaultValue": "BCD-505WTDGVBPIV",
			"index": 4,
			"description": "设备型号",
			"id": "devModel",
			"type": "string",
			"value": "BCD-505WTDGVBPIV"
		}, {
			"access": 5,
			"maxlength": 1,
			"defaultValue": "",
			"index": 5,
			"description": "子设备型号",
			"id": "subDevType",
			"type": "string",
			"value": ""
		}, {
			"access": 5,
			"maxlength": 32,
			"defaultValue": "",
			"index": 6,
			"description": "固件版本号",
			"id": "firmwareVersion",
			"type": "string",
			"value": ""
		}, {
			"access": 5,
			"maxlength": 32,
			"defaultValue": "",
			"index": 7,
			"description": "SDK版本号",
			"id": "sdkVersion",
			"type": "string",
			"value": ""
		}, {
			"access": 5,
			"maxlength": 32,
			"defaultValue": "",
			"index": 8,
			"description": "硬件版本号",
			"id": "hardwareVersion",
			"type": "string",
			"value": ""
		}, {
			"access": 5,
			"maxlength": 32,
			"defaultValue": "",
			"index": 9,
			"description": "MCU版本号",
			"id": "MCUVersion",
			"type": "string",
			"value": ""
		}],
		"index": 1,
		"description": "设备基础信息",
		"id": "deviceInfo",
		"title": "设备基础信息"
	}, {
		"propertyList": [{
			"access": 5,
			"maxlength": 32,
			"defaultValue": "",
			"index": 0,
			"description": "WLAN名称",
			"id": "ssid",
			"type": "string",
			"value": ""
		}, {
			"access": 5,
			"defaultValue": 0,
			"index": 1,
			"description": "信号强度",
			"id": "rssi",
			"type": "int",
			"value": 0
		}, {
			"access": 5,
			"maxlength": 15,
			"defaultValue": "",
			"index": 2,
			"description": "ip地址",
			"id": "ip",
			"type": "string",
			"value": ""
		}, {
			"access": 5,
			"maxlength": 17,
			"defaultValue": "",
			"index": 3,
			"description": "bssid",
			"id": "bssid",
			"type": "string",
			"value": ""
		}],
		"index": 2,
		"description": "网络信息",
		"id": "netInfo",
		"title": "网络信息"
	}, {
		"propertyList": [{
			"access": 7,
			"defaultValue": 0,
			"valueList": [{
				"description": "关",
				"value": 0
			}, {
				"description": "开",
				"value": 1
			}],
			"description": "",
			"index": 0,
			"id": "AITempCtrl",
			"type": "int",
			"value": 0
		}, {
			"minValue": -25,
			"access": 7,
			"defaultValue": -25,
			"maxValue": -15,
			"description": "冷冻室温度调节",
			"index": 1,
			"step": 1,
			"id": "freeze",
			"type": "int",
			"value": -25
		}],
		"description": "冰箱服务",
		"index": 3,
		"id": "refrigeratorService",
		"title": "冰箱服务"
	}, {
		"propertyList": [{
			"access": 7,
			"defaultValue": 0,
			"valueList": [{
				"description": "关",
				"value": 0
			}, {
				"description": "开",
				"value": 1
			}],
			"description": "",
			"index": 0,
			"id": "On",
			"type": "int",
			"value": 0
		}, {
			"minValue": 2,
			"access": 7,
			"defaultValue": 2,
			"maxValue": 8,
			"description": "冷藏室温度调节",
			"index": 1,
			"step": 1,
			"id": "refrigeration",
			"type": "int",
			"value": 2
		}],
		"description": "冰箱冷藏室服务",
		"index": 4,
		"id": "coldRoomService",
		"title": "冰箱冷藏室服务"
	}, {
		"propertyList": [{
			"access": 7,
			"defaultValue": 0,
			"valueList": [{
				"description": "关",
				"value": 0
			}, {
				"description": "开",
				"value": 1
			}],
			"description": "",
			"index": 0,
			"id": "On",
			"type": "int",
			"value": 0
		}, {
			"minValue": -20,
			"access": 7,
			"defaultValue": -20,
			"maxValue": 5,
			"description": "冰箱软冷藏室温度调节",
			"index": 1,
			"step": 1,
			"id": "softFreezer",
			"type": "int",
			"value": -20
		}],
		"description": "冰箱变温室服务",
		"index": 5,
		"id": "softFreezerService",
		"title": "冰箱变温室服务"
	}, {
		"propertyList": [{
			"access": 5,
			"defaultValue": 0,
			"valueList": [{
				"description": "正常",
				"value": 0
			}, {
				"description": "报警",
				"value": 1
			}],
			"index": 0,
			"id": "freezeOpenDoorAlarm",
			"type": "int",
			"value": 0
		}, {
			"access": 5,
			"defaultValue": 0,
			"valueList": [{
				"description": "正常",
				"value": 0
			}, {
				"description": "报警",
				"value": 1
			}],
			"index": 1,
			"id": "refriOpenDoorAlarm",
			"type": "int",
			"value": 0
		}, {
			"access": 5,
			"defaultValue": 0,
			"valueList": [{
				"description": "正常",
				"value": 0
			}, {
				"description": "报警",
				"value": 1
			}],
			"index": 2,
			"id": "variaOpenDoorAlarm",
			"type": "int",
			"value": 0
		}],
		"description": "报警服务",
		"index": 6,
		"id": "alarmService",
		"title": "报警服务"
	}, {
		"propertyList": [{
			"access": 7,
			"defaultValue": 0,
			"valueList": [{
				"description": "关闭",
				"value": 0
			}, {
				"description": "打开",
				"value": 1
			}],
			"index": 0,
			"id": "quickCooling",
			"type": "int",
			"value": 0
		}, {
			"access": 7,
			"defaultValue": 0,
			"valueList": [{
				"description": "关闭",
				"value": 0
			}, {
				"description": "打开",
				"value": 1
			}],
			"index": 1,
			"id": "smart",
			"type": "int",
			"value": 0
		}, {
			"access": 7,
			"defaultValue": 0,
			"valueList": [{
				"description": "关闭",
				"value": 0
			}, {
				"description": "打开",
				"value": 1
			}],
			"index": 2,
			"id": "superFrozen",
			"type": "int",
			"value": 0
		}, {
			"access": 7,
			"defaultValue": 0,
			"valueList": [{
				"description": "关闭",
				"value": 0
			}, {
				"description": "打开",
				"value": 1
			}],
			"index": 3,
			"id": "holiday",
			"type": "int",
			"value": 0
		}, {
			"access": 3,
			"defaultValue": 0,
			"valueList": [{
				"description": "关闭",
				"value": 0
			}, {
				"description": "打开",
				"value": 1
			}],
			"index": 4,
			"id": "quickDeepFrozen",
			"type": "int",
			"value": 0
		}, {
			"access": 3,
			"defaultValue": 0,
			"valueList": [{
				"description": "关闭",
				"value": 0
			}, {
				"description": "打开",
				"value": 1
			}],
			"index": 5,
			"id": "quickFrozen",
			"type": "int",
			"value": 0
		}, {
			"access": 3,
			"defaultValue": 0,
			"valueList": [{
				"description": "关闭",
				"value": 0
			}, {
				"description": "打开",
				"value": 1
			}],
			"index": 6,
			"id": "quickIceBound",
			"type": "int",
			"value": 0
		}, {
			"access": 3,
			"defaultValue": 0,
			"valueList": [{
				"description": "关闭",
				"value": 0
			}, {
				"description": "打开",
				"value": 1
			}],
			"index": 7,
			"id": "fastStorage",
			"type": "int",
			"value": 0
		}, {
			"access": 3,
			"defaultValue": 0,
			"valueList": [{
				"description": "关闭",
				"value": 0
			}, {
				"description": "打开",
				"value": 1
			}],
			"index": 8,
			"id": "iceBound",
			"type": "int",
			"value": 0
		}, {
			"access": 3,
			"defaultValue": 0,
			"valueList": [{
				"description": "关闭",
				"value": 0
			}, {
				"description": "打开",
				"value": 1
			}],
			"index": 9,
			"id": "powerSaving",
			"type": "int",
			"value": 0
		}, {
			"access": 3,
			"defaultValue": 0,
			"valueList": [{
				"description": "关闭",
				"value": 0
			}, {
				"description": "打开",
				"value": 1
			}],
			"index": 10,
			"id": "clearSwitch",
			"type": "int",
			"value": 0
		}],
		"description": "冰箱模式",
		"index": 7,
		"id": "fridgeModeService",
		"title": "冰箱模式"
	}]
}
```

**异常响应消息**

```JSON
//参数无效
{
	"responseId": "1650600291901",
	"status": 12,
	"msg": "HONORCONNECT_INVALID_ARGUMENT"
}
//设备未连接
{
	"responseId": "1650600291901",
	"status": 51,
	"msg": "HONORCONNECT_DEVICE_NOT_CONNECT"
}
//位置错误
{
	"responseId": "1650600291901",
	"status": 13,
	"msg": "HONORCONNECT_DEV_FAIL"
}
```



#####  查询设备部分属性

**接口名称**

getDeviceServices

**接口描述**

当需要查询设备部分状态时，WEB中调用JS方法如下。

**请求消息** 

``` javascript
honorConnect.handler(
"getDeviceServices", //string 执行方法 
"json_body", // 要查询的属性信息，由多个serviceId与多个propertyId组成json，例如 {"serviceId1":["propertyId1","propertyId2","propertyId3"],"serviceId2":["propertyId21","propertyId22"]}
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

``` JSON
{
	"serviceId1": ["propertyId1","propertyId2","propertyId3"],
	"serviceId2": ["propertyId21","propertyId22"]
}

```



**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "prdID": "B501",
  "onlineStatus":"Online", // 在线状态，取值："Online"或"Offline"
  "onlineTypeList":["COAP_ONLINE","MQTT_ONLINE"], // 在线类型，取值："Online"或"Offline"
  "serviceList": [
    {
      "propertyList": [
        {
          "access": 0,
          "index": 0,
          "id": "devSvcStatus",
          "type": "double",
          "value": "3.0"
        }
      ],
      "index": 0,
      "id": "dvService",
      "title": ""
    },
    {
      "propertyList": [],
      "index": 0,
      "id": "switch",
      "title": ""
    }
  ]
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  下发指令给设备，控制设备

**接口名称**

setDeviceProperty

**接口描述**

当需要将下发命令给设备时，WEB中调用JS方法如下。一般用在接收到用户对设备的操作指令时。

**请求消息** 

``` javascript
honorConnect.handler(
"setDeviceProperty", //string 执行方法 
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入对应serviceId及propertyId（取值参见Profile定义）：

``` JSON
{ 
   "serviceId": "serviceId",  
    "property": { 
                "propertyId": "propertyId",  
                "propertyValue": "propertyValue" 
            } 
}

```

**响应消息** 

``` JSON
{ 
    "responseId" : "1650600291901",
    "status": 0, 
    "msg": "SUCCESS"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  下发action指令给设备，控制设备

**接口名称**

controlDevice

**接口描述**

当需要控制设备时，WEB中调用JS方法如下。

**请求消息**

``` javascript
honorConnect.handler(
"controlDevice", //string 执行方法 
"", // 要控制的设备信息，由多个serviceId与多个action组成json，例如 {"serviceId1":[{"actionId":"id1","actionName":"name1"},{"actionId":"id2","actionName":"name2"}],"serviceId2":[{"actionId":"id22","actionName":"name22"}]}
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息** 

``` JSON
{ 
    "responseId" : "1650600291901",
    "status": 0, 
    "msg": "SUCCESS"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  修改设备名

**接口名称**

modifyDeviceName

**接口描述**

已废弃，建议使用showEditDialog，完成编辑与修改。
当进入设备设置界面需要修改设备名称时，WEB中调用JS方法如下

**请求消息** 

``` javascript
honorConnect.handler(
	"modifyDeviceName", //string 执行方法 
	"json_body", // body,string,可选，见下描述
	"requestId",  //string，请求Id
	"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);

```

`json_body`中传入修改后的设备名：

``` JSON
{ 
   "deviceName": "deviceName"
}

```

**响应消息**

``` JSON
{ 
    "responseId" : "responseId",
    "status": 0, 
    "msg": "SUCCESS"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  获取设备名

**接口名称**

getDeviceName

**接口描述**

当需要获取设备名称时，WEB中调用JS方法如下

**请求消息 **

``` javascript
honorConnect.handler(
"getDeviceName", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);

```

**响应消息**

``` JSON
{ 
    "responseId" : "responseId",
    "status": 0, 
    "msg": "SUCCESS",
    "deviceName": "deviceName"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  删除设备

**接口名称**

deleteDevice

**接口描述**

当需要删除当前设备时，WEB中调用JS方法如下：

**请求消息**

``` javascript
honorConnect.handler(
	"deleteDevice", //string 执行方法 
	"", // 空string
	"requestId",  //string，请求Id
	"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);

```

**响应消息** 

``` JSON
{ 
    "responseId" : "responseId",
    "status": 0, 
    "msg": "SUCCESS"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "errorCode": 100, //详细删除错误
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```

**errorCode说明**

```JSON
191201：设备不支持删除
```



#####  获取设备所属空间

**接口名称**

 getRoomInfo

**接口描述**

当需要获取当前设备所属空间时，WEB中调用JS方法如下：

**请求消息**

``` javascript
honorConnect.handler(
"getRoomInfo", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);

```

**响应消息** 

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "currentRoomId": "roomId2",
  "homeId": "", // 必传 String 家庭ID
  "homeName": "",// 必传 String 家庭名称
  "homeType": "",// 必传 String 0:我的家庭,1:共享家庭
  "isDefaultHome": "",// 非必传 String 是否为默认家庭，共享家庭时该字段无意义，为空，Y：是默认家庭N：非默认家庭
  "roomList": [
    {
      "roomId": "roomId1", //房间 id
      "roomName": "roomName1", //房间名
      "roomType": "roomType1" //房间类型 1: 默认房间； 0：普通房间
    },
    {
      "roomId": "roomId2",
      "roomName": "roomName2",
      "roomType": "roomType2"
    }
  ]
}

```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  移动设备摆放位置

**接口名称**

modifyDeviceRoom

**接口描述**

当需要移动设备摆放位置时，WEB中调用JS方法如下：

**请求消息**

``` javascript
honorConnect.handler(
"modifyDeviceRoom", //string 执行方法 
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入需要移入的roomId：

``` JSON
{ 
  "destRoomId": "destRoomId"
}

```

**响应消息** 

``` JSON
{ 
    "responseId" : "responseId",
    "status": 0,
    "msg": "SUCCESS"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



##### 删除设备的使用记录

**接口名称**

clearDevMsg

  **请求消息** 

``` javascript
honorConnect.handler(
"clearDevMsg", //string 执行方法 
"",  // 空 string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息** 

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600307883"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



##### 查询设备的场景日志

**接口名称**

querySceneLog

  **请求消息** 

``` javascript
honorConnect.handler(
"querySceneLog", //string 执行方法 
"json_body",  // body,string,可选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

| 名称     | 类型   | 是否必须 | 默认值 | 备注              |
| -------- | ------ | -------- | ------ | ----------------- |
| date     | string | 非必须   |        | 日期 yyyy-MM-dd   |
| pageNum  | number | 非必须   | 1      | 列表分页-当前页码 |
| pageSize | number | 非必须   | 10     | 列表分页-每页数量 |

**响应消息** 

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600307883",
  "data": // jsonString 响应数据
}
```

`data`结构 :

| 名称     | 类型      | 是否必须 | 默认值 | 备注                     |
| -------- | --------- | -------- | ------ | ------------------------ |
| pageSize | number    | 非必须   | 1      | 列表分页-当前页码        |
| pageNum  | number    | 非必须   | 10     | 列表分页-每页数量        |
| total    | number    | 非必须   |        | 总记录数                 |
| size     | number    | 非必须   |        | 当前页的数量 <= pageSize |
| pages    | number    | 非必须   |        | 总页数                   |
| list     | object [] | 非必须   |        | 结果集                   |

`list`结构 :

| 名称         | 类型      | 是否必须 | 默认值 | 备注                                                     |
| ------------ | --------- | -------- | ------ | -------------------------------------------------------- |
| sceneLogDate | string    | 非必须   |        | 场景执行日期 时间格式:yyyy-MM-dd",example = "2020-10-10" |
| sceneLogList | object [] | 非必须   |        | 场景日志列表                                             |

`sceneLogList`结构 :

| 名称              | 类型      | 是否必须 | 默认值 | 备注                                                         |
| ----------------- | --------- | -------- | ------ | ------------------------------------------------------------ |
| sceneTriggerTime  | string    | 非必须   |        | 场景触发时间 时间格式：HH:mm                                 |
| sceneId           | string    | 非必须   |        | 场景Id                                                       |
| sceneName         | string    | 非必须   |        | 场景名称                                                     |
| sceneTriggerType  | string    | 非必须   |        | 场景触发类型 影响端侧图标 no_detected：手动触发 daily_timer：定时触发 device_data:智能设备触发 |
| sceneExecResult   | number    | 非必须   |        | 场景触发结果 1:成功 0:失败 2:部分成功                        |
| sceneIsExist      | number    | 非必须   |        | 场景是否仍存在 1：存在 0:不存在                              |
| actionExecLogList | object [] | 非必须   |        | 设备执行日志列表                                             |

`actionExecLogList`结构 :

| 名称             | 类型   | 是否必须 | 默认值 | 备注                                                         |
| ---------------- | ------ | -------- | ------ | ------------------------------------------------------------ |
| devId            | string | 非必须   |        | 设备Id actionType为4时，该字段不能为空                       |
| devName          | string | 非必须   |        | 设备名称 actionType为4时，该字段不能为空                     |
| actionId         | string | 非必须   |        | 设备执行Id actionType为4时，该字段不能为空                   |
| actionExecResult | number | 非必须   |        | 设备执行结果 0：执行失败 1：执行成功 2：执行中 3：未执行     |
| message          | string | 非必须   |        | 信息内容 actionType为4时，该字段不能为空                     |
| execFailedReason | string | 非必须   |        | 设备执行失败原因 actionType为4且actionExecResult为0时，该字段不能为空 |
| failedCode       | string | 非必须   |        |                                                              |
| actionType       | string | 非必须   |        | 动作类型 1：执行某个场景 2：开关某个场景 3：向手机发送信息 4：执行某个设备 5：向手机发送指令 |
| innerSceneId     | string | 非必须   |        | 嵌套场景id ctionType为1或2时，该字段不能为空                 |
| innerSceneName   | string | 非必须   |        | 嵌套场景名称 actionType为1或2时，该字段不能为空              |
| delayTime        | string | 非必须   |        | 延时时间,单位：秒/s                                          |
| innerSceneStatus | string | 非必须   |        | 延时时间,单位：秒/s                                          |

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```


##### 获取家庭信息

**接口名称**

getSimpleHomeInfo

**接口描述**

当需要获取家庭信息时，WEB中调用JS方法如下： 

**请求消息** 

```javascript
honorConnect.handler(
"getSimpleHomeInfo", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息** 

```plaintext
{
  "msg": "SUCCESS",
  "homeId": "家庭id", 
  "status": 0,
  "responseId": "1650600307888"
}
```



##### 获取设备信息

**接口名称**

getSimpleDeviceInfo

**接口描述**

当需要获取设备信息时，WEB中调用JS方法如下： 

**请求消息** 

```javascript
honorConnect.handler(
	"getSimpleDeviceInfo", //string 执行方法 
	"", // 空string
	"requestId",  //string，请求Id
	"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息** 

```plaintext
{
  "msg": "SUCCESS",
  "deviceId": "设备id", 
  "catgId": "分类id", 
  "deviceType":"0", //0家庭设备 1个人设备 2分享设备 6家庭分享设备 7三方云云接入设备 耳机返回null
  "thirdDeviceId": "三方设备id",
  "prdId": "产品id",
  "status": 0,
  "responseId": "1650600307999"
}
```



##### 判断三方账号状态

**接口名称**

checkThirdAccountStatus

**接口描述**

当需要判断三方账号状态时，WEB中调用JS方法如下

**请求消息** 

```javascript
honorConnect.handler(
"checkThirdAccountStatus", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息** 

```javascript
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "",
  "bindStatus" //int, 云云对接状态，-1:账号未绑定 0:账号绑定成功 1:账号登陆过期	
}
```



##### 创建场景

**接口名称**

createScene

**请求消息**

``` javascript
honorConnect.handler(
"createScene", //string 执行方法 
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

| 名称                  | 类型      | 是否必须 | 默认值  | 备注                                                       | 其他信息                               |
|-----------------------|----------|:-------:|--------|------------------------------------------------------------|------------------------------------|
| name                  | string   |    Y    |        | 场景名称,不允许与该用户名下其他场景名称重复                     |                                    |
| imageUrl              | string   |    N    |        | 专属场景特有，APP端展示图片，校验由运营云处理                   |                                    |
| timeZone              | string   |    Y    |        | 时区                                                        |                                    |
| status                | string   |    Y    |        | 场景自动生效状态： on、生效---自动场景允许自动触发 off、<br/>失效---自动场景不允许自动触发（一般纯手动场景填写off） | 其他、非法字段，传入时校验，提示场景status只能为off或者on |
| executorId            | string   |    N    |        | 移动端设备唯一标识，用于pushtoken选择推送对象                   |                                    |
| createSubSceneReqList | object[] |    Y    |        | 子场景列表                                                   | item 类型: object                    |

`createSubSceneReqList`结构 :

| 名称                 | 类型      | 是否必须 | 默认值  | 备注                        |
|---------------------|-----------|:-------:|--------|---------------------------|
| subSceneId          | string    |    N    |        | 场景标识，创建无需传入          |
| userId              | string    |    N    |        | 用户id，创建无需传入，传入无效   |
| createConditionReqs | object[]  |    Y    |        | 场景执行条件列表                |
| createActionReqs    | object[]  |    Y    |        | 场景动作列表                    |

`createConditionReqs`结构 :

| 名称             | 类型    | 是否必须 | 默认值 | 备注                                                                                                                  | 其他信息    |
|-----------------|---------|---------| ------ |---------------------------------------------------------------------------------------------------------------------|-----|
| conditionFormat | string  | Y       |        | 前端排版字段，用于app场景详情页面显示格式                                                                                              |     |
| type            | string  | Y       |        | 传入：schedule                                                                                                         | 定时触发    |
| repeat          | string  | Y       |        | everyDay 每天<br/>perMonth 每月<br/>weekly 每周<br/>workingDay 工作日<br/>holidays 节假日<br/>perYear 每年<br/>specifiedDate 指定日期 | type为schedule时必须携带，且只能是指定的值之一。 |
| timeType        | number     | Y       |        | 0：指定时间点<br/>1：日出<br/>2：日落                                                                                           |     |
| time            | string  | Y       |        | 当timeType为0时该字段必填，格式为 "hh:mm"                                                                                       | 强校验    |
| day             | number     | Y       |        | [1, 31]，repeat为perMonth、perYear和specifiedDate时必填                                                                    |     |
| month           | number     | Y       |        | [1, 12]，repeat为perYear和specifiedDate时必填                                                                             |     |
| year            | number     | Y       |        | 暂无年份的限制，repeat为specifiedDate时必填                                                                                     |     |
| daysOfWeek      | string  | Y       |        | [1, 7]，不允许传入重复的数字，repeat为weekly时必填                                                                                  |     |
| **additionalConditionReqs** | **Object[]** | **N** | | **附加生效条件** | |

`createActionReqs`结构 :

| 名称               | 类型     | 是否必须 | 默认值  | 备注                      | 其他信息                                  |
|-------------------|----------|---------|------|-------------------------|---------------------------------------|
| actionFormat      | string   | Y       |      | 动作格式，端侧用于展示在场景详情页面的执行动作 | 执行智能设备                                |
| type              | string   | Y       |      | 传入：device               |                                       |
| selected          | boolean  | N       | true | 动作是否选中，不携带时默认赋值true     | true表示执行该动作，false表示不执行该动作             |
| devId             | string   | Y       |      | 执行智能设备的设备Id             | type为device时携，与用户（userId）及家庭（homeId）关联 |
| devName           | string   | Y       |      | 执行智能设备的设备名称             | type为device时携带                        |
| serviceId         | string   | Y       |      | 执行智能设备的服务Id             | type为device时携带                        |
| keyWords          | string   | Y       |      | 执行智能设备的关键词              | type为device时携带                        |
| prdId             | string   | Y       |      | 产品Id，注意区别于prdIds        | type为device时携带                        |
| catgId            | string   | N       |      | 设备的分类Id                 | type为device时携带                        |
| propertyList      | object[] | Y       |      | 设备信息的描述列表               |                                       |
| propertyId        | string   | Y       |      | 执行智能设备动作中属性Id           | 存在propertyList时携带有效                   |
| propertyName      | string   | Y       |      | 执行智能设备动作中属性名称           | 存在propertyList时携带有效                   |
| propertyValue     | string   | Y       |      | 执行智能设备动作中属性的值           | 存在propertyList时携带有效                   |
| propertyValueType | string   | N       |      | 执行智能设备动作中属性值类型          | 存在propertyList时携带有效                   |
| datatype          | string   | N       |      | 执行智能设备动作中属性的数据类型        | 存在propertyList时携带有效                   |

**`additionalConditionReqs`结构 :**

| 名称                      | 类型     | 是否必须 | 默认值 | 备注                     | 其他信息                                                     |
| ------------------------- | -------- | -------- | ------ | ------------------------ | ------------------------------------------------------------ |
| additionalConditionId     | String   | N        |        | 附加条件Id               | 创建无需传入                                                 |
| order                     | int      | N        |        | order                    | 固定：order = 1                                              |
| type                      | String   | Y        |        | 附加条件类型             | 此处默认time；device：设备状态；phone：本机状态；app：应用状态；time：生效时间和次数；weather：根据天气进行判断；gps：根据位置进行判断； |
| additionalConditionFormat | String   | Y        |        | 附加生效条件格式         | 端侧用于展示在场景详情页面的附加生效条件，用以展示           |
| effectiveState            | String   | Y        |        | 生效状态                 | all：全天生效， part：部分时段生效                           |
| endTime                   | String   | N        |        | 结束时间，18:00          | regexp = "^([0-1]?[0-9]\|2[0-3]):([0-5][0-9])$", message = "endTime格式不对" |
| startTime                 | String   | N        |        | 开始时间，08:00          | regexp = "^([0-1]?[0-9]\|2[0-3]):([0-5][0-9])$", message = "startTime格式不对" |
| *cron*                    | *String* | *N*      |        | *cron表达式*             | *不传*                                                       |
| repeat                    | String   | Y        |        | 重复类型                 | everyDay：每天； workingDay：法定工作日 ； holidays：节假日；weekly：每周 ；perMonth：每月 ； perYear：每年 ；specifiedDate. 指定日期； |
| day                       | int      | N        |        | 日                       | repeat为“每月”或“每年”或“指定日期”时，该字段不能为空         |
| month                     | int      | N        |        | 月                       | repeat为“每年”或“指定日期”时，该字段不能为空                 |
| year                      | int      | N        |        | 年                       | 指定日期不能为空                                             |
| daysOfWeek                | String   | N        |        | 一周中的那几天，逗号分割 | 1,2,3,6：代表周日周一周二周五；选择每周时不为空              |
| limits                    | String   | N        |        | 生效次数                 | 未确认规则，待定： 默认-1，表示无限次数                      |
| period                    | Long     | N        |        | 毫秒数，生效次数周期     | 不限制：0；*1小时一次：60x60x1000；6小时一次：6x60x60x1000；一天一次：24x60x60x1000；* |
| timeRangeList             | Object[] | N        |        | 时间范围                 |                                                              |

**`timeRangeList` 结构：**

| 名称      | 类型   | 是否必须 | 默认值 | 备注            | 其他信息                                                     |
| --------- | ------ | -------- | ------ | --------------- | ------------------------------------------------------------ |
| endTime   | String | N        |        | 结束时间，18:00 | regexp = "^([0-1]?[0-9]\|2[0-3]):([0-5][0-9])$", message = "endTime格式不对" |
| startTime | String | N        |        | 开始时间，08:00 | regexp = "^([0-1]?[0-9]\|2[0-3]):([0-5][0-9])$", message = "startTime格式不对" |



**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
```

`data`结构 :

| 名称        | 类型      | 是否展示  | 备注     |
|------------|---------|----------|--------|
| errorCode  | string  | Y        | 错误码    |
| errorDesc  | string  | Y        | 错误描述   |
| data       | object  | Y        | 数据json |

`data-data`结构 :

| 名称             | 类型   | 是否展示  | 备注                     |
|-----------------|--------|----------| ------------------------ |
| recommendName   | string | Y        | 场景创建重名时推荐一个类似的场景名给用户；场景创建成功时填充为场景名称        |
| sceneId         | string | Y        | 场景创建成功时打印场景Id，未创建成功则不会出现此参数        |
| code            | string | Y        | 场景创建失败的错误码，创建成功时不会出现                 |

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```

**测试用例**
`json_body`请求参数：
```JSON
{
  "name": "荣耀杜亚窗帘",
  "timeZone": "中国标准时间",
  "status": "on",
  "executorId": "*******************************",
  "createSubSceneReqList": [{
    "createConditionReqs": [{
      "conditionFormat": "{@dailyTime|edit}",
      "type": "schedule",
      "repeat": "everyDay",
      "timeType": 0,
      "time": "15:33",
      "day": 1,
      "month": 1,
      "year": 2023,
      "daysOfWeek": "7"
    }],
    "createActionReqs": [{
      "actionFormat": "{@deviceName @listValue|0}",
      "type": "device",
      "devId": "*******************************",
      "devName": "荣耀杜亚窗帘",
      "serviceId": "**********",
      "keyWords": "**********",
      "prdId": "****",
      "catgId": "****",
      "propertyList": [{
        "propertyId": "********",
        "propertyName": "****",
        "propertyValue": "*",
        "ACTION_CHECKBOX": "****"
      }]
    }]
  }]
}
```

`data`请求结果：
``` JSON
{
    "errorCode": "0",
    "errorDesc": "success",
    "data": {
        "sceneId": "scene_****************",
        "recommendName": "荣耀杜亚窗帘"
    }
}
```



##### 删除场景

**接口名称**

deleteScene

**请求消息**

``` javascript
honorConnect.handler(
"deleteScene", //string 执行方法 
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

| 名称      | 类型      | 是否必须 | 默认值  | 备注      |
|----------|----------|:-------:|--------|---------|
| sceneId  | string   |    Y    |        | 场景id    |
| userId   | string   |    N    |        |         |


**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
```

`data`结构 :

| 名称        | 类型      | 是否展示  | 备注     |
|------------|---------|----------|--------|
| errorCode  | string  | Y        | 错误码    |
| errorDesc  | string  | Y        | 错误描述   |
| data       | object  | Y        | 数据json |

`data-data`结构 :

| 名称      | 类型   | 是否展示  | 备注                     |
|---------|--------|----------| ------------------------ |
| code    | string | Y        | 用于适配app返回错误码        |
| message | string | Y        | 错误描述语句，一般用于冲突校验        |

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```

**测试用例**
`json_body`请求参数： 
```JSON
{
  "sceneId": "scene_****************"
}
```

`data`请求结果：
``` JSON
{
    "errorCode": "0",
    "errorDesc": "success",
    "data": {}
}
```



##### 修改场景

**接口名称**

updateScene

**请求消息**

``` javascript
honorConnect.handler(
"updateScene", //string 执行方法 
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

| 名称                    | 类型       | 是否必须 | 默认值  | 备注                                                       | 其他信息                               |
|-----------------------|----------|:-------:|--------|------------------------------------------------------------|------------------------------------|
| name                  | string   |    Y    |        | 场景名称,不允许与该用户名下其他场景名称重复                     |                                    |
| sceneId               | string   |    Y    |        | 场景id                   |                                  |
| imageUrl              | string   |    N    |        | 专属场景特有，APP端展示图片，校验由运营云处理                   |                                    |
| timeZone              | string   |    Y    |        | 时区                                                        |                                    |
| status                | string   |    Y    |        | 场景自动生效状态： on、生效---自动场景允许自动触发 off、<br/>失效---自动场景不允许自动触发（一般纯手动场景填写off） | 其他、非法字段，传入时校验，提示场景status只能为off或者on |
| executorId            | string   |    N    |        | 移动端设备唯一标识，用于pushtoken选择推送对象                   |                                    |
| isFullMode            | boolean  |    Y    | false  | 是否对子场景进行修改                   |                                    |
| updateSubSceneReqList | object[] |    Y    |        | 子场景列表                                                   | item 类型: object                    |

`updateSubSceneReqList`结构 :

| 名称                 | 类型      | 是否必须 | 默认值  | 备注                        |
|---------------------|-----------|:-------:|--------|---------------------------|
| subSceneId          | string    |    N    |        | 场景标识，传入则修改，不传则新增  |
| updateConditionReqs | object[]  |    Y    |        | 场景执行条件列表                |
| updateActionReqs    | object[]  |    Y    |        | 场景动作列表                    |

`updateConditionReqs`结构 :

| 名称              | 类型    | 是否必须 | 默认值 | 备注                                                                                                                 | 其他信息    |
|-----------------|---------|------| ------ |--------------------------------------------------------------------------------------------------------------------|-----|
| conditionFormat | string  | Y    |        | 前端排版字段，用于app场景详情页面显示格式       |     |
| conditionId     | string  | N    |        | 场景conditionID                            | 修改时需要传入，不传入则表示新增条件    |
| type            | string  | Y    |        | 传入：schedule                              | 定时触发    |
| repeat          | string  | Y    |        | everyDay 每天<br/>perMonth 每月<br/>weekly 每周<br/>workingDay 工作日<br/>holidays 节假日<br/>perYear 每年<br/>specifiedDate 指定日期 | type为schedule时必须携带，且只能是指定的值之一。 |
| timeType        | number     | Y    |        | 0：指定时间点<br/>1：日出<br/>2：日落          ||
| time            | string  | Y    |        | 当timeType为0时该字段必填，格式为 "hh:mm"      | 强校验    |
| day             | number     | Y    |        | [1, 31]，repeat为perMonth、perYear和specifiedDate时必填  |     |
| month           | number     | Y    |        | [1, 12]，repeat为perYear和specifiedDate时必填          |     |
| year            | number     | Y    |        | 暂无年份的限制，repeat为specifiedDate时必填             |     |
| daysOfWeek      | string  | Y    |        | [1, 7]，不允许传入重复的数字，repeat为weekly时必填       |     |
| **updateAdditionalConditionReqs** | **Object[]** | **N** | | **附加生效条件** | |

`updateActionReqs`结构 :

| 名称                | 类型     | 是否必须 | 默认值  | 备注                      | 其他信息                                  |
|-------------------|----------|------|------|-------------------------|---------------------------------------|
| actionFormat      | string   | Y    |      | 动作格式，端侧用于展示在场景详情页面的执行动作 | 执行智能设备                                |
| actionId          | string   | N    |      | 动作Id                    | 修改时需要传入，不传入则表示新增动作           |
| type              | string   | Y    |      | 传入：device               | 执行智能设备                  |
| selected          | boolean  | N    | true | 动作是否选中，不携带时默认赋值true     | true表示执行该动作，false表示不执行该动作             |
| devId             | string   | Y    |      | 执行智能设备的设备Id             | type为device时携，与用户（userId）及家庭（homeId）关联 |
| devName           | string   | Y    |      | 执行智能设备的设备名称             | type为device时携带                        |
| serviceId         | string   | Y    |      | 执行智能设备的服务Id             | type为device时携带                        |
| keyWords          | string   | Y    |      | 执行智能设备的关键词              | type为device时携带                        |
| prdId             | string   | Y    |      | 产品Id，注意区别于prdIds        | type为device时携带                        |
| catgId            | string   | N    |      | 设备的分类Id                 | type为device时携带                        |
| propertyList      | object[] | Y    |      | 设备信息的描述列表               |                                       |
| propertyId        | string   | Y    |      | 执行智能设备动作中属性Id           | 存在propertyList时携带有效                   |
| propertyName      | string   | Y    |      | 执行智能设备动作中属性名称           | 存在propertyList时携带有效                   |
| propertyValue     | string   | Y    |      | 执行智能设备动作中属性的值           | 存在propertyList时携带有效                   |
| propertyValueType | string   | N    |      | 执行智能设备动作中属性值类型          | 存在propertyList时携带有效                   |
| datatype          | string   | N    |      | 执行智能设备动作中属性的数据类型        | 存在propertyList时携带有效                   |

**`updateAdditionalConditionReqs`结构：**

| 名称                      | 类型     | 是否必须 | 默认值 | 备注                     | 其他信息                                                     |
| ------------------------- | -------- | -------- | ------ | ------------------------ | ------------------------------------------------------------ |
| additionalConditionId     | String   | N        |        | 附加条件Id               | 创建无需传入                                                 |
| order                     | int      | N        |        | order                    | 固定：order = 1                                              |
| type                      | String   | Y        |        | 附加条件类型             | 此处默认time；device：设备状态；phone：本机状态；app：应用状态；time：生效时间和次数；weather：根据天气进行判断；gps：根据位置进行判断； |
| additionalConditionFormat | String   | Y        |        | 附加生效条件格式         | 端侧用于展示在场景详情页面的附加生效条件，用以展示           |
| effectiveState            | String   | Y        |        | 生效状态                 | all：全天生效， part：部分时段生效                           |
| endTime                   | String   | N        |        | 结束时间，18:00          | regexp = "^([0-1]?[0-9]\|2[0-3]):([0-5][0-9])$", message = "endTime格式不对" |
| startTime                 | String   | N        |        | 开始时间，08:00          | regexp = "^([0-1]?[0-9]\|2[0-3]):([0-5][0-9])$", message = "startTime格式不对" |
| cron                      | String   | N        |        | cron表达式               | 根据接口返回透传                                             |
| repeat                    | String   | Y        |        | 重复类型                 | everyDay：每天； workingDay：法定工作日 ； holidays：节假日；weekly：每周 ；perMonth：每月 ； perYear：每年 ；specifiedDate. 指定日期； |
| day                       | int      | N        |        | 日                       | repeat为“每月”或“每年”或“指定日期”时，该字段不能为空         |
| month                     | int      | N        |        | 月                       | repeat为“每年”或“指定日期”时，该字段不能为空                 |
| year                      | int      | N        |        | 年                       | 指定日期不能为空                                             |
| daysOfWeek                | String   | N        |        | 一周中的那几天，逗号分割 | 1,2,3,6：代表周日周一周二周五；选择每周时不为空              |
| limits                    | String   | N        |        | 生效次数                 | 未确认规则，待定： 默认-1，表示无限次数                      |
| period                    | Long     | N        |        | 毫秒数，生效次数周期     | 不限制：0；*1小时一次：60x60x1000；6小时一次：6x60x60x1000；一天一次：24x60x60x1000；* |
| timeRangeList             | Object[] | N        |        | 时间范围                 |                                                              |

**`timeRangeList` 结构：**

| 名称      | 类型   | 是否必须 | 默认值 | 备注            | 其他信息                                                     |
| --------- | ------ | -------- | ------ | --------------- | ------------------------------------------------------------ |
| endTime   | String | N        |        | 结束时间，18:00 | regexp = "^([0-1]?[0-9]\|2[0-3]):([0-5][0-9])$", message = "endTime格式不对" |
| startTime | String | N        |        | 开始时间，08:00 | regexp = "^([0-1]?[0-9]\|2[0-3]):([0-5][0-9])$", message = "startTime格式不对" |



**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
```

`data`结构 :

| 名称        | 类型      | 是否展示  | 备注     |
|------------|---------|----------|--------|
| errorCode  | string  | Y        | 错误码    |
| errorDesc  | string  | Y        | 错误描述   |
| data       | object  | Y        | 数据json |

`data-data`结构 :

| 名称             | 类型   | 是否展示  | 备注                    |
|-----------------|--------|----------| ----------------------- |
| recommendName   | string | Y        | 场景推荐名称        |
| sceneId         | string | Y        |         |
| code            | string | Y        | 修改场景失败的错误码，修改成功时不会出现  |

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```

**测试用例**
`json_body`请求参数：（修改 name）
```JSON
{
  "name": "荣耀杜亚窗帘_update",
  "sceneId": "scene_*******************",
  "timeZone": "中国标准时间",
  "status": "on",
  "executorId": "*******************",
  "isFullMode": false,
  "updateSubSceneReqList": [{
    "updateConditionReqs": [{
      "conditionFormat": "{@dailyTime|edit}",
      "type": "schedule",
      "repeat": "everyDay",
      "timeType": 0,
      "time": "15:33",
      "day": 11,
      "month": 11,
      "year": 2023,
      "daysOfWeek": "7"
    }],
    "updateActionReqs": [{
      "actionFormat": "{@deviceName @listValue|0}",
      "type": "device",
      "devId": "*******************",
      "devName": "荣耀杜亚窗帘",
      "serviceId": "*******************",
      "keyWords": "*******************",
      "prdId": "****",
      "catgId": "****",
      "propertyList": [{
        "propertyId": "****",
        "propertyName": "****",
        "propertyValue": "*",
        "ACTION_CHECKBOX": "****"
      }]
    }]
  }]
}
```

`data`请求结果：
``` JSON
{
    "errorCode": "0",
    "errorDesc": "success",
    "data": {}
}
```



##### 查询场景

**接口名称**

queryScene

**请求消息**

``` javascript
honorConnect.handler(
"queryScene", //string 执行方法 
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

| 名称      | 类型      | 是否必须 | 默认值  | 备注      |
|----------|----------|:-------:|--------|---------|
| sceneId  | string   |    Y    |        | 场景id    |


**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
```

`data`结构 :

| 名称        | 类型     | 是否展示  | 备注           |
|------------|--------|----------|--------------|
| errorCode  | string | Y        | 错误码          |
| errorDesc  | string | Y        | 错误描述         |
| data       | object | Y        | 场景详细信息部分   |

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```

**测试用例**
`json_body`请求参数：
```JSON
{
  "sceneId": "scene_****************"
}
```

`data`请求结果：
``` JSON
{
    "errorCode": "0",
    "errorDesc": "success",
    "data": {
        "sceneId": "scene_****************",
        "homeId": "****************",
        "name": "荣耀杜亚窗帘",
        "userId": "****************",
        "order": 0,
        "fromTemplate": false,
        "haveHandCondition": false,
        "haveAutoCondition": true,
        "timeZone": "中国标准时间",
        "status": "on",
        "shortcut": 0,
        "executor": "cloud",
        "executorId": "****************",
        "subSceneList": [
            {
                "subSceneId": "subscene_****************",
                "express": "(cd_****************)",
                "additionalConditionList": [],
                "conditionList": [
                    {
                        "type": "schedule",
                        "conditionId": "cd_****************",
                        "conditionFormat": "{@dailyTime|edit}",
                        "additionalConditionList": [],
                        "year": 0,
                        "time": "15:33",
                        "timeType": 0,
                        "holiday": false,
                        "repeat": "everyDay",
                        "day": 0,
                        "month": 0
                    }
                ],
                "actionList": [
                    {
                        "type": "device",
                        "actionId": "ac_****************",
                        "actionFormat": "{@deviceName @listValue|0}",
                        "selected": true,
                        "additionalConditionList": [],
                        "devId": "****************",
                        "devName": "荣耀杜亚窗帘",
                        "prdId": "****",
                        "catgId": "****",
                        "serviceId": "*******",
                        "keyWords": "*******",
                        "propertyList": [
                            {
                                "propertyId": "*******",
                                "propertyName": "*******",
                                "propertyValue": "*"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
```



##### 查询场景列表

**接口名称**

querySceneList

**请求消息**

``` javascript
honorConnect.handler(
"querySceneList", //string 执行方法 
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

| 名称       | 类型    | 是否必须 | 默认值    | 备注      |
|-----------|---------|:-------:|--------|---------|
| pageSize | number     |    Y    | 20     | 查询场景列表时指定展示场景个数    |
| pageNum | number     |    Y    | 1      | 展示查询到的数据分页数    |


**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
```

`data`结构 :

| 名称        | 类型     | 是否展示  | 备注           |
|------------|----------|----------|--------------|
| errorCode  | string   | Y        | 错误码，成功为0，其他值为失败          |
| errorDesc  | string   | Y        | 错误描述         |
| data       | object[] | Y        | 数据列表   |

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```

**测试用例**
`json_body`请求参数：
```json
{
  "pageNum": 1,
  "pageSize":20
}
```

`data`请求结果：

``` JSON
{
    "errorCode": "0",
    "errorDesc": "success",
    "data": [
        {
            "sceneId": "scene_***********************",
            "name": "荣耀杜亚窗帘",
            "haveAutoCondition": true,
            "haveHandCondition": false,
            "status": "on",
            "shortcut": 0,
            "subSceneList": [
                {
                    "subSceneId": "subscene_***********************",
                    "additionalConditionList": [],
                    "conditionList": [
                        {
                            "conditionId": "cd_***********************",
                            "type": "schedule"
                        }
                    ],
                    "actionList": [
                        {
                            "actionId": "ac_***********************",
                            "type": "device"
                        }
                    ]
                }
            ]
        },
        {
            "sceneId": "scene_***********************",
            "name": "荣耀杜亚窗帘1",
            "haveAutoCondition": true,
            "haveHandCondition": false,
            "status": "on",
            "shortcut": 0,
            "subSceneList": [
                {
                    "subSceneId": "subscene_***********************",
                    "additionalConditionList": [],
                    "conditionList": [
                        {
                            "conditionId": "cd_***********************",
                            "type": "schedule"
                        }
                    ],
                    "actionList": [
                        {
                            "actionId": "ac_***********************",
                            "type": "device"
                        }
                    ]
                }
            ]
        }
    ]
}
```

##### 查询当前设备的场景列表

**接口名称**

queryCurrentDeviceSceneList

**请求消息**

``` javascript
honorConnect.handler(
"queryCurrentDeviceSceneList", //string 执行方法
"",  // 空
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```


**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
```

`data`结构 :

| 名称      | 类型     | 是否必须 | 备注                          |
| --------- | -------- | -------- | ----------------------------- |
| errorCode | string   | N        | 错误码，成功为0，其他值为失败 |
| errorDesc | string   | N        | 错误描述                      |
| data      | object[] | N        | 数据列表                      |

`data item`结构：

| 名称              | 类型      | 是否必须 | 备注         |
| ----------------- | --------- | -------- | ------------ |
| sceneId           | string    | N        | 场景id       |
| name              | string    | N        | 场景名称     |
| haveAutoCondition | boolean   | N        | 自动条件     |
| haveHandCondition | boolean   | N        | 手动条件     |
| status            | string    | N        | 自动生效状态 |
| shortcut          | integer   | N        | 是否显示     |
| subSceneList      | object [] | N        | 子场景列表   |

`subSceneList item`结构：

| 名称                    | 类型      | 是否必须 | 备注         |
| ----------------------- | --------- | -------- | ------------ |
| subSceneId              | string    | N        | 子场景ID     |
| additionalConditionList | object [] | N        | 全局生效条件 |
| conditionList           | object [] | N        | 执行条件列表 |
| actionList              | object [] | N        | 执行动作列表 |

`additionalConditionList item`结构：

| 名称                      | 类型    | 是否必须 | 备注           |
| ------------------------- | ------- | -------- | -------------- |
| additionalConditionId     | string  | N        | 附加条件ID     |
| additionalConditionFormat | string  | N        | 附加条件format |
| type                      | string  | N        | 附加条件类型   |
| version                   | integer | N        | 组件版本       |

`conditionList item`结构：

| 名称        | 类型    | 是否必须 | 备注         |
| ----------- | ------- | -------- | ------------ |
| conditionId | string  | N        | 执行条件ID   |
| type        | string  | N        | 执行条件类型 |
| version     | integer | N        | 组件版本     |

`actionList item`结构：

| 名称     | 类型    | 是否必须 | 备注         |
| -------- | ------- | -------- | ------------ |
| actionId | string  | N        | 执行动作ID   |
| type     | string  | N        | 执行动作类型 |
| version  | integer | N        | 组件版本     |



**异常响应消息**

```JSON
{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



##### 查询设备的使用记录（推荐使用）

**接口名称**

queryMessageList

**请求消息**

``` javascript
honorConnect.handler(
	"queryMessageList", //string 执行方法 
	"json_body",  // body,string, 必选
	"requestId",  //string，请求Id
	"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

| 名称            | 类型     | 是否必选 | 默认值  | 备注                                                                       |
|---------------|--------|:----:|--------|--------------------------------------------------------------------------|
| bizType       | string |  N   |        | 业务类型<br/>为空时，对应的是bizType为空或者default的业务类型，<br/>传default时，查default和为空的业务类型 |
| msgType       | string |  N   |        | 1: 设备消息<br/>2: 家庭管理消息(系统消息)<br/>空则查询所有                                   |
| msgSubType    | string |  N   |        | 消息子类目code<br/>空则查询所有                                                     |
| operateStatus | string |  N   |        | 0:不涉及<br/>1:未处理<br/>2:已处理<br/>3:已过期<br/>字段不传，查询所有类型                      |
| startTime     | Date   |  N   |        | 起始时间的UTC秒（可空，为空时条件不生效），单位是秒（时间戳）；                                        |
| endTime       | Date   |  N   |        | 结束时间的UTC秒（可空，为空时条件不生效），单位是秒（时间戳）；                                             |
| pageSize      | number    |  N   |        | 分页时每页消息条数，默认为20                                                          |
| pageIndex     | number    |  N   |        | 分页时当前查询第几页，默认1<br/>-1则返回所有消息                                             |
| devIdList      | List<String>  |  Y   |        | 设备ID集合                                                                   |
| msgStatus     | string |  N   |        | 消息状态：<br/>0：未读<br/>1：已读<br/>空：全部                                         |
| serviceId    | string |  Y   |        | 事件所在服务的id。（搜索设备事件字段，不用可不传。）                                              |
| eventId   | string |  Y   |        | 事件id。（搜索设备事件字段，不用可不传。）                                                   |
| searchParam    | Map<String,String> |  N   |        | key是检索的关键字，传事件上报的propertyId定义，value是检索词，精确匹配。（搜索设备事件字段，不用可不传。)           |


**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
```

`data`结构 :

| 名称        | 类型     | 是否必选  | 备注           |
|------------|----------|----------|--------------|
| errorCode  | string   | Y        | 错误码          |
| errorDesc  | string   | Y        | 错误描述         |
| data       | object[] | Y        | 数据             |

`data-data`结构 :

| 名称            | 类型     | 是否必选 | 备注                     |
|---------------|--------|------| ------------------------ |
| msgId         | string | Y    | 消息唯一标识        |
| msgType       | string | Y    | 1:	设备消息<br/>2:	系统消息        |
| msgSubType    | string | Y    | 消息子类目code        |
| devId         | string | N    | 设备ID        |
| notifyId      | string | N    | 通知id        |
| msgStatus     | number    | Y    | 消息状态：<br/>0：未读<br/>1：已读        |
| msgReceipt    | number    | Y    | 消息回执状态：<br/>0：未收到回执<br/>1：已收到回执        |
| operateStatus | number    | N    | 用户操作处理状态<br/>0:不涉及<br/>1:未处理<br/>2:已处理<br/>3:已过期        |
| msgContent    | string | Y    | 消息原始内容，JSON格式        |
| eventType     | number    | N    | 事件类型<br/>1：消息<br/>2：提醒<br/>3：告警        |
| msgDisplay | string | N | 消息展示内容 |
| msgDisplayCN  | string | N    | 消息展示内容中文格式        |
| msgDisplayEN  | string | N    | 消息展示内容英文格式        |
| time          | Date   | Y    | 消息产生时间戳        |
| currentTime   | Date   | Y    | 系统时间        |


**异常响应消息**

```JSON
{
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```

##### 云云设备刷新设备信息（云云设备专用）

**接口名称**

refreshThrDevice

**请求消息**

``` javascript
honorConnect.handler(
	"refreshThrDevice", //string 执行方法 
	"",  // 空string
	"requestId",  //string，请求Id
	"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```


**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
```

`data`结构 :

``` JSON
{
	"prdID": "XXX",
    "onlineStatus": "Online or Offline",
	"serviceList": [{
		"id": "XXXX",
		"propertyList": [{
			"id": "XXX",
			"value": 0
		}, {
			"id": "XXX",
			"value": "XXX"
		}]
	}, {
		"id": "XXX",
		"propertyList": [{
			"id": "XXX",
			"value": 1
		}]
	}]
}
```

**异常响应消息**

```JSON
{
    "responseId" : "1650600291901",
    "status": 13,  
    "msg": "HONORCONNECT_DEV_FAIL"
}
or
{
    "responseId" : "1650600291901",
    "status": 24,  
    "msg": "HONORCONNECT_THR_TOKEN_EXPIRED"
}
```



##### 切换网络配置

**接口名称**

switchWifiConfig

**接口描述**

当wifi设备切换网络时，WEB中调用JS方法如下：

**请求消息**

``` javascript
honorConnect.handler(
	"switchWifiConfig", //string 执行方法 
	"", // 空string
	"requestId",  //string，请求Id
	"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
 
}
```

**异常响应消息**

```JSON
{
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```

#####  获取产品图标

**接口名称**

getProductIcon

**接口描述**

获取云侧配置的产品图标。

**请求消息**

``` javascript
honorConnect.handler(
"getProductIcon", //string 执行方法 
"json_body",  // body,string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构

```javascript
 {
    "productId": "", // string, 必填，产品Id
    "subDevType": "", // string, 必填，设备子类型（0~36）
    "sizeModel": "" // string, 必填，图标大小
 }
```

sizeModel枚举

| sizeModel | 类型   | 大小      |
| --------- | ------ | --------- |
| XS        | String | 160×160   |
| S         | String | 224×224   |
| M         | String | 448×448   |
| L         | String | 608×608   |
| XL        | String | 880×880   |
| XXL       | String | 1008×1008 |

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "",
  "data": "",//String,bitmap经base64加密后的内容
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "",
    "status": 100, //图标资源加载失败
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```

#####  通过Action跳转页面

**接口名称**

jumpAction

**接口描述**

通过Action跳转页面，系统页面如 WIFI设置页、蓝牙设置页等只能通过Action跳转，无法通过 DeepLink跳转。

 **请求消息**

``` javascript
honorConnect.handler(
"jumpAction", //string 执行方法
"json_body",  // body,string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构 :

``` JSON
{
  "action": "" // string，WIFI设置页如"android.settings.WIFI_SETTINGS"
}
```



**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600307883"
}
```

**异常响应消息**

```JSON
{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



#####  注册设备消息监听

**接口名称**

registerDevMsgObserver

**接口描述**

注册设备消息监听。

**请求消息**

``` javascript
honorConnect.handler(
"registerDevMsgObserver", //string 执行方法
"json_body",  // body,string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构

```javascript
["notifyId","notifyId",...]//要监听的消息类型集合
```

notifyId枚举

| notifyId | 描述         | 类型   |
| -------- | ------------ | ------ |
| DEV_EVT  | 设备事件通知 | string |

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": ""
}
```

**异常响应消息**

```JSON
{
    "responseId" : "",
    "status": 12, //无效参数
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```

#### 蓝牙



#####  创建蓝牙连接

**接口名称**

createBleConnection

**接口描述**

当需要创建蓝牙连接时，WEB中调用JS方法如下。
注意：本接口依赖业务领域传入设备的特征全集，这样才能保证在三方蓝牙设备变化监听中收到该设备上报的特征变化。

**请求消息**

``` javascript
honorConnect.handler(
"createBleConnection", //string 执行方法 
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入对应serviceUUID、chrctUUID及uuidType：

``` JSON
{ 
  "characteristics" : [
    {
      "serviceUUID": "serviceUUID1",  //string，serviceUUID
      "chrctUUID": "chrctUUID1", //string，chrctUUID
      "uuidType": 3  //int, 传3，含义如下
    },
    {
      "serviceUUID": "serviceUUID2", 
      "chrctUUID": "chrctUUID2", 
      "uuidType": 3  
    }
  ]
}

```

uuidType 用于标识对设备特征的操作类型，取值和具体含义如下，创建蓝牙连接时取3：

```java
public class Characteristic {
    public static int TYPE_READ = 0; // 读取设备特征
    public static int TYPE_WRITE_NO_RESP = 1; // 设置设备特征（无回复）
    public static int TYPE_WRITE = 2; // 设置设备特征
    public static int TYPE_NOTIFY = 3; // 主动通知
    public String serviceUUID;
    public String chrctUUID;
    public int uuidType; // 用于标识对设备特征的操作类型
}
```

**响应消息**

``` JSON
{ 
    "responseId" : "1650600291901",
    "status": 0, 
    "msg": "SUCCESS",
    "connectionStatus": true //boolean , 创建连接成功时，返回值为true；反之，返回值为false。 
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  断开蓝牙连接

**接口名称**

closeBleConnection

**接口描述**

应用断开与BLE设备的蓝牙连接。

**请求消息** 

``` javascript
honorConnect.handler(
"closeBleConnection", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息** 

``` JSON
{ 
    "responseId" : "1650600291901",
    "status": 0, 
    "msg": "SUCCESS",
    "result": true //boolean , 断开连接成功时，返回值为true；反之，返回值为false。 
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  下发指令给设备，读特征数据

**接口名称**

readCharacteristic

**接口描述**

当需要将下发命令给设备时，WEB中调用JS方法如下。一般用在接收到用户对设备的操作指令时。

**请求消息** 

``` javascript
honorConnect.handler(
"readCharacteristic", //string 执行方法 
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入对应serviceUUID、chrctUUID及uuidType（取值参见Profile定义）：

``` JSON
{ 
   "serviceUUID": "serviceUUID",  //string，serviceUUID
    "chrctUUID": "chrctUUID", //string，chrctUUID
    "uuidType": 0  //int, 传0，含义如下
}

```

uuidType 用于标识对设备特征的操作类型，取值和具体含义如下，读特征数据时取0：

```java
public class Characteristic {
    public static int TYPE_READ = 0; // 读取设备特征
    public static int TYPE_WRITE_NO_RESP = 1; // 设置设备特征（无回复）
    public static int TYPE_WRITE = 2; // 设置设备特征
    public static int TYPE_NOTIFY = 3; // 主动通知
    public static int TYPE_INDICATE = 4; // 主动上报
    public String serviceUUID;
    public String chrctUUID;
    public int uuidType; // 用于标识对设备特征的操作类型
}
```

**响应消息** 

``` JSON
{ 
    "responseId" : "1650600291901",
    "status": 0, 
    "msg": "SUCCESS",
    "data": "data" // Hex string, 读取的特征数据
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  下发指令给设备，写特征数据

**接口名称**

writeCharacteristic

**接口描述**

当需要将下发命令给设备时，WEB中调用JS方法如下。一般用在接收到用户对设备的操作指令时。

**请求消息** 

``` javascript
honorConnect.handler(
"writeCharacteristic", //string 执行方法 
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入对应serviceUUID、chrctUUID及uuidType、data（取值参见Profile定义）：

``` JSON
{ 
   "serviceUUID": "serviceUUID",  //string，serviceUUID
   "chrctUUID": "chrctUUID", //string，chrctUUID
   "uuidType": 1,  //int,  传1或2，建议用1
   "data":"data" // Hex string, 需要写入的特征数据
}

```

uuidType 用于标识对设备特征的操作类型，取值和具体含义如下，写特征数据时取1或2，建议用1：

```java
public class Characteristic {
    public static int TYPE_READ = 0; // 读取设备特征
    public static int TYPE_WRITE_NO_RESP = 1; // 设置设备特征（无回复）
    public static int TYPE_WRITE = 2; // 设置设备特征
    public static int TYPE_NOTIFY = 3; // 主动通知
    public static int TYPE_INDICATE = 4; // 主动上报
    public String serviceUUID;
    public String chrctUUID;
    public int uuidType; // 用于标识对设备特征的操作类型
}
```

**响应消息**

``` JSON
{ 
    "responseId" : "1650600291901",
    "status": 0, 
    "msg": "SUCCESS"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



##### 获取蓝牙开关状态

**接口名称**

getBluetoothState

**接口描述**

当需要获取系统蓝牙开关是否打开时调用

**请求消息**

``` javascript
honorConnect.handler(
"getBluetoothState", //string 执行方法 
"",//空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "state": "true"  //true 蓝牙打开，false 蓝牙关闭
 
}
```
**异常响应消息**

```JSON
{
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```

##### 获取蓝牙连接状态

**接口名称**

getBluetoothConnectionStatus

**接口描述**

当需要获取当前设备是否连接蓝牙时调用

**请求消息**

``` javascript
honorConnect.handler(
"getBluetoothConnectionStatus", //string 执行方法 
"",//空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "state": "true"  //true 蓝牙连接，false 蓝牙断开
 
}
```

**异常响应消息**

```JSON
{
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```

##### 跳转蓝牙设置页面

**接口描述**

当需要跳转到系统蓝牙设置界面时调用

**接口名称**

jumpBluetoothSettings

**请求消息**

``` javascript
honorConnect.handler(
"jumpBluetoothSettings", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
 
}
```

**异常响应消息**

```JSON
{
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```

#### OTA



#####  检测设备OTA版本信息

**接口名称**

checkOta

**接口描述**

当需要检测设备OTA版本时，WEB中调用JS方法如下

**请求消息** 

``` javascript
honorConnect.handler(
"checkOta", //string 执行方法 
"json_body", // body,string,必填，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);

```



`json_body`中传入对应scope（请求参数的scope和响应消息中的type一一对应）：

| scope取值 | 描述        | 类型   |
| --------- | ----------- | ------ |
| ota       | 请求ota版本 | string |
| mcu       | 请求mcu版本 | string |

`json_body`举例：

```json
{
  "scope":[
    "ota"
  ]
}
或者
{
  "scope":[
    "ota",
    "mcu" 
  ]
}
```



检测到固件版本的响应消息 (result数组中的type值和请求参数中的scope值一一对应):

```json
{
    "responseId": "responseId",
    "status": 0,
    "msg": "SUCCESS",
    "result": [
        {
            "description": "版本信息描述",
            "type": "ota",//ota版本信息
            "version": "1.0.1"//新版本号，没有新版本时此字段为空
        },
        {
            "description": "版本信息描述",
            "type": "mcu",//mcu版本信息
            "version": ""//新版本号，没有新版本时此字段为空
        }
    ]
}
```



**异常响应消息**

```JSON

// 设备不在线 
情况1、ble设备被重置，app侧目前会弹窗提示“设备已恢复出厂设置，无法建立连接，是否重新绑定？”，点击确定会绑定ble设备
情况2、ble详情页回连失败，app侧目前会弹窗提示“1. 检查设备是否已开启。2. 避免手机、设备之间距离过远。3. 可重置设备后，重新连接。”
情况3、其他
{ 
    "responseId" : "1650600291901",
    "status": 11,  
    "msg": "HONORCONNECT_DEV_OFFLINE"
}
// 蓝牙开关关闭
{ 
    "responseId" : "1650600291901",
    "status": 16,  
    "msg": "HONORCONNECT_BT_SWITCH_OFF"
}
// 其他错误
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  OTA升级

**接口名称**

upgradeOta

**接口描述**

升级OTA版本时，WEB中调用JS方法如下

**请求消息** 

``` javascript
honorConnect.handler(
"upgradeOta", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);

```

当前正在升级 :

``` JSON
{ 
    "responseId" : "responseId",
    "status": 0, 
    "msg": "SUCCESS",
    "type": "isUpgrading",
}
```

ota状态发生变化（多次返回，最终状态为500、600、-100之一） :

``` JSON
{ 
    "responseId" : "responseId",
    "status": 0, 
    "msg": "SUCCESS",
    "type": "otaStatusChanged",
    "otaStatusCode": 600 //如下对应状态码
}
对应状态码：
//0, 默认值
//100, 正在检查
//200, 检查完成
//300, 升级中
//400, 下载完成,等待重启
//500, 超时
//600, 升级成功
//-100, 升级失败（安装动作失败）
```

ota下载进度，范围0-100（多次返回，在上述状态码为300后开始返回，400时下载进度100%停止返回） :

``` JSON
{ 
    "responseId" : "responseId",
    "status": 0, 
    "msg": "SUCCESS",
    "type": "otaProgressChanged",
    "otaProgress": 55 //范围0-100
}
```

**异常响应消息**

```JSON
// 设备不在线 
情况1、ble设备被重置，app侧目前会弹窗提示“设备已恢复出厂设置，无法建立连接，是否重新绑定？”，点击确定会绑定ble设备
情况2、ble详情页回连失败，app侧目前会弹窗提示“1. 检查设备是否已开启。2. 避免手机、设备之间距离过远。3. 可重置设备后，重新连接。”
情况3、其他
{ 
    "responseId" : "1650600291901",
    "status": 11,  
    "msg": "HONORCONNECT_DEV_OFFLINE"
}
// 蓝牙开关关闭
{ 
    "responseId" : "1650600291901",
    "status": 16,  
    "msg": "HONORCONNECT_BT_SWITCH_OFF"
}
// 其他错误
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  取消OTA升级

**接口名称**

stopUpgradeOta

**接口描述**

取消OTA升级时，WEB中调用JS方法如下

**请求消息** 

``` javascript
honorConnect.handler(
"stopUpgradeOta", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);

```

**取消成功** 

``` JSON
{ 
    "responseId" : "responseId",
    "status": 0, 
    "msg": "SUCCESS",
}
```

**异常响应消息**

```JSON
// 设备不在线 
情况1、ble设备被重置，app侧目前会弹窗提示“设备已恢复出厂设置，无法建立连接，是否重新绑定？”，点击确定会绑定ble设备
情况2、ble详情页回连失败，app侧目前会弹窗提示“1. 检查设备是否已开启。2. 避免手机、设备之间距离过远。3. 可重置设备后，重新连接。”
情况3、其他
{ 
    "responseId" : "1650600291901",
    "status": 11,  
    "msg": "HONORCONNECT_DEV_OFFLINE"
}
// 蓝牙开关关闭
{ 
    "responseId" : "1650600291901",
    "status": 16,  
    "msg": "HONORCONNECT_BT_SWITCH_OFF"
}
// 其他错误
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```

##### 单设备跳转固件更新页面

**接口描述**

单设备增加ota跳转到固件更新页面

**接口名称**

jumpOtaMcuCheckUpdatePage

**请求消息**

``` javascript
honorConnect.handler(
"jumpOtaMcuCheckUpdatePage", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
 
}
```

**异常响应消息**

```JSON
{
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```

#### APVideo设备



#####  连接设备

**接口名称**

apConnectDevice

**接口描述**

连接设备时调用

**请求消息**

``` javascript
honorConnect.handler(
"apConnectDevice", //string 执行方法 
"", //空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息**

``` JSON
{ 
    "responseId" : "1650600291901",
    "status": 0, 
    "msg": "SUCCESS",
    "connectionStatus": true //boolean , 连接成功时，返回值为true；反之，返回值为false。 
    "remoteAddress": 192.168.*.* //连接成功时返回，路由ip
    "localAddress": 192.168.*.* //连接成功时返回，连接ip
}
```

#####  断开连接

**接口名称**

apDisConnectDevice

**接口描述**

退出页面时调用

**请求消息**

``` javascript
honorConnect.handler(
"apDisConnectDevice", //string 执行方法 
"", //空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

#####  保存图片到本地

**接口名称**

savePicToLocal

**接口描述**

H5保存图片到手机sd卡目录，可以根据type类型选择具体存放目录

type为1→图片保存在sd的Pictures目录，图片名称为产品id+时间戳

type为2→图片保存在sd的Pictures目录，图片名称为Screenshot_时间戳_产品id

注：iOS调用这个接口，需要先调用requestPermission接口，传入PHOTOLIBRARYADD或者PHOTOLIBRARYTOTAL参数，来申请相册权限接口，且返回已授权，才能调用该JSAPI

**请求消息** 

``` javascript
honorConnect.handler(
"savePicToLocal", //string 执行方法 
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);

```

`json_body`中传入类型以及图片数据：

``` JSON
{ 
   "type": "1", //业务类型
   "data": "" //图片数据 base64
}

```

**响应消息**

``` JSON
{
    "responseId" : "1650600291901",
    "state": false or true,//成功或者失败 
    "filePath": "" //state未true时有值，保存文件的路径
}
```



#### 权限管理

#####  申请录音相关权限

**接口名称**

requestAudioPermissions

**接口描述**

申请录音相关权限

**请求消息** 

``` javascript
honorConnect.handler(
"requestAudioPermissions", //string 执行方法 
"", 
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "permissionStatus": 0  //权限申请状态， 0：权限获取成功 1：权限获取失败
}
```



#### 录音管理

##### 开始录音

**接口名称**

startRecording

**接口描述**

开始录音

**请求消息** 

``` javascript
honorConnect.handler(
"startRecording", //string 执行方法 
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构

```javascript
{
  "audioSource":"VOICE_RECOGNITION", // 录音的音频源，string，可选，默认为“VOICE_RECOGNITION”
  "audioChannel":"MONO", // 录音的音频通道数, string, 可选，默认为"MONO"
  "audioEncodingBitRate":16384, // 录制时的音频编码比特率，此参数值设置可能会有设备兼容性问题建议默认不填值，number，可选，默认为16384 = 16 * 1024
  "audioSamplingRate":44100, // 录制时的音频采样率,此参数值设置可能会有设备兼容性问题建议默认不填值, number，可选，默认为44100
  "outputFormat":"pcm" // 输出音频格式：pcm：输出pcm格式音频；不传则默认是aac
}	
```

`audioSource`取值：

```javascript
"VOICE_RECOGNITION"：用于获取语音进行语音识别 
"MIC":录音为主麦克风
```

`audioChannel`取值：

```javascript
"MONO"：单声道
"STEREO"：双声道
```



**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



##### 暂停录音

**接口名称**

pauseRecording

**接口描述**

暂停录音

**请求消息** 

``` javascript
honorConnect.handler(
"pauseRecording", //string 执行方法 
"json_body",  //string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构

```javascript
{
  "outputFormat":"pcm" // 输出音频格式：pcm：输出pcm格式音频；不传则默认是aac
}
```



**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



##### 继续录音

**接口名称**

resumeRecording

**接口描述**

继续录音

**请求消息** 

``` javascript
honorConnect.handler(
"resumeRecording", //string 执行方法 
"json_body",  // string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构

```javascript
{
  "outputFormat":"pcm" // 输出音频格式：pcm：输出pcm格式音频；不传则默认是aac
}
```



**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



##### 停止录音

**接口名称**

stopRecording

**接口描述**

停止录音

**请求消息** 

``` javascript
honorConnect.handler(
"stopRecording", //string 执行方法 
"json_body",  // 空,string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构

```javascript
{
  "outputFormat":"pcm" // 输出音频格式：pcm：输出pcm格式音频；不传则默认是aac
}
```



**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "fileInfo":{
     "filePath":"" // string，音频文件本地路径
  }
}
```

`fileInfo`格式

| 字段     | 类型   | 描述                                                         | 取值                       |
| :------- | :----- | :----------------------------------------------------------- | :------------------------- |
| filePath | String | multipartFile音频文件，pcm格式，采样率为24k，单通道，录音时长大于3s，且文件大小小于500k | 上面停止录音返回的文件地址 |

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



##### 开始播放录音

**接口名称**

startPlayRecording

**接口描述**

开始播放录音

**请求消息** 

``` javascript
honorConnect.handler(
"startPlayRecording", //string 执行方法 
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构

```javascript
{
  "url":"", // string, 必填, 音频文件本地路径
  "outputFormat":"pcm" // 输出音频格式：pcm：输出pcm格式音频；不传则默认是aac
}
```

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



##### 暂停播放录音

**接口名称**

pausePlayRecording

**接口描述**

暂停播放录音

**请求消息** 

``` javascript
honorConnect.handler(
"pausePlayRecording", //string 执行方法 
"json_body",  // 空,string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构

```json
{
  "outputFormat":"pcm" // 输出音频格式：pcm：输出pcm格式音频；不传则默认是aac
}
```



**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



##### 继续播放录音

**接口名称**

resumePlayRecording

**接口描述**

继续播放录音

**请求消息** 

``` javascript
honorConnect.handler(
"resumePlayRecording", //string 执行方法 
"json_body",  // 空,string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构

```json
{
  "outputFormat":"pcm" // 输出音频格式：pcm：输出pcm格式音频；不传则默认是aac
}
```



**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



##### 停止播放录音

**接口名称**

stopPlayRecording

**接口描述**

停止播放录音

**请求消息** 

``` javascript
honorConnect.handler(
"stopPlayRecording", //string 执行方法 
"json_body",  // string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构

```json
{
  "outputFormat":"pcm" // 输出音频格式：pcm：输出pcm格式音频；不传则默认是aac
}
```



**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```

##### 获取麦克风信息

**接口名称**

getMicInfo

**接口描述**

获取麦克风信息

**请求消息** 

``` javascript
honorConnect.handler(
"getMicInfo", //string 执行方法 
"",  
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "micInfoList":[] // 麦克风信息
}
```

`micInfoList`结构

```javascript
[
    {
        "id":4,
        "address":"bottom"
    },
    {
        "id":6,
        "address":"back"
    }
]
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```

#### 

#### 视频管理

#####  下载视频到本地并同步到相册

**接口名称**

saveVideoToAlbum

**接口描述**

保存文件记录

注：iOS调用这个接口，需要先调用requestPermission接口，传入PHOTOLIBRARYADD或者PHOTOLIBRARYTOTAL参数，来申请相册权限接口，且返回已授权，才能调用该JSAPI

**请求消息** 

``` javascript
honorConnect.handler(
"saveVideoToAlbum", //string 执行方法 
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构

```javascript
{
  "from":"", // string, 必填, 视频来源，取值："local"或"network"
  "source":"", // string, 必填, 视频地址，格式：如果from是network,source为网络地址，如果from是local,source为本地绝对路径
  "headerInfoList":"", // JsonArray, 可选, 下载文件时请求头需要携带的参数，from为network时，该字段生效。
}	
```

`headerInfoList`结构

```javascript
[
  {
    "paramName": "", // string, 必填，字段名
    "paramValue": "" // string, 必填，字段值
  },
  {
   "paramName": "", 
   "paramValue": ""
  }
]	
```

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```

#####  跳转全屏设备详情页

**接口名称**

jumpFullScreenPage

**接口描述**

保存文件记录

**请求消息** 

``` javascript
honorConnect.handler(
"jumpFullScreenPage", //string 执行方法 
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构

```javascript
{
  "remoteUrl":"", // string, 必填, 跳转全屏页的h5 url
}	
```

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



#### 文件管理

#####  保存文件记录

**接口名称**

saveFileRecord

**接口描述**

保存文件记录

**请求消息** 

``` javascript
honorConnect.handler(
"saveFileRecord", //string 执行方法 
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构

```javascript
{
  "key":"", // string, 必填, 本条记录的唯一标识
  "value":"", // string, 必填, 提供给插件存储一些个性化数据
  "filePath":""// string, 必填, 音频文件本地路径
  "businessType":"" // string, 必填, 业务类型
}	
```

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  批量删除文件记录

**接口名称**

deleteFileRecords

**接口描述**

批量删除文件记录

**请求消息** 

``` javascript
honorConnect.handler(
"deleteFileRecords", //string 执行方法 
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构

```javascript
{
  "keys":"", // JsonArray, 必填, 需要批量删除文件记录的key,格式："["key1", "key2", "key3", "key4"]"
}	
```

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "result":"" // string, 必填，每条记录对应的删除状态，'1'：删除成功，'0':删除失败，格式："[1, 0, 0, 1]"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  获取文件记录列表

**接口名称**

getFileRecords

**接口描述**

获取文件记录列表

**请求消息** 

``` javascript
honorConnect.handler(
"getFileRecords", //string 执行方法 
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构

```javascript
{
  "businessType":"" // string, 必填, 业务类型
}	
```

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data":"" // JsonArray, 必填，文件记录列表信息
}
```

`data`结构

```javascript
[
  {
    "filePath": "", // string, 必填，录音文件本地路径
    "key": "", // string, 必填，本条记录的唯一标识
    "value": "" // string, 必填，插件存储一些个性化数据
  },
  {
    "filePath": "",
    "key": "",
    "value": ""
  }
]
```



**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  文件上传

**接口名称**

uploadFile

**接口描述**

文件上传

**请求消息** 

``` javascript
honorConnect.handler(
"uploadFile", //string 执行方法 
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构

```javascript
{
  "baseUrl":"", // string, 必填, 三方服务器域名，格式："https:"//host:port"
  "interfaceName":"", // string, 必填, 上传文件接口名，如："file/upload"
  "mediaType":"", // string, 必填, 媒体类型，'.aac'文件为："audio/aac"，具体文件扩展名对应媒体类型见"https://www.iana.org/assignments/media-types/media-types.xhtml"
  "fileParamName":"", // string, 必填, 文件对应的接口字段名如 ："fileInfo"
  "filePath":"", // string, 必填, 文件本地路径
  "headerInfoList":"", // JsonArray, 可选, 上传文件时请求头需要携带的参数
  "paramInfoList":"", // JsonArray, 必填, 上传文件时额外需要携带的参数
  "encryption":"", // JsonObject, 必填, 文件加密信息
}	
```

`headerInfoList`结构

```javascript
[
  {
    "paramName": "", // string, 必填，字段名
    "paramValue": "" // string, 必填，字段值
  },
  {
   "paramName": "", 
   "paramValue": ""
  }
]	
```

`paramInfoList`结构，app会在该list中额外增加encryptMethod信息

```javascript
[
  {
    "paramName": "", // string, 必填，字段名
    "paramValue": "" // string, 必填，字段值
  },
  {
   "paramName": "", 
   "paramValue": ""
  },
  {
    "paramName": "encryptMethod", // string, 必填，加密方式
    "paramValue": "chacha20" // string, 必填，"chacha20"
  }  
]	
```

`encryption`结构

```javascript
{
    "method": "", // string, 必填，加密方式，如:"chacha20"
    "param":""// jsonString, 可选，保留字段，便于后续扩展 
}	
```

`method`取值

```javascript
"chacha20" 
```





**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "responseBody":"" // string，接口返回的响应体
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#### 自研空鼠



#####  是否支持自研空鼠

**接口名称**

isSupportAirMouse

**接口描述**

判断当前手机和电视是否都支持自研空鼠，WEB中调用JS方法如下：

**请求消息**

``` javascript
honorConnect.handler(
"isSupportAirMouse", //string 执行方法
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

| 名称      | 类型 | 是否必须 | 默认值 | 备注                                                         |
| --------- | ---- | :------: | ------ | ------------------------------------------------------------ |
| isSupport | int  |    Y     | 0      | 从电视端获取profile里  serviceId 为"airMouse",propertyId为"isSupport"的值 |

**响应消息**

``` JSON
{
    "responseId" : "responseId",
    "isSupportAirMouse": true, //boolean, true:手机和IOT设备都支持自研空鼠,true:手机和IOT设备不都支持自研空鼠
    "msg": "SUCCESS"
}
```

**异常响应消息**

```JSON
{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



#####  提供插件通知 app 是否禁用手势导航退出

**接口名称**

disableGestureNaviExit

**接口描述**

提供插件通知 app 是否禁用手势导航退出

**请求消息**

``` javascript
honorConnect.handler(
"disableGestureNaviExit", //string 执行方法
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

| 名称 | 类型 | 是否必须 | 默认值 | 备注                                                         |
| ---- | ---- | :------: | ------ | ------------------------------------------------------------ |
| type | int  |    Y     |        | 0:表示禁用手势导航的退出页面 功能；1:表示不禁用手势导航的退出页面功能。 |

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600307886"
}
```

**异常响应消息**

```JSON
{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



#####  连接空鼠

**接口名称**

enableAirMouse

**接口描述**

连接空鼠，空鼠是否真正地连接成功不在此方法中回调，应当监听 `window.eventNotifyCallback` 的 `NOTIFY_AIR_MOUSE_STATE_CHANGED`的状态通知，WEB中调用JS方法如下：

**请求消息**

``` javascript
honorConnect.handler(
"isSupportAirMouse", //string 执行方法
"",
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息**

``` JSON
{
    "responseId" : "responseId",
    "msg": "SUCCESS"
}
```

**异常响应消息**

```JSON
{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



#####  更新空鼠灵敏度

**接口名称**

updateAirMouseSensitivity

**接口描述**

更新空鼠灵敏度，WEB中调用JS方法如下：

**请求消息**

``` javascript
honorConnect.handler(
"isSupportAirMouse", //string 执行方法
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

| 名称     | 类型  | 是否必须 | 默认值 | 备注                                       |
| -------- | ----- | :------: | ------ | ------------------------------------------ |
| accuracy | float |    Y     | 0      | 精度范围1.0-5.5，十个档位，每个档位递进0.5 |

**响应消息**

``` JSON
{
    "responseId" : "responseId",
    "msg": "SUCCESS"
}
```

**异常响应消息**

```JSON
{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



#####  按压空鼠区域

**接口名称**

pressMouseArea

**接口描述**

当用户手指按压到空鼠区域时调用一次此方法，智慧空间开始将手势传递到电视侧，WEB中调用JS方法如下：

**请求消息**

``` javascript
honorConnect.handler(
"pressMouseArea", //string 执行方法
"",
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息**

``` JSON
{
    "responseId" : "responseId",
    "msg": "SUCCESS"
}
```



#### 打印机设备-Native调用JS方法



当设备状态变化时会主动通知H5界面，H5界面可实现如下方法进行监听：

3. js实现方法，WIFI设备变化时APP触发该方法，将设备变化信息返回H5。
   window.printerStatusCallback(HnPrinterStatus printerStatus) 

  ```
  HnPrinterStatus 格式如下:
  {
    HnPrinterStatus对象
  }
  ```

2. js实现方法，打印完成时时APP触发该方法，将打印任务信息返回H5。

   window.printJobCallback(HnPrintJobInfo printJobInfo) 

  HnPrinterStatus 对象如下:

``` JSON
{
  private final PrinterId mId;
  private final int mStatus;
  private final int mInkState;
  private final int mTonerState;
  private final boolean mOutOfPaper;
}
```

HnPrintJobInfo 对象如下:

``` JSON
{
  private HnPrintJobId mId;
  private String mLabel;
  private PrinterId mPrinterId;
  private String mPrinterName;
  private int mState;
  private long mCreationTime;
  private int mCopies;
  private PageRange[] mPageRanges;
  private HnPrintAttributes mAttributes;
  private Uri mDocumentUri;
  private int mContentType;
  private int mPageCount;
  @Nullable
  private String mStatus;
  private Bundle mAdvancedOptions;
  private boolean mCanceling;
  private int mCurrentPage;
  private int mTotalPages;
  private int mCurrentCopy;
  private int mTotalCopies;
}
```



####  打印机设备-JS调用Native方法



**获取打印机信息**

**接口名称**

getPrinterInfoByNodeId

**接口描述**

当需要获取打印机信息时，WEB中调用JS方法如下。

**请求消息** 

``` javascript
honorConnect.handler(
"getPrinterInfoByNodeId", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息**

``` JSON
{ 
    "responseId" : "1650600291901",
    "status": 0, 
    "msg": "SUCCESS"
	[HnPrintJobInfo对象集合]
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  获取所有的打印任务

**接口名称**

getAllPrintJobList

**接口描述**

当需要获取所有的打印任务时，WEB中调用JS方法如下。

**请求消息** 

``` javascript
honorConnect.handler(
"getAllPrintJobList", //string 执行方法 
"", 
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息** 

``` JSON
{ 
    "responseId" : "1650600291901",
    "status": 0, 
    "msg": "SUCCESS"
	"printJobList":[HnPrintJobInfo对象集合]
}
```

**异常响应消息**

```json
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  获取当前进行的打印任务

**接口名称**

getActivePrintJobList

**接口描述**

当需要获取当前进行的打印任务时，WEB中调用JS方法如下。

**请求消息**

```JSON
honorConnect.handler(
"getActivePrintJobList", //string 执行方法 
"", 
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息**

``` JSON
{ 
    "responseId" : "1650600291901",
    "status": 0, 
    "msg": "SUCCESS"
    "activePrintJobList":[HnPrintJobInfo对象集合]
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  根据打印id获取打印任务

**接口名称**

getPrintJob

**接口描述**

当根据打印id获取打印任务时，WEB中调用JS方法如下

**请求消息** 

``` javascript
honorConnect.handler(
"getPrintJob", //string 执行方法 
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入打印任务id：

``` JSON
{ 
   "printJobId": "printJobId"//打印任务id
}
```

**响应消息** 

``` JSON
{ 
    "responseId" : "responseId",
    "status": 0, 
    "msg": "SUCCESS"
	{HnPrintJobInfo 对象}
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  启动打印机任务

**接口名称**

startPrintJob

**接口描述**

当需要启动打印机任务时，WEB中调用JS方法如下：

**请求消息** 

``` javascript
honorConnect.handler(
"startPrintJob", //string 执行方法 
"json_body", // body,string,见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入打印任务id：

``` JSON
{ 
   "printJobTitle": "printJobTitle", //打印任务标题 String
   "printJobNum": printJobNum, //打印份数 int
   "printJobIsoId": "printJobIsoId", //纸张尺寸id String (参考：printJobIsoId-->字符串值参考)
   "orientation": orientation, //纸张横竖屏 Boolean true-->asPortrait false-->asLandscape
   "duplexMode": duplexMode, //单/双面打印 int (unused-->0,No duplex-->1,Duplex where the long edge attached-->2,Duplex where the short edge attach-->4)
   "colorMode": colorMode, //色彩模式 int (unused-->0,Use black, white, gray-->1,Use full color is available-->2)
   "contentType": contentType, //int CONTENT_TYPE_DOCUMENT(0)、CONTENT_TYPE_PHOTO(1)、CONTENT_TYPE_UNKNOWN(-1) int
}
```

示例：

```
{ 
   "printJobTitle": "打印任务标题",
   "printJobNum": 1,
   "printJobIsoId": "ISO_A4",
   "orientation": true,
   "duplexMode": 2, 
   "colorMode": 2,
   "contentType": 0
}
```

**响应消息**

``` JSON
{ 
    "printJobId" : "printJobId",
    "responseId" : "1650600291901",
    "status": 0, 
    "msg": "SUCCESS"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  根据打印id重新启动打印任务：

**接口名称**

 restartPrintJob

**接口描述**

当需要获取当前设备所属空间时，WEB中调用JS方法如下：

**请求消息** 

```
honorConnect.handler(
"restartPrintJob", //string 执行方法 
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入打印任务id：

```
{ 
   "printJobId": "printJobId"//打印任务id
}
```

**响应消息** 

``` javascript
{ 
    "responseId" : "1650600291901",
    "status": 0, 
    "msg": "SUCCESS"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  根据打印id取消打印任务

**接口名称**

cancelPrintJob

**接口描述**

当需要根据打印id取消打印任务时，WEB中调用JS方法如下：

**请求消息** 

``` javascript
honorConnect.handler(
"cancelPrintJob", //string 执行方法 
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入打印任务id：

``` JSON
{ 
  "printJobId": "printJobId"//打印任务id
}
```

**响应消息** 

``` JSON
{ 
    "responseId" : "responseId",
    "status": 0,
    "msg": "SUCCESS"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```

printJobIsoId-->字符串值参考:

```
            putMediaSizeToMap(MediaSize.UNKNOWN_PORTRAIT);
            putMediaSizeToMap(MediaSize.UNKNOWN_LANDSCAPE);
            putMediaSizeToMap(MediaSize.ISO_A0);
            putMediaSizeToMap(MediaSize.ISO_A1);
            putMediaSizeToMap(MediaSize.ISO_A2);
            putMediaSizeToMap(MediaSize.ISO_A3);
            putMediaSizeToMap(MediaSize.ISO_A4);
            putMediaSizeToMap(MediaSize.ISO_A5);
            putMediaSizeToMap(MediaSize.ISO_A6);
            putMediaSizeToMap(MediaSize.ISO_A7);
            putMediaSizeToMap(MediaSize.ISO_A8);
            putMediaSizeToMap(MediaSize.ISO_A9);
            putMediaSizeToMap(MediaSize.ISO_A10);
            putMediaSizeToMap(MediaSize.ISO_B0);
            putMediaSizeToMap(MediaSize.ISO_B1);
            putMediaSizeToMap(MediaSize.ISO_B2);
            putMediaSizeToMap(MediaSize.ISO_B3);
            putMediaSizeToMap(MediaSize.ISO_B4);
            putMediaSizeToMap(MediaSize.ISO_B5);
            putMediaSizeToMap(MediaSize.ISO_B6);
            putMediaSizeToMap(MediaSize.ISO_B7);
            putMediaSizeToMap(MediaSize.ISO_B8);
            putMediaSizeToMap(MediaSize.ISO_B9);
            putMediaSizeToMap(MediaSize.ISO_B10);
            putMediaSizeToMap(MediaSize.ISO_C0);
            putMediaSizeToMap(MediaSize.ISO_C1);
            putMediaSizeToMap(MediaSize.ISO_C2);
            putMediaSizeToMap(MediaSize.ISO_C3);
            putMediaSizeToMap(MediaSize.ISO_C4);
            putMediaSizeToMap(MediaSize.ISO_C5);
            putMediaSizeToMap(MediaSize.ISO_C6);
            putMediaSizeToMap(MediaSize.ISO_C7);
            putMediaSizeToMap(MediaSize.ISO_C8);
            putMediaSizeToMap(MediaSize.ISO_C9);
            putMediaSizeToMap(MediaSize.ISO_C10);
            putMediaSizeToMap(MediaSize.NA_LETTER);
            putMediaSizeToMap(MediaSize.NA_GOVT_LETTER);
            putMediaSizeToMap(MediaSize.NA_LEGAL);
            putMediaSizeToMap(MediaSize.NA_JUNIOR_LEGAL);
            putMediaSizeToMap(MediaSize.NA_LEDGER);
            putMediaSizeToMap(MediaSize.NA_TABLOID);
            putMediaSizeToMap(MediaSize.NA_INDEX_3X5);
            putMediaSizeToMap(MediaSize.NA_INDEX_4X6);
            putMediaSizeToMap(MediaSize.NA_INDEX_5X8);
            putMediaSizeToMap(MediaSize.NA_MONARCH);
            putMediaSizeToMap(MediaSize.NA_QUARTO);
            putMediaSizeToMap(MediaSize.NA_FOOLSCAP);
            putMediaSizeToMap(MediaSize.ANSI_C);
            putMediaSizeToMap(MediaSize.ANSI_D);
            putMediaSizeToMap(MediaSize.ANSI_E);
            putMediaSizeToMap(MediaSize.ANSI_F);
            putMediaSizeToMap(MediaSize.NA_ARCH_A);
            putMediaSizeToMap(MediaSize.NA_ARCH_B);
            putMediaSizeToMap(MediaSize.NA_ARCH_C);
            putMediaSizeToMap(MediaSize.NA_ARCH_D);
            putMediaSizeToMap(MediaSize.NA_ARCH_E);
            putMediaSizeToMap(MediaSize.NA_ARCH_E1);
            putMediaSizeToMap(MediaSize.NA_SUPER_B);
            putMediaSizeToMap(MediaSize.ROC_8K);
            putMediaSizeToMap(MediaSize.ROC_16K);
            putMediaSizeToMap(MediaSize.PRC_1);
            putMediaSizeToMap(MediaSize.PRC_2);
            putMediaSizeToMap(MediaSize.PRC_3);
            putMediaSizeToMap(MediaSize.PRC_4);
            putMediaSizeToMap(MediaSize.PRC_5);
            putMediaSizeToMap(MediaSize.PRC_6);
            putMediaSizeToMap(MediaSize.PRC_7);
            putMediaSizeToMap(MediaSize.PRC_8);
            putMediaSizeToMap(MediaSize.PRC_9);
            putMediaSizeToMap(MediaSize.PRC_10);
            putMediaSizeToMap(MediaSize.PRC_16K);
            putMediaSizeToMap(MediaSize.OM_PA_KAI);
            putMediaSizeToMap(MediaSize.OM_DAI_PA_KAI);
            putMediaSizeToMap(MediaSize.OM_JUURO_KU_KAI);
            putMediaSizeToMap(MediaSize.JIS_B10);
            putMediaSizeToMap(MediaSize.JIS_B9);
            putMediaSizeToMap(MediaSize.JIS_B8);
            putMediaSizeToMap(MediaSize.JIS_B7);
            putMediaSizeToMap(MediaSize.JIS_B6);
            putMediaSizeToMap(MediaSize.JIS_B5);
            putMediaSizeToMap(MediaSize.JIS_B4);
            putMediaSizeToMap(MediaSize.JIS_B3);
            putMediaSizeToMap(MediaSize.JIS_B2);
            putMediaSizeToMap(MediaSize.JIS_B1);
            putMediaSizeToMap(MediaSize.JIS_B0);
            putMediaSizeToMap(MediaSize.JIS_EXEC);
            putMediaSizeToMap(MediaSize.JPN_CHOU4);
            putMediaSizeToMap(MediaSize.JPN_CHOU3);
            putMediaSizeToMap(MediaSize.JPN_CHOU2);
            putMediaSizeToMap(MediaSize.JPN_HAGAKI);
            putMediaSizeToMap(MediaSize.JPN_OUFUKU);
            putMediaSizeToMap(MediaSize.JPN_KAHU);
            putMediaSizeToMap(MediaSize.JPN_KAKU2);
            putMediaSizeToMap(MediaSize.JPN_YOU4);
            putMediaSizeToMap(MediaSize.JPN_OE_PHOTO_L);
```



### APP通用能力接口



#### 基础能力



#####  设置状态栏颜色模式

**接口名称**

setStatusBarMode

**接口描述**

当需要设置APP状态栏颜色模式时，WEB中调用JS方法如下：

**请求消息** 

``` javascript
honorConnect.handler(
"setStatusBarMode", //string 执行方法 
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入颜色模式：

``` JSON
"1" // string, 1：正常模式 2：dark模式

```

**响应消息**

``` JSON
{ 
    "responseId" : "responseId",
    "status": 0,
    "msg": "SUCCESS"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```





#####  获取APP语言

**接口名称**

getAppLanguageSync

**接口描述**

当需要获取APP语言时，WEB中调用JS方法如下：

**请求消息** 

``` javascript
honorConnect.handler(
"getAppLanguageSync", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);

```

**响应消息** 

``` JSON
{
  "msg": "SUCCESS",
  "language": "zh", //当前语言，老设备使用这个字段，如"zh"
  "appLanguage": "zh_CN", //app当前语言，新设备使用这个字段，如"zh-hk", "zh-tw"，注意中文简体国内和海外包不一样，国内为"zh_CN"，海外包为"zh-cn"
  "status": 0,
  "responseId": "1650600299870"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  获取APP版本

**接口名称**

getAppVersion

**接口描述**

当需要获取智慧空间APP版本时，WEB中调用JS方法如下：

**请求消息** 

``` javascript
honorConnect.handler(
"getAppVersion", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);

```

**响应消息** 

``` JSON
{
  "msg": "SUCCESS",
  "versionCode": "60003224", 
  "versionName": "6.0.3.224", 
  "status": 0,
  "responseId": "1650600307883"
}

```



#####  获取authCode

**接口名称**

getAuthCode

**接口描述**

通过appId获取authCode：

**请求消息**

``` javascript
honorConnect.handler(
"getAuthCode", //string 执行方法 
"appId", // string 需要厂商自行在开发者平台申请
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);

```

**响应消息** 

``` JSON
{
  "msg": "SUCCESS",
  "authCode": "XXXXXX", 
  "status": 0,
  "responseId": "1650600307883"
}

```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



##### 查询系统版本

**接口名称**

getVersion

  **请求消息** 

``` javascript
honorConnect.handler(
"getVersion", //string 执行方法 
"",  // 空 string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息** 

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600307883",
  "data" // jsonString 响应数据
}
```

`data`结构 :

``` JSON
{
  "os" // string, 系统， 如: "Android"
  "osVersion" //string, 系统版本号, 如: "30"
  "appVersion" //string, 智慧空间版本号, 如: "70008025"
  "appVersionName" //string, 智慧空间版本名称, 如: "7.0.8.025"
  "zeroTimeZone" // 零时区时间戳，单位毫秒
  "timeOffset"; // 当前时区与零时区时间偏移量，单位毫秒
  "isPad" // string，是否是pad,"1":是,"0":否
  "widthPixels" // string，手机屏幕宽度
  "heightPixels" // string，手机屏幕高度
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



#####  退出设备页面

**接口名称**

exitDeviceActivity

**接口描述**

当需要退出设备页面时，WEB中调用JS方法如下：

**请求消息** 

``` javascript
honorConnect.handler(
"exitDeviceActivity", //string 执行方法 
"" // 空string
);

```

**响应消息** 

```
该函数无需返回

```



#####  调用原生文本编辑弹框

**接口名称**

showEditDialog

**接口描述**

当需要在页面中调用原生文本编辑弹框时，WEB中调用JS方法。appHandleClick建议传true，可替代modifyDeviceName接口。

注意：该接口会等待用户输入确定后再调用resultCallback，因此不应设置接口返回的超时时间。

**请求消息** 

``` javascript
honorConnect.handler(
"showEditDialog", //string 执行方法 
"json_body", // body,string，见下描述
"requestId",  //string，请求Id
"resultCallback", // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入显示时长模式、提示内容：

``` JSON
{ 
  "title": "编辑设备名称", //string ，弹框标题，内容不可为空
  "hint": "请输入设备名称", //string ，用户输入为空时编辑框显示的提示语，内容不可为空
  "userInput": "我的设备", //string ，当前已有的编辑内容，内容可空
  "toastWhenEmpty": "请输入设备名称", //string ，用户输入为空时点击确定，toast显示的提示语，内容不可为空
  "sceneType"：0，//number,0代表修改设备名称场景，优先使用byteLengthLimit进行判断，byteLengthLimit为0则使用lengthLimit进行判断，这俩值都为0，则使用默认最大字节数进行判断。
  "lengthLimit"：21//number,能输入的最大字符长度，最终会受默认最大字节数的限制。例如："123ABC我的设备"，代表3+3+4=10个长度。已废弃，新设备不建议使用。
  "byteLengthLimit"：63//number,能输入的最大字节数，默认63。1个英文或数字代表1个字节，汉字代表3个字节。例如："123ABC我的设备"，代表3+3+3×4=18个字节。
  "appHandleClick"：true//boolean，true时app处理改名逻辑并返回改名结果
}
```
`json_body`结构：

| 名称            | 类型   | 是否必须 | 默认值     | 备注                                                         |
| --------------- | ------ | -------- | ---------- | ------------------------------------------------------------ |
| sceneType       | number | 非必须   | 0          | （1）sceneType为0时，代表修改设备名称场景。若byteLengthLimit>0，则使用byteLengthLimit进行判断。否则，若lengthLimit>0，则使用lengthLimit进行判断。若byteLengthLimit与lengthLimit都为0，则使用默认最大63个字节进行判断。新设备不建议使用lengthLimit，已废弃。<br> （2）sceneType暂不支持其他值，如有需要，需先找智慧空间负责人约定。 |
| lengthLimit     | number | 非必须   | 21（字符） | 最大长度限制，大于0时有效。当byteLengthLimit传入有效值时，该字段不生效 |
| byteLengthLimit | number | 非必须   | 63（字节） | 最大字节数限制，大于0时有效。当lengthLimit和byteLengthLimit都无效时，该字段取默认值63 |

**响应消息** 

``` JSON
{ 
    "responseId" : "responseId",
    "status": 0,
    "msg": "SUCCESS",
    "userInput": "我的设备" //string ，用户输入的内容
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 23, //该场景暂不支持
    "msg": "HONORCONNECT_EDIT_SCENE_NOT_SUPPORT"
}
```



#####  调用门锁通用编辑弹框：

**接口名称**

showGateLockEditDialog

**接口描述**

当需要在页面中调用门锁通用编辑弹框时，WEB中调用JS方法。

注意：该接口会等待用户输入确定后再调用resultCallback，因此不应设置接口返回的超时时间。

**请求消息**

``` javascript
honorConnect.handler(
    "showGateLockEditDialog", //string 执行方法 
    "json_body", // body,string，见下描述
    "requestId",  //string，请求Id
    "resultCallback", // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入自定义内容：

``` JSON
{ 
    "title": "编辑设备名称", // string ，可自定义输入，弹框标题，不可为空
    "subTitle": "编辑副标题", // string ，可自定义输入，弹框副标题，可为空
    "hint": "请输入设备名称", // string ，可自定义输入，用户输入为空时编辑框显示的提示语，不可为空
    "userInput": "我的设备", // string ，可自定义输入，当前已有的编辑内容，可为空
    "toastWhenEmpty": "请输入设备名称", // string ，可自定义输入，用户输入为空时点击确定提示，内容不可为空
    "dialogType"："弹框类型", // string， passWord 密码弹框，text 文本弹框，可为空
    "maxLength"：0, // int, 自定义输入长度限制，默认长度-密码：32，文本：36，可为空
    "positiveRes"："确认", //string，可自定义输入，确认/继续 按钮，默认确认按钮，可为空
    "negativeRes"："取消", //string，可自定义输入，取消按钮，可为空
}
```

**响应消息**

``` JSON
{
    "responseId" : "responseId",
    "status": 0,
    "msg": "SUCCESS",
    "userInput": "我的设备/密码/用户名" //string ，用户输入的内容
    "buttonType": "positive/negative" //string ，按钮类型
}
```

**异常响应消息**

``` JSON
{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```

##### 历史数据查询

**接口名称**

```
queryHistoryData
```

**接口描述**

当需要判断三方账号状态时，WEB中调用JS方法如下

**请求消息** 

```javascript
honorConnect.handler(
"queryHistoryData", //string 执行方法 
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入的值：

``` JSON
{ 
   "type": 0,// int类型 0:采样数据  2:统计数据
    "tableName": "tableName",//String类型 查询的数据集合名称
    "columns":["column"],//JSONArray类型 查询的数据集合的列名列表
    "timeStart":832190218,//number, 起始时间的UTC秒（必填，不填报错）
    "timeEnd":832190218,//number, 起始时间的UTC秒（必填，不填报错）
    "deviceIds":["deviceId"],//JSONArray类型 查询的设备id集合
}

```

**成功响应消息**

```javascript
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "",
 "hisDataList": [{"deviceId": "设备ID","timestamp": "数据时标（UTC秒）","rowData": {"columnName":"value"}//单行数据，其结构为一个map，key是入参的单个columnName，value是数据值。}]
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 非0,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR",
    "errorCode":10000,
    "errordesc": "Check Param failed"
}
```

| errorcode | errordesc                 | 含义                         |
| --------- | ------------------------- | ---------------------------- |
| 0         | success                   | 正确                         |
| 100000    | Check Param failed        | 参数校验错误                 |
| 100001    | Authorize  valid Failed   | AT校验错误                   |
| 100003    | System Error              | 默认系统异常                 |
| 190201    | His config error          | 历史数据配置未查到或者不正确 |
| 190202    | Device not found          | 查询设备不正确               |
| 190203    | His query time  not valid | 历史查询时间不正确           |



##### 跳转native页面（定义router path）

**接口名称**

jumpTo

**接口描述**

如固件更新页面uri：hihonor://com.hihonor.magichome/deep_link?route_path=%2Fota%2Fcheck&page_type=native

 **请求消息** 

``` javascript
honorConnect.handler(
"jumpTo", //string 执行方法 
"json_body",  // body,string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构 :

``` JSON
{
  "uri": "" // string
}
```

**响应消息** 

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600307883"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



#####  调用原生弹出提示语

**接口名称**

toast

**接口描述**

当需要在页面中调用原生弹出提示语时，WEB中调用JS方法如下：

**请求消息** 

``` javascript
honorConnect.handler(
"toast", //string 执行方法 
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入显示时长模式、提示内容：

``` JSON
{ 
"toastLength": 0,//int ，提示显示时长  0: 短时显示  1: 长时显示
"body" : "" //string， 提示内容 
}

```

**响应消息** 

``` JSON
{ 
    "responseId" : "responseId",
    "status": 0,
    "msg": "SUCCESS"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  查询当前用户家庭角色

**接口名称**

userFamilyRole

**接口描述**

当需要获取当前用户在当前家庭里的角色时，WEB中调用JS方法如下：

**请求消息** 

``` javascript
honorConnect.handler(
"userFamilyRole", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息** 

``` JSON
{
  "responseId": "1650600307887", 
  "role": 0, //0创建者 1管理者 2普通用户 
  "status": 0,
  "msg": "SUCCESS"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600307887",
    "role": -1, //-1失败
    "status": 21,
    "msg": "HONORCONNECT_NO_EXIST_HOME_DETAIL" //当前家庭详情不存在
}
```



#####  请求三方服务器

**接口名称**

requestThreeService

**接口描述**

当需要请求设备云、场景云、运营云的接口时，WEB中调用JS方法如下：

**请求消息** 

``` javascript
honorConnect.handler(
"requestThreeService", //string 执行方法 
"{
  "url":"地址拼接",
      "tag":"devCloud",
	   "method":"get",
     "queryParams":{"map的key1":"map的value1","map的key2":"map的value2"},
     "body":"字符串,一般是json"
}", // json串，其中url字段表示访问请求的拼接地址，如获取家庭详情，传device/home/v1/home/detail。tag字段传devCloud表示访问设备云，sceneCloud表示访问场景云，operationCloud表示访问运营云。method字段传get表示发送get请求，传post表示发送post请求。key跟value对应的值表示访问参数，例如"key":"homeId","value":"123".
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

参数示例：

```json
{
    "url":"device/mgmt/v1/delete", //请求拼接地址，https://host:port/后的内容
    "tag":"devCloud", //请求哪个服务器，目前仅支持设备云devCloud，场景云sceneCloud，运营云operationCloud
    "method":"post",  //请求方式,get或post
    "queryParams":{"homeId":"家庭Id","devId":"设备Id"}//请求参数，map对象的形式，当method为get时传值
    "body":"字符串" //请求参数，字符串，多数接口定义的是json，当method为post时传值
}
```

**响应消息** 

``` JSON
{
  "responseId": "1650600307888", 
  "resultData": "", //返回结果 
  "status": 0,
  "msg": "SUCCESS"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600307888",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT" //参数错误
}
```



##### 打印用户级别的日志信息

**接口名称**

printLog

  **请求消息**

``` javascript
honorConnect.handler(
"printLog", //string 执行方法 
"json_body",  // body,string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构 :

``` JSON
{
  "degree" // string, 日志级别， 取值: i,w,e,d,v
  "tag" //string, 关键词, 如果打印的msg是敏感信息列表中的一个信息，请将tag传入此信息， 如: msg打印的是手机号，tag请传"phoneNum",log中会将msg加密写入log文件中
  "msg" //string, 打印内容
}
```

敏感信息列表：

``` JSON
{"sn", "mac", "ip", "deviceId", "userId", "udid", "uuid", "url", "token", "phoneNum", "userInfo", "key", "json"}
```

**响应消息** 

```javascript
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600307883"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



##### 打印debug级别的日志信息

**接口名称**

printLogDebug

 **请求消息** 

``` javascript
honorConnect.handler(
"printLogDebug", //string 执行方法 
"json_body",  // body,string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构 :

``` JSON
{
  "degree" // string, 日志级别， 取值: i,w,e,d,v
  "tag" //string, 关键词, 如果打印的msg是敏感信息列表中的一个信息，请将tag传入此信息， 如: msg打印的是手机号，tag请传"phoneNum",log中会将msg加密写入log文件中
  "msg" //string, 打印内容
}
```

敏感信息列表：

``` JSON
{"sn", "mac", "ip", "deviceId", "userId", "udid", "uuid", "url", "token", "phoneNum", "userInfo", "key", "json"}
```

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600307883"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



#####  获取手机状态栏高度

**接口名称**

 getStatusBarHeight

**接口描述**

当需要获取手机状态栏高度时，WEB中调用JS方法如下：

**请求消息** 

``` javascript
honorConnect.handler(
"getStatusBarHeight", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);

```

**响应消息** 

``` JSON
{
  "msg": "SUCCESS",
  "statusBarHeight": 99, //状态栏高度 px
  "status": 0,
  "responseId": "1650600291857"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  获取手机颜色模式

**接口名称**

getThemeMode

**接口描述**

当需要获取APP颜色模式时，WEB中调用JS方法如下：

**请求消息** 

``` javascript
honorConnect.handler(
"getThemeMode", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);

```

**响应消息** 

``` JSON
{
  "msg": "SUCCESS",
  "themeMode": 1,// int, 1：正常模式 2：dark模式
  "status": 0,
  "responseId": "1650600307883"
}

```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  获取折叠屏当前折叠状态

**接口名称**

getScreenSpreaded

**接口描述**

当需要获取折叠屏当前折叠状态时，WEB中调用JS方法如下：

**请求消息** 

``` javascript
honorConnect.handler(
"getScreenSpreaded", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);

```

**响应消息** 

``` JSON
{
  "msg": "SUCCESS",
  "spreadedMode": 1,// int, 1：展开模式 2：正常模式
  "status": 0,
  "responseId": "1650600307883"
}

```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  判断平板横竖屏状态

**接口名称**

isLandscape

**接口描述**

当需要获取平板横竖屏状态时，WEB中调用JS方法如下：

**请求消息** 

``` javascript
honorConnect.handler(
"isLandscape", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "isLandscape": true, //true是横屏，false是竖屏
  "status": 0,
  "responseId": "1650600307884"
}
```



#####  区分平板和折叠屏

**接口名称**

isFoldScreenDevice

**接口描述**

当需要获取设备是否是折叠屏时，WEB中调用JS方法如下：

**请求消息** 

``` javascript
honorConnect.handler(
"isFoldScreenDevice", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息** 

``` JSON
{
  "msg": "SUCCESS",
  "isFoldScreenDevice": true, 
  "status": 0,
  "responseId": "1650600307885"
}
```



##### 判断设备是否是平板

**接口名称**

isPad

**接口描述**

当需要判断当前设备是否是平板时，WEB中调用JS方法如下：

 **请求消息** 

```javascript
honorConnect.handler(
"isPad", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息** 

```plaintext
{
  "msg": "SUCCESS",
  "isPad": true, //true是平板
  "status": 0,
  "responseId": "1650600307899"
}
```



#####  创建快捷方式

**接口名称**

deviceAddShortcut

**接口描述**

当需要给设备创建桌面快捷方式时，WEB中调用JS方法如下：

**请求消息** 

``` javascript
honorConnect.handler(
"deviceAddShortcut", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息** 

``` JSON
{
  "msg": "SUCCESS", //需要app开启打开‘创建桌面快捷方式’的权限
  "status": 0,
  "responseId": "1650600307886"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600307886",
    "status": 18,  
    "msg": "HONORCONNECT_NO_EXIST_DEVICE" //设备不存在
}
```



##### 检测三方app是否安装

**接口名称**

checkThirdApp

**接口描述**

用于检测手机里三方app是否安装，WEB中调用JS方法如下：

**请求消息**

``` javascript
honorConnect.handler(
"checkThirdApp", //string 执行方法 
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

| 名称                 | 类型      | 是否必须 | 默认值  | 备注      |
|--------------------|----------|:-------:|--------|---------|
| third_app_package  | string   |    Y    |        | 三方App包名 |


**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600307883",
  "data" // boolean 响应数据
}
```

`data`结构 :

| 名称        | 类型     | 是否必选  | 备注           |
|------------|----------|----------|--------------|
| data       | boolean | Y        | 是否安装 |

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



##### 跳转三方app

**接口名称**

jumpToThirdApp

**请求消息**

``` javascript
honorConnect.handler(
"jumpToThirdApp", //string 执行方法 
"{"jumpType":1,"thirdAppJumpDeeplink":"跳转链接","thirdAppName":"app名称","thirdAppDownloadUrl":"下载链接","thirdAppPackageName":"包名","isClearTask":"是否清理栈，不传默认为false"}",  // json串
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
```

`data`结构 :

``` JSON
{
	"errorCode": "状态码",
    "errorDesc": "描述信息",
}
```

Ø 错误码定义

| errorcode | errordesc                     | desc         |
| --------- | ----------------------------- | ------------ |
| 0         | success                       | 成功         |
| 12        | HONORCONNECT_INVALID_ARGUMENT | 参数错误     |
| 27        | JUMP_FAIL_NON_WHITELIST       | 未加入白名单 |



#####  获取openId

**接口名称**

getOpenId

**接口描述**

获取openId

**请求消息** 

``` javascript
honorConnect.handler(
"getOpenId", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息** 

``` JSON
{
  "msg": "SUCCESS", 
  "status": 0,
  "responseId": "1650600307886",
  "openId": "" // openId
}
```



#####  提供插件通知 app 是否禁用手势导航退出

**接口名称**

disableGestureNaviExit

**接口描述**

提供插件通知 app 是否禁用手势导航退出

**请求消息** 

``` javascript
honorConnect.handler(
"disableGestureNaviExit", //string 执行方法 
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

| 名称 | 类型 | 是否必须 | 默认值 | 备注                                                         |
| ---- | ---- | :------: | ------ | ------------------------------------------------------------ |
| type | int  |    Y     |        | 0:表示禁用手势导航的退出页面 功能；1:表示不禁用手势导航的退出页面功能。 |

**响应消息** 

``` JSON
{
  "msg": "SUCCESS", 
  "status": 0,
  "responseId": "1650600307886"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



#####  获取当前系统是否为手势导航

**接口名称**

isSystemGestureNavi

**接口描述**

给插件提供获取当前系统是否为手势导航

**请求消息** 

``` javascript
honorConnect.handler(
"isSystemGestureNavi", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```



**响应消息** 

``` JSON
{
  "msg": "SUCCESS", 
  "status": 0,
  "responseId": "1650600307886",
  "type": 0
}
```

`type`结构 :

| 名称 | 类型 | 是否必选 | 备注                                   |
| ---- | ---- | -------- | -------------------------------------- |
| type | int  | Y        | 0: 表示是手势导航，1: 表示不是手势导航 |

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



#####  提供插件通知 app 是否touch事件透传

**接口名称**

dispatchTouchEvent

**接口描述**

提供插件通知 app 是否touch事件透传

**请求消息** 

``` javascript
honorConnect.handler(
"dispatchTouchEvent", //string 执行方法 
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

| 名称 | 类型 | 是否必须 | 默认值 | 备注                                           |
| ---- | ---- | :------: | ------ | ---------------------------------------------- |
| type | int  |    Y     |        | 0，表示不透传touch事件；1，表示透传touch事件。 |

**响应消息** 

``` JSON
{
  "msg": "SUCCESS", 
  "status": 0,
  "responseId": "1650600307886"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



#####  生成deeplink根据sn或mac

**接口名称**

getDetailPageDeeplinkBySnMac

**接口描述**

通过sn或者mac生成跳转详情页的deeplink

**请求消息** 

``` javascript
honorConnect.handler(
"getDetailPageDeeplinkBySnMac", //string 执行方法 
"json_body", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构 :

``` JSON
{
  "detailPageExtraData" //string 自定义参数
  "channel_source" //string 渠道
}
```

detailPageExtraData结构 :

``` JSON
示例{“autoJumpSecondPageExtraData”：{"handleType": 1,"busType": 1}}
handleType 1：厂商自己处理类型，厂商自己开发的插件，厂商也只需要关注此类型  2：预留荣耀低代码  3：预留app处理
busType //具体业务类型，比如1就是跳转黑电控鼠页
```

**响应消息** 

``` JSON
{
  "msg": "SUCCESS", 
  "status": 0,
  "responseId": "1650600307886",
  "deepLink": ""
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  获取该设备是否支持产品百科

**接口名称**

supportProductEncyclopedia

**接口描述**

获取该设备是否支持产品百科

**请求消息** 

``` javascript
honorConnect.handler(
"dispatchTouchEvent", //string 执行方法 
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

| 名称   | 类型   | 是否必须 | 默认值 | 备注   |
| ------ | ------ | :------: | ------ | ------ |
| prodId | String |    Y     |        | 产品Id |

**成功响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600307883",
  "data" // 响应数据
}
```

data结构 :

| 名称        | 类型    | 是否必选 | 备注                               |
| ----------- | ------- | -------- | ---------------------------------- |
| isSupport   | boolean | Y        | 是否支持                           |
| deepLink    | String  | N        | 跳转链接(isSuppor为true的时候生效) |
| productName | String  | N        | 产品名称(isSuppor为true的时候生效) |

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



#####  跳转产品百科

**接口名称**

jumpProductEncyclopedia

**接口描述**

跳转产品百科

**请求消息** 

``` javascript
honorConnect.handler(
"dispatchTouchEvent", //string 执行方法 
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

| 名称        | 类型   | 是否必须 | 默认值 | 备注     |
| ----------- | ------ | :------: | ------ | -------- |
| prodId      | String |    Y     |        | 产品Id   |
| deepLink    | String |    Y     |        | 跳转链接 |
| productName | String |    Y     |        | 产品名称 |

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600307883"
}
```



**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```

#####  获取wifi信息

**接口名称**

getWifiInfo

**接口描述**

获取wifi信息，此接口需要获取位置权限，调此接口前请先调用`requestPermission`接口获取`LOCATION`权限

**请求消息**

``` javascript
honorConnect.handler(
"setStorage", //string 执行方法 
"json_body",  // body,空
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // JSONString，响应数据
}
```

`data`结构

```json
{
  "wifiSsid" // string, 当前连接的wifi ssid
}
```

**异常响应消息**

没有位置权限

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 52,  
    "msg": "HONORCONNECT_NO_LOCATION_PERMISSION"
}
```

没有wifi连接

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 53,  
    "msg": "HONORCONNECT_NO_WIFI_CONNECT"
}
```

未知错误

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```

#####  请求权限

**接口名称**

requestPermission

**接口描述**

请求权限，该接口涉及用户行为操作，响应时间会比较长，建议不要设置超时时间

**请求消息**

``` javascript
honorConnect.handler(
"requestPermission", //string 执行方法 
"json_body",  // body,string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构

```javascript
[
    {
        "permission":"LOCATION",// 权限名称
        "permissionDes":"" // 权限用途描述，如果用户拒绝授权后，会弹出一个手动前往设置页去授权的弹框，弹框的内容描述会用该字段显示，如“该权限用于获取wifi信息”
    }
]
```

`permission`取值

| permission        | 如果不传permissionDes，app兜底文案                           |
| ----------------- | ------------------------------------------------------------ |
| LOCATION          | 用于设定家庭位置、发现、添加、管理智能设备及场景设置。       |
| PHOTOLIBRARYADD   | 仅iOS上 用于保存视频/图片到系统相册，需要申请的系统权限      |
| PHOTOLIBRARYTOTAL | 仅iOS上 用于 保存视频/图片到系统相册，或者从系统相册读取视频/图片，需要申请的系统权限(与PHOTOLIBRARYADD只用申请一个便可以，PHOTOLIBRARYTOTAL权限更大） |





**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901"
}
```



**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```

#####  跳转全屏页

**接口名称**

jumpFullScreenPage

**接口描述**

跳转全屏页，传入的url有白名单管控，需联系智慧空间对域名添加白名单

**请求消息**

``` javascript
honorConnect.handler(
"jumpFullScreenPage", //string 执行方法 
"json_body",  // body,string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构

```javascript
 {
    "remoteUrl": "https://xxx.html"  // 必填，需要全屏展示的h5 url
 }
```



**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "result": // JSONString，响应数据
}
```

`result`结构

```json
[1,-1,1] // 多个权限每个授权结果，-1：权限拒绝，1：权限获取。数组里的顺序对应请求的permission顺序
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```

##### 跳转单独的h5加载页

**接口名称**

jumpH5LoadUrl

**接口描述**

此接口会打开一个独立的页面加载url地址

**请求消息**

``` javascript
honorConnect.handler(
"jumpH5LoadUrl", //string 执行方法 
"json_body",  // body,string类型url,必传，app侧loadUrl中的地址参数
);
```

**响应消息** 

``` JSON
该函数无需返回
```



##### 标记消息状态

**接口名称**

msgMark

**接口描述**

标记消息状态

**请求消息**

``` javascript
honorConnect.handler(
"msgMark", //string 执行方法 
"json_body",  // body,string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

| 字段      | 是否必选 | 类型         | 描述                                              |
| --------- | -------- | ------------ | ------------------------------------------------- |
| bizType   | Y        | String       | 业务类型，目前仅有：1.default 2.child-watch       |
| msgIdList | N        | List<String> | 待标记消息列表，空则标记所有消息                  |
| category  | N        | String       | 消息类目（一级或二级），不传的话，则不限制类目    |
| devId     | N        | String       | 按设备ID标记                                      |
| markType  | Y        | int          | 1:消息回执; 2:消息已读; 3:消息已处理 4:消息已过期 |

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "responseBody": "",//设备云接口返回的响应体
  "responseId": "1650600307883"
}
```

设备云接口返回的响应体里错误码

| 错误码 | 说明                |
| ------ | ------------------- |
| 0      | success             |
| 100000 | Check Param Failed  |
| 170023 | Try get lock Failed |
| 100003 | System Error        |

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```

#####  监听生命周期

**接口名称**

getLifeCycleName

**接口描述**

监听生命周期

**请求消息**

``` javascript
honorConnect.handler(
"getLifeCycleName", //string 执行方法 
"json_body",  // body,string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构

```javascript
{
    "pageName": //string 页面名称，由开发者自行定义，如“settingPage”
    "onResume": //string 页面可见时发送通知的对象name，由开发者自行定义，如“settingPageResume”
    "onPause": //string 页面不可见时发送通知的对象name，由开发者自行定义，如“settingPagePage”
}
```

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901"
}
```

需要h5插件侧在window里定义onResume和 onPause传入的对象，监听了之后，当页面发生变化时，app会主动通知插件，以上面例子中的参数为例：

插件页可见时，调用插件的：

``` javascript
window.settingPageResume = function() {
  console.log("callback data")
}
```

插件页不可见时，调用插件的：

``` javascript
window.settingPagePage = function() {
  console.log("callback data")
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  获取dimen值

**接口名称**

getDimensionPixelSize

**接口描述**

获取dimen值

**请求消息**

``` javascript
honorConnect.handler(
"getDimensionPixelSize", //string 执行方法 
"json_body",  // body,string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构

```javascript
 {
    "name": "", // string, 必填，对应resources.getIdentifier(name, defType, defPackage)的name，如："status_bar_height"
    "defType": "", // string, 必填，对应resources.getIdentifier(name, defType, defPackage)的defType，如："dimen"
    "defPackage": "" // string, 必填，对应resources.getIdentifier(name, defType, defPackage)的defPackage，如："android"
 }
```



**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "responseBody": "",//响应体
}
```

`responseBody`结构

```json
 {
    "dimenValue": 100, // number，必填
 }
```

**异常响应消息**

```JSON
{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



#####  设备分享

**接口名称**

shareDevice

**接口描述**

设备分享

**请求消息**

``` javascript
honorConnect.handler(
"getDimensionPixelSize", //string 执行方法
"json_body",  // body,string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构

```javascript
 {
    "dev_choose_share_mode": 0  // 非必填，分享完成后返回页面，0：默认值，会关闭当前页面；1：跳转到首页；2：跳转到我的共享页面；
 }
```



**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901"
}
```



**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



#####  获取三方登录鉴权请求地址

**接口名称**

getThirdAuthAddress

**接口描述**

获取三方登录鉴权请求地址

**请求消息**

``` javascript
honorConnect.handler(
"getThirdAuthAddress", //string 执行方法 
"json_body",  // body,string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构

```javascript
 ""
```



**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "resultData":{
      //合作方id
      "partnerId":"110003956591",
      "appId":"221640924",
      //三方授权地址
      "address":"https://api-sit.smartmidea.net/v1/open/oauth2/authorize/free"
  }
}
```



**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



#### 访问设备云的接口

**接口名称**

requestDevCloudService

##### 查询云云设备动态功能（云云设备专用）

**请求消息**

``` javascript
honorConnect.handler(
	"requestDevCloudService", //string 执行方法 
	"json_body",  // json串,refresh是否强制动态刷新，非必传
	"requestId",  //string，请求Id
	"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

```javascript
{
	"tag": 1,// number
	"jsonParams": "{"deviceId":"设备ID","refresh":boolean}"
}
```

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
```

`data`结构 :

``` JSON
{
	"errorCode": "状态码",
    "errorDesc": "描述信息",
	"resultData": {"serviceList":[{"index":"服务序号","id":"唯一","title":"服务标题","description":"服务描述",
                  "propertyList":[{"index":"属性序号","id":"唯一","description":"属性描述","type":"类型","maxLength":"type为string时最大长度","minLength":"type为string时最小长度","valueList":[{"value":"type为int时取值","description":""}]}],
                  "actionList":[{"index":"动作序号","id":"唯一","description":"动作描述","inDataList":[int,int]}]}
                                 ]}
}
```



##### 云云设备动态功能触发（云云设备专用）

**请求消息**

``` javascript
honorConnect.handler(
"requestDevCloudService", //string 执行方法 
"json_body",  // json串
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

```javascript
{
	"tag": 2,// number
	"jsonParams": "{"deviceId":"设备ID","action":{"serviceId":"服务Id","actionId":"动作Id","propertyMap":{入参见上一个接口的inDataList}}}"
}
```



**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
```

`data`结构 :

``` JSON
{
	"errorCode": "状态码",
    "errorDesc": "描述信息"
}
```



##### 设备自定义信息字段存储

**请求消息**

``` javascript
honorConnect.handler(
"requestDevCloudService", //string 执行方法 
"json_body",  // json串，0代表摩根
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

```javascript
{
	"tag": 3,// number
	"jsonParams": "{"deviceId":"设备ID","propertyType":0,"propertyValue":"值","op":1}
}
```



**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
```

`data`结构 :

> tag==4

``` JSON
{
	"errorCode": "状态码",
    "errorDesc": "描述信息"
}
```



##### 设备自定义信息字段存储-用户体验改进计划开关状态

**请求消息**

``` javascript
honorConnect.handler(
"requestDevCloudService", //string 执行方法 
"json_body",  // json字符串，
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

```javascript
{
  "tag": 3,
  "jsonParams": "{
    \"deviceId\": \"设备id\",
    \"propertyId\": \"user-improvement-plan\",
    \"propertyValue\": \"{\\\"agree\\\": true}\",  // json字符串
    \"op\": 1
  }"
}
```



**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
```





##### 设备自定义信息字段查询

**请求消息**

``` javascript
honorConnect.handler(
"requestDevCloudService", //string 执行方法 
"json_body",  // json串，其中0代表摩根
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

> tag==4

```javascript
{
	"tag": 4,// number
	"jsonParams": "{"deviceIds":["设备ID1","设备ID2"],"propertyTypes":[0]}
}
```



**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
```

`data`结构 :

``` JSON
{
	"errorCode": "状态码",
    "errorDesc": "描述信息",
    "resultData":{"properties":[{"deviceId":"","propertyType":0,"propertyValue":""}]}
}
```

格式：

| 字段      | 类型       | 描述               | 取值                     |
| :-------- | :--------- | :----------------- | :----------------------- |
| errorCode | String     | 状态码             |                          |
| errorDesc | String     | 描述信息           |                          |
| content   | JsonObject | 产商定义的返回信息 | 产商自己定义，设备云透传 |

错误码定义：

| **errorcode** | **errordesc**                                   | 描述                  |
| ------------- | ----------------------------------------------- | --------------------- |
| 0             | success                                         |                       |
| 100000        | Check Param Failed                              | 参数校验失败          |
| 100003        | System Error                                    | 系统错误              |
| 100004        | Permission Deny                                 | 拒绝访问              |
| 190202        | device not found                                | 未找到设备            |
| 191503        | This partner info not found                     | 产商信息未识别        |
| 194001        | command message empty                           | 指令信息为空          |
| 201333        | the product does not support custom API channel | 该产品不支持自定义api |
| 201300        | third part device not exist                     | 三方设备不存在        |
| 201105        | third part user account not exist               | 三方账号不存在        |



##### 设备自定义信息字段查询-用户体验改进计划开关状态

**请求消息**

``` javascript
honorConnect.handler(
"requestDevCloudService", //string 执行方法 
"json_body",  // json串，
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

> tag==8

```javascript
{
  "tag":8, 
  "jsonParams": "{
    \"queryPropertyList\": [
      {
        \"deviceId\": \"设备id\",
        \"propertyId\": \"user-improvement-plan\"
      }
    ]
  }",
 
}

```



**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0, 
  "responseId": "1650600291901",
  "resultData": // jsonString 响应数据
}
```

`resultData`结构 :

``` JSON
{
	"errorCode": "状态码",
    "errorDesc": "描述信息",
    "data":[
        {
    		"deviceId": "a04f1589f3473340a8a6b1deaef5f166e2nx6f100367",
    		"propertyId": "user-improvement-plan",
            "state": 0,
   		 	"propertyValue": "{\"agree\": true}", //可为空，为空表示关闭
   		}
    ]
}
```





##### 设备自定义信息字段查询-云云对接通用指令

**(CustomAPIChanne)接口使用须知：**

对应config_content配置项：

custom-api-channe接口配置：目前已配置

```json
{
    "key": "devCloudOpenUrlList",
    "content": "[{'tagId':7,'path':'device/open/v1/thirddevice/custom-api-channel','type':'post'}]"
},
```

使用产商对应白名单配置：

```json
{
    "key": "devCloudOpenUrlWhiteList",
    "content": "[{'matchType':2,'partnerIdList':['100523308572'],'tagIdList':['7']}]"
},
```

对应设备云url：https://host:port/device/open/v1/thirddevice/custom-api-channel



**请求消息**

``` javascript
honorConnect.handler(
"requestDevCloudService", //string 执行方法
"json_body",  // json串，其中0代表摩根
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

> tag==7

```json
{
  "tag": 7,
  "jsonParams": {
    "devId": "设备id",//荣耀设备云的设备id
    "commandType": "指令类型",
    "content": "json格式的命令"
  }
}
```

格式：

| 字段        | 类型       | 描述           | 取值                     |
| :---------- | :--------- | :------------- | :----------------------- |
| devId       | String     | 设备ID         |                          |
| commandType | String     | 指令类型       |                          |
| content     | JsonObject | json格式的命令 | 产商自己定义，设备云透传 |



**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
```

`data`结构 :

> tag==7

```json
{
	"errorCode": "状态码",
    "errorDesc": "描述信息",
    "resultData":{}//产商定义的返回信息
}
```

格式：

| 字段      | 类型       | 描述               | 取值                     |
| :-------- | :--------- | :----------------- | :----------------------- |
| errorCode | String     | 状态码             |                          |
| errorDesc | String     | 描述信息           |                          |
| content   | JsonObject | 产商定义的返回信息 | 产商自己定义，设备云透传 |

错误码定义：

| **errorcode** | **errordesc**                                   | 描述                  |
| ------------- | ----------------------------------------------- | --------------------- |
| 0             | success                                         |                       |
| 100000        | Check Param Failed                              | 参数校验失败          |
| 100003        | System Error                                    | 系统错误              |
| 100004        | Permission Deny                                 | 拒绝访问              |
| 190202        | device not found                                | 未找到设备            |
| 191503        | This partner info not found                     | 产商信息未识别        |
| 194001        | command message empty                           | 指令信息为空          |
| 201333        | the product does not support custom API channel | 该产品不支持自定义api |
| 201300        | third part device not exist                     | 三方设备不存在        |
| 201105        | third part user account not exist               | 三方账号不存在        |



#####

##### 查询点位信息/历史记录

**请求消息**

```javascript
honorConnect.handler(
"requestDevCloudService", //string 执行方法 
"json_body", // string, 请求参数
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

```javascript
{
	"tag": 5,// number
	"jsonParams": ""
}
```



`jsonParams`格式：

| **字段**   | **是否必选** | **类型**      | **描述**                                                     |
| ---------- | ------------ | ------------- | ------------------------------------------------------------ |
| productId  | 是           | String        | 产品id                                                       |
| code       | 是           | String        | 分配的查询code                                               |
| timeStart  | 是           | Date          | 起始时间的UTC秒（必填，不填报错）                            |
| timeEnd    | 是           | Date          | 起始时间的UTC秒（必填，不填报错）  注：timeStart 与 timeEnd 时间范围不应超过1年 |
| deviceId   | 是           | String        | 查询的设备id（注意是单个设备id）                             |
| bizIds     | 否           | Array<String> | 查询的业务id集合                                             |
| isCompress | 否           | number        | 是否需要压缩  0：不压缩  1：压缩（GZIP&Base64）  默认不压缩  |
| pageNo     | 否           | number        | 分页，从1开始，如不填，默认为1                               |
| pageSize   | 否           | number        | 每页大小，不传时默认值是10000  pageSize最大为10000           |

`code`取值：

| code          | 描述     |
| ------------- | -------- |
| CLEAN_PATHWAY | 点位信息 |
| CLEAN_RECORD  | 历史记录 |



**响应消息**

```javascript
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "resultData": // String格式，透传设备云接口响应
}
```

`resultData`格式：

| 字段      | 是否必选 | 类型   | 描述                               |
| --------- | -------- | ------ | ---------------------------------- |
| errorCode | 是       | String | 错误码，见下方`设备云错误码定义`   |
| errorDesc | 是       | String | 错误描述，见下方`设备云错误码定义` |
| data      | 否       | String | data                               |

`data`格式：

| **字段** | **是否必选** | **类型** | **描述** |
| -------- | ------------ | -------- | -------- |
| deviceId | 是           | String   | 设备id   |
| rowData  | 是           | String   | 历史数据 |

`rowData` 示例：

情形1：isCompress不传或传0时，返回的是未压缩的数据，value有值，compressedValue为空

```json
{
  "index": [
    "timestamp",
    "areaId",
    "path",
    "electric"
  ],
  "value": [
    ["1705133701020", "0001", "Object<Path>", 30],
    ["1705133746018", "0001", "Object<Path>", 32]
  ],
  "compressedValue" : null
}
```

 情形2：isCompress传1时，返回的是压缩的数据，value为空，compressedValue为Gzip后base64的字符串

```json
{
	"index": [
		"timestamp",
		"areaId",
		"path",
		"electric"
	],
	"value": null,
	"compressedValue": "adfadfafdafawfew123fAF23R2"
}
```

| 存储字段名 | 字段类型  | 说明     |
| ---------- | --------- | -------- |
| areaId     | number       | 地图id   |
| cleanArea  | number       | 清扫面积 |
| cleanTime  | number       | 清扫时间 |
| endTime    | timestamp | 结束时间 |
| status     | number       | 清扫状态 |
| mode       | number       | 清扫模式 |
| errorCode  | number       | 错误码   |

**异常响应消息**

```JSON
{ 
    "msg": "HONORCONNECT_TAG_ID_ERROR",
    "status": 26, 
    "responseId" : "1650600291901"
}
```



入参示例1：

```json
{
    "productId": "UZNV",  //产品id
    "code": "CLEAN_PATHWAY", //查询码
    "timeStart": 1705133701, //查询开始时间
    "timeEnd": 1705133746, //查询结束时间
    "deviceId": "devId123",  //设备id列表,
    "bizIds": [
        "1"  //查询业务id，对于地图点位查询就是地图id
    ],
    "isCompress": 0, // 是否需要压缩 0 不压缩 1 压缩(GZIP&Base64) 默认不压缩
    "pageNo": 1,
    "pageSize": 10000
}
```

这个表示查询产品为UZNV、devId为devId123、地图id为1在1705133701~1705133746这段时间内的清扫点位信息。

出参示例1：

情形1：isCompress不传或传0时，返回的是未压缩的数据，value有值，compressedValue为空

```json
{
        "index": [
                "timestamp",
                "areaId",
                "path"
        ],
        "value": [
                [1705133701020, 1, "Object<Path>"],
                [1705133746018, 1, "Object<Path>"]
        ]，
        "compressedValue" : null
}
```

情形2：isCompress传1时，返回的是压缩的数据，value为空，compressedValue为Gzip后base64的字符串

```json
{
        "index": [
                "timestamp",
                "areaId",
                "path"
        ],
        "value": null，
        "compressedValue" : "adfadfafdafawfew123fAF23R2"
}
```



入参示例2：

```json
{
    "productId": "UZNV",
    "code": "CLEAN_RECORD",
    "timeStart": 1705133701,
    "timeEnd": 1705138897,
    "deviceId": "devId123",
    "isCompress": 0,
    "pageNo": 1,
    "pageSize": 10000
}
```

这个表示查询产品为UZNV、devId为devId123在1705133701~1705138897这段时间内的历史清扫记录信息。

出参示例2：

```json
{
        "index": [
                "timestamp",
                "areaId",
                "cleanArea",
                "cleanTime",
                "endTime",
                "status",
                "mode",
                "errorCode"
        ],
        "value": [
                [1705133701020, 1, 23, 30, 1705138768020, 1, 1, 0],
                [1705138893021, 1, 23, 30, 1705138897021, 1, 1, 0]
        ]，
        "compressedValue": null
}
```

出参表示的是时间范围1705026371~1705026416这段时间内deviceId为devId123的清扫记录信息。



##### 删除点位信息/历史记录

**请求消息**

```javascript
honorConnect.handler(
"requestDevCloudService", //string 执行方法 
"json_body",  // string, 请求参数
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

```javascript
{
	"tag": 6,// number
	"jsonParams": ""
}
```



`jsonParams`格式：

| **字段**  | **是否必选** | **类型**      | **描述**                                  |
| --------- | ------------ | ------------- | ----------------------------------------- |
| productId | 是           | String        | 产品id                                    |
| code      | 是           | String        | 分配的查询code                            |
| timeStart | 是           | Date          | 起始时间的UTC秒（必填，不填报错），闭区间 |
| timeEnd   | 是           | Date          | 起始时间的UTC秒（必填，不填报错），闭区间 |
| deviceIds | 是           | Array<String> | 查询的设备id集合                          |

`code`取值：

| code          | 描述     |
| ------------- | -------- |
| CLEAN_PATHWAY | 点位信息 |
| CLEAN_RECORD  | 历史记录 |



**响应消息**

```javascript
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "resultData": // String格式，透传设备云接口响应
}
```

`resultData`格式：

| 字段      | 是否必选 | 类型   | 描述                               |
| --------- | -------- | ------ | ---------------------------------- |
| errorCode | 是       | String | 错误码，见下方`设备云错误码定义`   |
| errorDesc | 是       | String | 错误描述，见下方`设备云错误码定义` |



**异常响应消息**

```JSON
{ 
    "msg": "HONORCONNECT_TAG_ID_ERROR",
    "status": 26, 
    "responseId" : "1650600291901"
}
```



入参示例1：

```json
{
    "productId": "UZNV",  //产品id
    "code": "CLEAN_PATHWAY", //查询码
    "timeStart": 1705026371, //开始时间
    "timeEnd": 1705026416, //结束时间
    "deviceIds": [
        "devId123"  //设备id列表
    ]
}

```

这个表示删除产品为UZNV、devId为devId123在1705026371~1705026416这段时间内的清扫点位信息。





入参示例2：

```json
{
    "productId": "UZNV",
    "code": "CLEAN_RECORD",
    "timeStart": 1705026371,
    "timeEnd": 1705026416,
    "deviceIds": [
        "devId123"
    ]
}
```

这个表示删除产品为UZNV、devId为devId123在1705026371~1705026416这段时间内的历史清扫记录信息。



设备云错误码定义

| errorcode | errordesc                                          |
| --------- | -------------------------------------------------- |
| 0         | success                                            |
| 100000    | Check Param  Failed                                |
| 100001    | Authorize  valid Failed ： At和用户不一致          |
| 100003    | System Error                                       |
| 100018    | Check sign  Failed                                 |
| 100022    | Authorize  expire Failed  ：At过期                 |
| 100004    | Permission  Deny                                   |
| 190201    | His config error ：历史数据配置未查到或者不正确    |
| 190202    | Device not found：查询设备不正确                   |
| 190203    | His query time  not valid：历史查询时间不正确      |
| 190204    | His query  time too much：历史查询的时间段范围过大 |



##### 上报设备运营打点

**接口名称**

reportDeviceEvent

**接口描述**

用户H5设备进行运营打点上报，WEB中调用JS方法如下：

**请求消息** 

```javascript
honorConnect.handler(
"reportDeviceEvent", //string 执行方法 
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入的值：

``` JSON
{
    "nodeId":"sdgrzxcvegf",
    "paramJson": "{\"eventTag\":\"060000001\",\"eventDesc\":\"usual_click\"}"
}

```

**成功响应消息**

```javascript
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 非0,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```





#### 个性化数据



#####  存储设备个性化数据

**接口名称**

setStorage

**接口描述**

每个设备间的数据是隔离的，无需单独处理

**请求消息**

``` javascript
honorConnect.handler(
"setStorage", //string 执行方法 
"json_body",  // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

``` javascript
{
   "key", // string 存储的数据key
   "value", // string 存储的数据value
}
```

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



#####  获取设备个性化数据

**接口名称**

getStorage

**接口描述**

每个设备间的数据是隔离的，无需单独处理

**请求消息**

``` javascript
honorConnect.handler(
"getStorage", //string 执行方法 
"json_body",  // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

``` javascript
{
   "key", // string 存储的数据key
}
```

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "value": ""  // string 存储的数据value
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



#####  删除设备个性化数据

**接口名称**

removeStorage

**接口描述**

每个设备间的数据是隔离的，无需单独处理

**请求消息**

``` javascript
honorConnect.handler(
"removeStorage", //string 执行方法 
"json_body",  // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`结构：

``` javascript
{
   "key", // string 存储的数据key
}
```

**响应消息**

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



#### 本地资源



#####  获取手机本地文档

**接口名称**

documentChooser

**接口描述**

当需要手机文档时，WEB中调用JS方法如下。

**请求消息** 

``` javascript
honorConnect.handler(
    "documentChooser", //string 执行方法 
    "", // 空string
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息**

``` JSON
{ 
    "responseId" : "1650600291901",
    "status": 0, 
    "msg": "SUCCESS"
    [String base64Str字符串]
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



#####  获取手机照片资源

**接口名称**

imageChooser

**接口描述**

当需要获取手机照片时，WEB中调用JS方法如下。

**请求消息** 

``` javascript
honorConnect.handler(
    "imageChooser", //string 执行方法 
    "json_body", // body,string,可选，见下描述
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入文件名称：

```
{ 
   "fileName": "fileName"
}
```

**响应消息** 

``` JSON
{ 
    "responseId" : "1650600291901",
    "status": 0, 
    "msg": "SUCCESS"
    [String base64Str 字符串]
}
```

**异常响应消息**

```json
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  获取应用内是否存在指定图片资源

**接口名称**

localImageChooser

**接口描述**

当需要获取应用内的图片资源时，WEB中调用JS方法如下。

**请求消息**

```JSON
honorConnect.handler(
    "localImageChooser", //string 执行方法 
    "json_body", // body,string,可选，见下描述
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入文件名称：

```
{ 
   "fileName": "fileName"
}
```

**响应消息** 

``` JSON
{ 
    "responseId" : "1650600291901",
    "status": 0, 
    "msg": "SUCCESS"
    [String base64Str 字符串]
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#####  调用手机拍照并返回图片资源

**接口名称**

takePicture

**接口描述**

当调用手机拍照时，WEB中调用JS方法如下

**请求消息** 

``` javascript
honorConnect.handler(
    "takePicture", //string 执行方法 
    "json_body", // body,string,可选，见下描述
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入文件名称：

``` JSON
{ 
   "fileName": "fileName"
}
```

**响应消息** 

``` JSON
{ 
    "responseId" : "responseId",
    "status": 0, 
    "msg": "SUCCESS"
    [String base64Str 字符串]
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



###  设备隐私接口

****



#### 点击设置页的法律信息，跳转新的法律信息H5页面

**接口名称**

jumpLegalInformation

**接口说明**

8.60.09.300版本开始废弃，使用jumpH5LoadUrl接口进行跳转

  **请求消息** 
``` javascript
honorConnect.handler(
"jumpLegalInformation", //string 执行方法 
"json_body",  // body,string类型url,必传，app侧loadUrl中的地址参数
)
```
**响应消息** 

``` JSON
该函数无需返回
```



**接口名称**

getLicenseInfo

  **请求消息**
``` javascript
honorConnect.handler(
"getLicenseInfo", //string 执行方法 
"json_body",  // body,string,可选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息** 

``` JSON
{
  "msg": "SUCCESS",
  "licenseInfo": "[{"agrNo":400012,"type":16001},{"agrNo":400017,"type":16002}]", 
  "status": 0,
  "responseId": "1650600307883"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#### 点击跳转到协议或隐私政策文本页面

**接口名称**

jumpToLicense

**请求消息**

``` javascript
honorConnect.handler(
"jumpToLicense", //string 执行方法 
"json_body",  // body,string,必选，h5侧调用此方法时，需要传入参数，类型是JsonString 如：{"agrNo": 400005,"type": 16001}
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息** 

``` JSON
该函数无需返回
```



#### 点击撤销授权

**接口名称**

revokeAuthorization

**请求消息**

``` javascript
honorConnect.handler(
"revokeAuthorization", //string 执行方法 
"json_body",  // body,string,必传 h5侧调用此方法时，需要传入参数，类型是JsonString，如： [{"agrNo": 400005,"type": 16001},{"agrNo": 400006,"type": 16002}]
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息** 

``` JSON
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600307883"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



#### 跳转智慧空间app首页

**接口名称**

jumpToMain

**接口描述**

当撤销授权成功后，无论删除设备成功或失败，h5侧都调用此方法，回到app首页。

**请求消息** 

``` javascript
honorConnect.handler(
"jumpToMain", //string 执行方法 
"json_body",  // body,string,可选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```
**响应消息**

``` JSON
该函数无需返回
```



#### 法律信息页点击返回，回到设置页面时调用此方法

**接口名称**

goBack

**请求消息**

``` javascript
honorConnect.handler(
"goBack", //string 执行方法 
"json_body",  // body,string,可选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```
**响应消息**

``` JSON
该函数无需返回
```



####  查询设备的使用记录（新设备不推荐使用，建议使用queryMessageList接口）

**接口名称**

getDeviceMsg

**接口描述**

当设备需要查询记录的事件时调用，WEB中调用JS方法如下

**请求消息** 

``` javascript
honorConnect.handler(
    "getDeviceMsg", //string 执行方法 
    "json_body", // body,string,可选，见下描述
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入文件名称：

``` JSON
{ 
   "pageSize": "10", //分页时每页消息条数，默认为20
   "pageIndex": "1" //分页时当前查询第几页，默认1 -1则返回所有消息
}
```

**响应消息** 

``` JSON
{ 
    "responseId" : "responseId",
    "status": 0, 
    "msg": "SUCCESS",
    "msgList": [
      {
        "currentTime": 1668753050266,//系统时间
        "msgReceipt": 0,
        "msgContent": {},//消息原始内容，JSON格式
        "operateStatus": 0,//用户操作处理状态 0:不涉及 1:未处理 2:已处理 3:已过期
        "msgId" :"msgId", //消息唯一标识
        "msgDisplayCN" :"msgDisplayCN", //消息展示内容中文格
        "msgDisplayEN" :"msgDisplayEN", //消息展示内容英文格式
        "eventType": 3,//事件类型1：消息 2：提醒 3：告警
        "time": 1668740910737,//消息产生时间戳
      }
    ]
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```



####  获取智慧空间问卷调查开关

**接口名称**

getQuestionInvestigation

**接口描述**

当需要获取智慧空间问卷调查开关时，WEB中调用JS方法如下：

**请求消息** 

``` javascript
honorConnect.handler(
"getQuestionInvestigation", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);

```

**响应消息** 

``` JSON
{
  "msg": "SUCCESS",
  "isChecked": true, 
  "status": 0,
  "responseId": "1650600307883"
}

```



####  接收方取消设备分享（老设备仍旧支持，新接入设备建议使用deleteDevice接口）

**接口名称**

deleteShareDevice

**接口描述**

当设备分享的接受方想要删除设备时，WEB中调用JS方法如下：
注：新接入的设备，删除分享设备的时候建议走deleteDevice接口，当前接口已废弃

**请求消息** 

``` javascript
honorConnect.handler(
"deleteShareDevice", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息** 

``` JSON
{
  "responseId": "1650600307889", 
  "resultData": "", //返回结果 
  "status": 0,
  "msg": "SUCCESS"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600307889",
    "status": 22,
    "msg": "HONORCONNECT_DEVICE_NOT_SHARED" //该设备不是共享设备
}
```

#### 查询产品级用户体验改进计划配置

**接口名称**

getUserImprovementPlanConfig

  **请求消息**

``` javascript
honorConnect.handler(
"getUserImprovementPlanConfig", //string 执行方法 
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息** 

``` JSON
{
  "msg": "SUCCESS",
  "showUserImprovementPlan": "1",// 1展示，0不展示。默认不展示 
  "status": 0,
  "responseId": "1650600307883"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 100,  
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
```

###  黑电kit相关接口

****

####  是否支持融合桌面

**接口名称**

 isPhoneSupportFusionDesktop

**接口描述**

给插件提供获取当前手机是否支持融合桌面

**请求消息** 

``` javascript
honorConnect.handler(
"isPhoneSupportFusionDesktop", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息** 

``` JSON
{
  "msg": "SUCCESS", 
  "status": 0,
  "responseId": "1650600307886"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```

####  设备是否已注册信任环

**接口名称**

isRegisteredFusionDesktopService

**接口描述**

给插件提供设备是否已注册信任环接口

**请求消息** 

``` javascript
honorConnect.handler(
"isRegisteredFusionDesktopService", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息** 

``` JSON
{
  "msg": "SUCCESS", 
  "status": 0,
  "responseId": "1650600307886"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```

####  注册信任环

**接口名称**

pinRegisterFusionDeskTop

**接口描述**

给插件提供注册融合桌面(信任环)接口

**请求消息** 

``` javascript
honorConnect.handler(
"pinRegisterFusionDeskTop", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息** 

``` JSON
{
  "msg": "SUCCESS", 
  "status": 0,
  "responseId": "1650600307886"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```

####  解绑信任环

**接口名称**

unregisterFusionDesktopService

**接口描述**

给插件提供解绑信任环接口

**请求消息** 

``` javascript
honorConnect.handler(
"unregisterFusionDesktopService", //string 执行方法 
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

**响应消息** 

``` JSON
{
  "msg": "SUCCESS", 
  "status": 0,
  "responseId": "1650600307886"
}
```

**异常响应消息**

```JSON
{ 
    "responseId" : "1650600291901",
    "status": 12,  
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
```



## Ai智能体相关接口

#### 公共编码实体

> `RoleDTO` 实体：

1. 角色，用于描述智能体，角色除了名称、描述、图标、语言、音色以外，其他的由上面的1到n个配置项定义，比如性格（配置项）、爱好（配置项）
2. 角色元数据的定义与智能体是一一对应的，在智能体配置后台配置。且智能体配置后台可以预配置几个默认的角色
3. 角色信息会在运行时，被拼接成相关提示词，用于引导大模型回复。
4. 新创建的角色信息会在业务云存放，即设备云。
5. 对于本次需求，角色包含（名称，描述，图标，语言，音色，性格（配置项）），性格是系统配置项，具体取值参考产品文档

| 字段          | 类型   | 描述           | 取值                                                         |
| ------------- | ------ | -------------- | ------------------------------------------------------------ |
| type          | int    | 类型           | 0：系统预设； 1：用户自定义；                                |
| roleId        | String | 角色id         | 根据是系统预设还是用户自定义，科恩那个来源于外部，也可能来源设备云 |
| name          | String | 角色名称       |                                                              |
| desc          | String | 角色描述       |                                                              |
| icon          | String | 角色Icon       | 自定义角色的图片Icon是一个临时有效的url                      |
| propertyValue | List   | 角色开发配置值 | 见公共字段《智能体公共编码合实体`PropertyValueConfig`结构》  |
| language      | String | 角色语言       |                                                              |
| timbresId     | String | 音色id         |                                                              |

```JSON
{
        "type": "类型",
        "roleId": "角色id",
        "name": "角色名称",
        "desc": "角色描述",
        "icon": "角色Icon",
        "propertyValue": [{
                        "code": "属性&音色&语言编码",
                        "type": "类型",
                        "value ": "预设值",
                        "name ": "名称",
                        "desc ": "描述",
                        "rawCfgValue": "自定义值原始数据，当type=custom时有效"
                },
                {
                        "code": "属性&音色&语言编码",
                        "type": "类型",
                        "value ": "预设值",
                        "name ": "名称",
                        "desc ": "描述",
                        "rawCfgValue": "自定义值原始数据，当type=custom时有效"
                }
        ],
        "language": "角色语言",
        "timbresId": "音色id"
}
```

> `PropertyValueConfig` 将音色、配置项、语言合并，在jsAPI实现中，需要根据属性值以及属性的元数据信息进行特殊处理

| 字段        | 类型   | 描述                             | 取值                                                         |
| ----------- | ------ | -------------------------------- | ------------------------------------------------------------ |
| deviceId    | String | 设备id                           |                                                              |
| agentCode   | String | 智能体id                         | 如果不填，则为设备智能体                                     |
| key         | String | 需要设置属性的编码，端侧不做校验 | 见《智能体公共编码合实体`code`》                             |
| opType      | int    | 操作类型                         | 默认传1                                                      |
| type        | String | 配置类型                         | 配置类型 custom/preset                                       |
| valueId     | String | 需要设置的配置值                 | 预设的配置id--preset专属                                     |
| valueText   | String | 需要设置的配置值                 | 自定义配置值：篮球，羽毛球--custom专属                       |
| rawCfgValue | String | 配置值的原始值                   | 比如对于爱好，如下，用###分割（业务定义）篮球###羽毛球--custom专属 |

```JSON
{
        "deviceId": "deviceId", 
        "agentCode": "agentCode", 
        "key": "screen_timeout",    // 配置项键名
        "opType": 1,                // 操作类型（1=默认设置）
        "type": "type",                                // 配置类型 custom/preset
        "valueId": "valueId",     // 预设的枚举值ID -preset专属
        "valueText": "valueText",       // 用户可见的配置描述-custom专属
        "rawCfgValue": "300000"     // 原始配置数值（单位毫秒）-custom专属
}
```

| 字段        | 类型   | 描述                                  | 取值                                                         |
| ----------- | ------ | ------------------------------------- | ------------------------------------------------------------ |
| code        | String | 属性&音色&语言编码                    | "timbres"：音色 "roleName"：角色姓名 "roleIntroduce": 角色描述 "roleLang": 角色语言 "roleCharacter"：角色性格" "roleRemark"：角色备注" "habit_development": 习惯养成 "userName": 用户名称 "userGender": 用户性别 "userBirthday": 用户生日 "userCharacter": 用户性格 "userHobby": 用户爱好 "roleIcon": 角色icon"dialogLearningSwitch":用户对话学习开关 |
| type        | String | 类型                                  | 音色：0/1，属性：preset/custom                               |
| value       | String | 预设值                                | 可能是id，可能是其他值                                       |
| name        | String | 名称                                  |                                                              |
| desc        | String | 描述                                  | 目前只有音色有该字段                                         |
| rawCfgValue | String | 自定义值原始数据，当type=custom时有效 |                                                              |

`PropertyValueConfig` 格式：

```JSON
{
    "code": "属性&音色&语言编码",
    "type": "类型",
    "value":"预设值",
    "name":"名称",
    "desc":"描述",
    "rawCfgValue":"自定义值原始数据，当type=custom时有效",
}
```

> `code 枚举：

| 字段 | 类型   | 描述                             | 取值                                                         |
| ---- | ------ | -------------------------------- | ------------------------------------------------------------ |
| code | String | 需要设置属性的编码，端侧不做校验 | "timbres"：音色 "roleName"：角色姓名 "roleIntroduce": 角色描述 "roleLang": 角色语言 "roleCharacter"：角色性格" "roleRemark"：角色备注" "habit_development": 习惯养成 "userName": 用户名称 "userGender": 用户性别 "userBirthday": 用户生日 "userCharacter": 用户性格 "userHobby": 用户爱好 "roleIcon": 角色icon |

##### 智能体错误码定义

| errorcode | errordesc                                                    | 含义                                       |
| --------- | ------------------------------------------------------------ | ------------------------------------------ |
| 0         | success                                                      | 操作成功                                   |
| 100000    | Check Param Failed                                           | 参数校验失败                               |
| 100001    | Authorize valid Failed                                       | 授权验证失败                               |
| 100002    | Illegal Operation                                            | 非法操作                                   |
| 100003    | System Error                                                 | 系统错误                                   |
| 1000023   | token expire Failed                                          | 令牌已过期                                 |
| 141301    | User info not found                                          | 用户信息未找到                             |
| 160002    | Device not exist                                             | 设备不存在                                 |
| 190202    | device not found                                             | 找不到设备                                 |
| 193003    | ai-iot token has expired                                     | AI-IOT令牌已过期                           |
| 193004    | check ai-iot token failed                                    | AI-IOT令牌校验失败                         |
| 193005    | ai agent binding not found                                   | AI代理绑定信息未找到                       |
| 193008    | agent not found                                              | 找不到代理                                 |
| 193010    | agent not support by the product yet                         | 产品暂不支持该代理                         |
| 193011    | io error when send sse message                               | 发送SSE消息时发生IO错误                    |
| 193012    | ai-iot grpc connect timeout                                  | AI-IOT gRPC连接超时                        |
| 193013    | agent roleId not found                                       | 找不到代理角色ID                           |
| 193014    | agent config key not support                                 | 不支持的代理配置键                         |
| 193015    | agent config valueId not support                             | 不支持的代理配置值ID                       |
| 193016    | agent custom role is over limit                              | 自定义代理角色数量超限                     |
| 193017    | device role name duplicate                                   | 设备角色名称重复                           |
| 193018    | user config key not support                                  | 不支持的用户配置键                         |
| 193019    | Control over range                                           | 控制参数超出范围                           |
| 193020    | Control value not valid                                      | 控制参数值无效                             |
| 193021    | Control property not valid                                   | 控制属性无效                               |
| 193031    | timbre not exist                                             | 音色不存在                                 |
| 193032    | timbre already used by role                                  | 音色已被角色使用                           |
| 193033    | timbre already used by device                                | 音色已被设备使用                           |
| 193034    | timbre upsert error                                          | 音色新增或更新失败                         |
| 193035    | yoyo commit error                                            | YOYO提交音色失败                           |
| 193036    | timbre delete error                                          | 音色删除失败                               |
| 193037    | yoyo delete error                                            | YOYO删除音色失败                           |
| 193038    | timbre name duplicated                                       | 音色名称重复                               |
| 193039    | timbre already exists                                        | 音色已存在                                 |
| 193040    | call agent failed                                            | 调用代理失败                               |
| 193041    | timbre limit exceeded                                        | 音色数量超限                               |
| 193042    | call ai cloud failed (表示调用个人知识库获取成长记忆失败)    | 调用AI云失败（获取个人知识库成长记忆失败） |
| 193043    | no proper content                                            | 没有合适的内容                             |
| 193044    | invalid status                                               | 状态无效                                   |
| 193045    | content display profile error                                | 内容展示配置错误                           |
| 193046    | product not support growth report                            | 产品不支持成长报告                         |
| 193047    | refresh third token failed                                   | 刷新第三方令牌失败                         |
| 193051    | ai talk not exist                                            | AI对话不存在                               |
| 193052    | The ai talk has exist                                        | AI对话已存在                               |
| 193053    | The length of roleTalks is at least 1                        | 角色对话列表长度至少为1                    |
| 193059    | duplicate items found between Tag Group and Preset Tag Group | 标签组与预设标签组存在重复项               |
| 193060    | Tag group not found                                          | 标签组未找到                               |
| 193061    | video event type error                                       | 视频事件类型错误                           |
| 193062    | video event subType error                                    | 视频事件子类型错误                         |
| 193063    | video event videoList error                                  | 视频事件视频列表错误                       |
| 193065    | video event detail error                                     | 视频事件详情错误                           |
| 193066    | video event invoke video error                               | 视频事件调用视频失败                       |
| 193067    | video event invoke thumbnail error                           | 视频事件调用缩略图失败                     |
| 193068    | video event invoke analysis error                            | 视频事件调用分析失败                       |
| 193069    | video event plugin error                                     | 视频事件插件错误                           |
| 193070    | video event thumbnail parse error                            | 视频事件缩略图解析错误                     |
| 193071    | video event record not found                                 | 视频事件记录未找到                         |
| 193072    | video event analyse callback already exists                  | 视频事件分析回调已存在                     |
| 193073    | video event analysisId not found                             | 视频事件分析ID未找到                       |
| 193074    | video event time error                                       | 视频事件时间错误                           |
| 193075    | video event callback error                                   | 视频事件回调错误                           |
| 193076    | duplicate items found between Tag Group and Custom Tag Group | 标签组与自定义标签组存在重复项             |
| 193077    | tag is invalid                                               | 标签无效                                   |
| 193078    | tag is duplicated                                            | 标签重复                                   |
| 193079    | tag group is not editable                                    | 标签组不可编辑                             |



#### 智能体公共接口

##### 设置用户及智能体属性

**接口名称**

setAgentProperties

**接口描述**

1. 设置属性的值，可以是配置项，也可以是音色或者语言
2. 设置后对智能体生效。

**请求消息**

```JavaScript
honorConnect.handler(
    "setAgentProperties", //string 执行方法 
    "json_body", // 非空string
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入文件名称：

| 字段               | 是否必选 | 类型   | 描述                               | 取值                                            |
| ------------------ | -------- | ------ | ---------------------------------- | ----------------------------------------------- |
| deviceId           | 是       | String | 设备id                             |                                                 |
| agentCode          | 否       | String | 智能体id                           | 如果不填，则为设备智能体                        |
| propertyValues     | 是       | List   | 设置智能体参与深度学习的属性       | 见《智能体公共编码合实体`PropertyValueConfig`》 |
| noDlPropertyValues | 否       | List   | 设置智能体**不**参与深度学习的属性 | 见《智能体公共编码合实体`PropertyValueConfig`》 |

```JSON
{
        "deviceId": "deviceId",
        "agentCode": "agentCode",
        "propertyValues": [{
                "code": "userGender",
                "type": "custom/preset",
                "value": "男/id",
                "name": "",
                "desc": "",
                "rawcfgValue": "性格等自定义属性 可选值拼接逻辑"
        }],
        "noDlPropertyValues": [
        {
            "code": "dialogLearningSwitch",
            "type": "switch",
            "value": "on"   
        }]
}
```

**响应消息**

```JSON
{
        "msg": "SUCCESS",
        "status": 0,
        "responseId": "1650600307886",
        "resultData": "`resultData"
}
```

`resultData`格式：

| 字段      | 是否必选 | 类型   | 描述                               |
| --------- | -------- | ------ | ---------------------------------- |
| errorCode | 是       | String | 错误码，见下方`智能体错误码定义`   |
| errorDesc | 是       | String | 错误描述，见下方`智能体错误码定义` |

**异常响应消息**

| 字段      | 类型   | 描述   | 取值                           |
| --------- | ------ | ------ | ------------------------------ |
| errorCode | String | 错误码 | 见公共编码->`智能体错误码定义` |

##### 获取用户及智能体属性值

**接口名称**

getAgentProperties

**接口描述**

1. 获取智能体属性值。

**请求消息**

```JavaScript
honorConnect.handler(
    "getAgentProperties", //string 执行方法 
    "json_body", // 非空string
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入：

| 字段      | 是否必选 | 类型   | 描述                                                         | 取值                                                         |
| --------- | -------- | ------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| deviceId  | Y        | String | 设备id                                                       |                                                              |
| agentCode | N        | String | 智能体id                                                     | 如果不填，则为设备智能体                                     |
| code      | N        | String | 智能体属性key 需要设置属性的编码，端侧不做校验 <br/>见《智能体公共编码合实体`code`》 | "timbres"：音色 <br>"roleName"：角色姓名 <br/>"roleIntroduce": 角色描述 <br/>"roleLang": 角色语言 <br/>"roleCharacter"：角色性格" <br/>"roleRemark"：角色备注" <br/>"habit_development": 习惯养成 <br/>"userName": 用户名称 <br/>"userGender": 用户性别 <br/>"userBirthday": 用户生日 <br/>"userCharacter": 用户性格 <br/>"userHobby": 用户爱好 <br/>"roleIcon": 角色icon<br/>"dialogLearningSwitch":用户对话学习开关 |

```JSON
{ 
           "deviceId": "deviceId",
           "agentCode": "agentCode",
           "code": "code",//见《智能体公共编码合实体`code`》
}
```

**响应消息**

```JSON
{
        "msg": "SUCCESS",
        "status": 0,
        "responseId": "1650600307886",
        "resultData": "resultData"
}
```

`resultData`格式：

| 字段      | 是否必选 | 类型   | 描述                                                         |
| --------- | -------- | ------ | ------------------------------------------------------------ |
| errorCode | 是       | String | 错误码，见下方`设备云错误码定义`                             |
| errorDesc | 是       | String | 错误描述，见下方`设备云错误码定义`                           |
| data      | 否       | List   | 表示参与深度学习的配置见公共字段《智能体公共编码合实体`PropertyValueConfig`结构》 |
| noDlData  | 否       | List   | 表示不参与深度学习的配置                                     |

`data`结构 :

| 字段        | 类型   | 描述                                  | 取值                                                         |
| ----------- | ------ | ------------------------------------- | ------------------------------------------------------------ |
| code        | String | 属性&音色&语言编码                    | "timbres"：音色 <br/>"roleName"：角色姓名 <br/>"roleIntroduce": 角色描述 <br/>"roleLang": 角色语言 <br/>"roleCharacter"：角色性格<br/>"roleRemark"：角色备注<br/> "habit_development": 习惯养成 <br/>"userName": 用户名称 <br/>"userGender": 用户性别 <br/>"userBirthday": 用户生日 <br/>"userCharacter": 用户性格 <br/>"userHobby": 用户爱好 <br/>"roleIcon": 角色icon |
| type        | String | 类型                                  | 音色：0/1，属性：preset/custom                               |
| value       | String | 预设值                                | 可能是id，可能是其他值                                       |
| name        | String | 名称                                  |                                                              |
| desc        | String | 描述                                  | 目前只有音色有该字段                                         |
| rawCfgValue | String | 自定义值原始数据，当type=custom时有效 |                                                              |

```JSON
{
        "code": "属性&音色&语言编码",
        "type": "类型",
        "value": "预设值",
        "name": "名称",
        "desc": "描述",
        "rawCfgValue": "自定义值原始数据，当type=custom时有效"
}
```

`noDlData`结构 :

| 字段  | 类型   | 描述 | 取值                                      |
| ----- | ------ | ---- | ----------------------------------------- |
| code  | String |      | "dialogLearningSwitch":用户对话学习开关   |
| type  | String | 类型 | 配置类型default - 默认switch - 开关类配置 |
| value | Object |      | 用户级配置值                              |

```JSON
{
        "code": "dialogLearningSwitch",
        "type": "switch",
        "value": "on"
}
```

云侧返回报文参考：

```JSON
{
        "errorCode": "0",
        "errorDesc": "Success",
        "data": {
                "selectedRole": {
                        "type": 1,
                        "roleId": "7cd701fdb99741eda24488fda6838fcb"
                },
                "agentConfigs": {
                        "timbreId": "1",
                        "configs": [{
                                "key": "userHobby",
                                "type": "custom",
                                "valueId": null,
                                "valueText": "绘画",
                                "rawCfgValue": null
                        }, {
                                "key": "userCharacter",
                                "type": "custom",
                                "valueId": null,
                                "valueText": "乐观",
                                "rawCfgValue": null
                        }, {
                                "key": "userGender",
                                "type": "custom",
                                "valueId": null,
                                "valueText": "男",
                                "rawCfgValue": null
                        }, {
                                "key": "userName",
                                "type": "custom",
                                "valueId": null,
                                "valueText": "小美",
                                "rawCfgValue": null
                        }, {
                                "key": "userBirthday",
                                "type": "custom",
                                "valueId": null,
                                "valueText": "2014/07/20",
                                "rawCfgValue": null
                        }],
                        "userConfigs": [{
                                "key": "dialogLearningSwitch",
                                "type": "switch",
                                "value": "on"
                        }]
                }
        }
}
```

**异常响应消息**

| 字段      | 类型   | 描述   | 取值                           |
| --------- | ------ | ------ | ------------------------------ |
| errorCode | String | 错误码 | 见公共编码->`智能体错误码定义` |



##### 获取属性可选值

**接口名称**

getAgentOptionalPropertyValues

**接口描述**

1. 获取智能体预设属性值。

**请求消息**

```JavaScript
honorConnect.handler(
    "getAgentOptionalPropertyValues", //string 执行方法 
    "json_body", // 非空string
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入：

| 字段      | 是否必选 | 类型   | 描述                                                         | 取值                                                         |
| --------- | -------- | ------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| deviceId  | 是       | String | 设备id                                                       |                                                              |
| agentCode | 否       | String | 智能体id                                                     | 如果不填，则为设备智能体                                     |
| code      | 否       | String | 需要设置属性的编码，端侧不做校验<br/>见《智能体公共编码合实体`code`》 | "timbres"：音色 <br>"roleName"：角色姓名 <br/>"roleIntroduce": 角色描述 <br/>"roleLang": 角色语言 <br/>"roleCharacter"：角色性格<br/> "roleRemark"：角色备注<br/>"habit_development": 习惯养成 <br/>"userName": 用户名称 <br/>"userGender": 用户性别<br/> "userBirthday": 用户生日 <br/>"userCharacter": 用户性格 <br/>"userHobby": 用户爱好 <br/>"roleIcon": 角色icon<br/>"dialogLearningSwitch":用户对话学习开关 |

```JSON
{ 
           "deviceId": "deviceId",
           "agentCode": "agentCode",
           "code ": "code",//见《智能体公共编码合实体`code`》
}
```

**响应消息**

```JSON
{
        "msg": "SUCCESS",
        "status": 0,
        "responseId": "1650600307886",
        "resultData": "resultData"
}
```

`resultData`格式：

| 字段      | 是否必选 | 类型   | 描述                                                         |
| --------- | -------- | ------ | ------------------------------------------------------------ |
| errorCode | 是       | String | 错误码，见下方`设备云错误码定义`                             |
| errorDesc | 是       | String | 错误描述，见下方`设备云错误码定义`                           |
| data      | 否       | List   | 表示参与深度学习的数据见公共字段《智能体公共编码合实体`PropertyValueConfig`结构》 |
| noDLData  | 否       | List   | 表示不参与深度学习的数据见公共字段《智能体公共编码合实体`PropertyValueConfig`结构》 |

`data`结构 :

| 字段        | 类型   | 描述                                  | 取值                                                         |
| ----------- | ------ | ------------------------------------- | ------------------------------------------------------------ |
| code        | String | 属性&音色&语言编码                    | "timbres"：音色<br/>"roleName"：角色姓名 <br/>"roleIntroduce": 角色描述 <br/>"roleLang": 角色语言 <br/>"roleCharacter"：角色性格 <br/>"roleRemark"：角色备注<br/>"habit_development": 习惯养成 <br/>"userName": 用户名称 <br/>"userGender": 用户性别 <br/>"userBirthday": 用户生日 <br/>"userCharacter": 用户性格 <br/>"userHobby": 用户爱好 <br/>"roleIcon": 角色icon |
| type        | String | 类型                                  | 音色：0/1，属性：preset/custom                               |
| value       | String | 预设值                                | 可能是id，可能是其他值                                       |
| name        | String | 名称                                  |                                                              |
| desc        | String | 描述                                  | 目前只有音色有该字段                                         |
| rawCfgValue | String | 自定义值原始数据，当type=custom时有效 |                                                              |

```JSON
{
        "code": "属性&音色&语言编码",
        "type": "类型",
        "value": "预设值",
        "name": "名称",
        "desc ": "描述",
        "rawCfgValue": "自定义值原始数据，当type=custom时有效"
}
```

`noDLData`结构 :

| 字段 | 类型   | 描述 | 取值                                                   |
| ---- | ------ | ---- | ------------------------------------------------------ |
| code | String |      | 用户级配置 code"dialogLearningSwitch":用户对话学习开关 |
| type | String | 类型 | 配置类型default - 默认switch - 开关类配置              |

```JSON
{
        "code": "dialogLearningSwitch",
        "type": "switch",
}
```

**异常响应消息**

| 字段      | 类型   | 描述   | 取值                           |
| --------- | ------ | ------ | ------------------------------ |
| errorCode | String | 错误码 | 见公共编码->`智能体错误码定义` |

##### 获取角色列表

**接口名称**

getAgentRoles

**接口描述**

1. 获取智能体角色列表。

**请求消息**

```JavaScript
honorConnect.handler(
    "getAgentRoles", //string 执行方法 
    "json_body", // 非空string
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入：

| 字段      | 是否必传 | 类型   | 描述     | 取值                     |
| --------- | -------- | ------ | -------- | ------------------------ |
| deviceId  | 是       | String | 设备id   |                          |
| agentCode | 否       | String | 智能体id | 如果不填，则为设备智能体 |

```JSON
{ 
           "deviceId": "deviceId",
           "agentCode": "agentCode"
}
```

**响应消息**

```JSON
{
        "msg": "SUCCESS",
        "status": 0,
        "responseId": "1650600307886",
        "resultData": "resultData"
}
```

`resultData`格式

```JSON
{
        "fullAgentRoles": {

        },
        "fullAgentConfigs": {

        }
}
```

`resultData`结构

| 字段             | 类型                  | 描述     | 取值 |
| ---------------- | --------------------- | -------- | ---- |
| fullAgentRoles   | FullAgentRolesModel   |          |      |
| fullAgentConfigs | FullAgentConfigsModel | 角色列表 |      |

`resultData`|`FullAgentRolesModel`格式：

| 字段            | 类型               | 描述       | 取值                                                         |
| --------------- | ------------------ | ---------- | ------------------------------------------------------------ |
| defaultRole     | String             | 类型       | 0：系统预设； 1：用户自定义；                                |
| timbres         | List               | 音色列表   | int type; // 类型 String timbreId; // 音色Id private String name; // 音色名称 |
| agentConfigMeta | List               | 智能体配置 | String key; // 属性编码 String type; // 类型 List valueList // 预设值列表 AgentPresetConfigDTO: String id; String name; |
| roles           | FullAgentRoleModel | 角色列表   | int type;// 0：系统预设，1：用户自定义 String roleId; // 角色ID String name; // 角色名称 String desc; // 角色描述 String iconFileName; // 角色icon图片的文件名 String iconData; //icon图片的base64编码 String language; // 语言ID String timbresId; // 音色ID private List propertyValue//见公共编码 |

```JSON
{
	"msg": "SUCCESS",
	"resultData": {
		"fullAgentConfigs": {
			"agentConfigs": {
				"configs": [],
				"timbreId": "1"
			},
			"selectedRole": {
				"roleId": "1",
				"type": 0,
				"propertyValues": [],
				"timbreType": 0
			}
		},
		"fullAgentRoles": {
			"agentConfigMeta": [{
				"key": "roleName",
				"type": "custom",
				"valueList": []
			}, {
				"key": "roleIntroduce",
				"type": "custom",
				"valueList": []
			}, {
				"key": "roleLang",
				"type": "preset",
				"valueList": [{
					"id": "zh-CN",
					"name": "中文"
				}, {
					"id": "en-US",
					"name": "英文"
				}]
			}, {
				"key": "roleCharacter",
				"type": "preset",
				"valueList": [{
					"id": "101",
					"name": "外向热情"
				}, {
					"id": "102",
					"name": "沉稳内敛"
				}, {
					"id": "103",
					"name": "乐观开朗"
				}, {
					"id": "104",
					"name": "谨慎细致"
				}, {
					"id": "105",
					"name": "果断坚毅"
				}, {
					"id": "106",
					"name": "随和友善"
				}, {
					"id": "107",
					"name": "敏感细腻"
				}]
			}, {
				"key": "roleRemark",
				"type": "custom",
				"valueList": []
			}, {
				"key": "userName",
				"type": "custom",
				"valueList": []
			}, {
				"key": "userGender",
				"type": "custom",
				"valueList": []
			}, {
				"key": "userBirthday",
				"type": "custom",
				"valueList": []
			}, {
				"key": "userCharacter",
				"type": "custom",
				"valueList": []
			}, {
				"key": "userHobby",
				"type": "custom",
				"valueList": []
			}, {
				"key": "habitDevelopment",
				"type": "custom",
				"valueList": []
			}],
			"defaultRole": "15",
			"roles": [{
				"roleId": "15",
				"type": 0,
				"desc": "\"奶龙\"",
				"name": "奶龙",
				"propertyValues": [{
					"code": "roleLang",
					"name": "roleLang",
					"type": "preset",
					"value": "en-US"
				}, {
					"code": "roleCharacter",
					"name": "roleCharacter",
					"type": "preset",
					"value": "104"
				}],
				"timbreId": "1000002",
				"timbreType": 0
			}, {
				"roleId": "24",
				"type": 0,
				"desc": "\"爱小溪\"",
				"name": "爱小溪",
				"propertyValues": [{
					"code": "roleLang",
					"name": "roleLang",
					"type": "preset",
					"value": "zh-CN"
				}, {
					"code": "roleCharacter",
					"name": "roleCharacter",
					"type": "preset",
					"value": "101"
				}],
				"timbreId": "2100013",
				"timbreType": 0
			}, {
				"roleId": "25",
				"type": 0,
				"desc": "\"爱小叶\"",
				"name": "爱小叶",
				"propertyValues": [{
					"code": "roleLang",
					"name": "roleLang",
					"type": "preset",
					"value": "zh-CN"
				}, {
					"code": "roleCharacter",
					"name": "roleCharacter",
					"type": "preset",
					"value": "102"
				}],
				"timbreId": "2100014",
				"timbreType": 0
			}, {
				"roleId": "26",
				"type": 0,
				"desc": "\"智希\"",
				"name": "智希",
				"propertyValues": [{
					"code": "roleLang",
					"name": "roleLang",
					"type": "preset",
					"value": "zh-CN"
				}, {
					"code": "roleCharacter",
					"name": "roleCharacter",
					"type": "preset",
					"value": "104"
				}],
				"timbreId": "2100015",
				"timbreType": 0
			}, {
				"roleId": "27",
				"type": 0,
				"desc": "\"爱小树\"",
				"name": "爱小树",
				"propertyValues": [{
					"code": "roleLang",
					"name": "roleLang",
					"type": "preset",
					"value": "zh-CN"
				}, {
					"code": "roleCharacter",
					"name": "roleCharacter",
					"type": "preset",
					"value": "107"
				}],
				"timbreId": "2100016",
				"timbreType": 0
			}, {
				"roleId": "28",
				"type": 0,
				"desc": "\"智梅\"",
				"name": "智梅",
				"propertyValues": [{
					"code": "roleLang",
					"name": "roleLang",
					"type": "preset",
					"value": "zh-CN"
				}, {
					"code": "roleCharacter",
					"name": "roleCharacter",
					"type": "preset",
					"value": "105"
				}],
				"timbreId": "2100017",
				"timbreType": 0
			}, {
				"roleId": "29",
				"type": 0,
				"desc": "\"智柯\"",
				"name": "智柯",
				"propertyValues": [{
					"code": "roleLang",
					"name": "roleLang",
					"type": "preset",
					"value": "zh-CN"
				}, {
					"code": "roleCharacter",
					"name": "roleCharacter",
					"type": "preset",
					"value": "107"
				}],
				"timbreId": "2100018",
				"timbreType": 0
			}],
			"timbres": [{
				"name": "知性女孩",
				"timbreId": "0",
				"type": 0
			}, {
				"name": "百变严师",
				"timbreId": "100",
				"type": 0
			}, {
				"name": "阅世小言",
				"timbreId": "101",
				"type": 0
			}, {
				"name": "青年男声",
				"timbreId": "102",
				"type": 0
			}, {
				"name": "青葱少女",
				"timbreId": "103",
				"type": 0
			}, {
				"name": "百变声姬",
				"timbreId": "104",
				"type": 0
			}, {
				"name": "",
				"timbreId": "105",
				"type": 0
			}, {
				"name": "雅韵奶奶",
				"timbreId": "106",
				"type": 0
			}, {
				"name": "奶音女孩",
				"timbreId": "107",
				"type": 0
			}, {
				"name": "奶音男孩",
				"timbreId": "108",
				"type": 0
			}, {
				"name": "知性女声",
				"timbreId": "132",
				"type": 0
			}, {
				"name": "YOYO女",
				"timbreId": "133",
				"type": 0
			}, {
				"name": "阳光妹妹",
				"timbreId": "200",
				"type": 0
			}, {
				"name": "邻家甜妹",
				"timbreId": "201",
				"type": 0
			}, {
				"name": "暖阳姐姐",
				"timbreId": "202",
				"type": 0
			}, {
				"name": "书香阿姨",
				"timbreId": "203",
				"type": 0
			}, {
				"name": "元气爱豆",
				"timbreId": "204",
				"type": 0
			}, {
				"name": "职场秘书",
				"timbreId": "205",
				"type": 0
			}, {
				"name": "高冷总监",
				"timbreId": "206",
				"type": 0
			}, {
				"name": "醇厚大叔",
				"timbreId": "300",
				"type": 0
			}, {
				"name": "磐石之声",
				"timbreId": "301",
				"type": 0
			}, {
				"name": "暖阳阿哲",
				"timbreId": "302",
				"type": 0
			}, {
				"name": "自在青年",
				"timbreId": "303",
				"type": 0
			}, {
				"name": "霸道总裁",
				"timbreId": "304",
				"type": 0
			}, {
				"name": "浪漫之友",
				"timbreId": "305",
				"type": 0
			}, {
				"name": "活力耀耀",
				"timbreId": "306",
				"type": 0
			}, {
				"name": "奶萌女孩",
				"timbreId": "500",
				"type": 0
			}, {
				"name": "",
				"timbreId": "307",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2000001",
				"type": 0
			}, {
				"name": "YOYO_讯飞",
				"timbreId": "2000002",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2100001",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2100002",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2100003",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2100004",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2100005",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2100007",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2100008",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2100009",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2100010",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2200001",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2200002",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2200003",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2200004",
				"type": 0
			}, {
				"name": "YOYO_火山",
				"timbreId": "2200005",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2000005",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2000006",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2000007",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2100011",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2200007",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2200008",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2200010",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2200011",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2200012",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2300002",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2300003",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2300004",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2100013",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2100014",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2100015",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2100016",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2100017",
				"type": 0
			}, {
				"name": "",
				"timbreId": "2100018",
				"type": 0
			}]
		}
	},
	"status": 0,
	"responseId": "1763383945399382"
}
```

`resultData`|`AgentConfigsModel`格式：见《公共编码实体`RoleDTO`》

| 字段         | 类型               | 描述         | 取值                                                         |
| ------------ | ------------------ | ------------ | ------------------------------------------------------------ |
| selectedRole | FullAgentRoleModel | 选中角色信息 | int type;// 0：系统预设，1：用户自定义 <br/>String roleId; // 角色ID <br/>String name; // 角色名称 <br/>String desc; // 角色描述 <br/>String iconFileName; // 角色icon图片的文件名 <br/>String iconData; //icon图片的base64编码 <br/>String language; // 语言ID <br/>String timbresId; // 音色ID <br/>List propertyValue//见公共编码 |
| agentConfigs | AgentConfigsModel  | 角色配置列表 | String timbreId;音色id List configs;//音色配置信息           |

```JSON
{ 
           "errorCode": "错误码",
           "errorDesc": "错误信息"
}
```



**异常响应消息**

| 字段      | 类型   | 描述   | 取值                           |
| --------- | ------ | ------ | ------------------------------ |
| errorCode | String | 错误码 | 见公共编码->`智能体错误码定义` |

##### 创建角色

**接口名称**

createAgentRole

**接口描述**

1. 创建角色。

**请求消息**

```JavaScript
honorConnect.handler(
    "createAgentRole", //string 执行方法 
    "json_body", // 非空string
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入：

| 字段           | 是否必传 | 类型   | 描述                 | 取值                                                        |
| -------------- | -------- | ------ | -------------------- | ----------------------------------------------------------- |
| deviceId       | 是       | String | 设备ID               |                                                             |
| agentCode      | 否       | String | 智能体Code           |                                                             |
| name           | 否       | String | 角色名称             |                                                             |
| desc           | 否       | String | 角色描述             | 需要跟roleIntroduce的propertyValue联动上传                  |
| iconFileName   | 否       | String | 图片名称             |                                                             |
| iconData       | 否       | String | 图片base64数据       |                                                             |
| propertyValues | 否       | List   | 属性，包括音色和语言 | 见公共字段《智能体公共编码合实体`PropertyValueConfig`结构》 |

```JSON
{
        "deviceId": "deviceId",
        "agentCode": "agentCode",
        "name ": "幽默故事大王",
        "desc ": "你是一位戴着魔法帽的小男孩形象的故事大王，专门陪伴小孩。说话风格亲切活泼，能快速根据小孩兴趣定制温馨治愈风格的故事面对小孩的提问，你总能随机应变，给出有趣的解答你的口头禅是“我的小伙伴，你想听什么故事呀”，在每次开启讲故事环节都会这么说",
    	//如果需要传递角色描述的话，必须在propertyValues新增roleIntroduce属性
        "iconFileName ": "图片名称",
        "iconData ": "图片base64数据",
        "propertyValues ": "属性，包括音色和语言"
}
```

对应propertyValues如下：

```json
[
    {
        "code" : "roleCharacter",
        "type" : "preset",
        "value" : "123"
    },
    {
        "code" : "roleLang",
        "type" : "preset",
        "value" : "123"
    },
    {
        "code" : "roleName",
        "type" : "custom",
        "value" : "123"
    },
    {
        "code" : "roleRemark",
        "type" : "custom",
        "value" : "123"
    },
    //如果添加角色描述描述，这段必填
    {
        "code" : "roleIntroduce",
        "type" : "custom",
        "value" : "你是一位戴着魔法帽的小男孩形象的故事大王，专门陪伴小孩。说话风格亲切活泼，能快速根据小孩兴趣定制温馨治愈风格的故事面对小孩的提问，你总能随机应变，给出有趣的解答你的口头禅是“我的小伙伴，你想听什么故事呀”，在每次开启讲故事环节都会这么说"
    }
]
```



`propertyValue`|`ConfigValueDTO`格式： 见公共字段《智能体公共编码合实体`PropertyValueConfig`结构》

| 字段        | 是否必传 | 类型   | 描述                                                  | 取值 |
| ----------- | -------- | ------ | ----------------------------------------------------- | ---- |
| code        | 是       | String | 配置code                                              |      |
| type        | 是       | String | 配置值类型                                            |      |
| value       | 是       | String | 当type=preset时为预设值id；当type=custom时有效为value |      |
| name        | 否       | String | 属性名称，目前不需要传                                |      |
| desc        | 否       | String | 属性描述，目前不需要传                                |      |
| rawCfgValue | 否       | String | 自定义值原始数据，当type=custom时有效                 |      |

**响应消息**

```JSON
{
        "msg": "SUCCESS",
        "status": 0,
        "responseId": "1650600307886",
        "resultData": "resultData"
}
```

`resultData`格式：

| 字段      | 类型   | 描述   | 取值                           |
| --------- | ------ | ------ | ------------------------------ |
| roleId    | String | 角色id |                                |
| errorCode | String | 错误码 | 见公共编码->`智能体错误码定义` |

```JSON
{ 
           "errorCode": "错误码",
           "errorDesc": "错误信息",
           "roleId": "角色id"
}
```

**异常响应消息**

| 字段      | 类型   | 描述   | 取值                           |
| --------- | ------ | ------ | ------------------------------ |
| errorCode | String | 错误码 | 见公共编码->`智能体错误码定义` |

##### 设置角色

**接口名称**

setAgentRole

**接口描述**

1. 设置角色。

**请求消息**

```JavaScript
honorConnect.handler(
    "setAgentRole", //string 执行方法 
    "json_body", // 非空string
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入：

| 字段      | 是否必传 | 类型   | 描述       | 取值 |
| --------- | -------- | ------ | ---------- | ---- |
| deviceId  | 是       | String | 设备ID     |      |
| agentCode | 否       | String | 智能体Code |      |
| roleId    | 是       | String | 角色id     |      |

`json_body`格式

```JSON
{ 
           "deviceId": "设备ID",
           "agentCode": "智能体Code",
           "roleId ": "角色id",
}
```

**响应消息**

```JSON
{
        "msg": "SUCCESS",
        "status": 0,
        "responseId": "1650600307886",
        "resultData": "resultData"
}
```

`resultData`格式：

| 字段      | 是否必选 | 类型   | 描述                               |
| --------- | -------- | ------ | ---------------------------------- |
| errorCode | 是       | String | 错误码，见下方`智能体错误码定义`   |
| errorDesc | 是       | String | 错误描述，见下方`智能体错误码定义` |

`resultData`结构：

```JSON
{ 
           "errorCode": "错误码",
           "errorDesc": "错误信息"
}
```

**异常响应消息**

| 字段      | 类型   | 描述   | 取值                               |
| --------- | ------ | ------ | ---------------------------------- |
| errorCode | String | 错误码 | 错误描述，见下方`智能体错误码定义` |



##### 设置角色属性值

**接口名称**

setAgentRoleProperty

**接口描述**

1. 设置角色属性。

**请求消息**

```JavaScript
honorConnect.handler(
    "setAgentRoleProperty", //string 执行方法 
    "json_body", // 非空string
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入结构：

| 字段           | 是否必传 | 类型   | 描述                 | 取值                                                        |
| -------------- | -------- | ------ | -------------------- | ----------------------------------------------------------- |
| deviceId       | 是       | String | 设备ID               |                                                             |
| agentCode      | 否       | String | 智能体Code           |                                                             |
| roleId         | 是       | String | 角色id               |                                                             |
| name           | 否       | String | 角色名称             |                                                             |
| desc           | 否       | String | 角色描述             |                                                             |
| iconFileName   | 否       | String | 图片名称             |                                                             |
| iconData       | 否       | String | 图片base64数据       |                                                             |
| propertyValues | 否       | List   | 属性，包括音色和语言 | 见公共字段《智能体公共编码合实体`PropertyValueConfig`结构》 |

`json_body`格式

```JSON
{
        "deviceId": "设备id",
        "agentCode": "智能体id",
        "roleId ": "角色id",
        "name ": "幽默故事大王",
        "desc ": "你是一位戴着魔法帽的小男孩形象的故事大王，专门陪伴小孩。说话风格亲切活泼，能快速根据小孩兴趣定制温馨治愈风格的故事面对小孩的提问，你总能随机应变，给出有趣的解答你的口头禅是“我的小伙伴，你想听什么故事呀”，在每次开启讲故事环节都会这么说",
        //如果需要传递角色描述的话，必须在propertyValues新增roleIntroduce属性
        "iconFileName ": "图片名称",
        "iconData ": "图片base64数据",
        "propertyValues": [{},
                {}
        ]//属性，包括音色和语言
}
```

对应propertyValues如下：

```JSON
[
    {
        "code" : "roleCharacter",
        "type" : "preset",
        "value" : "123"
    },
    {
        "code" : "roleLang",
        "type" : "preset",
        "value" : "123"
    },
    {
        "code" : "roleName",
        "type" : "custom",
        "value" : "123"
    },
    {
        "code" : "roleRemark",
        "type" : "custom",
        "value" : "123"
    },
    //如果添加描述，这段必填
    {
        "code" : "roleIntroduce",
        "type" : "custom",
        "value" : "你是一位戴着魔法帽的小男孩形象的故事大王，专门陪伴小孩。说话风格亲切活泼，能快速根据小孩兴趣定制温馨治愈风格的故事面对小孩的提问，你总能随机应变，给出有趣的解答你的口头禅是“我的小伙伴，你想听什么故事呀”，在每次开启讲故事环节都会这么说"
    }
]
```



**响应消息**

```JSON
{
        "msg": "SUCCESS",
        "status": 0,
        "responseId": "1650600307886",
        "resultData": "resultData"
}
```

`resultData`格式：

| 字段      | 是否必选 | 类型   | 描述                               |
| --------- | -------- | ------ | ---------------------------------- |
| errorCode | 是       | String | 错误码，见下方`智能体错误码定义`   |
| errorDesc | 是       | String | 错误描述，见下方`智能体错误码定义` |

`resultData`结构：

```JSON
{ 
           "errorCode": "错误码",
           "errorDesc": "错误信息"
}
```

**异常响应消息**

| 字段      | 类型   | 描述   | 取值                               |
| --------- | ------ | ------ | ---------------------------------- |
| errorCode | String | 错误码 | 错误描述，见下方`智能体错误码定义` |

##### 删除角色

**接口名称**

deleteAgentRole

**接口描述**

1. 删除角色。

**请求消息**

```JavaScript
honorConnect.handler(
    "deleteAgentRole", //string 执行方法 
    "json_body", // 非空string
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入结构：

| 字段      | 是否必传 | 类型   | 描述       | 取值 |
| --------- | -------- | ------ | ---------- | ---- |
| deviceId  | 是       | String | 设备ID     |      |
| agentCode | 否       | String | 智能体Code |      |
| roleId    | 是       | String | 角色id     |      |

`json_body`格式

```JSON
{ 
           "deviceId": "设备id",
           "agentCode": "智能体id",
           "roleId ": "角色id"
}
```

**响应消息**

```JSON
{
        "msg": "SUCCESS",
        "status": 0,
        "responseId": "1650600307886",
        "resultData": "resultData"
}
```

`resultData`格式：

| 字段      | 是否必选 | 类型   | 描述                               |
| --------- | -------- | ------ | ---------------------------------- |
| errorCode | 是       | String | 错误码，见下方`智能体错误码定义`   |
| errorDesc | 是       | String | 错误描述，见下方`智能体错误码定义` |

`resultData`结构：

```JSON
{ 
           "errorCode": "错误码",
           "errorDesc": "错误信息"
}
```

**异常响应消息**

| 字段      | 类型   | 描述   | 取值                               |
| --------- | ------ | ------ | ---------------------------------- |
| errorCode | String | 错误码 | 错误描述，见下方`智能体错误码定义` |

##### 

#### 智能体音色相关接口

##### 环境音检测

**接口名称**

detectAmbientSound

**接口描述**

1. 环境音检测：可用于创建自定义音色时，检查环境音是否符合要求；

**请求消息**

```JavaScript
honorConnect.handler(
"detectAmbientSound", //string 执行方法 
"json_body", // 非空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入结构：

| 字段       | 是否必传 | 类型   | 描述                                                      | 取值                       |
| ---------- | -------- | ------ | --------------------------------------------------------- | -------------------------- |
| file       | 是       | String | multipartFile音频文件，录音时长大于3s，且文件大小小于500k | 上面停止录音返回的文件地址 |
| sampleRate | 否       | int    | 采样率                                                    | 默认采样率为24k，可不传    |
| channel    | 否       | int    | 通道                                                      | 默认单通道，可不传         |
| audioType  | 否       | String | 音频格式                                                  | 默认pcm格式，可不传        |

`json_body`格式

```JSON
{ 
           "file": "文件路径",
}
```

**响应消息**

```JSON
{
    "msg": "SUCCESS", 
    "status": 0,
    "responseId": "1650600307886",
    "resultData":"resultData",
}
```

`resultData`格式：

| 字段      | 是否必传 | 类型    | 描述                               | 取值                                |
| --------- | -------- | ------- | ---------------------------------- | ----------------------------------- |
| errorCode | 是       | String  | 错误码，见下方`智能体错误码定义`   |                                     |
| errorDesc | 是       | String  | 错误描述，见下方`智能体错误码定义` |                                     |
| hasNoise  | 是       | boolean | 是否有环境音                       | true：有环境噪音false：没有环境噪音 |

`resultData`结构：

```JSON
{ 
    "errorCode": "错误码",
    "errorDesc": "错误信息",
    "hasNoise": "是否有环境音",
}
```

**异常响应消息**

| 字段      | 类型   | 描述   | 取值                               |
| --------- | ------ | ------ | ---------------------------------- |
| errorCode | String | 错误码 | 错误描述，见下方`智能体错误码定义` |

##### 获取朗读文本

**接口名称**

getTheRecitationText

**接口描述**

1. 获取朗读文本。创建音色时获取预朗读的文本

**请求消息**

```JavaScript
honorConnect.handler(
"getTheRecitationText", //string 执行方法 
"json_body", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入文件结构：

不用传

**响应消息**

```JSON
{
        "msg": "SUCCESS",
        "status": 0,
        "responseId": "1650600307886",
        "resultData": "resultData"
}
```

`resultData`格式：

| 字段      | 类型   | 描述     | 取值                               |
| --------- | ------ | -------- | ---------------------------------- |
| errorCode | String | 错误码   | 错误描述，见下方`智能体错误码定义` |
| errorDesc | String | 错误信息 | 错误描述，见下方`智能体错误码定义` |
| result    | List   | 返回结果 | 个性化朗读短句列表                 |

`resultData`结构：

```JSON
{
        "errorCode": "错误码",
        "errorDesc": "错误信息",
        "result": [
                "个性化TTS朗读短句",
                "个性化TTS朗读短句"
        ]
}
```

**异常响应消息**

| 字段      | 类型   | 描述   | 取值                               |
| --------- | ------ | ------ | ---------------------------------- |
| errorCode | String | 错误码 | 错误描述，见下方`智能体错误码定义` |

##### 预创建音色

**接口名称**

preCreateTimbre

**接口描述**

1. 预创建音色。创建音色时，用以在语音云预创建一个自定义音色，这个预创建的音色用于用户合成试听语音，待用户确认后才真正保存

**请求消息**

```JavaScript
honorConnect.handler(
"preCreateTimbre", //string 执行方法 
"json_body", // 非空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入结构：

| 字段       | 是否必传 | 类型   | 描述                                                      | 取值                           |
| ---------- | -------- | ------ | --------------------------------------------------------- | ------------------------------ |
| file       | 是       | String | multipartFile音频文件，录音时长大于3s，且文件大小小于500k | 上面停止录音返回的文件地址     |
| sampleRate | 否       | int    | 采样率                                                    | 默认采样率为24k，可不传        |
| channel    | 否       | int    | 通道                                                      | 默认单通道，可不传             |
| audioType  | 否       | String | 音频格式                                                  | 默认pcm格式，可不传            |
| promptText | 是       | String | 待合成文本                                                | 必传，录音文件中录音对应的文本 |

`json_body`格式

```JSON
{ 
           "file": "文件路径",
}
```

**响应消息**

```JSON
{
        "msg": "SUCCESS",
        "status": 0,
        "responseId": "1650600307886",
        "resultData": "resultData"
}
```

`resultData`格式：

| 字段      | 类型   | 描述                               | 取值                               |
| --------- | ------ | ---------------------------------- | ---------------------------------- |
| errorCode | String | 错误码                             | 错误描述，见下方`智能体错误码定义` |
| errorDesc | String | 错误信息                           | 错误描述，见下方`智能体错误码定义` |
| timbresId | String | 个人音色编码，全局唯一是否有环境音 |                                    |

`resultData`结构：

```JSON
{
        "errorCode": "错误码",
        "message": "错误信息",
        "timbresId": "个人音色编码，全局唯一"
}
```

**异常响应消息**

| 字段      | 类型   | 描述   | 取值                               |
| --------- | ------ | ------ | ---------------------------------- |
| errorCode | String | 错误码 | 错误描述，见下方`智能体错误码定义` |

##### 合成音色

**接口名称**

compoundTimbre

**接口描述**

1. 合成音色。通过用户预创建的音色id，和需要合成音色的文本，临时生成符合当前音色的语音文件，用以给用户试听；

**请求消息**

```JavaScript
honorConnect.handler(
    "compoundTimbre", //string 执行方法 
    "json_body", // 非空string
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入结构：

| 字段      | 是否必传 | 类型   | 描述         | 取值                                       |
| --------- | -------- | ------ | ------------ | ------------------------------------------ |
| text      | 是       | String | 待合成的文本 | 小于1024个中文字或者引文数字，使用utf8编码 |
| timbresId | 是       | String | 音色id       | 使用预创建的音色id                         |

`json_body`格式

```JSON
{
        "text": "待合成的文本",
        "timbresId": "音色id"
}
```

**响应消息**

```JSON
{
        "msg": "SUCCESS",
        "status": 0,
        "responseId": "1650600307886",
        "resultData": "resultData"
}
```

`resultData`格式：

| 字段      | 类型   | 描述                    | 取值                               |
| --------- | ------ | ----------------------- | ---------------------------------- |
| errorCode | String | 错误码                  | 错误描述，见下方`智能体错误码定义` |
| errorDesc | String | 错误信息                | 错误描述，见下方`智能体错误码定义` |
| file      | String | pcm音频文本地址（本地） |                                    |

`resultData`结构：

```JSON
{
        "errorCode": "错误码",
        "errorDesc": "错误信息",
        "file": "pcm音频文本地址（本地）" //无特殊要求默认 mp3格式
}
```

**异常响应消息**

| 字段      | 类型   | 描述   | 取值                               |
| --------- | ------ | ------ | ---------------------------------- |
| errorCode | String | 错误码 | 错误描述，见下方`智能体错误码定义` |



##### 创建音色

**接口名称**

realCreateTimbre

**接口描述**

1. 创建音色。用户通过试听智慧，满意当前的音色，则通过该接口保存当前音色；

**请求消息**

```JavaScript
honorConnect.handler(
    "realCreateTimbre", //string 执行方法 
    "json_body", // 非空string
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入结构：

| 字段      | 是否必传 | 类型   | 描述       | 取值                     |
| --------- | -------- | ------ | ---------- | ------------------------ |
| deviceId  | 是       | String | 设备id     |                          |
| agentCode | 否       | String | 智能体id   | 如果不填，则为设备智能体 |
| timbresId | 是       | String | 个人音色id | 预创建接口返回的值       |
| name      | 是       | String | 音色名称   |                          |

`json_body`格式

```JSON
{
        "deviceId": "设备id",
        "agentCode": "智能体id",
        "timbresId": "个人音色id",
        "name": "音色名称"
}
```

**响应消息**

```JSON
{
        "msg": "SUCCESS",
        "status": 0,
        "responseId": "1650600307886",
        "resultData": "resultData"
}
```

`resultData`格式：

| 字段      | 类型   | 描述     | 取值                               |
| --------- | ------ | -------- | ---------------------------------- |
| errorCode | String | 错误码   | 错误描述，见下方`智能体错误码定义` |
| errorDesc | String | 错误信息 | 错误描述，见下方`智能体错误码定义` |

`resultData`结构：

```JSON
{
        "errorCode": "错误码",
        "errorDesc": "错误信息"
}
```

**异常响应消息**

| 字段      | 类型   | 描述   | 取值                               |
| --------- | ------ | ------ | ---------------------------------- |
| errorCode | String | 错误码 | 错误描述，见下方`智能体错误码定义` |



##### 删除音色

**接口名称**

deleteTimbre

**接口描述**

1. 删除音色

**请求消息**

```JavaScript
honorConnect.handler(
    "deleteTimbre", //string 执行方法 
    "json_body", // 非空string
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入结构：

| 字段      | 是否必传 | 类型   | 描述       | 取值                     |
| --------- | -------- | ------ | ---------- | ------------------------ |
| deviceId  | 是       | String | 设备id     |                          |
| agentCode | 否       | String | 智能体id   | 如果不填，则为设备智能体 |
| timbresId | 是       | String | 个人音色id | 预创建接口返回的值       |

`json_body`格式

```JSON
{ 
    "deviceId": "设备id",
    "agentCode": "智能体id",
    "timbresId": "个人音色id",
}
```

**响应消息**

```JSON
{
    "msg": "SUCCESS", 
    "status": 0,
    "responseId": "1650600307886",
    "resultData":"resultData",
}
```

`resultData`格式：

| 字段      | 类型   | 描述     | 取值                               |
| --------- | ------ | -------- | ---------------------------------- |
| errorCode | String | 错误码   | 错误描述，见下方`智能体错误码定义` |
| errorDesc | String | 错误信息 | 错误描述，见下方`智能体错误码定义` |

`resultData`结构：

```JSON
{
        "errorCode": "错误码",
        "errorDesc": "错误信息"
}
```

**异常响应消息**

| 字段      | 类型   | 描述   | 取值                               |
| --------- | ------ | ------ | ---------------------------------- |
| errorCode | String | 错误码 | 错误描述，见下方`智能体错误码定义` |



#### AI陪伴设备相关功能接口

##### 获取对话记录数据

***接口名称***

aiCompanionQueryTalks

***接口描述***

根据deviceId分页拉取对话记录

**请求消息**

```JavaScript
honorConnect.handler(
"aiCompanionQueryTalks", //string 执行方法
"json_body", // 非空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入结构：

| 字段        | 是否必须 | 类型             | 描述                                                        |
|-----------| -------- |----------------|-----------------------------------------------------------|
| deviceId  | Y        | String         | 设备id                                                      |
| pageNo    | Y        | int            | 分页页码，从1开始                                                 |
| pageSize  | Y        | int            | 每一页的大小。代表多少条对话，最多传30                                      |
| direction | N        | int            | 空或者0：逆时间序1：顺时间序                                           |
| serviceId | N        | String         | 智能体id，如果传递本字段则查询本设备对应智能体的对话记录，不传则不区分智能体                   |
| scenes    | N        | List<Integer>  | 聊天记录场景，传null时默认查询设备侧对话   0-设备侧设备智能体对话场景  1 -APP侧面板智能体对话场景 |
| roleId    | N        | String         | 角色id，传递时按角色查询，不传则不区分角色                                         |

`json_body`格式

```JSON
{
    "deviceId" : "a0dbc5a8a080c1469f96ae742efd56fc1fnxf6l00d58",
    "pageNo" : 1,
    "pageSize" : 1,
    "direction" : 0,
    "serviceId" : "智能体id",
	"scenes" : [1],
	"roleId" : "角色id"
}
```

**响应消息**

```JSON
{
        "msg": "SUCCESS",
        "status": 0,
        "responseId": "1650600307886",
    	"resultData":"resultData",
}
```

`resultData`格式：

| 字段      | 类型                | 描述       | 取值                            |
| --------- | ------------------- | ---------- | ------------------------------- |
| errorCode | String              | 错误码     | 见公共编码实体/智能体错误码定义 |
| errorDesc | String              | 错误码描述 |                                 |
| data      | List<AiTalkInfoDTO> | 对话列表   |                                 |

| AiTalkInfoDTO结构 |          |                     |              |
| ----------------- | -------- | ------------------- | ------------ |
| 字段              | 是否必选 | 类型                | 描述         |
| talkId            | Y        | string              | 对话轮次id   |
| roleTalks         | Y        | List<AiRoleTalkDTO> | 角色对话记录 |

| AiRoleTalkDTO 结构 |          |        |                           |
| ------------------ | -------- | ------ | ------------------------- |
| 字段               | 是否必选 | 类型   | 描述                      |
| ts                 | Y        | Long   | 对话发生时间              |
| role               | Y        | string | 角色bot: 机器人user: 用户 |
| content            | Y        | string | 说话文本，解密返回        |

##### 拉取整体家长报告数据

***接口名称***

​        aiCompanionQueryGrowUpReport

***接口描述***

​        拉取整体家长报告数据

**请求消息**

```JavaScript
honorConnect.handler(
"aiCompanionQueryGrowUpReport", //string 执行方法
"json_body", // 非空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入结构：

| 字段     | 是否必须 | 类型   | 描述                                                         |
| -------- | -------- | ------ | ------------------------------------------------------------ |
| deviceId | Y        | String | 设备id                                                       |
| time     | Y        | String | 这里的time 必须传入周一的0点0时0分。 如果当天是周一则无返回数据。需要返回之前的周一 时间戳 毫秒级 |

json_body格式：

```JSON
{
    "deviceId" : "a0dbc5a8a080c1469f96ae742efd56fc1fnxf6l00d58",
    "time" : "2025-08-24T16:00:00.000Z"
}
```

**响应消息**

```JSON
{
          "msg": "SUCCESS",
          "status": 0,
          "responseId": "1650600307886",
    "resultData":"resultData",
}
```

`resultData`格式：

| 字段      | 类型       | 描述         | 取值                            |
| --------- | ---------- | ------------ | ------------------------------- |
| errorCode | String     | 错误码       | 见公共编码实体/智能体错误码定义 |
| errorDesc | String     | 错误码描述   |                                 |
| data      | GrowUpData | 成长报告数据 |                                 |

GrowUpData数据类型：

| 字段     | 是否必选 | 类型             | 描述     |
| -------- | -------- | ---------------- | -------- |
| mood     | N        | List<DayMoodDTO> | 当周情绪 |
| memory   | N        | List<MemoryDTO>  | 成长记忆 |
| interest | N        | List<MemoryDTO>  | 兴趣发现 |
| advise   | N        | List<AdviseDTO>  | 成长建议 |

| DayMoodDTO 结构 |          |      |                                                              |
| --------------- | -------- | ---- | ------------------------------------------------------------ |
| 字段            | 是否必选 | 类型 | 描述                                                         |
| ts              | Y        | Date | 时标，当日的0点0分0秒                                        |
| moodValue       | Y        | int  | 情绪值：**0** - 空 **1** - 开心 **2** - 愉悦 **3** - 不错 **4** - 平静 **5** - 一般 |

| MemoryDTO 结构 |          |        |                  |
| -------------- | -------- | ------ | ---------------- |
| 字段           | 是否必选 | 类型   | 描述             |
| ts             | Y        | Date   | 记忆产生时间     |
| text           | Y        | string | 成长记忆描述文本 |

| AdviseDTO 结构 |          |        |              |
| -------------- | -------- | ------ | ------------ |
| 字段           | 是否必选 | 类型   | 描述         |
| text           | Y        | string | 成长建议文本 |

##### 分页拉取成长记忆或者兴趣爱好

***接口名称***

aiCompanionPageQueryMemory

***接口描述***

​        分页拉取成长记忆或者兴趣爱好

**请求消息**

```JavaScript
honorConnect.handler(
"aiCompanionPageQueryMemory", //string 执行方法
"json_body", //
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

json_body中传入结构：

| 字段     | 是否必选 | 类型   | 描述                             |
| -------- | -------- | ------ | -------------------------------- |
| deviceId | Y        | String | 设备id                           |
| type     | Y        | int    | 查询类型：0：成长记录1：兴趣发现 |
| pageSize | Y        | int    | 分页大小, 1000个                 |
| pageNo   | Y        | int    | 分页页码，从1开始                |

`json_body`格式

```JSON
{
    "deviceId" : "a0dbc5a8a080c1469f96ae742efd56fc1fnxf6l00d58",
    "type" : 0,
    "pageSize" : 20,
    "pageNo" : 1
}
```

**响应消息**

```JSON
{
          "msg": "SUCCESS",
          "status": 0,
          "responseId": "1650600307886",
    "resultData":"resultData",
}
```

`resultData`格式：

| 字段      | 类型            | 描述       | 取值                            |
| --------- | --------------- | ---------- | ------------------------------- |
| errorCode | String          | 错误码     | 见公共编码实体/智能体错误码定义 |
| errorDesc | String          | 错误码描述 |                                 |
| data      | List<MemoryDTO> | 对话列表   | 成长记忆 & 兴趣发现             |

| MemoryDTO 结构 |          |        |                  |
| -------------- | -------- | ------ | ---------------- |
| 字段           | 是否必选 | 类型   | 描述             |
| ts             | Y        | Date   | 记忆产生时间     |
| text           | Y        | string | 成长记忆描述文本 |





##### 删除成长记忆或者兴趣爱好记录

***接口名称***

aiCompanionDeleteMemory

***接口描述***

​       根据分页返回的dataId，批量删除成长记忆或兴趣爱好记录

**请求消息**

```JavaScript
honorConnect.handler(
"aiCompanionDeleteMemory", //string 执行方法
"json_body", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入结构：

| 字段       | 是否必选 | 类型         | 描述                                            |
| ---------- | -------- | ------------ | ----------------------------------------------- |
| deviceId   | Y        | String       | 设备id                                          |
| dataIdList | N        | List<String> | 删除记忆id列表，上限100，不传时删除全部记忆记录 |

`json_body`格式

```JSON
{ 
    "deviceId": "18326rhedjfh68", 
    "dataIdList": ["123456d1f46sa51fsf","fsa56d1f46sa51fsf"],  //删除记忆id列表，上限100，不传时删除全部记忆记录
 
}
```

**响应消息**

```JSON
{
          "msg": "SUCCESS",
          "status": 0,
          "responseId": "1650600307886",
          "resultData": "`resultData"
}
```

`resultData`格式：

| 字段      | 是否必选 | 类型   | 描述                            |
| --------- | -------- | ------ | ------------------------------- |
| errorCode | 是       | String | 见公共编码实体/智能体错误码定义 |
| errorDesc | 是       | String | 见公共编码实体/智能体错误码定义 |

##### 获取内容厂商token

***接口名称***

​        aiCompanionGetSourceAT

***接口描述***

​        获取三方音频厂商AT，加载有声读物相关页面时连接中token参数值

**请求消息**

```JavaScript
honorConnect.handler(
"aiCompanionGetSourceAT", //string 执行方法
"json_body", // 非空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入结构：

| 字段     | 是否必须 | 类型   | 描述                                         |
| -------- | -------- | ------ | -------------------------------------------- |
| deviceId | N        | String | 设备id（不传时，从智慧空间端设备详情页取值） |
| source   | Y        | String | 来源厂商标识                                 |

`json_body`格式：

```JSON
{    
    "deviceId": "18326rhedjfh68", 
    "source": "18326rhedjfh68"
}
```

**响应消息**

```JSON
{
          "msg": "SUCCESS",
          "status": 0,
          "responseId": "1650600307886",
    "resultData":"resultData",
}
```

`resultData`格式：

| 字段      | 类型       | 描述   | 取值                                                         |
| --------- | ---------- | ------ | ------------------------------------------------------------ |
| errorCode | String     | 错误码 | 0：成功;<br>100000：Check Param Failed;<br/>100001：Authorize valid Failed;<br/>100002: Illegal Operation;<br/>100003: System Error;<br/>190202: device not found;<br/>141301：User info not found;<br/>100023: token expire Failed |
| errorDesc | String     |        |                                                              |
| data      | JsonString | token  |                                                              |

| data结构 |          |        |              |
| -------- | -------- | ------ | ------------ |
| 字段     | 是否必选 | 类型   | 描述         |
| at       | Y        | string | 厂商登录的at |

```SQL
{
  "errorCode":"0",
  "errorDesc": "SUCCESS",
  "data"：{
        "at" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUx"
    }
}
```

##### 查询当前播放内容详情

***接口名称***

​        aiCompanionGetPlayDetail

***接口描述***

​        查询当前播放内容详情

**请求消息**

```JavaScript
honorConnect.handler(
"aiCompanionGetPlayDetail", //string 执行方法
"json_body", // 非空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入结构：

`json_body`格式

```JSON
{  
    "deviceId": "18326rhedjfh68",
    "contentDisplay":["cursor"]
}
```

**响应消息**

```JSON
{
          "msg": "SUCCESS",
          "status": 0,
          "responseId": "1650600307886",
    "resultData":"resultData",
}

**缺少参数**
{
"responseId": "1650600291901",
"status": 12,
"msg": "HONORCONNECT_INVALID_ARGUMENT",
}
**未查询到正在播放的资源**
{
"responseId" : "1650600291901",
"status": 209,
"msg": "GET_CURSOR_PROPERTY_FAILED"
}
```

`resultData`格式：

| 字段      | 类型       | 描述     | 取值                                                         |
| --------- | ---------- | -------- | ------------------------------------------------------------ |
| errorCode | String     | 错误码   | 0：成功;<br>100000：Check Param Failed;<br/>100001：Authorize valid Failed;<br/>100002: Illegal Operation;<br/>100003: System Error;<br/>190202: device not found; |
| errorDesc | String     |          |                                                              |
| data      | JsonString | 内容详情 |                                                              |

data数据结构：

| 字段      | 是否必选 | 类型          | 描述           |
| --------- | -------- | ------------- | -------------- |
| audioInfo | N        | AudioInfoVO   | 播放⾳频的内容 |
| audioCfgs | N        | AudioConfigVO | 配置项         |

| AudioInfoVO 结构 |          |               |                |
| ---------------- | -------- | ------------- | -------------- |
| 字段             | 是否必选 | 类型          | 描述           |
| icon             | N        | String        | 播放内容的封图 |
| titleMain        | N        | String        | 主标题         |
| titleSub         | N        | String        | 副标题         |
| contentId        | N        | ContentInfoVO | 播放内容详情   |

| ContentInfoVO 结构 |          |        |                                                              |
| ------------------ | -------- | ------ | :----------------------------------------------------------- |
| 字段               | 是否必选 | 类型   | 描述                                                         |
| source             | Y        | String | yueyue                                                       |
| content            | Y        | String | " {\"albumId\":“1952999815084261378",\"audioId\":"1501843989400138886"}" |

| AudioConfigVO 结构 |          |         |              |
| ------------------ | -------- | ------- | ------------ |
| 字段               | 是否必选 | 类型    | 描述         |
| before             | Y        | boolean | 是否有前一首 |
| next               | Y        | boolean | 是否有后一首 |

##### 设置播放状态(播放、暂停、上一曲、下一曲、定时关闭)

***接口名称***

​        aiCompanionCtrlPlayer

***接口描述***

​        设置播放状态(播放、暂停、上一曲、下一曲、定时关闭)

**请求消息**

```JavaScript
honorConnect.handler(
"aiCompanionCtrlPlayer", //string 执行方法
"json_body", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入结构：

| 字段     | 是否必须 | 类型       | 描述                                                         |
| -------- | -------- | ---------- | ------------------------------------------------------------ |
| deviceId | Y        | String     | 设备id（智慧空间端传参）                                     |
| intent   | Y        | String     | 播放指令 CONTENT_PLAY_APP: 播放指定内容 （需传slots入参）CONTENT_STOP：暂停/停⽌CONTENT_CONTINUE：继续 CONTENT_NEXT：下⼀⾸ CONTENT_BEFORE：上⼀⾸CONTENT_SCHEDULE_STOP：定时停⽌播放 （传slots入参）E_CANCEL_SCHEDULE_STOP：取消定时停⽌播放 |
| slots    | N        | JSONString | 参数值 CONTENT_PLAY_APP: 播放指定内容`{  "contentId": {      "source": "yueyue", //下⾯参数不同⼚商不⼀ 致//这⾥以悦跃为例       "content": {           "albumId": "asdf1234",          "audioId": "xxxxxxxxx"   } },  "playList": {   //0-9：预留给未来可能 出现的⾃建PlayList//10：⼚商album播 放//本次也只有10       "mode": 10,//播放信息        "info": {            "albumId": "asdf1234"             }            }          }`<br/>CONTENT_STOP：暂停/停⽌<br/>CONTENT_CONTINUE：继续 <br/>CONTENT_NEXT：下⼀⾸<br/>CONTENT_BEFORE：上⼀⾸<br/>CONTENT_SCHEDULE_STOP：定时停⽌播放` {  // 停⽌播放的准确时间，UTC的秒         "stopTime" : 1234567890   }`<br/>E_CANCEL_SCHEDULE_STOP：取消定时停⽌播放 |

`json_body`格式

```JSON
{ 
    "deviceId": "18326rhedjfh68", 
    "intent": "CONTENT_PAY_APP",
    "slots": {
        
    },
}
```

**响应消息**

```JSON
{
          "msg": "SUCCESS",
          "status": 0,
          "responseId": "1650600307886",
    "resultData":"resultData",
}
```

`resultData`格式：

| 字段      | 类型   | 描述                                                         |
| --------- | ------ | ------------------------------------------------------------ |
| errorCode | String | 业务层面的控制结果<br/>0:正常<br/>201:"**INVALID_CMD**" <br/>202:"**PAY_REQUIRED**"<br/>203:"**NO_PROPER_RESULT**"<br/>204:"**NOT_EXIST**" <br/>208：**“AUDITION_END”**<br />100000：“Check Param Failed”<br/>100001： “Authorize valid Failed”<br/>100003： “System Error”<br/>100004： “Permission Deny”<br/>190202： “Device not found” |
| errorDesc | String | **预留字段<br/>INVALID_CMD //无效指令，无法执行<br/>PAY_REQUIRED //待播放的资源需要付费才可以听<br/>NO_PROPER_RESULT** // 没有合适的内容**<br/>NOT_EXIST**  **//没有期望的资源了**<br/>**AUDITION_END //标识试听结束**<br/> |

##### H5支付开通会员界面，H5向原生传参

***接口名称***

​        aiCompanionPayUrlFitter

***接口描述***

H5支付开通会员界面，H5向原生传参

**请求消息**

```JavaScript
honorConnect.handler(
    "aiCompanionPayUrlFitter", //string 执行方法 
    "json_body", // jsonString
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);

```

`json_body`中传入结构：

| 字段     | 是否必须 | 类型     | 描述                                                   |
| -------- | ------ |--------|------------------------------------------------------|
| referer | Y      | String | 微信H5支付调起微信时，加载url，webview需要设置的域名                     |
| payType   | Y      | int    | 支付方式：1.微信，2.支付宝                                      |
| pScheme   | Y      | String | "weixin://", 用来判断苹果手机是否安装了微信  支付宝是另外的值               |
| domainName   | Y      | String | "https://wx.tenpay.com"  // 微信支付链接微信的域名 支付宝是另外的值     |
| wappay   | Y      | String | "weixin://wap/pay",   // 重定向地址校验开头是此地址时，内部处理调起微信，安卓用 |
json_body格式

```JSON
{
  "referer": "http://app.yuedaotech.com/",
  "payType":1, //1. 微信 2. 支付宝
  "pScheme": "weixin://",//用来判断苹果手机是否安装了微信  支付宝是另外的值
  "domainName": "https://wx.tenpay.com",  // 微信支付链接微信的域名 支付宝是另外的值
  "wappay": "weixin://wap/pay",   // 安卓用

}
```

**响应消息**

```JSON
{
          "msg": "SUCCESS",
          "status": 0,
          "responseId": "1650600307886",
    "resultData":resultData,
}
```

resultData格式：

| 字段      | 类型   | 描述   | 取值                                                         |
| --------- | ------ | ------ | ------------------------------------------------------------ |
| errorCode | String | 错误码 | 0：成功; |
| errorDesc | String |        |                                                              |
| data      | JsonString | 内容详情 |

data数据结构：

| 字段     | 是否必须 | 类型      | 描述                                                   |
| -------- | ------ |---------|------------------------------------------------------|
| installStatus | Y      | bollean |微信或者支付宝是否安装                     |



##### 分页拉取消息列表

***接口名称***

​       queryMsgCenterList

***接口描述***

​        分页拉取消息列表

**请求消息**

```JavaScript
honorConnect.handler(
    "queryMsgCenterList", //string 执行方法 
    "json_body", // jsonString
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);

```

json_body中传入结构：

| 字段     | 是否必选 | 类型   | 描述     |
| -------- | -------- | ------ | -------- |
| deviceId | Y        | String | 设备id   |
| pageNo   | Y        | Int    | 查询范围 |

json_body格式：

```JSON
{ 
    "deviceId": "18326rhedjfh68", 
    "pageNo":1
}
//pages
```

**响应消息**

```JSON
{
          "msg": "SUCCESS",
          "status": 0,
          "responseId": "1650600307886",
    "resultData":"resultData",
}
```

resultData格式：

| 字段      | 类型              | 描述               | 取值                            |
| --------- | ----------------- | ------------------ | ------------------------------- |
| errorCode | String            | 错误码             | 见公共编码实体/智能体错误码定义 |
| errorDesc | String            | 错误描述           |                                 |
| data      | List<MsgItemResp> | 各个分类统计的list |                                 |

| MsgItemResp  结构 |          |          |                |
| :---------------- | -------- | -------- | -------------- |
| 字段              | 是否必选 | 类型     | 描述           |
| msgId             | Y        | String   | 消息id         |
| msgType           | Y        | String   |                |
| msgSubType        | Y        | String   |                |
| devId             | Y        | String   | 设备id         |
| notifyId          | Y        | String   | 消息类型       |
| msgStatus         | Y        | String   | 0 未读  1 已读 |
| msgReceipt        | Y        | String   |                |
| operateStatus     | Y        | int      |                |
| msgContent        | Y        | MsgModel | 消息内容       |
| eventType         | Y        | int      |                |
| msgDisplayCN      | Y        | String   | 中文标题描述   |
| msgDisplayEN      | Y        | String   | 英文标题描述   |
| msgDisplay        | Y        | String   | 默认消息描述   |
| time              | Y        | long     | 时间           |
| currentTime       | Y        | long     | 当前时间       |



| MsgModel 结构 |          |        |            |
| :------------ | -------- | ------ | ---------- |
| 字段          | 是否必选 | 类型   | 描述       |
| msgId         | Y        | String | 消息id     |
| notifyType    | Y        | String | 消息类型   |
| notifyID      | Y        | String | 消息类型ID |
| content       | Y        | String | 消息内容   |

##### 标记消息已读

***接口名称***

​        markMsg

***接口描述***

   标记消息已读

**请求消息**

```JavaScript
honorConnect.handler(
    "markMsg", //string 执行方法 
    "json_body", // jsonString
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);

```

json_body中传入结构：

| **字段**  | **是否必选** | **类型** | **描述**    |
| --------- | ------------ | -------- | ----------- |
| json_body | Y            | String   | 消息id list |

json_body格式

```JSON
["47f3d26e3ae74ce3b6c3ab2bbc84f14a"]
```

**响应消息**

```JSON
{
          "msg": "SUCCESS",
          "status": 0,
          "responseId": "1650600307886",
    "resultData":resultData,
}
```

resultData格式：

| 字段      | 类型   | 描述       | 取值                            |
| --------- | ------ | ---------- | ------------------------------- |
| errorCode | String | 错误码     | 见公共编码实体/智能体错误码定义 |
| errorDesc | String | 错误码提示 |                                 |

##### H5透传请求数据

***接口名称***

   requestNative 

***接口描述***

   为H5提供的，透传请求数据

**请求消息**

```JavaScript
honorConnect.handler(
"requestNative", //string 执行方法
"json_body", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入结构：

`json_body`格式

```JSON
{ 
    "host": "discoverCloudBaseUrl", 
    "path": "",
    "param": "",
    "method": "",
    "header": "",
}    
```

**响应消息**

```JSON
{
        "msg": "SUCCESS",
        "status": 0,
        "responseId": "1650600307886",
        "resultData":"resultData",
}
```

`resultData`格式：

| 字段      | 类型   | 描述   | 取值                                                         |
| --------- | ------ | ------ | ------------------------------------------------------------ |
| errorCode | String | 错误码 | 0：成功;<br>100000：Check Param Failed;<br/>100001：Authorize valid Failed;<br/>100002: Illegal Operation;<br/>100003: System Error;<br/>xxxxxxx: Agent config value not found;<br/>141301：User info not found;<br/>xxxxxxx: device role name duplicate |
| errorDesc | String |        |                                                              |



#### AI宠物商业化接口

##### 宠物问诊-图片上传

**接口名称**

petConsultationPicUpload

**接口描述**

1. 宠物问诊-图片上传。

**请求消息**

```JavaScript
honorConnect.handler(
"petConsultationPicUpload", //string 执行方法 
"json_body", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

`json_body`中传入结构：

| 字段        | 类型    | 描述                                                 | 取值                                          |
| ----------- | ------- | ---------------------------------------------------- | --------------------------------------------- |
| imgPath     | String  | 图片本地地址，注意：ios和android可能不一致要区分传值 |                                               |
| useRiskCtrl | bealoon | 是否使用风控                                         | 是否使用风控, true:使用风控, false:不使用风控 |

`json_body`格式

```JSON
{ 
     "imgPath": "文件路径",
     "useRiskCtrl":"是否使用风控"//是否使用风控, true:使用风控, false:不使用风控
}
```

**响应消息**

```JSON
{
    "msg": "SUCCESS", 
    "status": 0,
    "responseId": "1650600307886",
    "errorCode":"错误码",//设备云返回错误码
    "errorDesc":"错误信息",//设备云返回错误信息
    "imageUrl":"图片上传地址url"
}
```

**异常响应消息**

| 字段      | 类型   | 描述   | 取值                                                         |
| --------- | ------ | ------ | ------------------------------------------------------------ |
| errorCode | String | 错误码 | 0：成功; 100000：Check Param Failed; 100001：Authorize valid Failed; 100002: Illegal Operation; 100003: System Error; xxxxxxx: Agent config value not found |