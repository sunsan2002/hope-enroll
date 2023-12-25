<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-11-19 10:33:24
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-19 22:14:36
 * @FilePath: \hope-enroll\src\views\Introduction.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- Your template code here -->
</template>

<script setup lang="ts">
import * as XLSX from 'xlsx';

interface Question {
  id: number;
  text: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [];

// 读取 Excel 文件
const fileReader = new FileReader();

fileReader.onload = (event: ProgressEvent<FileReader>) => {
  const data = event.target?.result as string;
  const workbook = XLSX.read(data, { type: 'binary' });

  // 获取第一个工作表的数据
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const sheetData = XLSX.utils.sheet_to_json(worksheet);

  // 将每一行数据转化为题目对象，并添加到数组中
  sheetData.forEach((row: any) => {
    const question: Question = {
      id: row.id as number, // 题目 ID
      text: row.text as string, // 题目内容
      options: [row.option1, row.option2, row.option3, row.option4].filter(Boolean) as string[], // 选项列表
      answer: row.answer as string, // 正确答案
    };
    questions.push(question);
  });

  console.log('测试题导入完成！');
  console.log(questions); // 打印测试题数组
};

// 选择文件并读取数据
const inputElement = document.createElement('input');
inputElement.type = 'file';
inputElement.accept = '.xlsx, .xls, .csv';
inputElement.addEventListener('change', () => {
  const file = (inputElement.files as FileList)[0];
  fileReader.readAsBinaryString(file);
});
inputElement.click();


// 触发文件读取
fileReader.readAsBinaryString(excelFile);
</script>
