module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 36, //根元素字体大小
      propList: ["*"], //匹配CSS中的属性，* 代表启用所有属性
      unitPrecision: 5, //转换成rem后保留的小数点位数
      minPixelValue: 1, //小于1px的样式不被替换成rem
      exclude: ["node_modules"], //忽略一些文件，不进行转换，比如我想忽略 依赖的UI框架
    },
  },
};
