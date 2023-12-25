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
      console.log(content.value[i][0].charAt())
    }
  } catch (err:any) {
   error.value = err.toString(); 
  }
});
</script>
