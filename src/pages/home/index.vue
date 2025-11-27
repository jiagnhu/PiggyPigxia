<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
import { ColorTemperatureRange, DEBOUNCE_WAIT } from "@/config/constans";
import { useStore } from "@/pages/store";
import { useTimerStore } from "@/pages/timer/store";
import { lightModeConfigs } from "./lightmode";
import HomeBg from "./home-bg.vue";
import {
  initHomeData,
  lightModeInfo, // 灯光模式
  onClickShowColorTempPopup,
  updateSliderColorTemp,
  onColorTempInputOpen,
  onColorTempInputCancel,
  checkColorTemp,
  onColorTempInputConfirm,
  colorTempDialogBeforeClose,
  definiteTimeInfo, // 定时
  onJumpTiming,
  countdownInfo, // 倒计时信息
  onCountdownSelectTime,
  tomatoInfo, // 番茄钟信息
  dvServiceInfo, // 摄像头
} from "./index";
import IcOn from "@/components/my-icon/svg/on.vue";
import { showNativeToast } from "@/hoLink";
import { useDebounce } from "@/hooks";

const { t } = useI18n();

// 调用函数 获得Store
const store = useStore();

const {
  power,
  offline,
  lightMode,
  brightness,
  colorTemperature,
  volume,
  dvServicePower,
  dvServicePowerShowTips,
} = storeToRefs(store);

const {
  lightSwitchClick,
  changeLightMode,
  changeBrightness,
  changeColorTemperature,
  changeVolume,
  changeDvService,
  getDevInfoAll,
  getSomeServices,
} = store;

const curBrightness = ref(0);

// 原生弹窗
const showNaToast = () => {
  console.log("showNativeToast");
  showNativeToast("test");
};

const debounceOptions = {
  customInject: showNaToast,
  wait: DEBOUNCE_WAIT,
  leading: true,
  trailing: false,
};

const isOpacity = computed(() => offline.value || power.value !== 1);
watch(
  () => brightness.value,
  (newVal) => (curBrightness.value = newVal)
);

const { timerList } = storeToRefs(useTimerStore());

const clickTab = useDebounce(
  ({ name }: any) => {
    changeLightMode(lightMode.value, name);
    lightMode.value = name;
  },
  DEBOUNCE_WAIT,
  debounceOptions
);

// 打开倒计时选择框
const openTimeSelect = () => {
  countdownInfo.showTimeSelectFlag = true;
  countdownInfo.tips = power.value === 1 ? "关灯" : "开灯";
};

// 倒计时结束
const countdownFinish = () => {
  // lightSwitchClick();
  // TODO
};

// 打开摄像头
const openDvService = () => {
  // 打开->关闭
  if (dvServicePower.value === 1) {
    changeDvService();
    return;
  }
  // 关闭->打开
  if (dvServicePowerShowTips.value) {
    dvServiceInfo.showDvServicePopupFlag = true;
  } else {
    dvServicePower.value = 1;
  }
};

// 摄像头弹框确认
const confirmDvService = () => {
  dvServiceInfo.showDvServicePopupFlag = false;
  //TODO
  changeDvService();
};

const openStudy = () => {
  // console.log(" 学习报告 ");
};

// 色温滚动条popup确认
const colorTempSliderConfirm = () => {
  if (checkColorTemp(lightModeInfo.curSliderColorTemp)) {
    lightModeInfo.showColorPopupFlag = false;
    colorTemperature.value = lightModeInfo.curSliderColorTemp;
    changeColorTemperature();
  }
};

