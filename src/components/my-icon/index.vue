<template>
  <i class="iconbox" @click="clickBtn">
    <component :is="comp" class="icon" />
  </i>
</template>

<script setup lang="ts">
import { computed } from "vue";
import SvgComponents from "./svg/index";
import { pxToRem } from "@/utils/commonUtil.ts";

/**
 * 名称：Icon
 * @param name String required
 * @param color String
 * 使用方式：在 template 中使用 <icon name="bug"/>
 */
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: "24",
  },
  showBg: {
    type: Boolean,
    default: false,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  fill: {
    type: String,
    defalut: "var(--common-title-text-color)",
  },
});

const emits = defineEmits(["clickBtn"]);
const comp = computed(() => SvgComponents[props.name]);

const clickBtn = () => {
  emits("clickBtn");
};

const iconboxSize = computed((): string => {
  return pxToRem(props.size);
});

// fixme 这里不是 icon 的功能，是 button
const backgroundColor = computed((): string => {
  if (props.showBg) {
    return props.selected ? "#256FFF" : "var(--common-icon-unselect-bg)";
  } else {
    return "var(--common-bg-card)";
  }
});

const iconColor = computed((): String => {
  if (props.fill) {
    return props.fill;
  } else if (props.selected) {
    return props.showBg ? "#FFFFFF" : "#256FFF";
  } else {
    return "var(--common-text-color)";
  }
});
</script>

<style lang="scss" scoped>
.iconbox {
  width: v-bind(iconboxSize);
  height: v-bind(iconboxSize);
  background-color: v-bind(backgroundColor);
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon {
  width: 24px;
  height: 24px;
  fill: v-bind(iconColor);
  overflow: hidden;
}
</style>
