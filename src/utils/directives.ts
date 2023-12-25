/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-11-30 22:40:00
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-04 21:50:50
 * @FilePath: \hope-enroll\src\utils\directives.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { activeIntersectionObserver } from "./observes";
import { DirectiveBinding } from "vue";

// //从左边出现
// export const observe = {
//   mounted(el: HTMLElement, binding: DirectiveBinding) {
//     el.dataset.active = binding.value as string;
//     activeIntersectionObserver.observe(el);
//   },
//   unmounted(el: HTMLElement) {
//     activeIntersectionObserver.unobserve(el);
//   },
// };


export const observe = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    el.dataset.active = binding.value as string;
  },
  mounted(el: HTMLElement) {
    activeIntersectionObserver.observe(el);
  },
  beforeUnmount(el: HTMLElement) {
    activeIntersectionObserver.unobserve(el);
  },
};
