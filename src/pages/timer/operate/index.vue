<template>
  <van-cell
    title="重复"
    is-link
    :value="repeatTitle"
    @click="showRepeat = true"
  />
  <div class="split-line"></div>
  <van-cell title="定时开启">
    <template #right-icon>
      <van-switch v-model="isOpen" size="24" />
    </template>
  </van-cell>
  <van-cell title="开启时间" is-link @click="onOpenTime">
    <template #value>
      <span>{{ openTime }}</span>
    </template>
  </van-cell>
  <div class="split-line"></div>
  <van-cell title="定时关闭">
    <template #right-icon>
      <van-switch v-model="isClose" size="24" />
    </template>
  </van-cell>
  <van-cell title="关闭时间" is-link @click="onCloseTime">
    <template #value>
      <span>{{ closeTime }}</span>
    </template>
  </van-cell>

  <van-row flex justify="center" class="add-time--footer">
    <van-col :span="12">
      <com-button type="primary" plain custom noBorder round @click="goBack"
        >取消</com-button
      >
    </van-col>
    <van-col :span="12">
      <com-button
        type="primary"
        plain
        custom
        noBorder
        round
        @click="handleSubmit"
        >确定</com-button
      >
    </van-col>
  </van-row>

  <com-popup-bottom v-model:show="showTimeSelect">
    <van-time-picker type="time" title="选择时间" @confirm="onSelectTime" />
  </com-popup-bottom>

  <com-popup-bottom
    v-model:show="showRepeat"
    title="重复"
    footer
    @confirm="handleRepeatConfirm"
  >
    <van-radio-group v-model="repeatType">
      <van-cell-group>
        <van-cell
          v-for="{ title, type } in repeatTypeList"
          :key="type"
          :title="title"
          @click="handleCustom(type)"
          clickable
        >
          <template #right-icon>
            <van-radio :name="type" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
  </com-popup-bottom>

  <com-popup-bottom
    v-model:show="showCustomDay"
    footer
    title="自定义"
    :confirmDisable="customDayBtnDisable"
    @confirm="handleCustomConfirm"
  >
    <van-checkbox-group v-model="customSelected">
      <van-cell-group>
        <van-cell
          v-for="(title, index) in customDayEnum"
          :key="title"
          :title="`周${title}`"
          @click="toggle(index)"
          clickable
        >
          <template #right-icon>
            <van-checkbox
              :name="title"
              :ref="(el) => (checkboxRefs[index] = el)"
              @click.stop
              shape="square"
            />
          </template>
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>
  </com-popup-bottom>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useTimerStore } from "@/pages/timer/store.ts";
import { useRoute, useRouter } from "vue-router";
import {
  customDayEnum,
  repeatTypeList,
  repeatType,
  showCustomDay,
  customSelected,
  checkboxRefs,
  showRepeat,
  isOpen,
  isClose,
  showTimeSelect,
  closeTime,
  openTime,
  repeatTitle,
  customDayBtnDisable,
  toggle,
  handleCustom,
  handleRepeatConfirm,
  handleCustomConfirm,
  onSelectTime,
  onOpenTime,
  onCloseTime,
  resetForm,
  initForm,
} from "./index.ts";
// store
const store = useTimerStore();
const router = useRouter();
const { timer } = useRoute().query;
// @ts-ignore
const editTimer = timer ? JSON.parse(timer) : "";
const isEdit = ref(false);

const goBack = () => {
  router.push({
    path: store.count === 0 ? "/home" : "/timer",
  });
};

const handleSubmit = () => {
  // if (!isOpen.value && !isClose.value) {
  //   Toast({
  //     message: "需启用开启或关闭时间",
  //     position: "bottom",
  //   });
  //   return;
  // }
  // if (openTime.value === closeTime.value) {
  //   Toast({
  //     message: "开启与关闭时间不可相同",
  //     position: "bottom",
  //   });
  //   return;
  // }
  const timer = reactive({
    id: "",
    use: false,
    repeat: {
      type: repeatType.value,
      custom: customSelected.value,
    },
    open: isOpen.value ? 1 : 0,
    openTime: openTime.value,
    close: isClose.value ? 1 : 0,
    closeTime: closeTime.value,
  });
  if (isEdit.value) {
    timer.id = editTimer.id;
    timer.use = editTimer.use;
    store.edit(timer);
  } else {
    timer.id = Date.now().toString();
    store.add(timer);
  }
  goBack();
};
if (editTimer) {
  isEdit.value = true;
  // @ts-ignore
  initForm(editTimer);
} else {
  isEdit.value = false;
  resetForm();
}
</script>

<style lang="scss" scoped>
.split-line {
  display: flex;
  border: 0;
  background-color: var(--common-bg-main);
  height: 8px;
}
@mixin position-bottom($bottom) {
  position: fixed;
  left: 0;
  right: 0;
  bottom: $bottom;
}
.add-time {
  &--footer {
    text-align: center;
    @include position-bottom(20px);
  }
}
</style>
