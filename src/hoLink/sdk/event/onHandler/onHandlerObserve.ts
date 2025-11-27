const map = new Map();

export const on = (id: string, cb: Function): void => {
  if (typeof cb !== "function") {
    throw new TypeError(`fn is not a function`);
  }
  if (map.has(id)) {
    console.warn(`${id} has already been set`, map.get(id));
  }
  // 重名设置，覆盖
  map.set(id, cb);
};

// todo 是否需要做缓存队列，防止 emit 先触发
export const emit = (id: string, data: any) => {
  const callback = map.get(id);
  if (typeof callback === "function") {
    callback(data);
  } else {
    console.warn(`map.get(${id}) is not function`, callback);
  }
};

export const off = (id: string) => {
  if (map.has(id)) {
    map.delete(id);
  } else {
    console.warn("can not find function", id);
  }
};

export default {
  on,
  emit,
  off,
};
