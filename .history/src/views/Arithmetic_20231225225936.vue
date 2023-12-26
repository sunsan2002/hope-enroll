<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2023-11-19 10:33:24
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2023-12-25 22:58:53
 * @FilePath: \hope-enroll\src\views\Introduction.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="body">
        <el-row :gutter="20">
            <el-col :span="15"><div class="grid-content ep-bg-purple" /></el-col>
            <el-col :span="5"><div class="grid-content ep-bg-purple" /></el-col>
        </el-row>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive,onMounted } from 'vue';
  import axios from 'axios';
  import * as XLSX from 'xlsx';
  import transformSheets from '../utils/read';
  import { problem } from '../store/problem';
  let data = reactive({
    images: [
      require('../assets/photo/算法1.jpg'),
      require('../assets/photo/算法3.png'),
      require('../assets/photo/算法2.jpg'),
      require('../assets/photo/算法3.jpg'),
    ],
  })
  
  </script>
  <style scoped lang="scss">
  .body{
  
    
  }
  ::v-deep .el-carousel__container {
          height: 600px;
  }
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  </style>
  