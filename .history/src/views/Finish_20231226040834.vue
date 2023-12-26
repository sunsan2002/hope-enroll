<template>
  <div class="box">
    <div class="container">
        <div class="info">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
          </el-table>
            <div class="left">
                <p>作答人</p>
                <p>{{ data.number }}</p>
            </div>
            <div class="right">
                <p>交卷时间</p>
                <p>{{ data.endTime }}</p>
            </div>
        </div>
        <div class="footer">
            <h1>感谢您的作答</h1>
        </div>
        <div>
          <el-button class="finish-btn"  @click="router.push('/main/option')">已答完，返回主页面</el-button>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

/**
* 仓库
*/
const store = useStore();
/**
* 路由对象
*/
const route = useRoute();
/**
* 路由实例
*/
const router = useRouter();
//console.log('1-开始创建组件-setup')
/**
* 数据部分
*/
const data = reactive({
    number:'2021401500',
    endTime:'2023-04-22 09:02:25',
})

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
    position: relative;
    margin-top:8%;
    margin-bottom:5%;
    height: 60vh;
    background-color: rgba(98, 98, 98, 0.177);
    // display: flex;
    // justify-content: center;
    // align-items: center;
}
.box-card{
    width: 70%;
    height: 80%;
    margin: 4%;
}
.info{
  height: 200px;
  display: flex;
  .left {
        flex: 1;
        background-color: aqua;
    }

    .right {
        flex: 1;
        background-color: aquamarine;
    }
}
.footer{

}
.finish-btn{
    position: relative;
    top:100px;
    width: 100%;
    height: 60px;
    background-color: #018E98;
    border-radius: 10px;
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