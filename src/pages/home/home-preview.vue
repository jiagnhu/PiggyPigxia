<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/pages/store";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
import { console } from "inspector";

const { t } = useI18n();

const connected = ref(true);

const router = useRouter();
const goHardware = () => {
  router.push("/hardware");
};
const goUser = () => {
  router.push("/user");
};
const goFirmware = () => {
  router.push("/firmware");
};

const store = useStore();
const { volume, battery, offline } = storeToRefs(store);
const volumeText = computed(() => `${volume.value}%`);
const onVolumeChange = (val: number) => {
  volume.value = val;
  store.changeVolume();
};

onMounted(() => {
  // 获取设备当前音量等部分属性，避免初始值为0
  store.getSomeServices();
});
</script>

<template>
  <div class="home-preview">
    <main class="content">
      <section class="hero">
        <img src="/images/piggy.png" alt="猪猪侠" class="hero__img" />
        <div class="hero__brand">HONOR</div>
      </section>

      <section class="card status-card">
        <div class="status-row">
          <div class="status-row__label">
            {{ offline ? t("disconnected") : t("connected") }}
          </div>
          <div class="status-row__value">
            <div class="status-row__battery">{{ battery ?? 0 }}%</div>
            <van-icon name="bulb-o" size="18" color="#888" />
          </div>
        </div>
      </section>

      <section class="card slider-card">
        <div class="slider-card__header">
          <span class="slider-card__label">{{ t("volume") }}</span>
          <div class="slider-card__footer">{{ volumeText }}</div>
        </div>
        <van-slider v-model="volume" :min="0" :max="100" active-color="#256FFF" bar-height="6px"
          @change="onVolumeChange" />
      </section>

      <section class="actions">
        <div class="actions__row">
          <div class="tile" @click="goUser">
            <span>{{ t("personalInfo") }}</span>
            <van-icon name="user-o" />
          </div>
          <div class="tile" @click="goHardware">
            <span>{{ t("hardwareDevice") }}</span>
            <van-icon name="setting-o" />
          </div>
          <div class="tile" @click="goFirmware">
            <span>{{ t("firmwareUpgrade") }}</span>
            <van-icon name="cloud-o" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped lang="scss">
.home-preview {
  background: var(--common-bg-main);
  padding: 0 12px;
  box-sizing: border-box;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  box-sizing: border-box;
  padding-top: 22px;

  &__img {
    width: 186px;
    height: 208px;
    object-fit: contain;
    padding-bottom: 44px;
  }

  &__brand {
    letter-spacing: 1px;
    color: #999999;
    font-weight: 600;
  }
}

.card {
  background: var(--common-bg-card);
  border-radius: var(--common-br-ra);
}

.status-card {
  padding: 0 12px;
  height: 90px;
  box-sizing: border-box;

  .status-row {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__label {
      font-weight: 500;
      font-size: 16px;
      color: var(--common-text-color);
    }

    &__value {
      color: var(--common-text-color);
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    &__battery {
      font-size: 16px;
    }
  }
}

.slider-card {
  padding: 0 12px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  &__header {
    width: 80px;
  }

  &__label {
    font-size: 16px;
    font-weight: 500;
    color: var(--common-text-color);
  }

  &__footer {
    font-size: 16px;
    color: rgba(0,0,0,0.6);
  }

  :deep(.van-slider) {
    align-items: center;

    .van-slider__button {
      width: 20px;
      height: 20px;
      box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05);
      border: 1px solid rgba(0,0,0,0.1);
    }
  }
}

.actions {
  width: 100%;

  &__row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
    box-sizing: border-box;

    .tile {
      flex: 0 0 calc((100% - 12px) / 2);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 12px;
      background: #fff;
      border-radius: var(--common-br-ra);
      font-size: 16px;
      color: var(--common-text-color);
      font-weight: 500;
      cursor: pointer;
      box-sizing: border-box;
      height: 64px;


      &:active {
        transform: scale(0.99);
      }

      :deep(.van-icon) {
        color: #222;
      }
    }
  }
}
</style>
