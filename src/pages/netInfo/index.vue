<template>
  <van-cell-group v-for="(list, index) in options" :key="index">
    <van-cell
      v-for="item in list"
      :key="item.valueKey"
      :title="item.title"
      :is-link="item.isLink ?? false"
      :value="netInfo[item.valueKey] ?? ''"
    />
  </van-cell-group>
</template>

<script setup lang="ts">
import { netInfo, options } from "./index.ts";
</script>
