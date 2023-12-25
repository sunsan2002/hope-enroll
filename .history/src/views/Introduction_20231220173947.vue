<template>
  <div class="task-list">
    <p>hhhhhhhhhhhhhhhhhhhhhh</p>
    <p>hhhhhhhhhhhhhhhhhhhhhh</p>
    <p>hhhhhhhhhhhhhhhhhhhhhh</p>
    <p>hhhhhhhhhhhhhhhhhhhhhh</p>
    <p>hhhhhhhhhhhhhhhhhhhhhh</p>
    <p>hhhhhhhhhhhhhhhhhhhhhh</p>
    <p>hhhhhhhhhhhhhhhhhhhhhh</p>
    <p>hhhhhhhhhhhhhhhhhhhhhh</p>
    <p>hhhhhhhhhhhhhhhhhhhhhh</p>
    <p>hhhhhhhhhhhhhhhhhhhhhh</p>
    <p>hhhhhhhhhhhhhhhhhhhhhh</p>
    <p>hhhhhhhhhhhhhhhhhhhhhh</p>
    <p v-if="error !== ''">{{ error }}</p>
    <table v-if="content.length > 0">
      <tr><th v-for="(header, index) in content[0]" :key="index">{{ header }}</th></tr>
      <tr v-for="(row, rowIndex) in content.slice(1)" :key="rowIndex">
        <td v-for="(item, itemIndex) in row" :key="itemIndex">{{ item }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import * as XLSX from 'xlsx';
import transformSheets from '../utils/read';
import { problems } from '../store/problem'

const content = ref([] as string[][]);
const error = ref('');

onMounted(async () => {
  // const url = '../assets/problems/1.xlsx';
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
      }else if(typeof content.value[i][0] === 'string'){
        if(content.value[i][0][0]==='第'){
          let str = content.value[i][0]; //小标题
          console.log(str);
        }else if(content.value[i][0][0]==='A'){
          let str = content.value[i][0]; //选项
          const matches = str.match(/[A-Z]、[^A-Z]+/g); //存数组
          console.log(matches);
        }
      }
    }
  } catch (err:any) {
   error.value = err.toString(); 
  }
});
</script>
