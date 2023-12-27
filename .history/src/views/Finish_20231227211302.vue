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

<script lang="ts" setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { user } from '../store/user';
import { useRoute, useRouter } from 'vue-router';

const storeUser = user();
const route = useRoute();
const router = useRouter();
const data = reactive({
    number:'2021401500',
    endTime:'2023-04-22 09:02:25',
})

const tableData = [
  {
    date: storeUser.curtime,
    name: storeUser.username,
  }
]


onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  console.log(storeUser.curtime)
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
    margin-top:7%;
    margin-bottom:9%;
    height: 60vh;
    // background-color: rgba(98, 98, 98, 0.177);
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
    margin-top: 45vh;
    margin-left: 5%;
    background-color: #f6f6f6;
  }
}
.finish-btn{
    position: relative;
    top: 100%;
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