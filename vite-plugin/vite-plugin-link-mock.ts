import type { Plugin } from "vite";

export interface viteOptions {
  entry: string[] | string; // entry file
  path: string; // mock 相对 entry 路径
  enabled?: boolean; // enabled
}

/**
 * mock 插件，引入 mock.js 脚本，注入到代码中。
 *  - 仅 dev 环境有效
 **/
export function viteMock(opt: viteOptions): Plugin {
  let viteConfig;
  let isDev = false;
  const { entry, enabled = false, path } = opt;

  let entryPath = Array.isArray(entry) ? entry : [entry];
  // Compatible to solve the windows' path problem
  if (process.platform === "win32")
    entryPath = entryPath.map((item) => item.replace(/\\/g, "/"));

  return {
    name: "vite-plugin-link-mock",
    enforce: "pre",
    configResolved(resolvedConfig) {
      viteConfig = resolvedConfig;
      isDev = viteConfig.command === "serve";
    },
    transform(_source: string, id: string) {
      if (!path || !entryPath.includes(id)) return _source;

      if (entryPath.includes(id) && enabled && isDev) {
        // serve dev
        return `/* eslint-disable */;import "${path}";/* eslint-enable */${_source}`;
      }

      return _source;
    },
  };
}
