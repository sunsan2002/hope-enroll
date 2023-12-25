<template>
  <div class="task-list">
    <p v-if="error !== ''">{{ error }}</p>
    <table v-if="content !== ''">
      <tr><th v-for="(header, index) in content[0]" :key="index">{{ header }}</th></tr>
      <tr v-for="(row, rowIndex) in content.slice(1)" :key="rowIndex">
        <td v-for="(item, itemIndex) in row" :key="itemIndex">{{ item }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import * as XLSX from 'xlsx';
import transformSheets from '../utils/read';

const { value: content, error } = ref({
  content: '',
  error: '',
});

onMounted(async () => {
  const url = '/task_list.xlsx';

  try {
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    const data = new Uint8Array(res.data);
    const wb = XLSX.read(data, { type: 'array' });
    const sheets = wb.Sheets;
    content.value = transformSheets(sheets);
  } catch (err) {
    error.value = err;
  }
});
</script>
