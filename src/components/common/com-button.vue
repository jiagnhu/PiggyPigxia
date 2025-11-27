<template>
  <van-button
    v-bind="$attrs"
    class="com-button"
    :style="{
      width: `${props.width}px`,
      height: `${props.height}px`,
    }"
    :class="[
      props.noBorder ? 'com-button--border__none' : '',
      props.custom ? 'com-button-custom' : '',
    ]"
  >
    <slot></slot>
  </van-button>
</template>

<script setup lang="ts">
const props = defineProps({
  width: {
    type: Number,
    default: 130,
  },
  height: {
    type: Number,
    default: 32,
  },
  noBorder: {
    type: Boolean,
    default: false,
  },
  custom: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
.com-button {
  &-custom {
    background-color: #e9e9eb !important;
  }

  &--border__none {
    border: none !important;
  }
}
</style>
