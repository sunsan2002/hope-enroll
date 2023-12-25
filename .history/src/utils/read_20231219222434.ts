/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-19 21:26:08
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-19 22:24:12
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

export const readExcelFile = async (filePath: string) => {
    try {
        const path = 'src/assets/problems';
        const file = XLSX.readFile(`${path}/${filePath}`);
        let data3 = [];
        const sheets = file.SheetNames
        for (let i = 0; i < sheets.length; i++) {
            const temp = XLSX.utils.sheet_to_json(
                file.Sheets[file.SheetNames[i]])
            temp.forEach((res) => {
                data.push(res)
            })
        }
        console.log(data);
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

export function readExcel(filePath: string): Question[] {
  try{
    // 读取 Excel 文件
    const workbook = XLSX.readFile(filePath);

    // 获取第一个 sheet
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // 定义存储题目的数组
    const questions: Question[] = [];

    // 遍历 Excel 行
    for (let rowIndex = 2; ; rowIndex++) {
        const cell = sheet[`A${rowIndex}`];

        // 如果没有内容，表示已经读取完毕
        if (!cell || !cell.v) {
        break;
        }

        // 获取题目信息
        const questionNumber: number = cell.v;
        const questionText: string = sheet[`B${rowIndex}`].v;
        const optionA: string = sheet[`C${rowIndex}`].v;
        const optionB: string = sheet[`D${rowIndex}`].v;
        const optionC: string = sheet[`E${rowIndex}`].v;

        // 存储题目信息
        const question: Question = {
        number: questionNumber,
        text: questionText,
        options: {
            A: optionA,
            B: optionB,
            C: optionC,
        },
        };

        questions.push(question);
    }
    return questions;
  }catch(error){
    console.error('Error reading Excel file:', error);
    return [];
  }
    
}

// 读取 Excel 文件
let filePath: string = 'src/assets/problems/1.xlsx';
const questions: Question[] = readExcel(filePath);

// 打印题目信息
console.log(questions);

  
