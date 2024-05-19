/*
 * @Author: sunsan 2390864551@qq.com
 * @Date: 2024-03-04 20:57:59
 * @LastEditors: sunsan 2390864551@qq.com
 * @LastEditTime: 2024-03-04 21:00:49
 * @FilePath: \hopeEnroll\hope-enroll\src\directives\lazy.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const lazyLoad = {
    // mounted(el: HTMLElement, binding: { value: string }) {
    //   const options: IntersectionObserverInit = {
    //     rootMargin: '0px',
    //     threshold: 0.1,
    //   };
  
    //   const observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting) {
    //         el.setAttribute('src', binding.value);
    //         observer.unobserve(el);
    //       }
    //     });
    //   }, options);
  
    //   observer.observe(el);
    // },
  };
  
  export default lazyLoad;
  