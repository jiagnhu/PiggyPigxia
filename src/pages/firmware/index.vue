<script setup lang="ts">
import { computed, ref, reactive, onBeforeUnmount, onMounted } from "vue";
import { getDeviceServices } from "@/api/api";
import { useI18n } from "vue-i18n";
import { useStore } from "@/pages/store";
import { storeToRefs } from "pinia";
import ProgressRing from "@/components/progress-ring.vue";

const versionState = reactive({
  newVersion: "",
  currentVersion: "",
  size: "",
  log: "",
});
const hasNew = ref(false);
const { t } = useI18n();
const { uiInfo } = storeToRefs(useStore());
const layerColor = computed(() =>
  uiInfo.value.themeMode === 2 ? "#1A1A1A" : "#E6E7E9"
);
const circleColor = computed(() =>
  uiInfo.value.themeMode === 2
    ? { "0%": "#224FA6", "100%": "#0093FE" }
    : { "0%": "#9DB9F1", "100%": "#1D73EB" }
);
const baseStartColor = computed(() => circleColor.value["0%"]);
const baseEndColor = computed(() => circleColor.value["100%"]);
const normalizeProgress = computed(
  () => Math.min(Math.max(progress.value, 0), 100) / 100
);
const hexToRgb = (hex: string) => {
  const clean = hex.replace("#", "");
  const num = parseInt(clean, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
};
const withAlpha = (hex: string, alpha: number) => {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
const startColor = computed(() =>
  withAlpha(baseStartColor.value, 0.3 + 0.4 * normalizeProgress.value)
);
const endColor = computed(() =>
  withAlpha(baseEndColor.value, 0.6 + 0.4 * normalizeProgress.value)
);
const ringSize = 220;
const ringStroke = 18;

const phase = ref<"list" | "detail" | "download" | "install" | "done">(
  "list"
);
const progress = ref(0);
const progressText = computed(() => Math.round(progress.value));
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
  let firmwareVersion: string | undefined = undefined;

  list?.forEach((service: any) => {
    if (service?.id === "ota") {
      service.propertyList?.forEach((p: any) => {
        if (p.id === "otaStatus") status = Number(p.value);
        if (p.id === "otaProgress") prog = Number(p.value);
        if (p.id === "newVersion") newVersion = String(p.value || "");
        if (p.id === "introduction") intro = String(p.value || "");
        if (p.id === "size") size = String(p.value || "");
        if (p.id === "checkResult") checkResult = Number(p.value);
      });
    }
    if (service?.id === "deviceInfo") {
      service.propertyList?.forEach((p: any) => {
        if (p.id === "firmwareVersion") firmwareVersion = String(p.value || "");
      });
    }
  });
  return {
    status,
    prog,
    newVersion,
    intro,
    size,
    checkResult,
    firmwareVersion,
  };
};

const fetchOtaInfo = async () => {
  try {
    const res = await getDeviceServices({
      ota: [
        "otaStatus",
        "otaProgress",
        "newVersion",
        "introduction",
        "size",
        "checkResult",
      ],
      deviceInfo: ["firmwareVersion"],
    });
    if (res?.status === 0) {
      const {
        status,
        prog,
        newVersion,
        intro,
        size,
        checkResult,
        firmwareVersion,
      } =
        parseOtaFromServiceList(res.serviceList);
      if (newVersion) {
        versionState.newVersion = newVersion;
      }
      if (firmwareVersion) {
        versionState.currentVersion = firmwareVersion;
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
      </section>

      <section>
        <div class="hero__tip">
          <template v-if="hasNew">{{ t("foundNewVersion") }}</template>
          <template v-else-if="checkStatus === 'checking'">{{ t("checking") }}</template>
          <template v-else>{{ t("latestVersion") }}</template>
        </div>
      </section>


      <section class="card version-card">
        <div
          v-if="hasNew"
          class="version-row has-hew"
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
      </section>

      <section>
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
        <ProgressRing
          :progress="progress"
          :size="ringSize"
          :stroke="ringStroke"
          :track-color="layerColor"
          :start-color="startColor"
          :end-color="endColor"
        >
          <div class="progress-text">
            <span class="progress-text__num">{{ progressText }}</span>
            <span class="progress-text__unit">%</span>
          </div>
        </ProgressRing>
        <div class="download__status">
          {{ phase === "download" ? t("downloading") : t("installing") }}
        </div>
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
        <ProgressRing
          :progress="progress"
          :size="ringSize"
          :stroke="ringStroke"
          :track-color="layerColor"
          :start-color="startColor"
          :end-color="endColor"
        >
          <div class="progress-text">
            <span class="progress-text__num">{{ progressText }}</span>
            <span class="progress-text__unit">%</span>
          </div>
        </ProgressRing>
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
  padding: 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  box-sizing: border-box;
}

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: var(--common-bg-img);
  width: 312px;
  height: 309px;
  background-size: cover;
  background-repeat: no-repeat;

  &__img {
    width: 136px;
    height: 152px;
    object-fit: contain;
  }
  
}

.hero__tip {
    font-size: 18px;
    font-weight: 600;
    color: var(--common-text-color);
  }

.card {
  width: 100%;
  background: var(--common-bg-card);
  border-radius: var(--common-br-ra);
  padding: 16px 12px;
  box-sizing: border-box;
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
      position: relative;
      font-size: 16px;
      font-weight: 500;
    }

    &__desc {
      font-size: 14px;
      color: var(--common-text-sub);
      
    }
  }

  .has-hew {
    padding-bottom: 16px;
  }
}


.dot {
  width: 6px;
  height: 6px;
  background: #EA3C37;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: 1px;
  right: 0;
}


.download {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 48px;
  position: relative;

  .progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: baseline;
    gap: 4px;
    font-weight: 500;

    &__num {
      font-size: 48px;
      line-height: 1;
      color: var(--common-text-color)
    }

    &__unit {
      font-size: 20px;
      line-height: 1;
      color: var(--common-text-color)
    }
  }

  &__status {
    margin: 12px 0 0;
    font-size: 16px;
    color: var(--common-text-color);
    font-weight: 500;
  }
}

.progress-ring {
  position: relative;
}

.progress-ring__svg {
  display: block;
}

.detail__version {
  margin: 12px 0 4px;
  font-size: 18px;
  font-weight: 600;
  color: var(--common-text-color);
}

.detail__size {
  margin: 0;
  color: var(--common-text-sub);
  font-size: 14px;
}

.changelog {
  width: 100%;
  margin-top: 12px;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    color: var(--common-text-color);
    margin-bottom: 16px;
    font-weight: 500;
  }

  &__text {
    margin: 0;
    color: var(--common-text-sub);
    line-height: 1.5;
  }
}



:deep(.van-circle__text) {
  font-size: 32px;
  font-weight: 600;
}


.check-btn, .cancel-btn {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 24px;
  width: 150px;
  height: 36px;
  background: var(--common-primary-strong);
  border-color: var(--common-primary-strong);
}

.cancel-btn {
  width: 150px;
  background:  rgba(0,0,0,0.05) !important;
  color: var(--common-primary-strong) !important; 
  border: none !important;
}
</style>
