import type { App, Plugin } from 'vue';
import { toPairs } from 'lodash-es';
import longpress from './longpress';
import operate from './operate';
import debounce from './debounce';
import throttle from './throttle';

export default {
  install(app: App) {
    toPairs({ longpress, operate, debounce, throttle }).forEach(([name, comp]) =>
      app.directive(name, comp)
    );
  },
} as Plugin;
