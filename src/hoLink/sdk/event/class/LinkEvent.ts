import { LinkEventListener } from "./LinkEventListener";

export class LinkEvent {
  private map;
  private readonly eventName: string;

  constructor(eventName: string) {
    if (!window) {
      throw new Error("can not find window");
    }
    this.eventName = eventName;
    this.map = new Map();
    (window as any)[eventName] = this.event;
  }

  // 使用箭头函数绑定this
  event = (...args: any) => {
    this.map.forEach((fn) => fn(...args));
  };

  on = (key: any, fn?: Function): LinkEventListener => {
    if (this.map.has(key)) {
      console.warn(`${key} has already been set`, this.map.get(key));
    }
    if (typeof key === "function") {
      fn = key;
    }
    if (typeof fn !== "function") {
      throw new TypeError(`fn is not a function`);
    }
    // 重复设置，默认覆盖
    this.map.set(key, fn);

    return new LinkEventListener(this, fn);
  };

  remove = (key: any) => {
    if (this.map.has(key)) {
      this.map.delete(key);
    } else {
      console.warn("can not find function", key);
    }
    console.debug(`${this.eventName} removeres: `, key, this.map);
  };

  clear = () => {
    this.map = new Map();
  };

  check = (cb: Function) => {
    console.log(
      `event has changed: ${(window as any)[this.eventName] !== this.event} `
    );
    cb(this.map);
  };
}
