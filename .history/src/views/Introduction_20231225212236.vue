<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2023-11-19 10:33:24
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2023-12-25 21:22:33
 * @FilePath: \hope-enroll\src\views\Introduction.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="task-list">
    <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import * as XLSX from 'xlsx';
import transformSheets from '../utils/read';
import { problem } from '../store/problem';

const content = ref([] as string[][]);
const error = ref('');
const store = problem();
onMounted(async () => {
  let url = '/1.xlsx';
  try {
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    const data = new Uint8Array(res.data);
    const wb = XLSX.read(data, { type: 'array' });
    const sheets = wb.Sheets;
    content.value = transformSheets(sheets);
    console.log(content)
    console.log(content.value.length)
    for(let i=1; i<content.value.length; i++){
      if(typeof content.value[i][0] === 'number'){
        // console.log("这是第" + content.value[i][0] +"题")
        let num = content.value[i][0]; //题目编号
        let str = content.value[i][1]; //题干
        let newStr = str.slice(0, -1); //去掉冒号
        console.log(num+'、'+ newStr);
        store.saveQuestion({
          number: num,
          text: newStr,
        })
      }else if(typeof content.value[i][0] === 'string'){
        if(content.value[i][0][0]==='第'){
          let str = content.value[i][0]; //小标题
          console.log(str);
          store.saveTitle(str);
        }else if(content.value[i][0][0]==='A'){
          let str = content.value[i][0]; //选项
          const matches = str.match(/[A-Z]、[^A-Z]+/g); //存数组
          console.log(matches);
          store.saveOptions(matches || []);
        }
      }
    }
  } catch (err:any) {
   error.value = err.toString(); 
  }
});
</script>
