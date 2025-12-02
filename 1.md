概述
智能摘要
智慧空间APP 提供 JSAPI，用于在 APP 的 H5 界面控制 HONOR CONNECT 生态设备，可以实现设备联动、交互功能。

智慧空间APP 提供了在 APP 内部加载呈现 HTML 格式 web 页面的功能，允许页面中通过 JavaScript 调用APP所特有的 JSAPI 接口，从而实现对智能家居 APP Native 功能的联动控制。

流程介绍
1.智慧空间APP提供了一套 JSAPI 供页面调用。

2.H5页面可使用 JavaScript 调用JSAPI接口，将命令下发给 APP。

3.APP 将收到该 JSAPI 调用，进行解析处理。例如，智能设备的控制命令将通过智能家居云/网关下发到智能设备。

JSAPI通道的安全性
1.传输的安全。

APP连接到内容平台去下载H5页面，这个过程是通过 HTTPS 协议加密传输的，APP 会持有云端数字证书，对云的合法性进行验证，避免云端的仿冒攻击、劫持攻击、篡改攻击。

2.运行的安全。

在APP执行页面阶段，H5 运行环境会判断所加载的所有页面资源的 URL 进行校验，是否为内容平台云地址前缀，避免加载未经授权页面内容。且运行环境中，对页面跳转做了禁止限制。

JSAPI状态码
响应消息里的 status 字段取值，0表示成功，其它值表示失败，详情见下表。

状态值	枚举宏	说明
0	SUCCESS	成功
11	HONORCONNECT_DEV_OFFLINE	设备不在线
12	HONORCONNECT_INVALID_ARGUMENT	参数错误
13	HONORCONNECT_DEV_FAIL	设备获取错误
14	HONORCONNECT_NO_NETWORK	网络不可用
15	HONORCONNECT_NO_EXIST_FILE	文件不存在
16	HONORCONNECT_BT_SWITCH_OFF	蓝牙开关关闭
17	HONORCONNECT_SENSITIVE_WORD	设备名为敏感词
18	HONORCONNECT_NO_EXIST_DEVICE	设备不存在
19	HONORCONNECT_NO_EXIST_USER_IN_HOME	当前家庭详情里没找到当前用户的成员
20	HONORCONNECT_NO_EXIST_MEMBER_IN_HOME	当前家庭详情缺少家庭成员信息
21	HONORCONNECT_NO_EXIST_HOME_DETAIL	当前家庭详情不存在
22	HONORCONNECT_DEVICE_NOT_SHARED	该设备不是共享设备
24	HONORCONNECT_THR_TOKEN_EXPIRED	三方云云设备使用，代表token过期
100	HONORCONNECT_UNKNOWN_ERROR	默认错误


Native调用JS接口
智能摘要
当设备或APP状态变化时会主动通知H5插件，H5插件提供如下js方法供智慧空间APP调用，开发者根据实际需要在 window 对象中添加js对应方法。

例如：APP切换到前台时，会调用js的 window.onResume 方法，开发者需要在 H5 插件代码中的 window 对象上添加 onResume 函数给 APP 调用:

// 此方法由开发者实现
window.onResume= function() {
  console.log("callback data")
}
APP切换到前台
接口名称

window.onResume

接口描述

APP切换到前台触发 JS 该方法

JS定义示例

window.onResume= function() {
  console.log("callback data")
}
APP切换到后台
接口名称

window.onPause 

接口描述

APP切换到后台触发 JS 该方法

JS定义示例

window.onPause = function() {
  console.log("callback data")
}
设备状态变化
接口名称

window.deviceEventCallback(event) 

接口描述

使用《荣耀功能定义规范》的设备状态变化时 APP 触发 JS 该方法，将设备变化信息（示例如下）传入 event；仅返回变化的属性。

JS定义示例

window.deviceEventCallback = function(event) {
  console.log("callback data" + event)
}
event 格式如下:

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
蓝牙设备状态变化
接口名称

window.bleDeviceEventCallback(event) 

接口描述

蓝牙设备变化时 APP 触发该 JS 方法，将设备变化信息（示例如下）传入 event。

JS定义示例

window.bleDeviceEventCallback = function(event) {
  console.log("callback data" + event)
}
event 格式如下:

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "serviceUUID": "serviceUUID",  //string，serviceUUID
  "chrctUUID": "chrctUUID", //string，chrctUUID
  "uuidType": 1, //int,  用于标识对设备特征的操作类型
  "data": "data" // string, 特征数据，编码格式："UTF_8"
}
蓝牙设备连接状态变化
接口名称

window.bleLinkStateCallback(event)

接口描述

蓝牙设备连接状态变化时 APP 触发 JS 该方法，将当前状态（示例如下）传入 event。

JS定义示例

window.bleDeviceEventCallback = function(event) {
  console.log("callback data" + event)
}
event 格式如下:

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "linkState": "LINK_SUCCESS",  //string，NOT_LINK(未连接),LINKING(连接中),LINK_SUCCESS(已连接)
}
WiFi设备状态变化
接口名称

window.deviceEventChangedCallback(event) 

接口描述

WiFi设备变化时 APP触发 JS 该方法，将设备变化信息（示例如下）传入 event ；仅返回变化的属性。

JS定义示例

window.deviceEventChangedCallback = function(event) {
  console.log("callback data" + event)
}
event 格式如下:

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
 

APP通知 JS的通用接口
接口名称

window.eventNotifyCallback(event)

接口描述

历史由于各类状态较多，导致 JS需要在 window下添加多个不同 JS方法，后续新增的通知尽量都调用此接口，减少 JS的接口定义。JS侧需要根据 eventType来区分不同的通知类型，不同的 eventType对应的 data格式不一样

JS定义示例

window.eventNotifyCallback = function(event) {
  console.log("callback data" + event)
}
 

event格式如下:

{
  "msg": "SUCCESS",
  "status": 0,
  "eventType", // "EVENT_DEVICE_SPECIFIC_PROPERTY"|"EVENT_THR_REF_TOKEN_SUCCESS"|"EVENT_BLUETOOTH_CONNECTION_STATUS", 事件类型
  "data"
}
eventType 取值如下：

// 在调用`批量订阅指定属性变化`接口后，本地指定属性变化时触发该事件
EVENT_DEVICE_SPECIFIC_PROPERTY
// 三方云设备调用设备控制，删除设备等触发token过期场景，弹框重新绑定，成功后通知此消息，无data
EVENT_THR_REF_TOKEN_SUCCESS
// 蓝牙连接状态发生变化时，断开或者连接时触发场景，通知蓝牙连接状态
EVENT_BLUETOOTH_CONNECTION_STATUS
eventType 为 EVENT_DEVICE_SPECIFIC_PROPERTY 时，data 格式如下：

{
    "serviceId", // string
    "propertyId", // string
    "propertyValue", // object
}
eventType 为 EVENT_BLUETOOTH_CONNECTION_STATUS时，data 格式如下：

{
    "state", // boolean  true：蓝牙已连接，false:蓝牙断开
}





S 调用 Native 方法
智能摘要
智慧空间 APP 提供如下两个方法供 js 调用

1. 当 H5 界面调用 native 方法（如控制设备），并需要回调时调用：

honorConnect.handler(
"operationName",	//string 执行方法 见下描述
"json_body",	//body,string 请求参数，见下描述
"requestId",  //string，请求Id
"resultCallback" //string， 回调方法名，成功或失败时，将调用传入resultStr返回结果 ，见下描述
)
2.当 H5 界面调用 native 方法（如控制设备）不需要回调时可使用此方法：

honorConnect.handler(
"operationName",	//string， 执行方法 见下描述
"json_body"	//body,string 请求参数，见下描述
)
IOT 设备管理接口
基础能力
查询设备部分属性
接口名称

getDeviceServices

接口描述

当需要查询设备部分状态时，WEB 中调用 JS 方法如下。

请求消息

