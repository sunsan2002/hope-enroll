/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-19 21:26:08
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-20 12:28:54
 * @FilePath: \hope-enroll\src\utils\read.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
