<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useStore } from "@/pages/store.ts";
import { storeToRefs } from "pinia";
import { serviceList } from "@/pages/service";
import {
  options,
  initData,
  modDevNameDialogShow,
  newDevName,
  devNameDialogBeforeClose,
  roomDialogShow,
  newRoomId,
  newRoomName,
  onModRoomCancel,
  handleModRoom,
  deleteDialogShow,
  onDeleteDevice,
} from "./index.ts";

const store = useStore();
const { devName, roomId, roomList } = storeToRefs(store);
const { changeDevName, getRoomInfo, changeRoom } = store;

const devInfo = computed(() => {
  return {
    name: devName.value,
    roomName: roomList.value.find((item) => item.roomId === roomId.value)
      ?.roomName,
    ssid: serviceList.value?.netInfo?.ssid?.value,
  };
});

// 修改设备名称确认
const onModifyDeviceName = () => {
  if (newDevName.value === "" || newDevName.value === devName.value) {
    return;
  }
  changeDevName(devName.value, newDevName.value);
  devName.value = newDevName.value;
  modDevNameDialogShow.value = false;
};

// 修改所属空间确认
const onModRoomConfirm = () => {
  if (roomId.value === newRoomId.value) return;
  changeRoom(roomId.value, newRoomId.value);
  roomId.value = newRoomId.value;
  roomDialogShow.value = false;
};

onMounted(() => {
  getRoomInfo().then(() => {
    initData(roomList.value);
  });
});
</script>

<template>
  <van-cell-group v-for="(list, index) in options" :key="index">
    <van-cell
      v-for="item in list"
      :key="item.valueKey"
      :title="item.title"
      :is-link="item.isLink"
      :value="devInfo[item.valueKey] ?? ''"
      value-class="singleLine"
      :url="item.url"
      @click="() => item.click && item.click(devInfo[item.valueKey])"
    />
  </van-cell-group>

  <!-- 修改设备名称 -->
  <van-dialog
    v-model:show="modDevNameDialogShow"
    title="设备名称"
    showCancelButton
    confirmButtonColor="#256fff"
    cancelButtonColor="#256fff"
    :before-close="devNameDialogBeforeClose"
    @cancel="modDevNameDialogShow = false"
    @confirm="onModifyDeviceName"
  >
    <van-field v-model.trim="newDevName" placeholder="请输入设备名称" />
  </van-dialog>

  <!-- 修改所属空间 -->
  <com-popup-bottom
    v-model:show="roomDialogShow"
    title="所属空间"
    footer
    @cancel="onModRoomCancel"
    @confirm="onModRoomConfirm"
  >
    <van-radio-group v-model="newRoomId">
      <van-cell-group>
        <van-cell
          v-for="{ roomId, roomName } in roomList"
          :key="roomId"
          :title="roomName"
          @click="handleModRoom(roomId)"
          clickable
        >
          <template #right-icon>
            <van-radio :name="roomId" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
  </com-popup-bottom>

  <!-- 删除设备弹框 -->
  <van-dialog
    v-model:show="deleteDialogShow"
    showCancelButton
    className="dialog--bottom"
    @confirm="onDeleteDevice"
  >
    <template #title>
      <div class="dialog__message--title p-0-20">确认提示</div>
    </template>
    <div class="p-20">是否确认删除</div>
  </van-dialog>
</template>

<style lang="scss" scoped>
.van-dialog.dialog--bottom {
  top: auto;
  right: 16px;
  bottom: 16px;
  left: 16px;
  width: auto;
  transform: none;
}

.dialog__message--title {
  font-size: 18px;
  font-weight: bold;
  text-align: left;
}

.p-20 {
  color: var(--common-text-color);
  padding: 20px;
}

.p-0-20 {
  padding: 0 20px;
}

.singleLine {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
