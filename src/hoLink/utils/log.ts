import { isLog } from "../global";
import { getDate } from "./time";

export const log2 = (...params: any): void => {
  if (!isLog()) return;

  console.log(getDate(), ...params);
};
