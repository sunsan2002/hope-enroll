/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-19 21:26:08
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-19 21:57:28
 * @FilePath: \hope-enroll\src\utils\read.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as XLSX from 'xlsx';

interface Option {
  A: string;
  B: string;
  C: string;
}

export interface Question {
  number: number;
  text: string;
  options: Option;
}

export function readExcel(filePath: string): Question[] {
  try{

  }
    
}

// 读取 Excel 文件
let filePath: string = '../assets/problems/1.xlsx';
const questions: Question[] = readExcel(filePath);

// 打印题目信息
console.log(questions);

  
