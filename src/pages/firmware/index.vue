<script setup lang="ts">
import { computed, ref, reactive, onBeforeUnmount, onMounted } from "vue";
import { serviceList } from "@/pages/service";
import { getDeviceServices } from "@/api/api";
import { useI18n } from "vue-i18n";

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
const hasNew = ref(false);
const { t } = useI18n();

const phase = ref<"list" | "detail" | "download" | "install" | "done">(
  "list"
);
const progress = ref(0);
const progressText = computed(() => `${Math.round(progress.value)}%`);
let timer: number | undefined;
let checkTimer: number | undefined;
let otaPollTimer: number | undefined;
const checkStatus = ref<"idle" | "checking">("idle");

const openDetail = () => {
  if (!hasNew.value) return;
  phase.value = "detail";
};

const startDownload = () => {
  phase.value = "download";
  progress.value = 0;
  startProgress("download");
  startOtaPolling();
};

const startInstall = () => {
  phase.value = "install";
  progress.value = 0;
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
  }, 400);
};

const clearTimer = () => {
  if (timer) {
    clearInterval(timer);
    timer = undefined;
  }
};

const clearOtaPoll = () => {
  if (otaPollTimer) {
    clearInterval(otaPollTimer);
    otaPollTimer = undefined;
  }
};

const startCheck = () => {
  if (checkStatus.value === "checking") return;
  checkStatus.value = "checking";
  hasNew.value = false;
  fetchOtaInfo().finally(() => {
    checkStatus.value = "idle";
  });
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
  progress.value = 0;
  checkStatus.value = "idle";
  clearOtaPoll();
};

onBeforeUnmount(() => {
  clearTimer();
  clearCheckTimer();
  clearOtaPoll();
});

const parseOtaFromServiceList = (list: any[]) => {
  let status: number | undefined = undefined;
  let prog: number | undefined = undefined;
  let newVersion: string | undefined = undefined;
  let intro: string | undefined = undefined;
  let size: string | undefined = undefined;
  let checkResult: number | undefined = undefined;

  list?.forEach((service: any) => {
    if (service?.id !== "ota") return;
    service.propertyList?.forEach((p: any) => {
      if (p.id === "otaStatus") status = Number(p.value);
      if (p.id === "otaProgress") prog = Number(p.value);
      if (p.id === "newVersion") newVersion = String(p.value || "");
      if (p.id === "introduction") intro = String(p.value || "");
      if (p.id === "size") size = String(p.value || "");
      if (p.id === "checkResult") checkResult = Number(p.value);
    });
  });
  return { status, prog, newVersion, intro, size, checkResult };
};

const fetchOtaInfo = async () => {
  try {
    const res = await getDeviceServices({
      ota: ["otaStatus", "otaProgress", "newVersion", "introduction", "size", "checkResult"],
    });
    if (res?.status === 0) {
      const { status, prog, newVersion, intro, size, checkResult } =
        parseOtaFromServiceList(res.serviceList);
      if (newVersion) {
        versionState.newVersion = newVersion;
      }
      if (intro) {
        versionState.log = intro;
      }
      if (size) {
        versionState.size = size;
      }
      if (typeof prog === "number") {
        progress.value = Math.max(0, Math.min(100, prog));
      }
      if (status === 300) {
        phase.value = "install";
      }
      hasNew.value =
        !!versionState.newVersion &&
        versionState.newVersion !== versionState.currentVersion &&
        (checkResult === undefined || checkResult === 0);
      if (progress.value >= 100) {
        clearOtaPoll();
        phase.value = "done";
      }
    }
  } catch (e) {
    console.error(e);
  }
};

const startOtaPolling = () => {
  clearOtaPoll();
  otaPollTimer = window.setInterval(async () => {
    await fetchOtaInfo();
  }, 1500);
};

onMounted(() => {
  checkStatus.value = "checking";
  hasNew.value = false;
  fetchOtaInfo().finally(() => {
    checkStatus.value = "idle";
  });
});
</script>

