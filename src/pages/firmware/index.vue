<script setup lang="ts">
import { computed, ref, reactive, onBeforeUnmount } from "vue";
import { serviceList } from "@/pages/service";

const versions = computed(() => {
  const { ota, deviceInfo } = serviceList.value;
  return {
    newVersion: ota?.newVersion?.value || "1.11.001.1",
    currentVersion: deviceInfo?.firmwareVersion?.value || "1.11.001.0",
    hasNew: true,
    size: ota?.size?.value || "2.6M",
    log:
      ota?.changelog?.value ||
      "这里是更新内容日志，提示本次更新重点提升的性能指标或体验。",
  };
});

const versionState = reactive({ ...versions.value });
const hasNew = ref(versionState.hasNew);

const phase = ref<"list" | "detail" | "download" | "install" | "done">(
  "list"
);
const progress = ref(68);
let timer: number | undefined;
let checkTimer: number | undefined;
const checkStatus = ref<"idle" | "checking">("idle");

const openDetail = () => {
  if (!hasNew.value) return;
  phase.value = "detail";
};

const startDownload = () => {
  phase.value = "download";
  progress.value = 68;
  startProgress("download");
};

const startInstall = () => {
  phase.value = "install";
  progress.value = 68;
  startProgress("install");
};

const startProgress = (targetPhase: "download" | "install") => {
  clearTimer();
  timer = window.setInterval(() => {
    if (progress.value >= 100) {
      clearTimer();
      if (targetPhase === "download") {
        startInstall();
      } else {
        phase.value = "done";
      }
      return;
    }
    progress.value += 4;
  }, 400);
};

const clearTimer = () => {
  if (timer) {
    clearInterval(timer);
    timer = undefined;
  }
};

const startCheck = () => {
  if (checkStatus.value === "checking") return;
  checkStatus.value = "checking";
  hasNew.value = false;
  clearCheckTimer();
  checkTimer = window.setTimeout(() => {
    checkStatus.value = "idle";
  }, 1500);
};

const clearCheckTimer = () => {
  if (checkTimer) {
    clearTimeout(checkTimer);
    checkTimer = undefined;
  }
};

const finishAndBack = () => {
  versionState.currentVersion = versionState.newVersion;
  hasNew.value = false;
  phase.value = "list";
  progress.value = 68;
  checkStatus.value = "idle";
};

onBeforeUnmount(() => {
  clearTimer();
  clearCheckTimer();
});
</script>

