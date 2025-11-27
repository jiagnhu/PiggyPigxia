<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const deviceName = "猪猪侠 AI 毛绒";
const connected = ref(true);
const battery = ref(100);
const volume = ref(50);

const volumeText = computed(() => `${volume.value}%`);

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
</script>

<template>
  <div class="home-preview">
    <main class="content">
      <section class="hero">
        <img src="/images/piggy.png" alt="猪猪侠" class="hero__img" />
        <p class="hero__brand">HONOR</p>
      </section>

      <section class="card status-card">
        <div class="status-row">
          <div class="status-row__label">已连接</div>
          <div class="status-row__value">
            <span class="status-row__battery">{{ battery }}%</span>
            <van-icon name="bulb-o" size="18" color="#888" />
          </div>
        </div>
      </section>

      <section class="card slider-card">
        <div class="slider-card__header">
          <span class="slider-card__label">音量</span>
        </div>
        <van-slider
          v-model="volume"
          :min="0"
          :max="100"
          active-color="#2f7bff"
          bar-height="8px"
        />
        <div class="slider-card__footer">{{ volumeText }}</div>
      </section>

      <section class="actions">
        <div class="actions__row">
          <div class="tile" @click="goUser">
            <span>个人信息</span>
            <van-icon name="user-o" />
          </div>
          <div class="tile" @click="goHardware">
            <span>硬件设备</span>
            <van-icon name="setting-o" />
          </div>
        </div>
        <div class="actions__row single">
          <div class="tile" @click="goFirmware">
            <span>固件升级</span>
            <van-icon name="cloud-o" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped lang="scss">
.home-preview {
  min-height: calc(100vh - 56px);
  background: var(--common-bg-main);
  padding: 8px 12px 20px;
  box-sizing: border-box;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6px;

  &__img {
    width: 240px;
    height: 240px;
    object-fit: contain;
  }

  &__brand {
    margin: 8px 0 0;
    letter-spacing: 1px;
    color: #9aa3ad;
    font-weight: 600;
  }
}

.card {
  background: var(--common-bg-card);
  border-radius: 18px;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.06);
}

.status-card {
  padding: 16px 18px;

  .status-row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__label {
      font-size: 16px;
      color: var(--common-text-color);
    }

    &__value {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--common-text-color);
      font-weight: 600;
    }

    &__battery {
      font-size: 16px;
    }
  }
}

.slider-card {
  padding: 16px 18px 12px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  &__label {
    font-size: 16px;
    color: var(--common-text-color);
  }

  :deep(.van-slider) {
    align-items: center;

    .van-slider__button {
      width: 24px;
      height: 24px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
    }
  }

  &__footer {
    margin-top: 8px;
    color: #7a828a;
  }
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 12px;

  &__row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;

    &.single {
      grid-template-columns: 1fr;
    }
  }
}

.tile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.06);
  font-size: 16px;
  color: #222;
  cursor: pointer;

  &:active {
    transform: scale(0.99);
  }

  :deep(.van-icon) {
    color: #222;
  }
}
</style>
