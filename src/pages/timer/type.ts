import { RepeatTypeEnum, SwitchEnum, WeekDayEnum } from "@/pages/timer/enum";

export interface TimerItemType {
  id: string;
  isuse: boolean;
  repeat: {
    type: RepeatTypeEnum;
    custom?: Array<typeof WeekDayEnum>;
  };
  open: SwitchEnum;
  openTime: string;
  close: SwitchEnum;
  closeTime: string;
}

export interface ITimerState {
  timerList: Array<TimerItemType>;
  maxLength: number;
}
