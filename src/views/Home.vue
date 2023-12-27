<!--
 * @Author: sunsan 2390864551@qq.com
 * @Date: 2023-11-07 20:50:42
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-11 05:21:09
 * @FilePath: \hopeEnroll\hope_enroll\src\views\Home.vue
 * @Description: 客户端布局底页
-->
<template>
    <div class="common-layout">
      <el-container>
        <!-- zheli -->
        <div class="top">
          <Top></Top>
        </div>
        <div class="body">
          <router-view></router-view>
        </div>
        <el-footer class="foot">
          <div style="background-color: black;">
            <Foot></Foot>
          </div>
        </el-footer>
      </el-container>
    </div>
  </template>
  
  <script>
  import Top from "./main/Top.vue";
  import Body from "./main/Body.vue";
  import Foot from "./main/Foot.vue";
  export default {
    components: {
      Top,
      Body,
      Foot,
    },
  };

  </script>
  
  <style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding: 0;
  }
  
  .el-header {
    --el-header-padding: 0px;
  }
  .top {
    position: fixed;
    top: 0;
    height: 60px;
    width: 100%;
    z-index: 1000;
  }
  .body {
    margin-top: 40px;
    min-height: calc(70vh - 100px); 
    overflow: hidden;
  }
  
  .foot {
    background-color: black;
    height: 100%;
    z-index: 1;
  }
  </style>
  