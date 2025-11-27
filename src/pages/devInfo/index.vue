<template>
  <van-cell-group v-for="(list, index) in options" :key="index">
    <van-cell
      v-for="item in list"
      :key="item.valueKey"
      :title="item.title"
      :is-link="item.isLink ?? false"
      value-class="info-cell__value"
      :value="devInfo[item.valueKey]"
    />
  </van-cell-group>
</template>

<script setup lang="ts">
import { devInfo, options } from "./index.ts";
</script>

<style lang="scss" scoped>
:deep(.van-cell__value) {
  flex: none;
  width: 60%;
  line-height: normal !important;
}
</style>
