<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    progress: number;
    size?: number;
    stroke?: number;
    trackColor?: string;
    startColor?: string;
    endColor?: string;
  }>(),
  {
    size: 220,
    stroke: 12,
    trackColor: "#E6E7E9",
    startColor: "#9DB9F1",
    endColor: "#1D73EB",
  }
);

const radius = computed(() => (props.size - props.stroke) / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);
const dashOffset = computed(
  () => circumference.value * (1 - Math.min(props.progress, 100) / 100)
);
const gradId = `progress-gradient-${Math.random().toString(36).slice(2, 8)}`;
</script>

<template>
  <div
    class="progress-ring"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <svg :width="size" :height="size" class="progress-ring__svg">
      <defs>
        <linearGradient :id="gradId" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" :stop-color="startColor" />
          <stop offset="100%" :stop-color="endColor" />
        </linearGradient>
      </defs>
      <circle
        class="progress-ring__track"
        :stroke="trackColor"
        fill="transparent"
        :stroke-width="stroke"
        :r="radius"
        :cx="size / 2"
        :cy="size / 2"
      />
      <circle
        class="progress-ring__bar"
        :stroke="`url(#${gradId})`"
        fill="transparent"
        :stroke-width="stroke"
        stroke-linecap="round"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashOffset"
        :r="radius"
        :cx="size / 2"
        :cy="size / 2"
        :transform="`rotate(-90 ${size / 2} ${size / 2})`"
      />
    </svg>
    <div class="progress-ring__content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.progress-ring {
  position: relative;
  display: inline-block;
}

.progress-ring__svg {
  display: block;
}

.progress-ring__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: baseline;
  gap: 4px;
  font-weight: 500;
}
</style>