// 番茄钟
const tomatoCountDownRef = ref();
// 打开番茄钟弹框
const openTomato = () => {
  tomatoInfo.showTomatoPopupFlag = true;
};
const confirmTomato = () => {
  tomatoInfo.showTomatoPopupFlag = false;
  if (tomatoInfo.openTomatoFlag) {
    // 停止
    tomatoInfo.openTomatoFlag = false;
    tomatoInfo.times = 1;
  } else {
    // 开启
    tomatoInfo.openTomatoFlag = true;
    tomatoCountDownRef.value?.reset();
    tomatoCountDownRef.value?.start();
  }
  tomatoInfo.cycleTime = 1;
};
// 番茄钟一次循环结束
const tomatoFinish = () => {
  tomatoInfo.cycleTime++;
  if (tomatoInfo.cycleTime <= tomatoInfo.times) {
    tomatoCountDownRef.value?.reset();
    tomatoCountDownRef.value?.start();
  } else {
    tomatoInfo.openTomatoFlag = false;
    tomatoInfo.times = 1;
    tomatoInfo.cycleTime = 1;
  }
};

const statusText = computed(() =>
  offline.value ? "offline" : power.value === 1 ? "powerOn" : "powerOff"
);

onMounted(() => {
  // 获取全部属性
  getDevInfoAll();
  // 可以指定获取多个属性, 请根据实际情况使用
  getSomeServices();
  initHomeData(timerList.value);
});
defineExpose({ lightSwitchClick });
</script>

