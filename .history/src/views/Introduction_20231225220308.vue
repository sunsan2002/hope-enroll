<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2023-11-19 10:33:24
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2023-12-25 22:02:46
 * @FilePath: \hope-enroll\src\views\Introduction.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="task-list">
    <div style="height: 1600px">
      <el-carousel indicator-position="outside" direction="vertical" :autoplay="true" :interval='5000'>
        <el-carousel-item v-for="item in data.images" :key="item" >
          <img src="../assets/photo/项目1.jpg" alt="Slide Image" style="width: 100%; height: 100%;">
          <img :src="item" alt="Slide Image" style="width: 100%; height: 100%;">
        </el-carousel-item>
      </el-carousel>
    </div>
   
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
        '../assets/photo/项目1.jpg',
        '../assets/photo/项目2.png',
        '../assets/photo/项目3.png',
        '../assets/photo/项目4.png',
      ],
})

</script>
<style scoped lang="scss">
::v-deep.el-carousel__container {
		height: 500px;
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
