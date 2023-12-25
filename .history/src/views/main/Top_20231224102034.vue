<!--
 * @Author: sunsan 2390864551@qq.com
 * @Date: 2023-11-07 21:08:19
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-24 10:20:34
 * @FilePath: \hopeEnroll\hope_enroll\src\views\main\Top.vue
 * @Description: 顶部组件
-->

<template>
  <header>
    <div class="logoCom">
      <img src="../../assets/logo.png" alt="logo" class="logoImg" />
      <div class="logo">Hope实验室</div>
    </div>
    <div class="right">
      <p v-if="store.state">{{ store.username }}</p>
      <a v-else @click="clickLogin()">登录</a>
      <Login ref="open" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ClickOutside } from 'element-plus';
import { ref, reactive, computed, watch, onMounted,watchEffect, toRefs } from 'vue';
import Login from '../Login.vue'
import { user } from '../../store/user';

const store = user();

onMounted(() => {

});

// 监听 data.flag 变化，触发重新渲染
watchEffect(() => {
  /* eslint-disable-next-line */
  console.log('data.flag changed:', data.state);
});


// 获取子组件实例
const open = ref()

function clickLogin(){
  console.log("??????")
  open.value.change();
}
</script>

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
  margin-left:20px;
  padding: 10px;
}
.right{
  margin-right:20px;
  padding: 10px;
  cursor: pointer;
}
</style>
