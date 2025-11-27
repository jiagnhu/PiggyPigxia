import { toPairs } from "lodash-es";
import ComButton from "./com-button.vue";
import ComPopupBottom from "./com-popup-bottom.vue";
import ComNav from "./com-nav.vue";
import ComStatus from "./com-status.vue";
import type { App, Plugin } from "vue";

export default {
  install(app: App) {
    toPairs({
      ComButton,
      ComPopupBottom,
      ComNav,
      ComStatus,
    }).forEach(([name, comp]) => app.component(name, comp));
  },
} as Plugin;
