import { warn } from "vue";
import { useThrottle } from "@/hooks/useThrottle";

//自定义节流
let fn = useThrottle;

export default {
  beforeMount(el: any, binding: any) {
    const { arg, instance, value } = binding;
    const { param, customInject, wait = 300 } = value || {};
    let { options } = value || {};
    if (!instance?.[arg]) {
      warn(`当前vm没有这个${arg}函数`);
      return;
    }

    options = { leading: true, trailing: false, ...options, customInject };
    el.addEventListener(
      "click",
      fn.apply(instance, [instance[arg].bind(instance, param), wait, options])
    );
  },

  beforeUnmount(el: any) {
    el.removeEventListener("click", fn);
  },
};