honorConnect.handler(
"getDeviceServices", //string 执行方法
"json_body", // 要查询的属性信息，由多个serviceId与多个propertyId组成json，例如 {"serviceId1":["propertyId1","propertyId2","propertyId3"],"serviceId2":["propertyId21","propertyId22"]}
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
 

json_body结构：

{
    "serviceId1": ["propertyId1","propertyId2","propertyId3"],
    "serviceId2": ["propertyId21","propertyId22"]
}

​
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "prdID": "B501",
  "onlineStatus":"Online", // 在线状态，取值："Online"或"Offline"
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
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
下发指令给设备，控制设备
接口名称

setDeviceProperty

接口描述

当需要将下发命令给设备时，WEB 中调用 JS 方法如下。一般用在接收到用户对设备的操作指令时。

请求消息

honorConnect.handler(
"setDeviceProperty", //string 执行方法
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 中传入对应 serviceId 及 propertyId（取值参见Profile定义）：

{
   "serviceId": "serviceId",
    "property": {
                "propertyId": "propertyId",
                "propertyValue": "propertyValue"
            }
}
响应消息

{
    "responseId" : "1650600291901",
    "status": 0,
    "msg": "SUCCESS"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
下发 action 指令给设备，控制设备
接口名称

controlDevice

接口描述

当需要控制设备时，WEB 中调用 JS 方法如下。

请求消息

honorConnect.handler(
"controlDevice", //string 执行方法
"", // 要控制的设备信息，由多个serviceId与多个action组成json，例如 {"serviceId1":[{"actionId":"id1","actionName":"name1"},{"actionId":"id2","actionName":"name2"}],"serviceId2":[{"actionId":"id22","actionName":"name22"}]}
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

{
    "responseId" : "1650600291901",
    "status": 0,
    "msg": "SUCCESS"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
修改设备名
接口名称

modifyDeviceName

接口描述

已废弃，建议使用showEditDialog，完成编辑与修改。 当进入设备设置界面需要修改设备名称时，WEB中调用JS方法如下

请求消息

honorConnect.handler(
"modifyDeviceName", //string 执行方法
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 中传入修改后的设备名：

{
   "deviceName": "deviceName"
}
响应消息

{
    "responseId" : "responseId",
    "status": 0,
    "msg": "SUCCESS"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
获取设备名
接口名称

getDeviceName

接口描述

当需要获取设备名称时，WEB 中调用 JS 方法如下

请求消息

honorConnect.handler(
"getDeviceName", //string 执行方法
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

{
    "responseId" : "responseId",
    "status": 0,
    "msg": "SUCCESS",
    "deviceName": "deviceName"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
删除设备
接口名称

deleteDevice

接口描述

当需要删除当前设备时，WEB 中调用 JS 方法如下：

请求消息

honorConnect.handler(
"deleteDevice", //string 执行方法
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息 

{
    "responseId" : "responseId",
    "status": 0,
    "msg": "SUCCESS"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
errorCode说明

191201：设备不支持删除
 

获取设备所属空间
接口名称

getRoomInfo

接口描述

当需要获取当前设备所属空间时，WEB 中调用 JS 方法如下：

请求消息

honorConnect.handler(
"getRoomInfo", //string 执行方法
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

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
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
移动设备摆放位置
接口名称

modifyDeviceRoom

接口描述

当需要移动设备摆放位置时，WEB 中调用 JS 方法如下：

请求消息

honorConnect.handler(
"modifyDeviceRoom", //string 执行方法
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 中传入需要移入的 roomId：

{
  "destRoomId": "destRoomId"
}
响应消息

{
    "responseId" : "responseId",
    "status": 0,
    "msg": "SUCCESS"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
删除设备的使用记录
接口名称

clearDevMsg

请求消息

honorConnect.handler(
"clearDevMsg", //string 执行方法
"",  // 空 string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600307883"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
查询设备的场景日志
接口名称

querySceneLog

请求消息

honorConnect.handler(
"querySceneLog", //string 执行方法
"json_body",  // body,string,可选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 结构：

名称	类型	是否必须	默认值	备注
date	string	非必须	 	日期 yyyy-MM-dd
pageNum	integer	非必须	1	列表分页-当前页码
pageSize	integer	非必须	10	列表分页-每页数量
响应消息 

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600307883",
  "data": // jsonString 响应数据
}
data 结构 :

名称	类型	是否必须	默认值	备注
pageSize	integer	非必须	1	列表分页-当前页码
pageNum	integer	非必须	10	列表分页-每页数量
total	integer	非必须	 	总记录数
size	integer	非必须	 	当前页的数量 <= pageSize
pages	integer	非必须	 	总页数
list	object []	非必须	 	结果集
list 结构 :

名称	类型	是否必须	默认值	备注
sceneLogDate	string	非必须	 	场景执行日期 时间格式: yyyy-MM-dd",example = "2020-10-10"
sceneLogList	object []	非必须	 	场景日志列表
sceneLogList 结构 :

名称	类型	是否必须	默认值	备注
sceneTriggerTime	string	非必须	 	场景触发时间 时间格式：HH:mm
sceneId	string	非必须	 	场景Id
sceneName	string	非必须	 	场景名称
sceneTriggerType	string	非必须	 	场景触发类型 影响端侧图标 no_detected：手动触发 daily_timer：定时触发  device_data: 智能设备触发
sceneExecResult	integer	非必须	 	场景触发结果 1:成功 0:失败 2:部分成功
sceneIsExist	integer	非必须	 	场景是否仍存在 1：存在 0:不存在
actionExecLogList	object []	非必须	 	设备执行日志列表
actionExecLogList 结构 :

名称	类型	是否必须	默认值	备注
devId	string	非必须	 	设备 Id actionType 为4时，该字段不能为空
devName	string	非必须	 	设备名称 actionType 为4时，该字段不能为空
actionId	string	非必须	 	设备执行 Id actionType 为4时，该字段不能为空
actionExecResult	integer	非必须	 	设备执行结果 0：执行失败 1：执行成功 2：执行中 3：未执行
message	string	非必须	 	信息内容 actionType 为4时，该字段不能为空
execFailedReason	string	非必须	 	设备执行失败原因 actionType 为4且 actionExecResult 为0时，该字段不能为空
failedCode	string	非必须	 	 
actionType	string	非必须	 	动作类型 1：执行某个场景 2：开关某个场景 3：向手机发送信息 4：执行某个设备 5：向手机发送指令
innerSceneId	string	非必须	 	嵌套场景 id ctionType 为1或2时，该字段不能为空
innerSceneName	string	非必须	 	嵌套场景名称 actionType 为1或2时，该字段不能为空
delayTime	string	非必须	 	延时时间,单位：秒/s
innerSceneStatus	string	非必须	 	延时时间,单位：秒/s
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
获取家庭信息
接口名称

getSimpleHomeInfo

接口描述

当需要获取家庭信息时，WEB 中调用 JS 方法如下： 

请求消息

honorConnect.handler(
"getSimpleHomeInfo", //string 执行方法
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息 

{
  "msg": "SUCCESS",
  "homeId": "家庭id",
  "status": 0,
  "responseId": "1650600307888"
}
获取设备信息
接口名称

getSimpleDeviceInfo

接口描述

当需要获取设备信息时，WEB 中调用 JS 方法如下： 

请求消息

honorConnect.handler(
"getSimpleDeviceInfo", //string 执行方法
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息 

{
  "msg": "SUCCESS",
  "deviceId": "设备id",
  "catgId": "分类id",
  "deviceType":"0", //0家庭设备 1个人设备 2分享设备 6家庭分享设备 7三方云云接入设备 耳机返回null
  "status": 0,
  "responseId": "1650600307999"
}
判断三方账号状态
接口名称

checkThirdAccountStatus

接口描述

当需要判断三方账号状态时，WEB 中调用 JS 方法如下

请求消息

honorConnect.handler(
"checkThirdAccountStatus", //string 执行方法
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "",
  "bindStatus" //int, 云云对接状态，-1:账号未绑定 0:账号绑定成功 1:账号登陆过期
}
创建场景
接口名称

createScene

请求消息

honorConnect.handler(
"createScene", //string 执行方法
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body结构：

名称	类型	是否必须	默认值	备注	其他信息
name	string	Y	 	场景名称,不允许与该用户名下其他场景名称重复	 
imageUrl	string	N	 	专属场景特有，APP端展示图片，校验由运营云处理	 
timeZone	string	Y	 	时区	 
status	string	Y	 	场景自动生效状态： on、生效---自动场景允许自动触发 off、 失效---自动场景不允许自动触发（一般纯手动场景填写off）	其他、非法字段，传入时校验，提示场景status只能为off或者on
executorId	string	Y	 	移动端设备唯一标识，用于pushtoken选择推送对象	 
createSubSceneReqList	object[]	Y	 	子场景列表	item 类型: object
createSubSceneReqList结构 :

名称	类型	是否必须	默认值	备注
subSceneId	string	N	 	场景标识，创建无需传入
userId	string	N	 	用户id，创建无需传入，传入无效
createConditionReqs	object[]	Y	 	场景执行条件列表
createActionReqs	object[]	Y	 	场景动作列表
createConditionReqs结构 :

名称	类型	是否必须	默认值	备注	其他信息
conditionFormat	string	Y	 	前端排版字段，用于app场景详情页面显示格式	 
type	string	Y	 	传入：schedule	定时触发
repeat	string	Y	 	everyDay 每天 perMonth 每月 weekly 每周 workingDay 工作日 holidays 节假日 perYear 每年 specifiedDate 指定日期	type为schedule时必须携带，且只能是指定的值之一。
timeType	number	Y	 	0：指定时间点 1：日出 2：日落	 
time	string	Y	 	当timeType为0时该字段必填，格式为 "hh:mm"	强校验
day	number	Y	 	[1, 31]，repeat为perMonth、perYear和specifiedDate时必填	 
month	number	Y	 	[1, 12]，repeat为perYear和specifiedDate时必填	 
year	number	Y	 	暂无年份的限制，repeat为specifiedDate时必填	 
daysOfWeek	string	Y	 	[1, 7]，不允许传入重复的数字，repeat为weekly时必填	 
createActionReqs结构 :

名称	类型	是否必须	默认值	备注	其他信息
actionFormat	string	Y	 	动作格式，端侧用于展示在场景详情页面的执行动作	执行智能设备
type	string	Y	 	传入：device	 
selected	boolean	N	true	动作是否选中，不携带时默认赋值true	true表示执行该动作，false表示不执行该动作
devId	string	Y	 	执行智能设备的设备Id	type为device时携，与用户（userId）及家庭（homeId）关联
devName	string	Y	 	执行智能设备的设备名称	type为device时携带
serviceId	string	Y	 	执行智能设备的服务Id	type为device时携带
keyWords	string	Y	 	执行智能设备的关键词	type为device时携带
prdId	string	Y	 	产品Id，注意区别于prdIds	type为device时携带
catgId	string	N	 	设备的分类Id	type为device时携带
propertyList	object[]	Y	 	设备信息的描述列表	 
propertyId	string	Y	 	执行智能设备动作中属性Id	存在propertyList时携带有效
propertyName	string	Y	 	执行智能设备动作中属性名称	存在propertyList时携带有效
propertyValue	string	Y	 	执行智能设备动作中属性的值	存在propertyList时携带有效
propertyValueType	string	N	 	执行智能设备动作中属性值类型	存在propertyList时携带有效
datatype	string	N	 	执行智能设备动作中属性的数据类型	存在propertyList时携带有效
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
data结构 :

名称	类型	是否展示	备注
errorCode	string	Y	错误码
errorDesc	string	Y	错误描述
data	object	Y	数据json
data.data结构 :

名称	类型	是否展示	备注
recommendName	string	Y	场景创建重名时推荐一个类似的场景名给用户；场景创建成功时填充为场景名称
sceneId	string	Y	场景创建成功时打印场景Id，未创建成功则不会出现此参数
code	string	Y	场景创建失败的错误码，创建成功时不会出现
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
测试用例

json_body请求参数：

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
data请求结果：

{
    "errorCode": "0",
    "errorDesc": "success",
    "data": {
        "sceneId": "scene_****************",
        "recommendName": "荣耀杜亚窗帘"
    }
}
删除场景
接口名称

deleteScene

请求消息

honorConnect.handler(
"deleteScene", //string 执行方法
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body结构：

名称	类型	是否必须	默认值	备注
sceneId	string	Y	 	场景id
userId	string	N	 	 
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
data结构 :

名称	类型	是否展示	备注
errorCode	string	Y	错误码
errorDesc	string	Y	错误描述
data	object	Y	数据json
data.data结构 :

名称	类型	是否展示	备注
code	string	Y	用于适配app返回错误码
message	string	Y	错误描述语句，一般用于冲突校验
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
测试用例

json_body请求参数：

{
  "sceneId": "scene_****************"
}
data请求结果：

{
    "errorCode": "0",
    "errorDesc": "success",
    "data": {}
}
 

修改场景
接口名称

updateScene

请求消息

honorConnect.handler(
"updateScene", //string 执行方法
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body结构：

名称	类型	是否必须	默认值	备注	其他信息
name	string	Y	 	场景名称,不允许与该用户名下其他场景名称重复	 
sceneId	string	Y	 	场景id	 
imageUrl	string	N	 	专属场景特有，APP端展示图片，校验由运营云处理	 
timeZone	string	Y	 	时区	 
status	string	Y	 	场景自动生效状态： on、生效---自动场景允许自动触发 off、 失效---自动场景不允许自动触发（一般纯手动场景填写off）	其他、非法字段，传入时校验，提示场景status只能为off或者on
executorId	string	Y	 	移动端设备唯一标识，用于pushtoken选择推送对象	 
isFullMode	boolean	Y	false	是否对子场景进行修改	 
updateSubSceneReqList	object[]	Y	 	子场景列表	item 类型: object
updateSubSceneReqList结构 :

名称	类型	是否必须	默认值	备注
subSceneId	string	N	 	场景标识，传入则修改，不传则新增
updateConditionReqs	object[]	Y	 	场景执行条件列表
updateActionReqs	object[]	Y	 	场景动作列表
updateConditionReqs结构 :

名称	类型	是否必须	默认值	备注	其他信息
conditionFormat	string	Y	 	前端排版字段，用于app场景详情页面显示格式	 
conditionId	string	N	 	场景conditionID	修改时需要传入，不传入则表示新增条件
type	string	Y	 	传入：schedule	定时触发
repeat	string	Y	 	everyDay 每天 perMonth 每月 weekly 每周 workingDay 工作日 holidays 节假日 perYear 每年 specifiedDate 指定日期	type为schedule时必须携带，且只能是指定的值之一。
timeType	number	Y	 	0：指定时间点 1：日出 2：日落	 
time	string	Y	 	当timeType为0时该字段必填，格式为 "hh:mm"	强校验
day	number	Y	 	[1, 31]，repeat为perMonth、perYear和specifiedDate时必填	 
month	number	Y	 	[1, 12]，repeat为perYear和specifiedDate时必填	 
year	number	Y	 	暂无年份的限制，repeat为specifiedDate时必填	 
daysOfWeek	string	Y	 	[1, 7]，不允许传入重复的数字，repeat为weekly时必填	 
updateActionReqs结构 :

名称	类型	是否必须	默认值	备注	其他信息
actionFormat	string	Y	 	动作格式，端侧用于展示在场景详情页面的执行动作	执行智能设备
actionId	string	N	 	动作Id	修改时需要传入，不传入则表示新增动作
type	string	Y	 	传入：device	执行智能设备
selected	boolean	N	true	动作是否选中，不携带时默认赋值true	true表示执行该动作，false表示不执行该动作
devId	string	Y	 	执行智能设备的设备Id	type为device时携，与用户（userId）及家庭（homeId）关联
devName	string	Y	 	执行智能设备的设备名称	type为device时携带
serviceId	string	Y	 	执行智能设备的服务Id	type为device时携带
keyWords	string	Y	 	执行智能设备的关键词	type为device时携带
prdId	string	Y	 	产品Id，注意区别于prdIds	type为device时携带
catgId	string	N	 	设备的分类Id	type为device时携带
propertyList	object[]	Y	 	设备信息的描述列表	 
propertyId	string	Y	 	执行智能设备动作中属性Id	存在propertyList时携带有效
propertyName	string	Y	 	执行智能设备动作中属性名称	存在propertyList时携带有效
propertyValue	string	Y	 	执行智能设备动作中属性的值	存在propertyList时携带有效
propertyValueType	string	N	 	执行智能设备动作中属性值类型	存在propertyList时携带有效
datatype	string	N	 	执行智能设备动作中属性的数据类型	存在propertyList时携带有效
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
data结构 :

名称	类型	是否展示	备注
errorCode	string	Y	错误码
errorDesc	string	Y	错误描述
data	object	Y	数据json
data.data结构 :

名称	类型	是否展示	备注
recommendName	string	Y	场景推荐名称
sceneId	string	Y	 
code	string	Y	修改场景失败的错误码，修改成功时不会出现
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
测试用例

json_body请求参数：（修改 name）

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
data请求结果：

{
    "errorCode": "0",
    "errorDesc": "success",
    "data": {}
}
 

查询场景
接口名称

queryScene

请求消息

honorConnect.handler(
"queryScene", //string 执行方法
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body结构：

名称	类型	是否必须	默认值	备注
sceneId	string	Y	 	场景id
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
data结构 :

名称	类型	是否展示	备注
errorCode	string	Y	错误码
errorDesc	string	Y	错误描述
data	object	Y	场景详细信息部分
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
测试用例

json_body请求参数：

{
  "sceneId": "scene_****************"
}
data请求结果：

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
 

查询场景列表
接口名称

querySceneList

请求消息

honorConnect.handler(
"querySceneList", //string 执行方法 
"json_body",  // body,string, 必选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body结构：

名称	类型	是否必须	默认值	备注
pageSize	number	Y	20	查询场景列表时指定展示场景个数
pageNo	number	Y	1	展示查询到的数据分页数
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
data结构 :

名称	类型	是否展示	备注
errorCode	string	Y	错误码，成功为0，其他值为失败
errorDesc	string	Y	错误描述
data	object[]	Y	数据列表
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
测试用例

json_body请求参数：

{
  "sceneId": "scene_****************"
}
data请求结果：

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
获取设备信息
接口名称

getSimpleDeviceInfo

接口描述

当需要获取设备信息时，WEB中调用JS方法如下：

请求消息

honorConnect.handler(
    "getSimpleDeviceInfo", //string 执行方法
    "", // 空string
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

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


查询设备的使用记录（推荐使用）
接口名称

queryMessageList

请求消息

honorConnect.handler(
    "queryMessageList", //string 执行方法
    "json_body",  // body,string, 必选
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body结构：

名称	类型	是否必选	默认值	备注
bizType	string	N	 	业务类型 为空时，对应的是bizType为空或者default的业务类型， 传default时，查default和为空的业务类型
msgType	string	N	 	1: 设备消息 2: 家庭管理消息(系统消息) 空则查询所有
msgSubType	string	N	 	消息子类目code 空则查询所有
operateStatus	string	N	 	0:不涉及 1:未处理 2:已处理 3:已过期 字段不传，查询所有类型
startTime	Date	N	 	起始时间的UTC秒（可空，为空时条件不生效），单位是秒（时间戳）；
endTime	Date	N	 	结束时间的UTC秒（可空，为空时条件不生效），单位是秒（时间戳）；
pageSize	number	N	 	分页时每页消息条数，默认为20
pageIndex	number	N	 	分页时当前查询第几页，默认1 -1则返回所有消息
devId	string	N	 	设备ID
msgStatus	string	N	 	消息状态： 0：未读 1：已读 空：全部
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
data结构 :

名称	类型	是否必选	备注
errorCode	string	Y	错误码
errorDesc	string	Y	错误描述
data	object[]	Y	数据
data.data结构 :

名称	类型	是否必选	备注
msgId	string	Y	消息唯一标识
msgType	string	Y	1: 设备消息 2: 系统消息
msgSubType	string	Y	消息子类目code
devId	string	N	设备ID
notifyId	string	N	通知id
msgStatus	number	Y	消息状态： 0：未读 1：已读
msgReceipt	number	Y	消息回执状态： 0：未收到回执 1：已收到回执
operateStatus	number	N	用户操作处理状态 0:不涉及 1:未处理 2:已处理 3:已过期
msgContent	string	Y	消息原始内容，JSON格式
eventType	number	N	事件类型 1：消息 2：提醒 3：告警
msgDisplayCN	string	N	消息展示内容中文格式
msgDisplayEN	string	N	消息展示内容英文格式
time	Date	Y	消息产生时间戳
currentTime	Date	Y	系统时间
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT
    "
}
 

云云设备刷新设备信息（云云设备专用）
接口名称

refreshThrDevice

请求消息

honorConnect.handler(
    "refreshThrDevice", //string 执行方法
    "",  // 空string
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
data结构 :

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
异常响应消息

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
切换网络配置
接口名称

switchWifiConfig

接口描述

当wifi设备切换网络时，WEB中调用JS方法如下：

请求消息

honorConnect.handler(
    "switchWifiConfig", //string 执行方法
    "", // 空string
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",

}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
调用门锁通用编辑弹框
接口名称

showGateLockEditDialog

接口描述

当需要在页面中调用门锁通用编辑弹框时，WEB 中调用 JS 方法。

注意：该接口会等待用户输入确定后再调用 resultCallback，因此不应设置接口返回的超时时间。
请求消息

honorConnect.handler(
    "showGateLockEditDialog", //string 执行方法
    "json_body", // body,string，见下描述
    "requestId",  //string，请求Id
    "resultCallback", // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 中传入自定义内容：

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
响应消息

{
    "responseId" : "responseId",
    "status": 0,
    "msg": "SUCCESS",
    "userInput": "我的设备/密码/用户名" //string ，用户输入的内容
    "buttonType": "positive/negative" //string ，按钮类型
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
蓝牙
创建蓝牙连接
接口名称

createBleConnection

接口描述

当需要创建蓝牙连接时，WEB 中调用 JS 方法如下。
注意：本接口依赖业务领域传入设备的特征全集，这样才能保证在三方蓝牙设备变化监听中收到该设备上报的特征变化。

请求消息

honorConnect.handler(
"createBleConnection", //string 执行方法
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 中传入对应 serviceUUID、chrctUUID 及 uuidType：

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
uuidType 用于标识对设备特征的操作类型，取值和具体含义如下，创建蓝牙连接时取3：

public class Characteristic {
    public static int TYPE_READ = 0; // 读取设备特征
    public static int TYPE_WRITE_NO_RESP = 1; // 设置设备特征（无回复）
    public static int TYPE_WRITE = 2; // 设置设备特征
    public static int TYPE_NOTIFY = 3; // 主动通知
    public String serviceUUID;
    public String chrctUUID;
    public int uuidType; // 用于标识对设备特征的操作类型
}
响应消息

{
    "responseId" : "1650600291901",
    "status": 0,
    "msg": "SUCCESS",
    "connectionStatus": true //boolean , 创建连接成功时，返回值为true；反之，返回值为false。
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
断开蓝牙连接
接口名称

closeBleConnection

接口描述

应用断开与 BLE 设备的蓝牙连接。

请求消息

honorConnect.handler(
"closeBleConnection", //string 执行方法
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息 

{
    "responseId" : "1650600291901",
    "status": 0,
    "msg": "SUCCESS",
    "result": true //boolean , 断开连接成功时，返回值为true；反之，返回值为false。
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
下发指令给设备，读特征数据
接口名称

readCharacteristic

接口描述

当需要将下发命令给设备时，WEB 中调用 JS 方法如下。一般用在接收到用户对设备的操作指令时。

请求消息

honorConnect.handler(
"readCharacteristic", //string 执行方法
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 中传入对应 serviceUUID、chrctUUID 及 uuidType（取值参见 Profile 定义）：

{
   "serviceUUID": "serviceUUID",  //string，serviceUUID
    "chrctUUID": "chrctUUID", //string，chrctUUID
    "uuidType": 0  //int, 传0，含义如下
}
uuidType 用于标识对设备特征的操作类型，取值和具体含义如下，读特征数据时取0：

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
响应消息 

{
    "responseId" : "1650600291901",
    "status": 0,
    "msg": "SUCCESS",
    "data": "data" // Hex string, 读取的特征数据
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
下发指令给设备，写特征数据
接口名称

writeCharacteristic

接口描述

当需要将下发命令给设备时，WEB 中调用 JS 方法如下。一般用在接收到用户对设备的操作指令时。

请求消息

honorConnect.handler(
"writeCharacteristic", //string 执行方法
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 中传入对应 serviceUUID、chrctUUID 及 uuidType、data（取值参见 Profile 定义）：

{
   "serviceUUID": "serviceUUID",  //string，serviceUUID
   "chrctUUID": "chrctUUID", //string，chrctUUID
   "uuidType": 1,  //int,  传1或2，建议用1
   "data":"data" // Hex string, 需要写入的特征数据
}
uuidType 用于标识对设备特征的操作类型，取值和具体含义如下，写特征数据时取1或2，建议用1：

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
响应消息

{
    "responseId" : "1650600291901",
    "status": 0,
    "msg": "SUCCESS"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
获取蓝牙开关状态
接口名称

getBluetoothState

接口描述

当需要获取系统蓝牙开关是否打开时调用

请求消息

honorConnect.handler(
"getBluetoothState", //string 执行方法
"",//空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "state": true  //true 蓝牙打开，false 蓝牙关闭
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
获取蓝牙连接状态
接口名称

getBluetoothConnectionStatus

接口描述

当需要获取当前设备是否连接蓝牙时调用

请求消息

honorConnect.handler(
    "getBluetoothConnectionStatus", //string 执行方法
    "",//空string
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "state": true  //true 蓝牙连接，false 蓝牙断开

}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
跳转蓝牙设置页面
接口描述

当需要跳转到系统蓝牙设置界面时调用

接口名称

jumpBluetoothSettings

请求消息

honorConnect.handler(
    "jumpBluetoothSettings", //string 执行方法
    "", // 空string
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
OTA
检测设备 OTA 版本信息
接口名称

checkOta

接口描述

当需要检测设备 OTA 版本时，WEB 中调用 JS 方法如下

请求消息

honorConnect.handler(
"checkOta", //string 执行方法
"json_body", // body,string,必填，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 中传入对应 scope（请求参数的 scope 和响应消息中的 type 一一对应）：

scope取值	描述	类型
ota	请求ota版本	string
mcu	请求mcu版本	string
json_body 举例：

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
检测到固件版本的响应消息 ( result 数组中的 type 值和请求参数中的 scope 值一一对应):

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
异常响应消息

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
OTA 升级
接口名称

upgradeOta

接口描述

升级 OTA 版本时，WEB 中调用 JS 方法如下

请求消息

honorConnect.handler(
"upgradeOta", //string 执行方法
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
当前正在升级:

{
    "responseId" : "responseId",
    "status": 0,
    "msg": "SUCCESS",
    "type": "isUpgrading",
}
ota 状态发生变化（多次返回，最终状态为500、600、-100之一） :

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
ota 下载进度，范围0-100（多次返回，在上述状态码为300后开始返回，400时下载进度100%停止返回） :

{
    "responseId" : "responseId",
    "status": 0,
    "msg": "SUCCESS",
    "type": "otaProgressChanged",
    "otaProgress": 55 //范围0-100
}
异常响应消息

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
取消 OTA 升级
接口名称

stopUpgradeOta

接口描述

取消 OTA 升级时，WEB 中调用 JS 方法如下

请求消息

honorConnect.handler(
"stopUpgradeOta", //string 执行方法
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
取消成功

{
    "responseId" : "responseId",
    "status": 0,
    "msg": "SUCCESS",
}
异常响应消息

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
单设备跳转固件更新页面
接口描述

单设备增加ota跳转到固件更新页面

接口名称

jumpOtaMcuCheckUpdatePage

请求消息

honorConnect.handler(
    "jumpOtaMcuCheckUpdatePage", //string 执行方法
    "", // 空string
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
)
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
APVideo设备
连接设备
接口名称

apConnectDevice

接口描述

连接设备时调用

请求消息

honorConnect.handler(
    "apConnectDevice", //string 执行方法
    "", //空string
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

{
    "responseId" : "1650600291901",
    "status": 0,
    "msg": "SUCCESS",
    "connectionStatus": true //boolean , 连接成功时，返回值为true；反之，返回值为false。
    "remoteAddress": 192.168.*.* //连接成功时返回，路由ip
    "localAddress": 192.168.*.* //连接成功时返回，连接ip
}
断开连接
接口名称

apDisConnectDevice

接口描述

退出页面时调用

请求消息

honorConnect.handler(
    "apDisConnectDevice", //string 执行方法
    "", //空string
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
保存图片到本地
接口名称

savePicToLocal

接口描述

H5保存图片到手机sd卡目录，可以根据type类型选择具体存放目录

type为1→图片保存在sd的Pictures目录，图片名称为产品id+时间戳

请求消息

honorConnect.handler(
    "savePicToLocal", //string 执行方法
    "json_body", // body,string,可选，见下描述
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);

​json_body中传入类型以及图片数据：
{
   "type": "1", //业务类型 1：挖耳勺
   "data": "" //图片数据 base64
}

​
响应消息

{
    "responseId" : "1650600291901",
    "state": false or true,//成功或者失败
    "filePath": "" //state为true时有值，保存文件的路径
}
打印机设备 -Native 调用 JS 方法
当设备状态变化时会主动通知 H5 界面，H5 界面可实现如下方法进行监听：

1. js 实现方法，WIFI 设备变化时 APP 触发该方法，将设备变化信息返回 H5。

window.printerStatusCallback(HnPrinterStatus printerStatus)

HnPrinterStatus 格式如下:
{
  HnPrinterStatus对象
}
2. js 实现方法，打印完成时 APP 触发该方法，将打印任务信息返回 H5。

window.printJobCallback(HnPrintJobInfo printJobInfo) 

HnPrinterStatus 对象如下:

{
  private final PrinterId mId;
  private final int mStatus;
  private final int mInkState;
  private final int mTonerState;
  private final boolean mOutOfPaper;
}
HnPrintJobInfo 对象如下:

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
打印机设备 -JS 调用 Native 方法
获取打印机信息

接口名称

getPrinterInfoByNodeId

接口描述

当需要获取打印机信息时，WEB 中调用 JS 方法如下。

请求消息

honorConnect.handler(
"getPrinterInfoByNodeId", //string 执行方法
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

{
    "responseId" : "1650600291901",
    "status": 0,
    "msg": "SUCCESS"
	[HnPrintJobInfo对象集合]
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
获取所有的打印任务
接口名称

getAllPrintJobList

接口描述

当需要获取所有的打印任务时，WEB 中调用 JS 方法如下。

请求消息

honorConnect.handler(
"getAllPrintJobList", //string 执行方法
"",
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

{
    "responseId" : "1650600291901",
    "status": 0,
    "msg": "SUCCESS"
	"printJobList":[HnPrintJobInfo对象集合]
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
获取当前进行的打印任务
接口名称

getActivePrintJobList

接口描述

当需要获取当前进行的打印任务时，WEB 中调用 JS 方法如下。

请求消息

honorConnect.handler(
"getActivePrintJobList", //string 执行方法
"",
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

{
    "responseId" : "1650600291901",
    "status": 0,
    "msg": "SUCCESS"
    "activePrintJobList":[HnPrintJobInfo对象集合]
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
根据打印 id 获取打印任务
接口名称

getPrintJob

接口描述

当根据打印 id 获取打印任务时，WEB 中调用 JS 方法如下

请求消息

honorConnect.handler(
"getPrintJob", //string 执行方法
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 中传入打印任务 id：

{
   "printJobId": "printJobId"//打印任务id
}
响应消息

{
    "responseId" : "responseId",
    "status": 0,
    "msg": "SUCCESS"
	{HnPrintJobInfo 对象}
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
启动打印机任务
接口名称

startPrintJob

接口描述

当需要启动打印机任务时，WEB 中调用 JS 方法如下：

请求消息

honorConnect.handler(
"startPrintJob", //string 执行方法
"json_body", // body,string,见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 中传入打印任务 id：

{
   "printJobTitle": "printJobTitle", //打印任务标题 String
   "printJobNum": printJobNum, //打印份数 int
   "printJobIsoId": "printJobIsoId", //纸张尺寸id String (参考：printJobIsoId-->字符串值参考)
   "orientation": orientation, //纸张横竖屏 Boolean true-->asPortrait false-->asLandscape
   "duplexMode": duplexMode, //单/双面打印 int (unused-->0,No duplex-->1,Duplex where the long edge attached-->2,Duplex where the short edge attach-->4)
   "colorMode": colorMode, //色彩模式 int (unused-->0,Use black, white, gray-->1,Use full color is available-->2)
   "contentType": contentType, //int CONTENT_TYPE_DOCUMENT(0)、CONTENT_TYPE_PHOTO(1)、CONTENT_TYPE_UNKNOWN(-1) int
   "uri": "uri" //打印文件or照片路径（content://media/external/file/5669） String
}
示例：

{
   "printJobTitle": "打印任务标题",
   "printJobNum": 1,
   "printJobIsoId": "ISO_A4",
   "orientation": true,
   "duplexMode": 2,
   "colorMode": 2,
   "contentType": 0,
   "uri": "content://media/external/file/5669"
}
响应消息

{
    "printJobId" : "printJobId",
    "responseId" : "1650600291901",
    "status": 0,
    "msg": "SUCCESS"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
根据打印 id 重新启动打印任务
接口名称

restartPrintJob

接口描述

当需要获取当前设备所属空间时，WEB 中调用 JS 方法如下：

请求消息

honorConnect.handler(
"restartPrintJob", //string 执行方法
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 中传入打印任务 id：

{
   "printJobId": "printJobId"//打印任务id
}
响应消息

{
    "responseId" : "1650600291901",
    "status": 0,
    "msg": "SUCCESS"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
根据打印 id 取消打印任务
接口名称

cancelPrintJob

接口描述

当需要根据打印id取消打印任务时，WEB 中调用 JS 方法如下：

请求消息

honorConnect.handler(
"cancelPrintJob", //string 执行方法
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 中传入打印任务 id：

{
  "printJobId": "printJobId"//打印任务id
}
响应消息

{
    "responseId" : "responseId",
    "status": 0,
    "msg": "SUCCESS"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
printJobIsoId -->字符串值参考:

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
APP 通用能力接口
基础能力
设置状态栏颜色模式
接口名称

setStatusBarMode

接口描述

当需要设置 APP 状态栏颜色模式时，WEB 中调用 JS 方法如下：

请求消息

honorConnect.handler(
"setStatusBarMode", //string 执行方法
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 中传入颜色模式：

"1" // string, 1：正常模式 2：dark模式
响应消息

{
    "responseId" : "responseId",
    "status": 0,
    "msg": "SUCCESS"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
获取 APP 语言
接口名称

getAppLanguageSync

接口描述

当需要获取APP语言时，WEB 中调用 JS 方法如下：

请求消息

honorConnect.handler(
"getAppLanguageSync", //string 执行方法
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

{
  "msg": "SUCCESS",
  "language": "zh", //当前语言，老设备使用这个字段，如"zh"
  "appLanguage": "zh_CN", //app当前语言，新设备使用这个字段，如"zh-hk", "zh-tw"，注意中文简体国内和海外包不一样，国内为"zh_CN"，海外包为"zh-cn"
  "status": 0,
  "responseId": "1650600299870"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
获取APP版本
接口名称

getAppVersion

接口描述

当需要获取智慧空间 APP 版本时，WEB 中调用 JS 方法如下：

请求消息

honorConnect.handler(
"getAppVersion", //string 执行方法
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息 

{
  "msg": "SUCCESS",
  "versionCode": "60003224",
  "versionName": "6.0.3.224",
  "status": 0,
  "responseId": "1650600307883"
}
获取 authCode
接口名称

getAuthCode

接口描述

通过 appId 获取 authCode：

请求消息

honorConnect.handler(
"getAuthCode", //string 执行方法
"appId", // string 需要厂商自行在开发者平台申请
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

{
  "msg": "SUCCESS",
  "authCode": "XXXXXX",
  "status": 0,
  "responseId": "1650600307883"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
查询系统版本
接口名称

getVersion

请求消息

honorConnect.handler(
"getVersion", //string 执行方法
"",  // 空 string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息 

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600307883",
  "data" // jsonString 响应数据
}
data 结构:

{
  "os" // string, 系统， 如: "Android"
  "osVersion" //string, 系统版本号, 如: "30"
  "appVersion" //string, 智慧空间版本号, 如: "70008025"
  "appVersionName" //string, 智慧空间版本名称, 如: "7.0.8.025"
  "zeroTimeZone" // 零时区时间戳，单位毫秒
  "timeOffset"; // 当前时区与零时区时间偏移量，单位毫秒
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
退出设备页面
接口名称

exitDeviceActivity

接口描述

当需要退出设备页面时，WEB 中调用 JS 方法如下：

请求消息

honorConnect.handler(
"exitDeviceActivity", //string 执行方法
"" // 空string
);
响应消息 

该函数无需返回
历史数据查询
接口名称

queryHistoryData

接口描述

当需要判断三方账号状态时，WEB中调用JS方法如下

请求消息

honorConnect.handler(
    "queryHistoryData", //string 执行方法
    "json_body", // body,string,可选，见下描述
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body中传入的值：

{
   "type": 0,// int类型 0:采样数据  2:统计数据
    "tableName": "tableName",//String类型 查询的数据集合名称
    "columns":["column"],//JSONArray类型 查询的数据集合的列名列表
    "timeStart":832190218,//Date类型 起始时间的UTC秒（必填，不填报错）
    "timeEnd":832190218,//Date类型 起始时间的UTC秒（必填，不填报错）
    "deviceIds":["deviceId"],//JSONArray类型 查询的设备id集合
}

​成功响应消息
{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "",
 "hisDataList": [{"deviceId": "设备ID","timestamp": "数据时标（UTC秒）","rowData": {"columnName":"value"}//单行数据，其结构为一个map，key是入参的单个columnName，value是数据值。}]
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 非0,
    "msg": "HONORCONNECT_UNKNOWN_ERROR",
    "errorCode":10000,
    "errordesc": "Check Param failed"
}
errorcode	errordesc	含义
0	success	正确
100000	Check Param failed	参数校验错误
100001	Authorize valid Failed	AT校验错误
100003	System Error	默认系统异常
190201	His config error	历史数据配置未查到或者不正确
190202	Device not found	查询设备不正确
190203	His query time not valid	历史查询时间不正确
调用原生文本编辑弹框
接口名称

showEditDialog

接口描述

当需要在页面中调用原生文本编辑弹框时，WEB 中调用 JS 方法。

注意：
该接口会等待用户输入确定后再调用 resultCallback，因此不应设置接口返回的超时时间。
请求消息

honorConnect.handler(
	"showEditDialog", //string 执行方法
	"json_body", // body,string，见下描述
	"requestId",  //string，请求Id
	"resultCallback", // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 中传入显示时长模式、提示内容：

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
json_body结构：

名称	类型	是否必须	默认值	备注
sceneType	number	非必须	0	（1）sceneType为0时，代表修改设备名称场景。若byteLengthLimit>0，则使用byteLengthLimit进行判断。否则，若lengthLimit>0，则使用lengthLimit进行判断。若byteLengthLimit与lengthLimit都为0，则使用默认最大63个字节进行判断。新设备不建议使用lengthLimit，已废弃。 （2）sceneType暂不支持其他值，如有需要，需先找智慧空间负责人约定。
lengthLimit	number	非必须	21（字符）	最大长度限制，大于0时有效。当byteLengthLimit传入有效值时，该字段不生效
byteLengthLimit	number	非必须	63（字节）	最大字节数限制，大于0时有效。当lengthLimit和byteLengthLimit都无效时，该字段取默认值63
响应消息 

{
    "responseId" : "responseId",
    "status": 0,
    "msg": "SUCCESS",
    "userInput": "我的设备" //string ，用户输入的内容
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
跳转 native 页面（定义 router path ）
接口名称

jumpTo

接口描述

如固件更新页面 uri：hihonor://com.hihonor.magichome/deep_link?route_path=%2Fota%2Fcheck&page_type=native

请求消息

honorConnect.handler(
"jumpTo", //string 执行方法
"json_body",  // body,string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 结构:

{
  "uri": "" // string
}
响应消息 

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600307883"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
调用原生弹出提示语
接口名称

toast

接口描述

当需要在页面中调用原生弹出提示语时，WEB 中调用 JS 方法如下：

请求消息

honorConnect.handler(
"toast", //string 执行方法
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 中传入显示时长模式、提示内容：

{
"toastLength": 0,//int ，提示显示时长  0: 短时显示  1: 长时显示
"body" : "" //string， 提示内容
}
响应消息 

{
    "responseId" : "responseId",
    "status": 0,
    "msg": "SUCCESS"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
查询当前用户家庭角色
接口名称

userFamilyRole

接口描述

当需要获取当前用户在当前家庭里的角色时，WEB 中调用 JS 方法如下：

请求消息

honorConnect.handler(
"userFamilyRole", //string 执行方法
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

{
  "responseId": "1650600307887",
  "role": 0, //0创建者 1管理者 2普通用户
  "status": 0,
  "msg": "SUCCESS"
}
异常响应消息

{
    "responseId" : "1650600307887",
    "role": -1, //-1失败
    "status": 21,
    "msg": "HONORCONNECT_NO_EXIST_HOME_DETAIL" //当前家庭详情不存在
}
请求三方服务器
接口名称

requestThreeService

接口描述

当需要请求设备云、场景云、运营云的接口时，WEB 中调用 JS 方法如下：

请求消息

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
参数示例：

{
    "url":"device/mgmt/v1/delete", //请求拼接地址，https://host:port/后的内容
    "tag":"devCloud", //请求哪个服务器，目前仅支持设备云devCloud，场景云sceneCloud，运营云operationCloud
    "method":"post",  //请求方式,get或post
    "queryParams":{"homeId":"家庭Id","devId":"设备Id"}//请求参数，map对象的形式，当method为get时传值
    "body":"字符串" //请求参数，字符串，多数接口定义的是json，当method为post时传值
}
响应消息 

{
  "responseId": "1650600307888",
  "resultData": "", //返回结果
  "status": 0,
  "msg": "SUCCESS"
}
异常响应消息

{
    "responseId" : "1650600307888",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT" //参数错误
}
打印用户级别的日志信息
接口名称

printLog

请求消息

honorConnect.handler(
"printLog", //string 执行方法
"json_body",  // body,string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 结构:

{
  "degree" // string, 日志级别， 取值: i,w,e,d,v
  "tag" //string, 关键词, 如果打印的msg是敏感信息列表中的一个信息，请将tag传入此信息， 如: msg打印的是手机号，tag请传"phoneNum",log中会将msg加密写入log文件中
  "msg" //string, 打印内容
}
敏感信息列表：

{"sn", "mac", "ip", "deviceId", "userId", "udid", "uuid", "url", "token", "phoneNum", "userInfo", "key", "json"}
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600307883",
  "data" // jsonString 响应数据
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
打印 debug 级别的日志信息
接口名称

printLogDebug

请求消息

honorConnect.handler(
"printLogDebug", //string 执行方法
"json_body",  // body,string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 结构:

{
  "degree" // string, 日志级别， 取值: i,w,e,d,v
  "tag" //string, 关键词, 如果打印的msg是敏感信息列表中的一个信息，请将tag传入此信息， 如: msg打印的是手机号，tag请传"phoneNum",log中会将msg加密写入log文件中
  "msg" //string, 打印内容
}
敏感信息列表：

{"sn", "mac", "ip", "deviceId", "userId", "udid", "uuid", "url", "token", "phoneNum", "userInfo", "key", "json"}
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600307883",
  "data" // jsonString 响应数据
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
获取手机状态栏高度
接口名称

getStatusBarHeight

接口描述

当需要获取手机状态栏高度时，WEB 中调用 JS 方法如下：

请求消息

honorConnect.handler(
"getStatusBarHeight", //string 执行方法
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息 

{
  "msg": "SUCCESS",
  "statusBarHeight": 99, //状态栏高度 px
  "status": 0,
  "responseId": "1650600291857"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
获取手机颜色模式
接口名称

getThemeMode

接口描述

当需要获取 APP 颜色模式时，WEB 中调用 JS 方法如下：

请求消息

honorConnect.handler(
"getThemeMode", //string 执行方法
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

{
  "msg": "SUCCESS",
  "themeMode": 1,// int, 1：正常模式 2：dark模式
  "status": 0,
  "responseId": "1650600307883"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
获取折叠屏当前折叠状态
接口名称

getScreenSpreaded

接口描述

当需要获取折叠屏当前折叠状态时，WEB 中调用 JS 方法如下：

请求消息

honorConnect.handler(
"getScreenSpreaded", //string 执行方法
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息 

{
  "msg": "SUCCESS",
  "spreadedMode": 1,// int, 1：展开模式 2：正常模式
  "status": 0,
  "responseId": "1650600307883"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
判断平板横竖屏状态
接口名称

isLandscape

接口描述

当需要获取平板横竖屏状态时，WEB 中调用 JS 方法如下：

请求消息

honorConnect.handler(
"isLandscape", //string 执行方法
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

{
  "msg": "SUCCESS",
  "isLandscape": true, //true是横屏，false是竖屏
  "status": 0,
  "responseId": "1650600307884"
}
区分平板和折叠屏
接口名称

isFoldScreenDevice

接口描述

当需要获取设备是否是折叠屏时，WEB 中调用 JS 方法如下：

请求消息

honorConnect.handler(
"isFoldScreenDevice", //string 执行方法
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

{
  "msg": "SUCCESS",
  "isFoldScreenDevice": true,
  "status": 0,
  "responseId": "1650600307885"
}
判断设备是否是平板
接口名称

isPad

接口描述

当需要判断当前设备是否是平板时，WEB 中调用 JS 方法如下：

请求消息

honorConnect.handler(
"isPad", //string 执行方法
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息 

{
  "msg": "SUCCESS",
  "isPad": true, //true是平板
  "status": 0,
  "responseId": "1650600307899"
}
检测三方app是否安装(不支持IOS)
接口名称

checkThirdApp

接口描述

用于检测手机里三方app是否安装，WEB中调用JS方法如下：

请求消息

honorConnect.handler(
    "checkThirdApp", //string 执行方法
    "json_body",  // body,string, 必选
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body结构：

名称	类型	是否必须	默认值	备注
third_app_package	string	Y	 	三方App包名
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600307883",
  "data" // boolean 响应数据
}
data结构 :

名称	类型	是否必选	备注
data	boolean	Y	是否安装
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
获取openId
接口名称

getOpenId

接口描述

获取openId

请求消息

honorConnect.handler(
    "getOpenId", //string 执行方法
    "", // 空string
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600307886",
  "openId": "" // openId
}
创建快捷方式
接口名称

deviceAddShortcut

接口描述

当需要给设备创建桌面快捷方式时，WEB 中调用 JS 方法如下：

请求消息

honorConnect.handler(
"deviceAddShortcut", //string 执行方法
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

{
  "msg": "SUCCESS", //需要app开启打开‘创建桌面快捷方式’的权限
  "status": 0,
  "responseId": "1650600307886"
}
异常响应消息

{
    "responseId" : "1650600307886",
    "status": 18,
    "msg": "HONORCONNECT_NO_EXIST_DEVICE" //设备不存在
}
上报设备运营打点
接口名称

reportDeviceEvent

接口描述

用户H5设备进行运营打点上报，WEB中调用JS方法如下：

请求消息

honorConnect.handler(
"reportDeviceEvent", //string 执行方法
"json_body", // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body中传入的值：

{
    "nodeId":"sdgrzxcvegf",
    "paramJson": "{\"eventTag\":\"060000001\",\"eventDesc\":\"usual_click\"}"
}

​
成功响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 非0,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
访问设备云的接口
接口名称

requestDevCloudService

 

查询云云设备动态功能（云云设备专用）
请求消息

honorConnect.handler(
    "requestDevCloudService", //string 执行方法
    "json_body",  // json串,refresh是否强制动态刷新，非必传
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body结构：

{
    "tag": 1,// number
    "jsonParams": "{"deviceId":"设备ID","refresh":boolean}"
}
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
data结构 :

{
    "errorCode": "状态码",
    "errorDesc": "描述信息",
    "resultData": {"serviceList":[{"index":"服务序号","id":"唯一","title":"服务标题","description":"服务描述",
                  "propertyList":[{"index":"属性序号","id":"唯一","description":"属性描述","type":"类型","maxLength":"type为string时最大长度","minLength":"type为string时最小长度","valueList":[{"value":"type为int时取值","description":""}]}],
                  "actionList":[{"index":"动作序号","id":"唯一","description":"动作描述","inDataList":[int,int]}]}
                                 ]}
}
 

云云设备动态功能触发（云云设备专用）
请求消息

honorConnect.handler(
    "requestDevCloudService", //string 执行方法
    "json_body",  // json串
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body结构：

{
    "tag": 2,// number
    "jsonParams": "{"deviceId":"设备ID","action":{"serviceId":"服务Id","actionId":"动作Id","propertyMap":{入参见上一个接口的inDataList}}}"
}
 

响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
data结构 :

{
    "errorCode": "状态码",
    "errorDesc": "描述信息"
}
设备自定义信息字段存储
请求消息

honorConnect.handler(
    "requestDevCloudService", //string 执行方法
    "json_body",  // json串，0代表摩根
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body结构：

{
    "tag": 3,// number
    "jsonParams": "{"deviceId":"设备ID","propertyType":0,"propertyValue":"值","op":1}
}
 

响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
data结构 :

{
    "errorCode": "状态码",
    "errorDesc": "描述信息"
}
设备自定义信息字段查询
请求消息

honorConnect.handler(
    "requestDevCloudService", //string 执行方法
    "json_body",  // json串，其中0代表摩根
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body结构：

{
    "tag": 4,// number
    "jsonParams": "{"deviceIds":["设备ID1","设备ID2"],"propertyTypes":[0]}
}
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "data": // jsonString 响应数据
}
data结构 :

{
    "errorCode": "状态码",
    "errorDesc": "描述信息",
    "resultData":{"properties":[{"deviceId":"","propertyType":0,"propertyValue":""}]}
}
查询点位信息/历史记录
请求消息

honorConnect.handler(
    "requestDevCloudService", //string 执行方法
    "json_body", // string, 请求参数
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body结构：

{
    "tag": 5,// number
    "jsonParams": ""
}
jsonParams格式：

字段	是否必选	类型	描述
productId	是	String	产品id
code	是	String	分配的查询code
timeStart	是	Date	起始时间的UTC秒（必填，不填报错）
timeEnd	是	Date	起始时间的UTC秒（必填，不填报错） 注：timeStart 与 timeEnd 时间范围不应超过1年
deviceId	是	String	查询的设备id（注意是单个设备id）
bizIds	否	Array<String>	查询的业务id集合
isCompress	否	number	是否需要压缩 0：不压缩 1：压缩（GZIP&Base64） 默认不压缩
pageNo	否	number	分页，从1开始，如不填，默认为1
pageSize	否	number	每页大小，不传时默认值是10000 pageSize最大为10000
code取值：

code	描述
CLEAN_PATHWAY	点位信息
CLEAN_RECORD	历史记录
 

响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "resultData": // String格式，透传设备云接口响应
}
resultData格式：

字段	是否必选	类型	描述
errorCode	是	String	错误码，见下方设备云错误码定义
errorDesc	是	String	错误描述，见下方设备云错误码定义
data	否	String	data
data格式：

字段	是否必选	类型	描述
deviceId	是	String	设备id
rowData	是	String	历史数据
rowData 示例：

情形1：isCompress不传或传0时，返回的是未压缩的数据，value有值，compressedValue为空

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
情形2：isCompress传1时，返回的是压缩的数据，value为空，compressedValue为Gzip后base64的字符串

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
存储字段名	字段类型	说明
areaId	number	地图id
cleanArea	number	清扫面积
cleanTime	number	清扫时间
endTime	timestamp	结束时间
status	number	清扫状态
mode	number	清扫模式
errorCode	number	错误码
异常响应消息

{
    "msg": "HONORCONNECT_TAG_ID_ERROR",
    "status": 26,
    "responseId" : "1650600291901"
}
入参示例1：

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
这个表示查询产品为UZNV、devId为devId123、地图id为1在1705133701~1705133746这段时间内的清扫点位信息。

出参示例1：

情形1：isCompress不传或传0时，返回的是未压缩的数据，value有值，compressedValue为空

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
情形2：isCompress传1时，返回的是压缩的数据，value为空，compressedValue为Gzip后base64的字符串

{
        "index": [
                "timestamp",
                "areaId",
                "path"
        ],
        "value": null，
        "compressedValue" : "adfadfafdafawfew123fAF23R2"
}
入参示例2：

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
这个表示查询产品为UZNV、devId为devId123在1705133701~1705138897这段时间内的历史清扫记录信息。

出参示例2：

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
出参表示的是时间范围1705026371~1705026416这段时间内deviceId为devId123的清扫记录信息。

个性化数据
存储设备个性化数据
接口名称

setStorage

接口描述

每个设备间的数据是隔离的，无需单独处理

请求消息

honorConnect.handler(
"setStorage", //string 执行方法
"json_body",  // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 结构：

{
   "key", // string 存储的数据key
   "value", // string 存储的数据value
}
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
获取设备个性化数据
接口名称

getStorage

接口描述

每个设备间的数据是隔离的，无需单独处理

请求消息

honorConnect.handler(
"getStorage", //string 执行方法
"json_body",  // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 结构：

{
   "key", // string 存储的数据key
}
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
  "value": ""  // string 存储的数据value
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
删除设备个性化数据
接口名称

removeStorage

接口描述

每个设备间的数据是隔离的，无需单独处理

请求消息

honorConnect.handler(
"removeStorage", //string 执行方法
"json_body",  // body,string,可选，见下描述
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 结构：

{
   "key", // string 存储的数据key
}
响应消息

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600291901",
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
本地资源
获取手机本地文档
接口名称

documentChooser

接口描述

当需要手机文档时，WEB 中调用 JS 方法如下。

请求消息

honorConnect.handler(
    "documentChooser", //string 执行方法
    "", // 空string
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

{
    "responseId" : "1650600291901",
    "status": 0,
    "msg": "SUCCESS"
    [String base64Str字符串]
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 12,
    "msg": "HONORCONNECT_INVALID_ARGUMENT"
}
获取手机照片资源
接口名称

imageChooser

接口描述

当需要获取手机照片时，WEB 中调用 JS 方法如下。

请求消息

honorConnect.handler(
    "imageChooser", //string 执行方法
    "json_body", // body,string,可选，见下描述
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 中传入文件名称：

{
   "fileName": "fileName"
}
响应消息

{
    "responseId" : "1650600291901",
    "status": 0,
    "msg": "SUCCESS"
    [String base64Str 字符串]
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
获取应用内是否存在指定图片资源
接口名称

localImageChooser

接口描述

当需要获取应用内的图片资源时，WEB 中调用 JS 方法如下。

请求消息

honorConnect.handler(
    "localImageChooser", //string 执行方法
    "json_body", // body,string,可选，见下描述
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 中传入文件名称：

{
   "fileName": "fileName"
}
响应消息 

{
    "responseId" : "1650600291901",
    "status": 0,
    "msg": "SUCCESS"
    [String base64Str 字符串]
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
调用手机拍照并返回图片资源
接口名称

takePicture

接口描述

当调用手机拍照时，WEB 中调用 JS 方法如下

请求消息

honorConnect.handler(
    "takePicture", //string 执行方法
    "json_body", // body,string,可选，见下描述
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息 

{
    "responseId" : "responseId",
    "status": 0,
    "msg": "SUCCESS"
    [String base64Str 字符串]
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
设备隐私接口
点击设置页的法律信息，跳转新的法律信息 H5 页面
接口名称

jumpLegalInformation

请求消息

honorConnect.handler(
"jumpLegalInformation", //string 执行方法
"json_body",  // body,string类型url,必传，app侧loadUrl中的地址参数
)
响应消息

该函数无需返回
接口名称

getLicenseInfo

请求消息

honorConnect.handler(
"getLicenseInfo", //string 执行方法
"json_body",  // body,string,可选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息 

{
  "msg": "SUCCESS",
  "licenseInfo": "[{"agrNo":400012,"type":16001},{"agrNo":400017,"type":16002}]",
  "status": 0,
  "responseId": "1650600307883"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
点击跳转到协议或隐私政策文本页面
接口名称

jumpToLicense

请求消息

honorConnect.handler(
"jumpToLicense", //string 执行方法
"json_body",  // body,string,必选，h5侧调用此方法时，需要传入参数，类型是JsonString 如：{"agrNo": 400005,"type": 16001}
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

该函数无需返回
点击撤销授权
接口名称

revokeAuthorization

请求消息

honorConnect.handler(
"revokeAuthorization", //string 执行方法
"json_body",  // body,string,必传 h5侧调用此方法时，需要传入参数，类型是JsonString，如： [{"agrNo": 400005,"type": 16001},{"agrNo": 400006,"type": 16002}]
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息 

{
  "msg": "SUCCESS",
  "status": 0,
  "responseId": "1650600307883"
}
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
跳转智慧空间 APP 首页
接口名称

jumpToMain

接口描述

当撤销授权成功后，无论删除设备成功或失败，H5 侧都调用此方法，回到 app 首页。

请求消息

honorConnect.handler(
"jumpToMain", //string 执行方法
"json_body",  // body,string,可选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

该函数无需返回
法律信息页点击返回，回到设置页面时调用此方法
接口名称

goBack

请求消息

honorConnect.handler(
"goBack", //string 执行方法
"json_body",  // body,string,可选
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息

该函数无需返回
查询设备的使用记录
接口名称

getDeviceMsg

接口描述

当设备需要查询记录的事件时调用，WEB 中调用 JS 方法如下

请求消息

honorConnect.handler(
    "getDeviceMsg", //string 执行方法
    "json_body", // body,string,可选，见下描述
    "requestId",  //string，请求Id
    "resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
json_body 中传入文件名称：

{
   "pageSize": "10", //分页时每页消息条数，默认为20
   "pageIndex": "1" //分页时当前查询第几页，默认1 -1则返回所有消息
}
响应消息 

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
异常响应消息

{
    "responseId" : "1650600291901",
    "status": 100,
    "msg": "HONORCONNECT_UNKNOWN_ERROR"
}
获取智慧空间问卷调查开关
接口名称

getQuestionInvestigation

接口描述

当需要获取智慧空间问卷调查开关时，WEB 中调用 JS 方法如下：

请求消息

honorConnect.handler(
"getQuestionInvestigation", //string 执行方法
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息 

{
  "msg": "SUCCESS",
  "isChecked": true,
  "status": 0,
  "responseId": "1650600307883"
}
接收方取消设备分享（老设备仍旧支持，新接入设备建议使用deleteDevice接口）
接口名称

deleteShareDevice

接口描述

当设备分享的接受方想要删除设备时，WEB中调用JS方法如下：

注意：
新接入的设备，删除分享设备的时候建议走deleteDevice接口，当前接口已废弃
请求消息

honorConnect.handler(
"deleteShareDevice", //string 执行方法
"", // 空string
"requestId",  //string，请求Id
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
响应消息 

{
    "responseId" : "1650600307889",
    "status": 22,
    "msg": "HONORCONNECT_DEVICE_NOT_SHARED" //该设备不是共享设备
}
  
