<script lang="ts" setup>
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";
import { watchThrottled } from "@vueuse/core";
import { useStore } from "@/pages/store.ts";
import { colorBlend, pxToRem } from "@/utils/commonUtil.ts";
import {
  CCT_MIN,
  CCT_MAX,
  ThemeMode,
  NavBarHeight,
  HomeIdeImgHeight,
} from "@/config/constans";
import { isNumber } from "lodash-es";

const { uiInfo, offline, power, brightness, colorTemperature } = storeToRefs(
  useStore()
);
const is = (statue: boolean, name: string) => (statue ? `is-${name}` : "");
const getHeight = (value: any): number => (isNumber(value) ? value : 0);

// 56: 导航栏高度 244: 图片高度
const bgHeight = computed(() =>
  pxToRem(
    getHeight(uiInfo.value.statusBarHeight) +
      getHeight(NavBarHeight) +
      getHeight(HomeIdeImgHeight)
  )
);

/** 透明度 */
// 开关机状态
const off = computed(() => offline.value || power.value !== 1);
// 透明度调节为 50%~100%，离线或关灯时不设置透明度
const calcOpacity = (brightness = 0) => brightness / 200 + 0.5;
const opacity = ref(calcOpacity(brightness.value));
watchThrottled(
  [brightness, off],
  () => {
    opacity.value = off.value ? 1 : calcOpacity(brightness.value);
  },
  { throttle: 100, immediate: true }
);

/** 色温 */
// 色温变化范围
const theme = computed(() => uiInfo.value.themeMode as ThemeMode);
const BgColors = {
  [ThemeMode.light]: { warm: "#ffe6c0", cold: "#e2eeff" },
  [ThemeMode.dark]: { warm: "#99784B", cold: "#496690" },
};
// 计算色温范围，用于计算混合颜色分母
const colorStep = CCT_MAX - CCT_MIN;
const defBg = BgColors[theme.value] ?? BgColors[ThemeMode.light];
const startColor = ref(defBg.warm);
const endColor = ref(defBg.warm + "00");
watchThrottled(
  [colorTemperature, theme],
  () => {
    const { warm, cold } = BgColors[theme.value] ?? BgColors[ThemeMode.light];
    const mixed = colorBlend(
      warm,
      cold,
      (colorTemperature.value - CCT_MIN) / colorStep
    );
    startColor.value = mixed;
    endColor.value = mixed + "00";
  },
  { throttle: 100, immediate: true }
);
</script>

<template>
  <Teleport to="#app">
    <div
      :class="['home-bg', is(off, 'off'), is(power, 'on')]"
      :style="{
        opacity,
        '--light-on-start-color': startColor,
        '--light-on-end-color': endColor,
        '--light-bg-height': bgHeight,
      }"
    ></div>
  </Teleport>
</template>

<style lang="scss" scoped>
@mixin when($state) {
  @at-root {
    &.is-#{$state} {
      @content;
    }
  }
}

.home-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
  width: 100%;
  height: var(--light-bg-height);

  @include when(on) {
    background: linear-gradient(
      var(--light-on-start-color),
      var(--light-on-end-color)
    );
  }

  // 注意顺序
  @include when(off) {
    background: linear-gradient(
      var(--light-off-start-color),
      var(--light-off-end-color)
    );
  }
}
</style>
