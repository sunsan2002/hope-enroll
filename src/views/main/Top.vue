<!--
 * @Author: sunsan 2390864551@qq.com
 * @Date: 2023-11-07 21:08:19
 * @LastEditors: sunsan 2390864551@qq.com
 * @LastEditTime: 2023-11-07 22:32:26
 * @FilePath: \hopeEnroll\hope_enroll\src\views\main\Top.vue
 * @Description: 顶部组件
-->

<template>
  <header>
    <div class="logoCom">
      <img src="../../assets/logo.png" alt="logo" class="logoImg" />
      <div class="logo">Hope实验室</div>
    </div>
  </header>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
@import "../../styles/index.scss";

header {
  background-color: white;
  color: $primary-color;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
}

.logoImg {
  width: 30px;
  height: 30px;
  align-self: center;
  margin-right: 10px;
}

.logo {
  font-size: 1.5em;
  font-weight: bold;
}
.logoCom{
  display: flex;
  flex-direction: row;
  padding: 10px;
}
</style>
