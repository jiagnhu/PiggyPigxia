import { throttle as throttleFn, debounce as debounceFn } from "lodash-es";
import { warn } from "vue";

let fn = throttleFn;
export default {
  beforeMount(el, binding) {
    const { arg, instance, modifiers, value } = binding;
    const { param, wait = 500 } = value || {};
    let { options } = value || {};
    // 默认是false
    const { throttle } = modifiers;
    // 如果当前vm没有这个函数;则直接返回
    if (!instance?.[arg]) {
      warn(`当前vm没有这个${arg}函数`);
      return;
    }
    // 如果不是节流指令
    if (!throttle) {
      // 默认是防抖指令并且防抖指令设置了第一次立即执行以及延
      // 如果设置了节流才是节流函数；例：v-operate:xx.throttle
      fn = debounceFn;
      // 给防抖指令设置默认的options
      options = { ...{ leading: true, trailing: false }, ...options };
    }
    el.addEventListener(
      "click",
      fn.apply(instance, [instance[arg].bind(instance, param), wait, options])
    );
  },
  beforeUnmount(el) {
    el.removeEventListener("click", () => fn());
  },
};
