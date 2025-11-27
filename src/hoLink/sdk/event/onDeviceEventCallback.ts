import { LinkEvent } from "./class/LinkEvent";
import { DevcieEventCallback } from "@/hoLink/constans/event";

const event = new LinkEvent(DevcieEventCallback);

export const onDeviceEvent = (key: any, fn?: Function) => event.on(key, fn);

export const unDeviceEvent = (key: any) => event.remove(key);

export const clearDeviceEvent = () => event.clear();
