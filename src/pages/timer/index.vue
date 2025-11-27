<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { onLongPress } from "@vueuse/core";
import router from "@/router/index.ts";
import { useTimerStore } from "./store";
import {
  selectedTimeList,
  isMultiple,
  navTitle,
  getDay,
  onAddTimer,
  onClickLeft,
  onLongPressCallBack,
} from "./index.ts";

const store = useTimerStore();

const timerList = computed(() => store.timerList);

onMounted(() => {
  if (timerList.value.length > 0) {
    timerList.value.forEach((item) => {
      if (item.longPressRef) {
        onLongPress(item.longPressRef, onLongPressCallBack, {
          modifiers: { stop: true, self: true },
        });
      }
    });
  }
});

// 全选删除提示弹窗
const delAllVisible = ref(false);
// 用于组件同步数据
const checkboxRefs = ref([]);
// 选中单个数据
const onToggle = (item) => {
  item.checkRef?.toggle();
};
const onDelete = (index) => {
  store.remove(index);
};
const onEdit = (item) => {
  // @ts-ignore
  delete item.checkRef;
  delete item.longPressRef;
  router.push({
    path: "addTimer",
    query: { timer: JSON.stringify(item) },
  });
};
// 多选逻辑 ------------------
// 是否全选
// ! checkboxGroupRef 只能写在同一个文件
const checkboxGroupRef = ref(null);
const isSelectedAll = computed(() => {
  if (selectedTimeList.value.length === 0) {
    return false;
  }
  return selectedTimeList.value.length === store.timerList.length;
});

const onToggleAll = () => {
  checkboxGroupRef.value?.toggleAll(!isSelectedAll.value);
};

// 选择删除
const onConfirm = () => {
  store.removeMultiple(selectedTimeList.value);
  selectedTimeList.value.length = 0;
  isMultiple.value = false;
  // 返回首页
  if (timerList.value.length === 0) {
    onClickLeft();
  }
};

const onDeleteSelectedTime = async () => {
  delAllVisible.value = true;
  checkboxRefs.value.length = 0;
};
</script>

<template>
  <div class="layout-header">
    <van-nav-bar @click-left="onClickLeft" :title="navTitle">
      <template #left>
        <my-icon name="IcBack" style="background: none" />
      </template>
    </van-nav-bar>
  </div>

  <div class="timer-list">
    <!--  列表页  -->
    <van-checkbox-group v-model="selectedTimeList" ref="checkboxGroupRef">
      <van-cell-group>
        <van-swipe-cell
          v-for="(item, index) in timerList"
          :disabled="isMultiple"
          :key="item.id"
        >
          <van-cell
            class="cellClass"
            :clickable="isMultiple"
            @click.stop="onToggle(item)"
          >
            <template #title>
              <div>
                <div>{{ `${item.openTime}开 - ${item.closeTime}关` }}</div>
                <div style="color: #666">{{ getDay(item) }}</div>
                <!--  todo longpress 阻止了事件冒泡，导致多选时，无法点击cell，怎么优化  -->
                <!--  todo 没必要每个cell都加事件  -->
                <div
                  :ref="(el) => (item.longPressRef = el)"
                  v-show="!isMultiple"
                  @click="onEdit(item)"
                  :style="{
                    position: 'absolute',
                    top: '0 ',
                    bottom: '0 ',
                    left: '0 ',
                    right: '0 ',
                  }"
                ></div>
              </div>
            </template>
            <template #right-icon>
              <van-switch v-show="!isMultiple" v-model="item.use" @click.stop />
              <van-checkbox
                v-show="isMultiple"
                :name="item.id"
                :ref="(el) => (item.checkRef = el)"
                @click.stop
                shape="square"
              />
            </template>
          </van-cell>
          <template #right>
            <div class="flex flex-center operateCell">
              <van-button
                round
                type="danger"
                icon="delete"
                @click="onDelete(index)"
                class="btn"
              />
              <!-- <van-button
                round
                type="primary"
                icon="edit"
                @click="onEdit(index)"
                style="width: 1rem; height: 1rem; margin-left: 0.3rem"
              /> -->
            </div>
          </template>
        </van-swipe-cell>
      </van-cell-group>
    </van-checkbox-group>
  </div>

  <!-- 按钮组 -->
  <div class="timer-bottom">
    <van-row v-show="isMultiple" flex align="center" justify="space-around">
      <van-col :span="12" style="text-align: center">
        <com-button
          @click="onDeleteSelectedTime"
          type="danger"
          custom
          round
          plain
          noBorder
        >
          删除
        </com-button>
      </van-col>

      <van-col :span="12" style="text-align: center">
        <com-button
          round
          plain
          custom
          noBorder
          type="primary"
          @click="onToggleAll"
        >
          {{ isSelectedAll ? "取消全选" : "全选" }}
        </com-button>
      </van-col>
    </van-row>
    <van-row v-show="!isMultiple" flex align="center" justify="center">
      <com-button type="primary" round @click="onAddTimer">添加</com-button>
    </van-row>
  </div>

  <van-dialog
    v-model:show="delAllVisible"
    showCancelButton
    className="dialog--bottom"
    @confirm="onConfirm"
    @cancel="delAllVisible = false"
    confirmButtonColor="red"
  >
    <div class="cs-dialog__message van-dialog__message">是否删除所选定时</div>
  </van-dialog>
</template>

<style lang="scss" scoped>
@use "./style/index.scss" as *;

.layout-header {
  height: var(--layout-header__height);
  z-index: 9999;

  :deep(.van-nav-bar) {
    position: fixed;
    width: 100%;
  }
}

:deep(.van-cell-group) {
  margin: 0;
  padding: 0;
}

.timer-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;

  .button-custom {
    background-color: #ebeef5;
    @include button-custom(130, 28);

    &-border--none {
      border: none;
    }
  }
}
</style>
