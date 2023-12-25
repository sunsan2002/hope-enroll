/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-19 21:26:08
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-20 12:28:54
 * @FilePath: \hope-enroll\src\utils\read.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as XLSX from 'xlsx';

// interface Option {
//   A: string;
//   B: string;
//   C: string;
// }
// const excelFilePath = '../assets/problems/1.xlsx';

// export interface Question {
//   number: number;
//   text: string;
//   options: Option;
// }

// export function readExcel(filePath: string): Question[] {
//   try{
//     // 读取 Excel 文件
//     const workbook = XLSX.readFile(filePath);

//     // 获取第一个 sheet
//     const sheetName = workbook.SheetNames[0];
//     const sheet = workbook.Sheets[sheetName];

//     // 定义存储题目的数组
//     const questions: Question[] = [];

//     // 遍历 Excel 行
//     for (let rowIndex = 2; ; rowIndex++) {
//         const cell = sheet[`A${rowIndex}`];

//         // 如果没有内容，表示已经读取完毕
//         if (!cell || !cell.v) {
//         break;
//         }

//         // 获取题目信息
//         const questionNumber: number = cell.v;
//         const questionText: string = sheet[`B${rowIndex}`].v;
//         const optionA: string = sheet[`C${rowIndex}`].v;
//         const optionB: string = sheet[`D${rowIndex}`].v;
//         const optionC: string = sheet[`E${rowIndex}`].v;

//         // 存储题目信息
//         const question: Question = {
//         number: questionNumber,
//         text: questionText,
//         options: {
//             A: optionA,
//             B: optionB,
//             C: optionC,
//         },
//         };

//         questions.push(question);
//     }
//     return questions;
//   }catch(error){
//     console.error('Error reading Excel file:', error);
//     return [];
//   }
    
// }

// // 读取 Excel 文件
// let filePath: string = 'src/assets/problems/1.xlsx';
// const questions: Question[] = readExcel(filePath);

// // 打印题目信息
// console.log(questions);



import * as XLSX from 'xlsx';

// 将行,列转换
function transformSheets(sheets: { [key: string]: XLSX.WorkSheet }): any[][] {
  const content: any[][] = [];
  const content1: any[][][] = [];
  const tmplist: number[] = [];

  for (const key in sheets) {
    // 读出来的 workbook 数据很难读, 转换为 JSON 格式, 参考 https://github.com/SheetJS/js-xlsx#utility-functions
    tmplist.push(XLSX.utils.sheet_to_json(sheets[key]).length);
    content1.push(XLSX.utils.sheet_to_json(sheets[key]));
  }

  const maxLength = Math.max(...tmplist);

  // 进行行列转换
  for (const y of Array(maxLength).keys()) {
    content.push([]);
    for (const x of Array(tmplist.length).keys()) {
      try {
        for (const z in content1[x][y]) {
          content[y].push(content1[x][y][z]);
        }
      } catch (error) {
        content[y].push(' ');
      }
    }
  }

  content.unshift([]);
  for (const key in sheets) {
    content[0].push(key);
  }

  return content;
}

export default transformSheets;
