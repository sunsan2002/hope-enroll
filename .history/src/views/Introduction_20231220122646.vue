<template>
  <div class="task-list">
    <p v-if="err !== ''">{{ err }}</p>
    <table v-if="content !== ''">
      <tr><th v-for="h in content[0]" :key="h.id">{{ h }}</th></tr>
      <tr v-for="row in content.slice(1)" :key="row.id">
        <td v-for="item in row" :key="item.id">{{ item }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import axios from 'axios';
import XLSX from 'xlsx';
import transformSheets from '../scripts/read_xlsx';

const data = reactive({
  content: '',
  err: '',
});

onMounted(async () => {
  const url = '/task_list.xlsx';

  try {
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    const data = new Uint8Array(res.data);
    const wb = XLSX.read(data, { type: 'array' });
    const sheets = wb.Sheets;
    data.content = transformSheets(sheets);
  } catch (err) {
    data.err = err;
  }
});
</script>
