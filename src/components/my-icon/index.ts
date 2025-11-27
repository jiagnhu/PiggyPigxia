import myIcon from "./index.vue";
import type { App, Plugin } from "vue";

export default {
  install(app: App) {
    app.component("my-icon", myIcon);
  },
} as Plugin;