<template>
  <home-bg />
  <div class="home-image">
    <!-- head台灯图片 -->
    <van-image
      fit="contain"
      class="home-image-van"
      src="./images/Icon_XXL.png"
    />
  </div>

  <div class="home-content">
    <!-- 开关状态 -->
    <com-status :opacity="false" :preventEvent="offline">
      <div ref="powerRef">
        <van-row
          class="switchRow"
          v-debounce:lightSwitchClick="debounceOptions"
        >
          <!-- <van-row
          class="switchRow"
          v-debounce:lightSwitchClick="debounceOptions"
        > -->
          <span class="boldTextClass"> {{ t(statusText) }} </span>
          <div class="infoCard" v-if="countdownInfo.countdownTime">
            <van-count-down :time="countdownInfo.countdownTime" />
            <span class="normalTextClass">倒计时{{ countdownInfo.tips }}</span>
          </div>
          <com-icon
            :active="!offline && power === 1"
            round
            background-color="#f2f2f2"
          >
            <ic-on />
          </com-icon>
        </van-row>
      </div>
    </com-status>

    <div class="split-line"></div>
    <!-- 灯光模式 -->
    <com-status :opacity="isOpacity" :prevent-event="isOpacity">
      <div class="lightModePiece">
        <van-tabs
          line-height="0"
          swipe-threshold="4"
          @click-tab="clickTab"
          :active="lightMode"
        >
          <van-tab
            v-for="{ key, title, iconName } in lightModeConfigs"
            :key="key"
            :name="key"
          >
            <template #title>
              <my-icon
                :name="iconName"
                size="40"
                showBg
                :selected="lightMode === key"
              />
              <span
                class="normalTextClass"
                :class="{ selectedTextClass: lightMode === key }"
                >{{ t(title) }}</span
              >
            </template>
          </van-tab>
        </van-tabs>

        <van-row v-if="lightMode !== -1" class="noMargin spaceBetween">
          <div>
            <span class="boldTextClass">{{ t("brightness") }}</span>
            <div class="marginTop">
              <span>{{ curBrightness ?? 0 }}%</span>
            </div>
          </div>
          <van-slider
            v-model="curBrightness"
            class="sliderBright"
            @change="changeBrightness(brightness, curBrightness)"
          />
        </van-row>

        <van-row
          v-if="lightMode !== -1"
          class="noMargin spaceBetween"
          @click="onClickShowColorTempPopup(colorTemperature)"
        >
          <div>
            <span class="boldTextClass">{{ t("cct") }}</span>
            <div class="marginTop">
              <span>{{ colorTemperature ?? 0 }}k</span>
            </div>
          </div>
          <my-icon name="cct" />
        </van-row>
      </div>
    </com-status>

    <!-- 定时、倒计时 -->
    <div class="split-line"></div>
    <com-status :opacity="isOpacity" :prevent-event="isOpacity">
      <van-row class="rowSelf">
        <van-row
          justify="center"
          class="noMargin halfRowSelf"
          @click="onJumpTiming(timerList.length === 0)"
        >
          <div class="marginLeft">
            <span class="boldTextClass">{{ t("timing") }}</span>
            <div class="marginTop" v-if="definiteTimeInfo.isUseLength > 0">
              <span class="normalTextClass">{{
                definiteTimeInfo.timeTips
              }}</span>
            </div>
          </div>
          <my-icon
            class="marginRight"
            name="timing"
            :selected="definiteTimeInfo.isUseLength > 0"
          />
        </van-row>
        <van-row
          justify="center"
          class="noMargin halfRowSelf"
          @click="openTimeSelect"
        >
          <div class="marginLeft">
            <span class="boldTextClass">{{ t("countdown") }}</span>
            <div class="marginTop" v-if="countdownInfo.countdownTime">
              <van-count-down
                :time="countdownInfo.countdownTime"
                @finish="countdownFinish"
                style="display: inline"
              /><span class="normalTextClass">后{{ countdownInfo.tips }}</span>
            </div>
          </div>
          <my-icon
            class="marginRight"
            name="countDown"
            :selected="!!countdownInfo.countdownTime"
          />
        </van-row>
      </van-row>
    </com-status>

    <!-- 摄像头 学习报告 -->
    <div class="split-line"></div>
    <com-status :opacity="isOpacity" :prevent-event="isOpacity">
      <van-row class="rowSelf">
        <van-row
          justify="center"
          class="noMargin halfRowSelf"
          @click="openDvService"
        >
          <div class="marginLeft">
            <span class="boldTextClass">{{ t("camera") }}</span>
          </div>
          <my-icon
            class="marginRight"
            :name="dvServicePower ? 'IcStop' : 'start'"
            :selected="dvServicePower === 1"
          />
        </van-row>

        <van-row
          justify="center"
          class="noMargin halfRowSelf"
          @click="openStudy"
        >
          <div class="marginLeft">
            <span class="boldTextClass">{{ t("StudyReport") }}</span>
          </div>
          <my-icon class="marginRight" name="book" />
        </van-row>
      </van-row>
    </com-status>

    <!-- 番茄钟 -->
    <div class="split-line"></div>
    <com-status :opacity="isOpacity" :prevent-event="isOpacity">
      <van-row justify="space-between" :gutter="10" @click="openTomato">
        <van-col style="flex: 1">
          <span class="boldTextClass">{{ t("pomodoro") }}</span>
          <div class="marginTop">
            <span
              class="normalTextClass font-w-300"
              v-show="!tomatoInfo.openTomatoFlag"
              >{{ t("pomodoroTip") }}</span
            >
            <div v-show="tomatoInfo.openTomatoFlag">
              <van-count-down
                ref="tomatoCountDownRef"
                :time="tomatoInfo.tomatoTime"
                :auto-start="false"
                @finish="tomatoFinish"
                style="display: inline"
              />
              <span class="normalTextClass">
                {{
                  ` ${t("reminder")} | ${t("cycle")} ${tomatoInfo.cycleTime} /
                ${tomatoInfo.times}`
                }}
              </span>
            </div>
          </div>
        </van-col>
        <van-col>
          <my-icon
            :name="tomatoInfo.openTomatoFlag ? 'IcStop' : 'start'"
            :selected="tomatoInfo.openTomatoFlag"
          />
        </van-col>
      </van-row>
    </com-status>

    <!-- 音量 -->
    <div class="split-line"></div>
    <com-status :opacity="isOpacity" :prevent-event="isOpacity">
      <van-row class="spaceBetween">
        <div>
          <span class="boldTextClass">{{ t("volume") }}</span>
          <div class="marginTop">
            <span>{{ volume }}</span>
          </div>
        </div>
        <van-slider
          v-model="volume"
          class="sliderVolume"
          @change="changeVolume"
        />
      </van-row>
    </com-status>

    <div class="split-line"></div>
  </div>

  <!-- 色温选择弹框 -->
  <com-popup-bottom
    v-model:show="lightModeInfo.showColorPopupFlag"
    :title="t('cctAdjust')"
    footer
    @cancel="lightModeInfo.showColorPopupFlag = false"
    @confirm="colorTempSliderConfirm"
  >
    <van-row class="colorTempText">
      <span class="boldTextClass">{{ t("cct") }}</span>
      <div class="rightText">
        <div @click="onColorTempInputOpen" class="inputClass">
          {{ lightModeInfo.curSliderColorTemp }}
        </div>
        <span>K</span>
      </div>
    </van-row>
    <div class="colorTempClass">
      <van-slider
        v-model="lightModeInfo.curSliderColorTemp"
        @update:model-value="updateSliderColorTemp"
        class="colorSlider"
        :min="ColorTemperatureRange.min"
        :max="ColorTemperatureRange.max"
      />
    </div>
  </com-popup-bottom>
  <!--色温输入 键盘  -->
  <van-dialog
    v-model:show="lightModeInfo.showInputFlag"
    :title="t('setCct')"
    show-cancel-button
    confirmButtonColor="#256fff"
    cancelButtonColor="#256fff"
    :before-close="colorTempDialogBeforeClose"
    @cancel="onColorTempInputCancel"
    @confirm="onColorTempInputConfirm"
  >
    <van-field
      v-model="lightModeInfo.curFieldColorTemp"
      :placeholder="t('cctRange')"
      maxlength="4"
    />
  </van-dialog>
  <com-popup-bottom v-model:show="countdownInfo.showTimeSelectFlag">
    <van-time-picker
      type="time"
      :title="`倒计时${countdownInfo.tips}`"
      @cancel="countdownInfo.showTimeSelectFlag = false"
      @confirm="onCountdownSelectTime"
    />
  </com-popup-bottom>

  <!-- 番茄钟信息弹框 -->
  <com-popup-bottom
    v-model:show="tomatoInfo.showTomatoPopupFlag"
    :title="t('pomodoro')"
    footer
    :confirmText="t(tomatoInfo.openTomatoFlag ? 'Stop' : 'Start')"
    @cancel="tomatoInfo.showTomatoPopupFlag = false"
    @confirm="confirmTomato"
  >
    <div class="tomatoPopupContent">
      <span>
        {{ tomatoInfo.tips }}
      </span>
    </div>
    <div class="tomatoPopupImg">
      <van-image src="/images/alarmClock.png" />
    </div>
    <van-row justify="center" class="tomatoPopupClass">
      <span class="boldTextClass">{{ t("cycles") }}</span>
      <van-stepper
        v-model="tomatoInfo.times"
        theme="round"
        button-size="22"
        disable-input
        show-input
        :disabled="tomatoInfo.openTomatoFlag"
    /></van-row>
  </com-popup-bottom>

  <!-- 摄像头弹框 -->
  <!-- todo 这里是否有隐私协议 -->
  <com-popup-bottom
    v-model:show="dvServiceInfo.showDvServicePopupFlag"
    title="您将使用摄像头服务"
    footer
    confirmText="同意"
    @cancel="dvServiceInfo.showDvServicePopupFlag = false"
    @confirm="confirmDvService"
  >
    <div class="tomatoPopupContent">
      <p>{{ dvServiceInfo.tips1 }}</p>
      <p>{{ dvServiceInfo.tips2 }}</p>
    </div>
  </com-popup-bottom>
</template>

<style lang="scss" scoped>
@use "./style/index.scss" as *;
.colorTempClass {
  height: 56px;
  display: flex;
  align-items: center;
  margin: 0 24px;
  .van-slider {
    height: 16px;
    background-image: linear-gradient(to right, #ffba74, #fff2d6 50%, #eaf2ff);
    :deep(.van-slider__bar) {
      background: unset;
      .van-slider__button {
        width: 24px;
        height: 24px;
        border: 2px solid #ffffff;
        background: v-bind("lightModeInfo.colorTempSliderBg");
      }
    }
  }
}
</style>
