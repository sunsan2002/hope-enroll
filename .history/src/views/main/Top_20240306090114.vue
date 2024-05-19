<!--
 * @Author: sunsan 2390864551@qq.com
 * @Date: 2023-11-07 21:08:19
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-06 09:00:25
 * @FilePath: \hopeEnroll\hope_enroll\src\views\main\Top.vue
 * @Description: 顶部组件
-->

<template>
  <header>
    <div class="logoCom" @click="router.push('/main')">
      <img src="../../assets/logo.png" alt="logo" class="logoImg" />
      <div class="logo">Hope实验室</div>
    </div>
    <div class="right">
      <el-popover placement="top" :width="160"  v-if="store.state">
        <button
        class="btn"
        @click="logout()"
      >退出登录</button
    >
    <template #reference>
      <div class="login-box">
      <p cl>{{ store.username }}</p>
      <!-- <div class="triangle"></div> -->
    </div>
    </template>
  </el-popover>
      <a v-else @click="clickLogin()">登录</a>
      <Login ref="open" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ClickOutside, ElMessage } from 'element-plus';
import { ref, reactive, computed, watch, onMounted,watchEffect, toRefs } from 'vue';
import Login from '../Login.vue'
import { user } from '../../store/user';
import router from '../../router';

const store = user();


// 获取子组件实例
const open = ref()



function clickLogin(){
  open.value.change();
}

const logout = () => {
  window.localStorage.removeItem('token')
  store.token= ''
  store.state = false
  router.push('/');
  ElMessage.success('已退出登录')
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
  font-size: 20px;
  font-weight: bold;
}
.logoCom{
  display: flex;
  flex-direction: row;
  margin-left:20px;
  padding: 10px;
  cursor: pointer;
  align-items: center;
}
.right{
  margin-right:20px;
  padding: 10px;
  cursor: pointer;
}
// .triangle {
//       width: 0;
//       height: 0;
//       margin-top: 1px;
//       border-left: 5px solid transparent;
//       border-right: 5px solid transparent;
//       border-bottom: 7px solid #018E98; /* 调整颜色 */
//       transform: translate(-50%, -50%);
//       transition: transform 0.3s ease-in-out;;
//     }

    // .triangle:hover {
    //   transform: translate(-50%, -50%) rotate(180deg);
    // }
    .login-box{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 14px;
    }
    .btn{
      color: #018E98;
      border: 0;
      background-color: transparent;
      font-weight: 600;
      margin-left: 30%;
      &:hover{
        opacity: 0.7;
      }
    }
</style>
