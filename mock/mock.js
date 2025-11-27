const RESPONSE = {
  SUCCESS: 0,
};

/**
 *
 * @param url
 * @param callbackName
 * @param responseId
 * @param status
 * @param data
 * @param {Object?} hasConfig
 * @param {number?} delay
 */
const responseFn = (
  { url, callbackName, responseId, status = RESPONSE.SUCCESS, data },
  delay
  // hasConfig
) => {
  setTimeout(() => {
    // console.groupCollapsed(`%c响应 --> ${url}`, "color: #409eff");
    // console.log(`默认响应：${!!hasConfig}`);
    // console.log("result --> ", data);
    // console.log("responseId --> ", responseId);
    // console.log("callbackName --> ", callbackName);
    // console.groupEnd();

    window[callbackName]?.({
      onlineStatus: "Online",
      status,
      msg: "",
      responseId,
      data,
    });
  }, delay ?? 0);
};

window.linkTrigger = () => {
  window.deviceEventCallback({
    onlineStatus: "Online",
    serviceList: [
      {
        id: "light",
        propertyList: [
          {
            id: "brightness",
            value: 50,
          },
        ],
      },
    ],
  });
};

// 模拟接口响应
// 方法名队员 api 接口 operationName
const operations = {
  setDeviceProperty(params) {
    responseFn(params);
  },
  getAppLanguageSync(params) {
    responseFn(
      {
        ...params,
        data: { language: "en" },
      },
      100
    );
  },
  getThemeMode(params) {
    responseFn(
      {
        ...params,
        data: { themeMode: 1 },
      },
      100
    );
  },
  getStatusBarHeight(params) {
    responseFn(
      {
        ...params,
        data: {
          statusBarHeight: 30,
        },
      },
      100
    );
  },
  async getDevInfoAll(params) {
    responseFn({
      ...params,
      data: {
        onlineStatus: "Online",
        serviceList: [
          {
            id: "light",
            propertyList: [
              {
                id: "brightness",
                value: 50,
              },
            ],
          },
        ],
      },
    });
  },
};

window.honorConnect = {
  handler(url, data, responseId, callbackName) {
    // console.groupCollapsed(`请求 --> ${url}`);
    // console.log("params --> ", data);
    // console.log("responseId --> ", responseId);
    // console.log("callbackName --> ", callbackName);
    // console.groupEnd();

    // 模拟手机响应
    if (operations[url]) {
      operations[url]({ url, data, responseId, callbackName });
    } else {
      responseFn({ url, data, responseId, callbackName }, 0, true);
    }
  },
};
