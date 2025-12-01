<script setup lang="ts">
import { ref, nextTick } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const user = ref({
  name: t("nickname"),
  gender: t("secret"),
  birthday: "1999/10/22",
});

const showNamePopup = ref(false);
const tempName = ref(user.value.name);

const showGenderPopup = ref(false);
const tempGender = ref(user.value.gender);
const genderOptions = [
  { label: "male", text: t("male") },
  { label: "female", text: t("female") },
  { label: "secret", text: t("secret") },
];

const showBirthdayPopup = ref(false);
const birthdayDate = ref(["1999", "10", "22"]);
const minDate = ref(
  new Date(new Date().getFullYear() - 2, 0, 1)
);
const maxDate = ref(
  new Date(new Date().getFullYear() + 2, 11, 31)
);

const openNamePopup = () => {
  tempName.value = user.value.name;
  showNamePopup.value = true;
};

const onCancelName = () => {
  showNamePopup.value = false;
};

const onConfirmName = () => {
  user.value.name = tempName.value.trim() || "昵称";
  showNamePopup.value = false;
};

const openGenderPopup = () => {
  tempGender.value = user.value.gender;
  showGenderPopup.value = true;
};

const onConfirmGender = () => {
  user.value.gender = tempGender.value;
  showGenderPopup.value = false;
};

const onCancelGender = () => {
  showGenderPopup.value = false;
};

const openBirthdayPopup = async () => {
  const [y = "1999", m = "10", d = "22"] = user.value.birthday.split("/");
  birthdayDate.value = [
    y.padStart(4, "0"),
    m.padStart(2, "0"),
    d.padStart(2, "0"),
  ];
  showBirthdayPopup.value = true;
  await nextTick();
};

const onConfirmBirthday = () => {
  const [y, m, d] = birthdayDate.value;
  user.value.birthday = `${y}/${m}/${d}`;
  showBirthdayPopup.value = false;
};
</script>

<template>
  <div class="user-page">
    <p class="section-title">{{ t("generalSettings") }}</p>

    <section class="card">
      <div class="row" @click="openNamePopup">
        <span class="row__label">{{ t("name") }}</span>
        <div class="row__value">
          <span>{{ user.name }}</span>
          <van-icon name="arrow" size="16" color="#b0b0b0" />
        </div>
      </div>

      <div class="row" @click="openGenderPopup">
        <span class="row__label">{{ t("gender") }}</span>
        <div class="row__value">
          <span>{{ user.gender }}</span>
          <van-icon name="arrow" size="16" color="#b0b0b0" />
        </div>
      </div>

      <div class="row last" @click="openBirthdayPopup">
        <span class="row__label">{{ t("birthday") }}</span>
        <div class="row__value">
          <span>{{ user.birthday }}</span>
          <van-icon name="arrow" size="16" color="#b0b0b0" />
        </div>
      </div>
    </section>

    <van-popup v-model:show="showNamePopup" round position="center">
      <div class="popup">
        <div class="popup__title">{{ t("name") }}</div>
        <van-field
          v-model="tempName"
          :placeholder="t('nickname')"
          border
          input-align="left"
          clearable
        />
        <div class="popup__actions">
          <button class="popup__btn cancel" @click="onCancelName">{{ t("Cancel") }}</button>
          <span class="popup__divider" />
          <button class="popup__btn confirm" @click="onConfirmName">{{ t("Confirm") }}</button>
        </div>
      </div>
    </van-popup>

    <van-popup
      v-model:show="showGenderPopup"
      round
      position="bottom"
      class="gender-popup-wrapper"
    >
      <div class="popup gender-popup">
        <div class="popup__title">{{ t("gender") }}</div>
        <div class="gender-list">
          <div
            v-for="item in genderOptions"
            :key="item"
            class="gender-item"
            @click="tempGender = item.text"
          >
            <span class="gender-item__label">{{ item.text }}</span>
            <van-radio
              shape="dot"
              :name="item.text"
              :model-value="tempGender"
              checked-color="#2f7bff"
            />
          </div>
        </div>
        <div class="popup__actions single">
          <button class="popup__btn cancel" @click="onCancelGender">
            {{ t("Cancel") }}
          </button>
        </div>
      </div>
    </van-popup>

    <van-popup
      v-model:show="showBirthdayPopup"
      round
      position="bottom"
      class="birthday-popup-wrapper"
    >
      <div class="popup birthday-popup">
        <div class="popup__title">{{ t("birthday") }}</div>
        <van-date-picker
          v-model="birthdayDate"
          :min-date="minDate"
          :max-date="maxDate"
          :visible-item-count="5"
          :columns-type="['year', 'month', 'day']"
          :show-toolbar="false"
        />
        <div class="popup__actions">
          <button class="popup__btn cancel" @click="showBirthdayPopup = false">
            {{ t("Cancel") }}
          </button>
          <span class="popup__divider" />
          <button class="popup__btn confirm" @click="onConfirmBirthday">
            {{ t("Confirm") }}
          </button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<style scoped lang="scss">
