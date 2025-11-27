import { HandlerCallbackName } from "../../../constans/request";
import { LinkEvent } from "../class/LinkEvent";
import { emit } from "@/hoLink/sdk/event/onHandler/onHandlerObserve";

const event = new LinkEvent(HandlerCallbackName);

export const onHandlerListener = (key: any, fn?: Function) => event.on(key, fn);

export const unHandlerListener = (key: any) => event.remove(key);

export const clearHandlerListener = () => event.clear();

export const initHandlerListener = () =>
  onHandlerListener((data: any) => {
    if (typeof data === "object") {
      const { responseId } = data;
      emit(responseId, data);
    } else {
      throw new TypeError("honorConnect callback data type error:", data);
    }
  });
