<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
import { showToast } from "@/hooks";
import { useStore } from "@/pages/store";

defineOptions({
  name: "com-status",
  inheritAttrs: false,
});

const { t } = useI18n();

const props = defineProps({
  opacity: {
    type: Boolean,
    required: true,
  },
  // 阻止点击透传，true 时，当离线或关机时将禁用子元素点击（css）
  preventEvent: {
    type: Boolean,
    required: true,
  },
  offlineToast: {
    type: Boolean,
    default: true,
  },
  offlineTip: {
    type: String,
    default: "",
  },
});

const is = (condition, state) => (condition ? `is-${state}` : "");

const { offline } = storeToRefs(useStore());

const onclick = () => {
  if (offline.value && props.offlineToast) {
    showToast(props.offlineTip || t("offlineTip"));
  }
};
</script>

<template>
  <div
    :class="[is(opacity, 'opacity'), is(preventEvent, 'preventEvent')]"
    @click="onclick"
  >
    <slot v-bind="$attrs" />
  </div>
</template>

<style lang="scss">
.is-opacity {
  opacity: var(--offline__opacity);
}
// 禁用子元素点击
.is-preventEvent > * {
  pointer-events: none;
}
</style>
