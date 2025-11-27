import { defineStore } from "pinia";
import { debounce } from "lodash-es";

import type { ITimerState, TimerItemType } from "./type";

export const useTimerStore = defineStore("timer", {
  state: (): ITimerState => ({
    timerList: [],
    maxLength: 10,
  }),

  getters: {
    // 定时器数量
    count: (state): number => state.timerList.length,
    // 定时器数量是否到达上限
    canAdd: (state): Boolean => state.timerList.length < state.maxLength,
  },

  actions: {
    getTimer: debounce(
      async () => {
        // 接口获取数据
      },
      300,
      { leading: true }
    ),

    postTimer: debounce(
      async () => {
        //  接口设置
      },
      300,
      { leading: true }
    ),

    add(timer: TimerItemType) {
      if (this.canAdd) {
        this.timerList.push(timer);
      }
    },

    edit(timer: TimerItemType) {
      const index = this.timerList.findIndex((item) => item.id === timer.id);
      this.timerList.splice(index, 1, timer);
    },

    remove(timer: TimerItemType | number) {
      let index = timer;
      // 对象获取下标
      if (typeof timer === "object") {
        index = this.timerList.findIndex((item) => item.id === timer.id);
      }
      if (index !== -1) {
        this.timerList.splice(index, 1);
      }
    },

    // 删除多条
    removeMultiple(list: Array<TimerItemType["id"]>) {
      const map = new Set(list);
      this.timerList = this.timerList.filter(({ id }) => !map.has(id));
    },

    // 清空定时
    clear() {
      this.timerList.length = 0;
    },
  },
});
