<script setup lang="ts">
import { computed, watchEffect } from "vue";
import { useWindowSize } from "@vueuse/core";
import { useStore } from "@/pages/store.ts";
import { storeToRefs } from "pinia";

const { uiInfo } = storeToRefs(useStore());
const theme = computed(() => (uiInfo.value.themeMode === 2 ? "dark" : "light"));

const { width } = useWindowSize();
watchEffect(() => {
  document.documentElement.style.fontSize =
    36 * (Math.min(width.value, 414) / 360) + "px";
});
</script>

<template>
  <van-config-provider :theme="theme">
    <router-view />
  </van-config-provider>
</template>

<style lang="scss">
#app {
  margin: 0;
  font-size: 16px;
  background-color: var(--common-bg-main);
  -webkit-font-smoothing: antialiased;

  overflow-y: scroll;
  height: 100%;

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  --van-base-font: "unset";
}
</style>
