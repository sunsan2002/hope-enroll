<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-11-19 10:33:24
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-07 16:57:42
 * @FilePath: \hope-enroll\src\views\Introduction.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>

    <section class="parallax">
      <img src="../assets/homepage/hill1.png" ref="hill1">
      <img src="../assets/homepage/hill2.png" ref="hill2">
      <img src="../assets/homepage/hill3.png" ref="hill3">
      <img src="../assets/homepage/hill4.png" ref="hill4">
      <img src="../assets/homepage/hill5.png" ref="hill5">
      <img src="../assets/homepage/tree.png" ref="tree">
      <h2 ref="text">视差网站</h2>
      <img src="../assets/homepage/leaf.png" ref="leaf">
      <img src="../assets/homepage/plant.png" ref="plant">
    </section>

    <section class="sec">
      <h2>视差滚动网站</h2>
      <p>
        <!-- 你的Lorem Ipsum内容在这里 -->
      </p>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onScroll, toRefs } from 'vue';

const { text, leaf, hill1, hill4, hill5 } = toRefs({
  text: ref(null),
  leaf: ref(null),
  hill1: ref(null),
  hill4: ref(null),
  hill5: ref(null),
});

onMounted(() => {
  setupParallax();
  window.addEventListener('scroll', handleScroll);
});

function setupParallax() {
  // 添加视差元素的任何设置逻辑
}

function handleScroll() {
  let value = window.scrollY;
  if (text.value) text.value.style.marginTop = value * -1.5 + 'px';
  if (leaf.value) {
    leaf.value.style.top = value * -1.5 + 'px';
    leaf.value.style.left = value * 1.5 + 'px';
  }
  if (hill5.value) hill5.value.style.left = value * 1.5 + 'px';
  if (hill4.value) hill4.value.style.left = value * -1.5 + 'px';
  if (hill1.value) hill1.value.style.top = value * 0.5 + 'px';
}
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

::selection {
    background: rgba(0, 0, 0, .2);
}




.parallax {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#text {
    position: absolute;
    font-size: 5em;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
}

.parallax img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
}

.sec {
    position: relative;
    background: #003329;
    padding: 100px;
}

.sec h2 {
    font-size: 3em;
    color: #fff;
    margin-bottom: 10px;
}

.sec p {
    font-size: 1em;
    color: #fff;
    font-weight: 300;
}
</style>
