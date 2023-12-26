<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2023-11-19 10:33:24
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2023-12-26 02:47:02
 * @FilePath: \hope-enroll\src\views\Introduction.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="body">
        <el-row :gutter="26">
            <el-col :span="15">
                <el-carousel indicator-position="outside"  :autoplay="true" :interval='5000'>
                    <el-carousel-item v-for="item in data.images" :key="item" >
                        <img :src="item" alt="Slide Image" style="width: 100%; height: 100%;">
                    </el-carousel-item>
                </el-carousel>
            </el-col>
            <el-col :span="9">
                <div class="info">
                    <h1 class="box-title flag" v-observe="'active'">指导教师</h1>
                    <p class="description describe1 flag" v-observe="'active'">2003-至今,工作于吉首大学.
                    曾任软件学院软件工程系主任,现任软件学院工程实训中心主任
                    曾获张家界市优秀教师，吉首大学师德标兵,吉首大学校级骨干教师.吉首大学教学新秀.积极培训和指导学生参加国家级学科竞赛。
                    近年来指导学生获奖共100人次，获各类奖项30多项。指导学生参加教育部和商务部举办“中国大学生服务外包创新创业大赛”，获得团体一等奖3次，团体二等奖6次，团体三等奖3次。指导学生参加工信部和教育部举办“中国大学生软件设计大赛”，获二等奖3次。
                    </p>
                </div>
            </el-col>
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
  .info{
    margin-left: 50px;
  }

.backtitle{
    position: relative;
    top:90px;
    font-size: 68px;
    line-height: 67px;
    color: #1f2329;
    opacity: 0.04;
    letter-spacing: 2px;
    font-family: 'Gilroy Extra Bold', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
.subtitle{
    position: relative;
    top:60px;
    font-size: 32px;
    letter-spacing: 3px;
}
.description{
    position: relative;
    top:100px;
    font-size: 18px;
    line-height: 1.5;
    color: #646a73;
}
.box-title{
    position: relative;
    font-size: 24px;
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
</style>
  