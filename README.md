## 1. 说明

- 开发时请使用外网 npm 包，保证在非内网环境下，可以正常执行
- 项目使用 `vue3` + `typescript` + `pinia` + `vant4.0` 搭建
- 推荐使用 `vue3` 进行开发
- `demo` 中实现仅作为参考，实际实现请根据实际情况
- `@magic/vite-plugin-serve-mock` 插件为内部自定义插件，外网无法获取, 启动项目前请注释相关内容
- `directives` 自定义指令尽量使用 `@vueuse/core` 组合函数替代
- `demo` 在持续更改中，实际开发中请根据需要进行变动
- `demo` 未处理折叠屏适配，大字体适配，开发时请根据 `UI` 做适配

注意：

- 如果使用 `vue2.0` 开发，请注意 `pinia` `vue-i18n` 插件使用方式。
- `demo` 中`UI`界面与实际设计稿有出入，在开发时请根据设计稿开发
- `demo` 未处理 **离线** 状态，开发时请注意
- `demo` 未处理异步组件，为提供更好的用户体验，开发时请注意设备状态与页面交互逻辑
- `demo` 中未体现打点相关内容。
- 开发时注意去掉`vant`默认字体，`vant` 设置了默认字体，会导致页面字体无法自动适配系统字体

建议：

- 所有涉及常量的数据，请提取到 contans 文件夹中，并设置对应含义的变量名

### 1.1. 目录

```text
|
| -- plblic
|
| -- mock
|     | -- mock.js        // mock文件，模拟 app 端响应和结束
|     |
|
| -- src
|     | -- components     // 组件
|     | -- pages          // 页面
|     | -- assets         // 资源文件
|     | -- directives     // 自定义指令
|     | -- hoLink         // jsbridge 封装
|     | -- hooks          // 组合函数
|     | -- router         // 路由
|     | -- api            // 接口二次封装
|     | -- utils          // 工具函数
|     |
|     | -- config
|         | -- constans             // 常量
|         | -- locale               // 语言文件
|         | -- ProfileMap.ts        // profile 与 store 映射表
|         | -- profile.ts           // 保存 profile 配置，仅用于查看，可删除
|
| -- components.d.ts  // vant plugin 自动生成文件
|
```

## 2. 启动步骤

- 注释 `vite.config.ts` 和 `package.json` 中 `@magic/vite-plugin-serve-mock` 插件相关内容
- 执行 `npm i`
- 执行 `npm run dev`

### 2.1. 命令说明

- `build`: 构建生产版本
- `build:vlog`: 构建带 `vconsole` 插件版本，用于真机调试 H5

## 3. 适配

### 3.1. rem

demo 项目使用`rem`适配，适配标准稿为`360`，适配依赖插件 `postcss` `postcss-pxtorem`。
可根据需要自行设置。使用方式请参考 `postcss` 官网。

注意：`postcss` 不会对标签上的 `style` 进行转换

### 3.2. theme

主题适配请参考 `vant` 4.0 [官网地址](https://vant-ui.github.io/vant/v4/#/zh-CN/dialog)

### 3.3. language

多语言实现基于 `vue-i18n`，[官网地址](https://vue-i18n.intlify.dev/guide/introduction.html)

### 3.4. 兼容

- 请不要使用 `inset` 属性，会导致 oppo 等手机兼容问题
- 图片组件建议使用 `com-icon` 实现，动态组件可能会在部分设备上显示异常

## 4. 待实现

- [ ] 页面 layout 结构调整
- [ ] 优化异步加载组件，获取到语言，主题，状态栏高度后显示页面
- [ ] 增加加载状态
- [ ] 样式优化
- [ ] 完成全部多语言
- [ ] vite 升级 3.0 -> 4.0
- [ ] api 更新 MBB 协议

## 5. 更新日志

---

> **1.0.6**

- 去掉 isPad 判断
- @intlify/vite-plugin-vue-i18n 替换为 @intlify/unplugin-vue-i18n
- 增加 mock 插件
- 增加 防抖、节流 自定义指令和函数使用示例

---

> **1.0.5**

- @intlify/vite-plugin-vue-i18n 升级 3.4.0 -> 7.0.0

---

> **1.0.4**

- 新增 pad 判断，pad 不需要顶部导航栏高度

---

> **1.0.3**

- 去掉 框架字体，font-family 设置为 `unset`

---

> **1.0.2**

- 新增 offline 组件，离线样式；点击提示；禁用子节点点击
- getDevInfoAll 新增离线标志位

---

> **1.0.1**

- hoLink 替换
- 新增 config 目录
- vant 升级 4.0；新增按需引入组件
- 新增 vue-i18n
- profile map 表重构
