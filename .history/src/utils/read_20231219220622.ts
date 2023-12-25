import XLSX from 'xlsx';

const questions = [];

// 读取 Excel 文件
const fileReader = new FileReader();
fileReader.onload = (event) => {
  const data = event.target.result;
  const workbook = XLSX.read(data, { type: 'binary' });

  // 获取第一个工作表的数据
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const sheetData = XLSX.utils.sheet_to_json(worksheet);

  // 将每一行数据转化为题目对象，并添加到数组中
  sheetData.forEach((row) => {
    const question = {
      id: row.id, // 题目 ID
      text: row.text, // 题目内容
      options: [row.option1, row.option2, row.option3, row.option4], // 选项列表
      answer: row.answer // 正确答案
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
  const file = inputElement.files[0];
  fileReader.readAsBinaryString(file);
});
inputElement.click();