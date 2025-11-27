import { LinkEvent } from "./class/LinkEvent";
import { OnPause } from "@/hoLink/constans/event";

const event = new LinkEvent(OnPause);

export const onPause = (key, fn?) => event.on(key, fn);

export const unPause = (key) => event.remove(key);

export const clearPause = () => event.clear();
