import { LinkEvent } from "./class/LinkEvent";
import { OnResume } from "@/hoLink/constans/event";

const event = new LinkEvent(OnResume);

export const onResume = (key, fn?) => event.on(key, fn);

export const unResume = (key) => event.remove(key);

export const clearResume = () => event.clear();
