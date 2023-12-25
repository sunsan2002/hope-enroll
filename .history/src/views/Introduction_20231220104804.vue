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
unction read_excel(): string {
const filePath: string = "D:\abcd9.com.xls"; //要读取的xls
const sheet_id: number = 2; //读取第2个表
const row_start: number = 3; //从第3行开始读取
let tempStr: string = "";
try {
const oXL = new ActiveXObject("Excel.application"); //创建Excel.Application对象
} catch (err) {
alert(err);
}
const oWB = oXL.Workbooks.open(filePath);
oWB.worksheets(sheet_id).select();
const oSheet = oWB.ActiveSheet;
const colcount: number = oXL.Worksheets(sheet_id).UsedRange.Cells.Rows.Count;

for (let i = row_start; i <= colcount; i++) {
let temp_time: string;
if (typeof oSheet.Cells(i, 8).value === "date") {
//处理第8列部分单元格内容是日期格式时的读取问题
const d = new Date(oSheet.Cells(i, 8).value);
temp_time = ${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()};
} else temp_time = $.trim(oSheet.Cells(i, 7).value.toString());
tempStr += ${$.trim(       oSheet.Cells(i, 2).value     )} ${$.trim(oSheet.Cells(i, 4).value)} ${$.trim(       oSheet.Cells(i, 6).value.toString()     )} ${temp_time}\n;
//读取第2、4、6、8列内容
}

oXL.Quit();
CollectGarbage();
return tempStr; //返回
}
readFile(); // 自动读取文件
</script>
