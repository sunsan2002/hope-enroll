<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2023-11-19 10:33:24
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-05-19 21:57:56
 * @FilePath: \hope-enroll\src\views\Introduction.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="body">
    <div>
      
    </div>
          <el-carousel class="flag1" v-observe="'active1'" indicator-position="outside"  :autoplay="true" :interval='5000'>
              <el-carousel-item v-for="item in data.images" :key="item" >
                  <img :src="item" alt="Slide Image" style="width: 100%; height: 100%;">
              </el-carousel-item>
          </el-carousel>
          <div class="info">
              <h1 class="box-title flag" v-observe="'active'">项目组</h1>
              <p class="description describe1 flag" v-observe="'active'">
                Hope工作室项目组，是一支充满活力，且具有浓厚学习氛围的优秀学生团队。
                团队成员主要学习主流项目开发规范和技术，以项目和比赛为核心驱动力，
                培养每一位成员的项目开发能力，以每位成员的学习和身心发展为核心培养目标。
                团队成员每年都会参加各类省级、国家级软件比赛，曾多次取得各项奖项，
                毕业学长均就职于腾讯、字节跳动、百度、阿里等互联网企业。
              </p>
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
    require('../assets/photo/项目3.png'),
    require('../assets/photo/项目1.jpg'),
    require('../assets/photo/项目7.jpg'),
    require('../assets/photo/项目6.jpg'),
  ],
})

</script>
<style scoped lang="scss">
.body{

  
}
::v-deep .el-carousel__container {
        height: 450px;
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

.info{
  margin-top:100px;
  margin-left: 50px;
}

.backtitle{
  position: relative;
  top:90px;
  font-size: 50px;
  line-height: 67px;
  color: #1f2329;
  opacity: 0.04;
  letter-spacing: 2px;
  font-family: 'Gilroy Extra Bold', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
.subtitle{
  position: relative;
  top:60px;
  font-size: 26px;
  letter-spacing: 3px;
}
.description{
  position: relative;
  top:100px;
  font-size: 14px;
  line-height: 1.5;
  color: #646a73;
}
.box-title{
  position: relative;
  font-size: 20px;
  color: #333; /* 设置标题文字颜色 */
  margin-left: 20px; /* 设置左侧边距，确保蓝色竖线不贴在文字上 */
}
.box-title::before {
  content: "";
  position: absolute;
  top: 0;
  left: -15px; /* 设置竖线离标题左侧的距离 */
  width: 5px; /* 设置竖线的宽度 */
  height: 100%; /* 设置竖线的高度，与标题高度一致 */
  background-color: #018E98; /* 设置竖线的颜色 */
}
.describe1{
  top:35px;
}

@media (min-width: 768px) {
    
    .el-row {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }
    
    .el-col {
        width: auto;
    }

    .el-carousel__container {
        height: 450px;
    }
    
    .info {
        margin-top: 100px;
        margin-left: 50px;
    }
}

@media (max-width: 767px) {
    ::v-deep .el-carousel__container {
        height: 4.6rem;
    }

    .info {
        margin-top: -0.05rem;
        margin-left: -0.2rem;
        font-size: 0.05rem;
    }
    .describe1 {
        top: 0.06rem;
    }
}


</style>
