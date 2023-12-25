<template>
  <div>
    <h1>555555555555555</h1>
    <h1>555555555555555</h1>
    <h1>555555555555555</h1>
    <input type="file" ref="fileInput" @change="handleFileChange" accept=".xlsx, .xls">
    <el-button type="success" @click="readLocalExcel">读取本地Excel</el-button>
  </div>
</template>

<script setup lang="ts">
import { UploadUserFile, UploadProps } from 'element-plus';
import { ref, onMounted } from 'vue'
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';


const fileList = ref<UploadUserFile[]>([])
const fileInputRef = ref<HTMLInputElement | null>(null);

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile);
}

/**
 * 把文件按照二进制进行读取
 * @param file 
 * @returns 
 */
const readFile = (file: File): Promise<string | ArrayBuffer | null> => {
  return new Promise(resolve => {
    let reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = ev => {
      resolve(ev.target?.result);
    }
  });
}

/**
 * 根据sheet索引读取Excel文件中的数据
 * @param file 文件
 * @param sheetIndex excel文件中sheet表索引 默认是从0开始
 * @returns 将表中的数据以json形式的数据返回
 */
const readExcelFile = async (file: File, sheetIndex: number) => {
  let data = await readFile(file);
  let workbook = xlsx.read(data, { type: 'binary' });
  let worksheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];
  data = xlsx.utils.sheet_to_json(worksheet);
  console.log(data);
  return data;
}

const before = (file: any) => {
  readExcelFile(file, 0);
  return false;
}

const handleFileChange = () => {
  const input = fileInputRef.value;
  if (input && input.files && input.files.length > 0) {
    readExcelFile(input.files[0], 0);
  }
}

const readLocalExcel = () => {
  const input = fileInputRef.value;
  if (input) {
    input.click();
  }
}
</script>

<style>
/* Add your styles here if needed */
</style>
