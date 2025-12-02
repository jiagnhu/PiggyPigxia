<script setup lang="ts">
import { computed, onMounted } from "vue";
import { serviceList } from "@/pages/service";
import { useStore } from "@/pages/store";
import { useI18n } from "vue-i18n";

const device = computed(() => {
  const { deviceInfo, baseInfo, ota } = serviceList.value;
  return {
    manufacturer: baseInfo?.manufactureName?.value || "深圳派盟智能科技有限公司",
    model: deviceInfo?.devModel?.value || "GB-1",
    sn: deviceInfo?.sn?.value || "0c12342sd121",
    firmware: deviceInfo?.firmwareVersion?.value || "0.42",
    hardware: deviceInfo?.hardwareVersion?.value || "1v2",
    upgrade: ota?.version?.value || "SDK.365.1",
  };
});

const store = useStore();
const { t } = useI18n();
onMounted(() => {
  // 拉取设备信息，填充硬件页数据
  store.getDevInfoAll();
});
</script>

<template>
  <div class="hardware">
    <section class="info-card">
      <div class="info-row">
        <span class="info-row__label">{{ t("manufacturer") }}</span>
        <span class="info-row__value">{{ device.manufacturer }}</span>
      </div>
      <div class="info-row">
        <span class="info-row__label">{{ t("deviceModel") }}</span>
        <span class="info-row__value">{{ device.model }}</span>
      </div>
      <div class="info-row">
        <span class="info-row__label">{{ t("serialNumber") }}</span>
        <span class="info-row__value">{{ device.sn }}</span>
      </div>
      <div class="info-row">
        <span class="info-row__label">{{ t("firmwareVersion") }}</span>
        <span class="info-row__value">{{ device.firmware }}</span>
      </div>
      <div class="info-row">
        <span class="info-row__label">{{ t("hardwareVersion") }}</span>
        <span class="info-row__value">{{ device.hardware }}</span>
      </div>
      <div class="info-row last">
        <span class="info-row__label">{{ t("firmwareUpgrade") }}</span>
        <span class="info-row__value">{{ device.upgrade }}</span>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.hardware {
  min-height: calc(100vh - 56px);
  background: var(--common-bg-main);
  padding: 0px 12px;
  box-sizing: border-box;
}

.info-card {
  background: var(--common-bg-card);
  border-radius: var(--common-br-ra);
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 9px;
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  color: var(--common-text-color);
  border-bottom: 1px solid var(--common-br-b-c);
  box-sizing: border-box;

  &__value {
    color: var(--common-text-value-color);
    font-size: 14px;
  }

  &.last {
    border-bottom: none;
  }
}
</style>
