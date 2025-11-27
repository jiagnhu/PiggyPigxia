declare module "*.ts";

declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare namespace honorConnect {
  function handler(
    url: string,
    data: string,
    requestId?: string,
    callback?: string
  ): void;
}

declare function deviceEventCallback(event: any): void;

declare function onResume(event: any): void;

declare function onPause(event: any): void;

declare function commonCallBack(result: any): void;

declare interface DefineOptions {
  name?: String;
  inheritAttrs?: boolean;
  props?: {};
  emits?: string[];
}
declare function defineOptions(options: DefineOptions): any;
