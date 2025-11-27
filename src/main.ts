import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./app.vue";
import router from "@/router/index.ts";
import { i18n } from "@/config/locale";
import MyIcon from "@/components/my-icon/index";
import ComComponents from "./components/common";
import directives from "@/directives";
import { useHonorLink } from "@/hoLink";

import "@/assets/style/index.scss";

useHonorLink({
  log: true,
});

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(createPinia());
app.use(MyIcon);
app.use(ComComponents);
app.use(directives);

app.mount("#app");
