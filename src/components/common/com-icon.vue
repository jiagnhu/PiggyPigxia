<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    size?: number;
    color?: string;
    backgroundColor?: string;
    active?: boolean;
    activeColor?: string;
    activeBackColor?: string;
    round?: boolean;
    padding: string;
  }>(),
  {
    size: 40,
    backgroundColor: "none",
    active: false,
    activeColor: "#FFFFFF",
    activeBackColor: "#256FFF",
    round: false,
    padding: "8px",
  }
);

const color = computed((): String => {
  return props.color ?? "var(--common-text-color)";
});

const size = computed(() => Number(props.size) / 36 + "rem");
</script>

<template>
  <i :class="['hi-icon', active ? 'is-active' : '', round ? 'is-round' : '']">
    <slot class="hi-icon--svg"></slot>
  </i>
</template>

<style lang="scss" scoped>
.hi-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: v-bind(size);
  height: v-bind(size);
  background-color: v-bind(backgroundColor);
  padding: v-bind(padding);
  box-sizing: border-box;

  :deep(svg) {
    fill: v-bind(color);
  }

  &.is-round {
    border-radius: 50%;
  }

  &.is-active {
    background-color: v-bind(activeBackColor);

    :deep(svg) {
      fill: v-bind(activeColor);
    }
  }
}
</style>
