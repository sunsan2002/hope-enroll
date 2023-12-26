<template>
  <div class="box">
    <div class="container">
        <div class="info">
          <div class="top">
            <img src="../assets/iconfont/采集成功.png" />
            <h1>感谢您的作答!</h1>
          </div>
          <el-table :data="tableData" stripe class="table" style="width: 100%">
            <el-table-column prop="name" label="作答人" width="280" />
            <el-table-column prop="date" label="交卷时间" width="280" />
          </el-table>
          <!-- <el-button class="finish-btn"  @click="router.push('/main/option')">已答完，返回主页面</el-button> -->
        </div>
        <el-button class="finish-btn"  @click="router.push('/main/option')">已答完，返回主页面</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

const store = useStore();
const route = useRoute();
const router = useRouter();
const data = reactive({
    number:'2021401500',
    endTime:'2023-04-22 09:02:25',
})

const tableData = [
  {
    date: getCurrentTime(),
    name: 'Tom',
  }
]

function getCurrentTime() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
  const day = currentDate.getDate().toString().padStart(2, '0');
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const seconds = currentDate.getSeconds().toString().padStart(2, '0');
  const currentTimeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return currentTimeString;
}

// 示例用法
const currentTime = getCurrentTime();
console.log(currentTime);


onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(()=>{
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>
<style scoped lang='scss'>
.box{
    height:100%;
    width:100%;
}
.container{
    margin-top:8%;
    margin-bottom:7%;
    height: 60vh;
    background-color: rgba(98, 98, 98, 0.177);
    display: grid;
    place-items: center;
}
.info{
  .top{
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    img{
      width: 150px;
    }
    h1{
      padding-top: 20px;
    }
  }
  .table{
    margin-top: 50vh;
  }
}
.finish-btn{
    position: relative;
    top:56px;
    width: 100%;
    height: 60px;
    background-color: #018E98;
    // border-radius: 10px;
    font-size: 20px;
    line-height: 60px;
    color: #ffffff;
    letter-spacing: 2px;
    opacity: 0.5;
    cursor: pointer;
}
.finish-btn:hover{
    opacity: 0.8;
}
</style>