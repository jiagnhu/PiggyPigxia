<script setup lang="ts">
import { computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
import { StatusBarHeightKey } from "@/config/constans";
import { useDeviceEvent, usePause, useResume } from "@/hooks";
import { useStore } from "@/pages/store.ts";
import { pxToRem } from "@/utils/commonUtil.ts";
import {
  getAppLanguageSync,
  getScreenSpreaded,
  getThemeMode,
} from "@/api/api.ts";
import { useLanuguage } from "@/pages/frame/useLanuguage";
import { isNumber } from "lodash-es";
import type { LanguageType } from "@/config/constans";

/** 业务 */
const store = useStore();
const { uiInfo, devName, offline } = storeToRefs(store);
const { updateService, updateNavHeight, setNavHeight } = store;
const { locale } = useI18n();

const updataLanguage = (language: LanguageType) => {
  uiInfo.value.language = language;
  locale.value = uiInfo.value.language;
  useLanuguage(uiInfo.value.language);
};

onBeforeMount(async () => {
  // app 切换到前台调用
  useResume((result: any) => {
    console.log("useResume app切换到前台调用 === ", result);
    if (!result) return;
    const { statusBarHeight, language, themeMode } = result;
    if (isNumber(statusBarHeight)) {
      setNavHeight(StatusBarHeightKey);
    }

    if (language) {
      updataLanguage(language);
    }

    if (themeMode) {
      uiInfo.value.themeMode = themeMode;
    }
  });

  // app 切换到后台调用
  usePause((result: any) => {
    console.log("usePause app切换到后台调用 === ", result);
  });

  // 监听设备数据上报
  useDeviceEvent((result: any) => {
    updateService(result);
  });

  // 获取 手机状态栏高度、APP语言、主题、折叠屏状态
  await updateNavHeight();

  await getAppLanguageSync().then((res: LanguageType) => {
    updataLanguage(res);
  });

  await getThemeMode().then((res: 1 | 2) => {
    uiInfo.value.themeMode = res;
  });

  await getScreenSpreaded().then((res: 1 | 2) => {
    uiInfo.value.spreadedMode = res;
  });
});

const route = useRoute();
const currentMeta = computed(() => {
  if (route.path === "/home" && devName.value) {
    route.meta.navTitle = devName.value;
  }
  return route.meta ?? {};
});

const statusBarRemHeight = computed(() =>
  pxToRem(uiInfo.value.statusBarHeight)
);

const contentTop = computed(() => {
  const statusBarHeight = uiInfo.value.statusBarHeight || 0;
  const tmp = currentMeta.value.isShowNav
    ? statusBarHeight + 56
    : statusBarHeight;
  return pxToRem(tmp);
});

const init = async () => {
  updataLanguage(await getAppLanguageSync());
};

init();
</script>

<template>
  <div class="layout">
    <div class="layout-header__wrapper">
      <div class="layout-statusBar"></div>
      <div class="layout-header" v-if="currentMeta.isShowNav">
        <com-nav
          :title="currentMeta.navTitle"
          :isQuit="currentMeta.isQuit"
          :children="currentMeta.children"
          :contentTop="contentTop"
        />
      </div>
    </div>

    <div class="layout-content">
      <div class="layout-content__wrapper">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  &-header__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: v-bind(contentTop);
  }

  &-statusBar {
    height: v-bind(statusBarRemHeight);
    top: 0;
  }

  &-header {
    height: 56px;
    top: v-bind(statusBarRemHeight);
  }

  &-content {
    position: absolute;
    top: v-bind(contentTop);
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1; // 覆盖底色
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */
    }
  }
}

@media only screen and (min-width: 700px) {
  .layout {
    &-content {
      display: flex;
      justify-content: center;
      &__wrapper {
        position: relative;
        width: 80%;
      }
    }
  }
}
</style>
