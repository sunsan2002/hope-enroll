/*
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-04 23:05:59
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-06 08:16:11
 * @FilePath: \hope-enroll\.postcss.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// rem等比适配配置文件
// 基准大小
const baseSize = 37.5 // 注意此值要与 postcss.config.js 文件中的 rootValue保持一致
// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 375宽的缩放比例，可根据自己需要修改,一般设计稿都是宽750(图方便可以拿到设计图后改过来)。
  const scale = document.documentElement.clientWidth / 375
  // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  console.log("我执行了")
  setRem()
}
