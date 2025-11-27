let log = false;

export const showLog = (show: boolean) => {
  log = Boolean(show);
};

export const isLog = () => log;

let _isHandlerInit = false;

export const handlerInit = (value: boolean) => {
  _isHandlerInit = value;
};

export const isHandlerInit = () => _isHandlerInit;
