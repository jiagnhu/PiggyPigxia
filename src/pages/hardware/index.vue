<script setup lang="ts">
import { computed } from "vue";
import { serviceList } from "@/pages/service";

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
</script>

<template>
  <div class="hardware">
    <section class="info-card">
      <div class="info-row">
        <span class="info-row__label">厂商信息</span>
        <span class="info-row__value">{{ device.manufacturer }}</span>
      </div>
      <div class="info-row">
        <span class="info-row__label">设备型号</span>
        <span class="info-row__value">{{ device.model }}</span>
      </div>
      <div class="info-row">
        <span class="info-row__label">序列号</span>
        <span class="info-row__value">{{ device.sn }}</span>
      </div>
      <div class="info-row">
        <span class="info-row__label">固件版本</span>
        <span class="info-row__value">{{ device.firmware }}</span>
      </div>
      <div class="info-row">
        <span class="info-row__label">硬件版本</span>
        <span class="info-row__value">{{ device.hardware }}</span>
      </div>
      <div class="info-row last">
        <span class="info-row__label">固件升级</span>
        <span class="info-row__value">{{ device.upgrade }}</span>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.hardware {
  min-height: calc(100vh - 56px);
  background: var(--common-bg-main);
  padding: 10px 12px 20px;
  box-sizing: border-box;
}

.info-card {
  background: var(--common-bg-card);
  border-radius: 18px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.04);
  padding: 6px 0;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  font-size: 16px;
  color: var(--common-text-color);
  border-bottom: 1px solid #eef0f3;

  &__value {
    color: #7a8087;
    font-weight: 600;
  }

  &.last {
    border-bottom: none;
  }
}
</style>