.user-page {
  background: var(--common-bg-main);
  padding: 12px 12px 24px;
  box-sizing: border-box;
}

.section-title {
  margin: 12px 0 10px;
  color: #9aa3ad;
  font-size: 14px;
}

.card {
  background: var(--common-bg-card);
  border-radius: 18px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.04);
  padding: 6px 0;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px;
  font-size: 16px;
  color: var(--common-text-color);
  border-bottom: 1px solid #eef0f3;

  &__value {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #7a8087;
  }

  &.last {
    border-bottom: none;
  }
}

.popup {
  width: 280px;
  padding: 16px 18px 12px;
  background: var(--common-bg-card);
  border-radius: 16px;

  &__title {
    font-size: 18px;
    font-weight: 600;
    color: var(--common-text-color);
    margin-bottom: 12px;
  }

  :deep(.van-field) {
    padding: 4px 0 6px;
    font-size: 16px;
    .van-field__control {
      padding-top: 6px;
      padding-bottom: 6px;
      color: #333;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 12px;
  }

  &__btn {
    flex: 1;
    background: transparent;
    border: none;
    font-size: 16px;
    color: #2f7bff;
    padding: 10px 0;
  }

  &__divider {
    width: 1px;
    height: 24px;
    background: #e2e2e2;
  }

  .cancel {
    color: #2f7bff;
  }

  .confirm {
    color: #2f7bff;
  }
}

.gender-popup {
  width: 100%;
  padding: 20px 20px 40px;
  margin: 0 auto 10px;
  box-sizing: border-box;
}

:deep(.gender-popup-wrapper.van-popup) {
  width: calc(100% - 1rem);
  margin: 0 0.5rem 0.5rem;
  border-radius: 20px;
}

.gender-list {
  display: flex;
  flex-direction: column;
  gap: 8px;

  :deep(.van-radio) {
    padding: 0;
  }
}

.gender-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #eaeaea;
  color: var(--common-text-color);

  &__label {
    font-size: 16px;
  }

  &:last-child {
    border-bottom: none;
  }
}

.birthday-popup {
  width: 100%;
  padding: 18px 20px 10px;
  box-sizing: border-box;
  

  .popup__title {
    padding: 0 2px;
  }
}

:deep(.birthday-popup-wrapper.van-popup) {
  width: calc(100% - 1rem);
  margin: 0 0.5rem 0.5rem;
  border-radius: 20px;
}

:deep(.birthday-popup .van-date-picker) {
  background: transparent;
}

:deep(.birthday-popup .van-picker__mask) {
  background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0)
    );
}

:deep(.birthday-popup .van-picker__columns) {
  padding: 8px 0;
}

:deep(.birthday-popup .van-picker__selected) {
  font-weight: 600;
  color: #2f7bff;
}

:deep(.birthday-popup .van-picker-column__item--selected) {
  color: #2f7bff;
  font-weight: 600;
}

:deep(.birthday-popup .van-picker__frame) {
  border-radius: 14px;
  border: 1px solid #e0e0e0;
  left: 0;
  right: 0;
}
</style>
