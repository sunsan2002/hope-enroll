module.exports = {
    css: {
        postcss: {
          plugins: [
            autoprefixer({
              overrideBrowserslist: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8",
              ],
            }),
            postCssPxToRem({
              // 自适应，px>rem转换
              rootValue: 75, // 75表示750设计稿，37.5表示375设计稿
              propList: ["*"], // 需要转换的属性，这里选择全部都进行转换
              selectorBlackList: [".van"], // 过滤掉van-开头的class，不进行rem转换
              exclude: "/node_modules", // 忽略包文件转换rem
            }),
          ],
        },
    },
    plugins: [
      require('postcss-import'),
      require('autoprefixer'),
    ]
  };