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

function readThis(){
var tempStr = "";

var filePath= document.all.upfile.value;

var oXL = new ActiveXObject("Excel.application");

var oWB = oXL.Workbooks.open(filePath);

oWB.worksheets(1).select();

var len = 100; // 要取到的多少条数据

var oSheet = oWB.ActiveSheet;

try{
for(var i=1;i<= len;i++){
tempStr+=("put(\""+oSheet.Cells(i,1).value+"\",\""+oSheet.Cells(i,2).value+"\");")+"
"; // 1和2分别代表第一列和第二列

}

}catch(e){
document.all.txtArea.innerHTML = tempStr;

}

document.all.txtArea.innerHTML = tempStr;

oXL.Quit();

CollectGarbage();

}


const result = ref(read_excel());
</script>
