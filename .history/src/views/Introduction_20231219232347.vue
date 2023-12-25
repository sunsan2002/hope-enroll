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

let excelData: string | null = null;
let error: string | null = null;

// 模拟 Excel 文件的路径
const excelFilePath = '../assets/problems/1.xlsx';
const readFile = async () => {
  try {
    const response = await fetch(excelFilePath);
    const buffer = await response.arrayBuffer();
    const workbook = XLSX.read(new Uint8Array(buffer), { type: 'array' });
    
    if (workbook.SheetNames.length === 0) {
      throw new Error('Excel 文件不包含任何工作表。');
    }

    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    excelData = JSON.stringify(jsonData, null, 2);
  } catch (error) {mj
    console.error('读取 Excel 文件时发生错误：', error);
    error = error.message || '在读取 Excel 文件时发生未知错误。';
  }
};

readFile(); // 自动读取文件
</script>
