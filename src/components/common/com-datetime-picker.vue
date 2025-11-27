<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["confirm", "cancel", "update:show"]);

const datetimePickerRef = ref();

const onCancel = () => {
  emits("cancel");
};

const onConfirm = () => {
  const time = datetimePickerRef.value?.getPicker().getValues();
  emits("confirm", time);
};
const onShow = (value) => {
  emits("update:show", value);
};
</script>

<template>
  <com-popup-bottom
    :show="props.show"
    footer
    :title="props.title"
    @update:show="onShow"
    @cancel="onCancel"
    @confirm="onConfirm"
  >
    <van-time-picker
      type="time"
      :show-toolbar="false"
      visible-item-count="5"
      ref="datetimePickerRef"
    />
    <div class="tips leftTips"><span>时</span></div>
    <div class="tips rightTips"><span>分</span></div>
  </com-popup-bottom>
</template>

<style lang="scss" scoped>
.van-picker {
  padding: 8px 24px;
  :deep(.van-picker__columns) {
    .van-picker-column__item {
      font-size: 16px;
    }
    .van-picker-column__item--selected {
      font-size: 24px;
      color: var(--van-primary-color);
    }
  }
}

.tips {
  position: absolute;
  top: 160px;
  color: var(--van-primary-color);
  font-size: 24px;
}
.leftTips {
  left: 133px;
}
.rightTips {
  right: 60px;
}
</style>