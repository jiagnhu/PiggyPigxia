import { isFunction, fromPairs } from "lodash-es";

export const fromPairsByKey = (arr = [], key, fn) => {
  // {}[] => [key, value][] => {key:value, ...}
  return fromPairs(
    arr
      .filter((o) => o)
      .map((item) => [item[key], isFunction(fn) ? fn(item) : item])
      .filter((item) => item[0])
  );
};

export const propertyFn = (parentId, item) => ({
  ...item,
  parentId,
  value: ["int", "double"].includes(item.type)
    ? Number(item.value)
    : item.value,
});

// px转rem
export const pxToRem = (value) => {
  return Number(value) / 36 + "rem";
};

export const colorBlend = (c1, c2, ratio) => {
  ratio = Math.max(Math.min(Number(ratio), 1), 0);
  let r1 = parseInt(c1.substring(1, 3), 16);
  let g1 = parseInt(c1.substring(3, 5), 16);
  let b1 = parseInt(c1.substring(5, 7), 16);
  let r2 = parseInt(c2.substring(1, 3), 16);
  let g2 = parseInt(c2.substring(3, 5), 16);
  let b2 = parseInt(c2.substring(5, 7), 16);
  let r3 = Math.round(r1 * (1 - ratio) + r2 * ratio);
  let g3 = Math.round(g1 * (1 - ratio) + g2 * ratio);
  let b3 = Math.round(b1 * (1 - ratio) + b2 * ratio);
  let r = ("0" + (r3 || 0).toString(16)).slice(-2);
  let g = ("0" + (g3 || 0).toString(16)).slice(-2);
  let b = ("0" + (b3 || 0).toString(16)).slice(-2);
  return "#" + r + g + b;
};
