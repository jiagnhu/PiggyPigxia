type TimeOut = null | ReturnType<typeof setTimeout>;

export default {
  beforeMount(el: any, binding: any) {
    const cb = binding.value;
    if (typeof cb !== "function") {
      return console.warn("v-longpress指令必须接收一个回调函数");
    }
    let timer: TimeOut = null;
    // 重置计时器
    const cancel = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = null;
    };

    const touchstart = (ev: any) => {
      if (timer == null) {
        timer = setTimeout(() => {
          cb();
          cancel();
        }, 600);
      }
      // fixme 会导致内部组件无法触发点击
      ev.preventDefault();
    };

    el.addEventListener("touchstart", touchstart);
    el.addEventListener("touchend", cancel);
    el.addEventListener("click", cancel);
    el.addEventListener("touchmove", cancel);
  },
  unmounted(el: any) {
    // 注销事件
    el.removeEventListener("touchstart", () => {});
    el.removeEventListener("touchend", () => {});
    el.removeEventListener("click", () => {});
    el.removeEventListener("touchmove", () => {});
  },
};
