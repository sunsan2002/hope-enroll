<template>
  <div>
    <div v-if="excelData">
      <h2>Excel 数据：</h2>
      <pre>{{ excelData }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as XLSX from 'xlsx';

let excelData: string | null = null;

// 模拟 Excel 文件的路径
const excelFilePath = '../assets/problems\1.xlsx';

const readFile = async () => {
  try {
    const response = await fetch(excelFilePath);
    const buffer = await response.arrayBuffer();
    const workbook = XLSX.read(new Uint8Array(buffer), { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    excelData = JSON.stringify(jsonData, null, 2);
  } catch (error) {
    console.error('Error reading Excel file:', error);
  }
};

readFile(); // 自动读取文件

</script>