<template>
  <div class="firmware-page">
    <template v-if="phase === 'list'">
      <section class="hero">
        <img src="/images/piggy.png" alt="猪猪侠" class="hero__img" />
        <div class="hero__tip">
          <template v-if="hasNew">{{ t("foundNewVersion") }}</template>
          <template v-else-if="checkStatus === 'checking'">{{ t("checking") }}</template>
          <template v-else>{{ t("latestVersion") }}</template>
        </div>
      </section>

      <section class="card version-card">
        <div
          v-if="hasNew"
          class="version-row"
          role="button"
          @click="openDetail"
        >
          <div>
            <div class="version-row__title">
              {{ t("newVersion") }}
              <span class="dot" v-if="hasNew"></span>
            </div>
            <div class="version-row__desc">{{ versionState.newVersion }}</div>
          </div>
          <van-icon name="arrow" color="#c0c0c0" />
        </div>

        <div class="version-row">
          <div>
            <div class="version-row__title">{{ t("currentVersion") }}</div>
            <div class="version-row__desc">{{ versionState.currentVersion }}</div>
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
        {{ checkStatus === "checking" ? t("checking") : t("checkUpdate") }}
      </van-button>
    </template>

    <template v-else-if="phase === 'detail'">
      <section class="hero">
        <img src="/images/piggy.png" alt="猪猪侠" class="hero__img" />
        <div class="detail__version">{{ versionState.newVersion }}</div>
        <div class="detail__size">{{ t("size") }}： {{ versionState.size }}</div>
      </section>

      <section class="card changelog">
        <div class="changelog__header">
          <span>{{ t("updateLog") }}</span>
          <van-icon name="arrow-down" />
        </div>
        <div class="changelog__text">
          {{ versionState.log }}
        </div>
      </section>

      <van-button type="primary" round block class="check-btn" @click="startDownload">
        {{ t("downloadAndInstall") }}
      </van-button>
    </template>

    <template v-else-if="phase === 'download' || phase === 'install'">
      <section class="download">
        <van-circle
          v-model:current-rate="progress"
          :rate="progress"
          size="200"
          :text="progressText"
          layer-color="#e6e6e6"
          :color="{
            '0%': '#5f9dff',
            '100%': '#2f7bff',
          }"
          :stroke-width="100"
          text-color="#111"
          :speed="0"
        />
        <div class="download__status">
          {{ phase === "download" ? t("downloading") : t("installing") }}
        </div>
        <div class="detail__version">{{ versionState.newVersion }}</div>
        <div class="detail__size">{{ t("size") }}： {{ versionState.size }}</div>
      </section>

      <section class="card changelog">
        <div class="changelog__header">
          <span>{{ t("updateLog") }}</span>
          <van-icon name="arrow-down" />
        </div>
        <div class="changelog__text">
          {{ versionState.log }}
        </div>
      </section>

      <van-button round block class="cancel-btn">{{ t("Cancel") }}</van-button>
    </template>

    <template v-else>
      <section class="download">
        <van-circle
          v-model:current-rate="progress"
          :rate="100"
          size="200"
          :text="progressText"
          layer-color="#e6e6e6"
          :color="{
            '0%': '#5f9dff',
            '100%': '#2f7bff',
          }"
          :stroke-width="100"
          text-color="#111"
          :speed="0"
        />
        <div class="download__status">{{ t("installCompleted") }}</div>
      </section>
      <van-button type="primary" round block class="check-btn" @click="finishAndBack">
        {{ t("gotIt") }}
      </van-button>
    </template>
  </div>
</template>

<style scoped lang="scss">
.firmware-page {
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
  box-sizing: border-box;
}

.version-card {
  .version-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 63px;

    &__title {
      font-size: 16px;
      color: var(--common-text-color);
      display: flex;
      align-items: center;
      gap: 6px;
    }

    &__desc {
      color: #7a828a;
    }
  }
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
