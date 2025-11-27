export enum TimeType {
  open,
  close,
}

export enum RepeatTypeEnum {
  once,
  workingDay,
  weekend,
  everyday,
  custom,
}

export const RepeatTypeTitle = {
  [RepeatTypeEnum.once]: "启动一次",
  [RepeatTypeEnum.workingDay]: "工作日（周一至周五）",
  [RepeatTypeEnum.weekend]: "周末（周六、周日）",
  [RepeatTypeEnum.everyday]: "每天",
};

export const WeekDayEnum = {
  Monday: "一",
  Tuesday: "二",
  Wednesday: "三",
  Thursday: "四",
  Friday: "五",
  Saturday: "六",
  Sunday: "日",
};

export const WeekDayList = ["一", "二", "三", "四", "五", "六", "日"];

export const getRepeatTypes = () => [
  {
    title: "启动一次",
    type: RepeatTypeEnum.once,
  },
  {
    title: "工作日（周一至周五）",
    type: RepeatTypeEnum.workingDay,
  },
  {
    title: "周末（周六、周日）",
    type: RepeatTypeEnum.weekend,
  },
  {
    title: "每天",
    type: RepeatTypeEnum.everyday,
  },
  {
    title: "自定义",
    type: RepeatTypeEnum.custom,
  },
];

export enum SwitchEnum {
  close = 0,
  open = 1,
}
