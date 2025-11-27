import { reactive } from "vue";
import { LightMode } from "@/config/constans";

const { read, coffee, pad, artboard, smart, customize } = LightMode;

export const lightModeConfigs = reactive({
  [read]: {
    key: read,
    iconName: "book",
    title: "modeGust",
    brightness: 100,
    colorTemperature: 3000,
  },
  [coffee]: {
    key: coffee,
    iconName: "coffee",
    title: "modeCasual",
    brightness: 100,
    colorTemperature: 4000,
  },
  [pad]: {
    key: pad,
    iconName: "pad",
    title: "modeViewing",
    brightness: 20,
    colorTemperature: 5000,
  },
  [artboard]: {
    key: artboard,
    iconName: "artboard",
    title: "modeMeal",
    brightness: 100,
    colorTemperature: 6000,
  },
  [smart]: {
    key: smart,
    iconName: "smart",
    title: "Transform",
    brightness: 100,
    colorTemperature: 6000,
  },
  [customize]: {
    key: customize,
    iconName: "smart",
    title: "Romantic",
    brightness: 100,
    colorTemperature: 6500,
  },
});
