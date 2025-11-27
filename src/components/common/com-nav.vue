<template>
  <van-nav-bar
    :title="title"
    @click-left="onClickBack"
    @click-right="onClickRight"
    :border="false"
  >
    <template #left>
      <my-icon name="IcBack" style="background: none" />
    </template>
    <template #right v-if="props.children.length > 0">
      <my-icon name="MoreFilled" style="background: none" />
    </template>
  </van-nav-bar>
  <van-overlay :show="showMoreMenu" @click="showMoreMenu = false">
    <div class="wrapper" @click.stop>
      <div
        v-for="(item, index) in props.children"
        :key="index"
        class="item"
        @click="onClickMenu(index)"
      >
        <span>{{ item.title }}</span>
      </div>
    </div>
  </van-overlay>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/pages/store.ts";
import { storeToRefs } from "pinia";
import { exitDeviceActivity } from "@/hoLink";
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  isQuit: {
    type: Boolean,
    default: false,
  },
  children: {
    type: Array,
    default: [],
  },
  contentTop: {
    type: String,
  },
});
const router = useRouter();
const showMoreMenu = ref(false);
const { offline } = storeToRefs(useStore());

const onClickBack = () => {
  if (props.isQuit) {
    exitDeviceActivity();
  } else {
    router.go(-1);
  }
};
const onClickRight = () => {
  if (!offline.value) {
    showMoreMenu.value = true;
  }
};

const onClickMenu = (index) => {
  const jumpInfo: any = props.children[index];
  router.push({
    path: jumpInfo.path,
  });
  showMoreMenu.value = false;
};
</script>
<style lang="scss" scoped>
.van-overlay {
  background: unset;
  z-index: 999;
  .wrapper {
    background-color: var(--common-bg-card);
    border-radius: 10px;
    position: absolute;
    right: 16px;
    top: v-bind("props.contentTop");
    width: 180px;
    .item {
      padding: 15px;
      color: var(--common-text-color);
    }
  }
}
</style>
