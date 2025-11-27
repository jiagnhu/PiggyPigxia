<script setup lang="ts">
import { useI18n } from "vue-i18n";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  footer: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String,
    default: "bottom",
  },
  show: {
    type: Boolean,
    default: false,
  },
  confirmDisable: Boolean,
  popupOptions: {},
  confirmText: {
    type: String,
  },
});

const emits = defineEmits(["confirm", "cancel", "update:show", "close"]);

const { t } = useI18n();
const onCancel = () => {
  emits("cancel");
};

const onConfirm = () => {
  emits("confirm");
};

const onShow = (value: boolean) => {
  emits("update:show", value);
};

const onClose = () => {
  emits("close");
};
</script>

<template>
  <div class="popupContent">
    <van-popup
      :position="props.position"
      v-bind="props.popupOptions"
      :show="props.show"
      @update:show="onShow"
      @close="onClose"
    >
      <!--  header   -->
      <slot name="header" v-if="props.title">
        <div class="popup-padding popup-header">{{ props.title }}</div>
      </slot>
      <!--  default  -->
      <slot></slot>
      <!--  footer button group  -->
      <slot name="footer">
        <van-row v-if="props.footer" class="popup-footer popup-padding">
          <van-col :span="12" @click="onCancel"> {{ t("Cancel") }} </van-col>
          <van-col :span="12" @click="onConfirm">
            <button
              :disabled="confirmDisable"
              :class="confirmDisable && 'is-disabled'"
            >
              {{ props.confirmText ?? t("Confirm") }}
            </button>
          </van-col>
        </van-row>
      </slot>
    </van-popup>
  </div>
</template>

<style lang="scss" scoped>
.popupContent {
  :deep(.van-popup) {
    overflow: hidden;
    margin: 16px;
    border-radius: 16px;
    width: auto;
    right: 0;
    left: 0;
  }
}
@media only screen and (min-width: 700px) {
  .popupContent {
    :deep(.van-popup) {
      overflow: hidden;
      border-radius: 16px;
      left: 25%;
      bottom: 10%;
      width: 50%;
    }
  }
}

.popup {
  &-padding {
    padding: 0 24px;
  }
  &-header {
    height: 56px;
    font-weight: bold;
    font-size: 20px;
    line-height: 56px;
    color: var(--common-title-text-color);
  }
  &-footer {
    height: 56px;
    text-align: center;
    color: var(--van-primary-color);
    line-height: 56px;
    font-size: 20px;
    margin-top: 8px;

    button {
      border-color: transparent;
      background: transparent;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      &.is-disabled {
        color: #a8abb2;
        cursor: not-allowed;
        background-image: none;
        background-color: #ffffff;
      }
    }
  }
}
</style>
