module.exports = {
    plugins: {
      autoprefixer: {},
      "postcss-px-to-viewport": {
        viewportWidth: 1920, // (Number) 设计图大小 自己按照实际情况配置下就行了
        viewportHeight: 1080, // (Number) 
        unitPrecision: 3, // (Number) 单位转换后保留的精度
        viewportUnit: "vw", // (String) 希望使用的视口单位
        selectorBlackList: [".ignore"], // 需要忽略转换的类名，比如这里是忽略转换  class为 ignore的盒子
        minPixelValue: 1, // (Number) 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
        mediaQuery: false // (Boolean) 媒体查询里的单位是否需要转换单位
      }
    }
  };
  
  