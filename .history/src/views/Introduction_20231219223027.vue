<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as xlsx from "xlsx";
// import XlSX from 'xlsx'
import type { UploadProps, UploadUserFile } from 'element-plus'
const fileList = ref<UploadUserFile[]>([])
const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile)
}
/**
 * 把文件按照二进制进行读取
 * @param file 
 * @returns 
 */
const readFile=(file: File)=> {
  return new Promise(resolve => {
    let reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = ev => {
      resolve(ev.target?.result);
    }
    console.log(reader);
 
  });
}
/**
 * 根据sheet索引读取Excel文件中的数据
 /**@param file 文件
 /** @param sheetIndex excel文件中sheet表索引 默认是从0开始
 /**@returns  将表中的数据以json形式的数据返回
*/
const readExcelFile=async (file: File, sheetIndex: number)=>{
  let data = await readFile(file);
  let workbook = xlsx.read(data, { type: 'binary' });
  let worksheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];
  data = xlsx.utils.sheet_to_json(worksheet);
  console.log(data);
  return data;
}
const before = (file:any) => {
  readExcelFile(file,0)
  return false
}
</script>
<template>
  <div>
    <h1>555555555555555</h1>
    <el-upload v-model:file-list="fileList" class="upload-demo" :before-upload="before"
      action="http://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple :on-preview="handlePreview"
        :limit="3"  accept="xlsx,xls">
      <el-button type="success">上传excel</el-button>
    </el-upload>
  </div>
</template>
 
<style>
 
</style>