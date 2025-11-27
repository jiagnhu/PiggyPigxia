import { ProfileMapStoreKey } from "@/config/ProfileMap";

/** type */
export type ValueToKey<T extends { [k: string]: any }> = {
  [P in keyof T as T[P]]: P;
};

export type TStoreMapHelper<T = typeof ProfileMapStoreKey> = {
  [P in keyof T as T[P][keyof T[P]] & string]: [P, ValueToKey<T[P]>];
};

export type TStoreToProfile<T = TStoreMapHelper> = {
  [P in keyof T]: T[P] extends [infer F, infer R]
    ? [F, P extends keyof R ? R[P] : any]
    : any;
};

type Expand<T> = T extends Object
  ? T extends infer O
    ? { [K in keyof O]: Expand<O[K]> }
    : never
  : T;

export const createStoreMapFromProfile = () => {
  const map = {};

  const dfs = (path: string, obj: string | Object, map: any) => {
    if (typeof obj === "string") {
      map[obj] = path.split(".");
      return;
    }

    Object.entries(obj).forEach(([key, value]) => {
      dfs(path ? `${path}.${key}` : key, value, map);
    });
  };

  dfs("", ProfileMapStoreKey, map);

  return map as Expand<TStoreToProfile>;
};