<template>
  <div class="firmware-page">
    <template v-if="phase === 'list'">
      <section class="hero">
        <img src="/images/piggy.png" alt="猪猪侠" class="hero__img" />
        <p class="hero__tip">
          <template v-if="hasNew">发现新版本</template>
          <template v-else-if="checkStatus === 'checking'">正在检查...</template>
          <template v-else>已是最新版本</template>
        </p>
      </section>

      <section class="card version-card">
        <div
          v-if="hasNew"
          class="version-row"
          role="button"
          @click="openDetail"
        >
          <div>
            <p class="version-row__title">
              新版本
              <span class="dot" v-if="hasNew"></span>
            </p>
            <p class="version-row__desc">{{ versionState.newVersion }}</p>
          </div>
          <van-icon name="arrow" color="#c0c0c0" />
        </div>

        <div v-if="hasNew" class="divider"></div>

        <div class="version-row">
          <div>
            <p class="version-row__title">当前版本</p>
            <p class="version-row__desc">{{ versionState.currentVersion }}</p>
          </div>
          <van-icon name="arrow" color="#c0c0c0" />
        </div>
      </section>

      <van-button
        type="primary"
        round
        block
        class="check-btn"
        :disabled="checkStatus === 'checking'"
        :color="checkStatus === 'checking' ? '#e6e6e6' : undefined"
        :text-color="checkStatus === 'checking' ? '#9aa3ad' : undefined"
        @click="startCheck"
      >
        {{ checkStatus === "checking" ? "正在检查" : "检查更新" }}
      </van-button>
    </template>

    <template v-else-if="phase === 'detail'">
      <section class="hero">
        <img src="/images/piggy.png" alt="猪猪侠" class="hero__img" />
        <p class="detail__version">{{ versionState.newVersion }}</p>
        <p class="detail__size">大小： {{ versionState.size }}</p>
      </section>

      <section class="card changelog">
        <div class="changelog__header">
          <span>更新日志</span>
          <van-icon name="arrow-down" />
        </div>
        <p class="changelog__text">
          {{ versionState.log }}
        </p>
      </section>

      <van-button type="primary" round block class="check-btn" @click="startDownload">
        下载并安装
      </van-button>
    </template>

    <template v-else-if="phase === 'download' || phase === 'install'">
      <section class="download">
        <van-circle
          :rate="progress"
          size="200"
          :text="`${progress}%`"
          layer-color="#e6e6e6"
          :color="{
            '0%': '#5f9dff',
            '100%': '#2f7bff',
          }"
          :stroke-width="12"
          text-color="#111"
          :speed="100"
        />
        <p class="download__status">
          {{ phase === "download" ? "下载中..." : "正在安装..." }}
        </p>
        <p class="detail__version">{{ versionState.newVersion }}</p>
        <p class="detail__size">大小： {{ versionState.size }}</p>
      </section>

      <section class="card changelog">
        <div class="changelog__header">
          <span>更新日志</span>
          <van-icon name="arrow-down" />
        </div>
        <p class="changelog__text">
          {{ versionState.log }}
        </p>
      </section>

      <van-button round block class="cancel-btn">取消</van-button>
    </template>

    <template v-else>
      <section class="download">
        <van-circle
          :rate="100"
          size="200"
          text="100%"
          layer-color="#e6e6e6"
          :color="{
            '0%': '#5f9dff',
            '100%': '#2f7bff',
          }"
          :stroke-width="12"
          text-color="#111"
          :speed="100"
        />
        <p class="download__status">安装完毕...</p>
      </section>
      <van-button type="primary" round block class="check-btn" @click="finishAndBack">
        我知道了
      </van-button>
    </template>
  </div>
</template>

<style scoped lang="scss">
.firmware-page {
  min-height: calc(100vh - 56px);
  background: var(--common-bg-main);
  padding: 16px 16px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  box-sizing: border-box;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;

  &__img {
    width: 240px;
    height: 240px;
    object-fit: contain;
  }

  &__tip {
    margin: 10px 0 0;
    font-size: 18px;
    font-weight: 600;
    color: var(--common-text-color);
  }
}

.card {
  width: 100%;
  background: var(--common-bg-card);
  border-radius: 18px;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.06);
  padding: 14px 16px;
}

.version-card {
  .version-row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__title {
      font-size: 16px;
      color: var(--common-text-color);
      display: flex;
      align-items: center;
      gap: 6px;
    }

    &__desc {
      margin-top: 6px;
      color: #7a828a;
    }
  }
}

.divider {
  height: 1px;
  background: #eef0f3;
  margin: 12px 0;
}

.dot {
  width: 8px;
  height: 8px;
  background: #ff3b30;
  border-radius: 50%;
  display: inline-block;
}

.check-btn {
  width: 200px;
  margin-top: 12px;
}

.download {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 12px;

  &__status {
    margin: 12px 0 0;
    font-size: 16px;
    color: var(--common-text-color);
  }
}

.detail__version {
  margin: 12px 0 4px;
  font-size: 20px;
  font-weight: 600;
  color: var(--common-text-color);
}

.detail__size {
  margin: 0;
  color: #9aa3ad;
}

.changelog {
  width: 100%;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    color: var(--common-text-color);
    margin-bottom: 8px;
  }

  &__text {
    margin: 0;
    color: #555b63;
    line-height: 1.5;
  }
}

.cancel-btn {
  width: 200px;
  margin-top: 12px;
  background: #e6e6e6;
  color: #2f7bff;
  border: none;
}

:deep(.van-circle__text) {
  font-size: 32px;
  font-weight: 600;
}
</style>
