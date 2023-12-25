<template>
  <div>
    <div v-if="excelData">
      <h2>Excel 数据：</h2>
      <pre>{{ excelData }}</pre>
    </div>
    <div v-if="error">
      <h2>错误：</h2>
      <pre>{{ error }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as XLSX from 'xlsx';
import { ref } from 'vue';
let excelData: string | null = null;
let error: string | null = null;

// 模拟 Excel 文件的路径

function read_excel() {
  const XLSX = require('xlsx')
const path = "./file/file.xlsx" //放在public目录下的文件可以直接访问
axios.get(path, { responseType: 'arraybuffer' }).then((res) => {
  let data = new Uint8Array(res);
  let workbook = XLSX.read(data, { type: "array" });
  let sheets = workbook.Sheets;
  let content = [];
  for (let key in sheets){
  //读出来的workbook数据,转换为json格式
    content.push(XLSX.utils.sheet_to_json(sheets[key]));
  }
  const fileName = path.substr(path.lastIndexOf('/') + 1);
  let fileData = [];
  fileData.push(content[0][0]);
  for (let i in this.tableList) {
    fileData.push(this.tableList[i]);
  }
  //下载Excel文件
  ctx.downloadExcel(fileName,fileData);
}).catch(err => {
  ctx.err = err;
})
}

const result = ref(read_excel());
</script>
