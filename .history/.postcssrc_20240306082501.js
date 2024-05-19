/*
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-04 23:05:59
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-06 08:24:17
 * @FilePath: \hope-enroll\.postcssrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 125,
      propList: ['*'],
    },
  },
};