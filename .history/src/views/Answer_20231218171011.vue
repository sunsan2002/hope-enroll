<template>
  <div class="box">
    <div class="containe">
        <div class="header">

        </div>
        <div class="content">
            <p>hhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
            <p>hhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
            <p>hhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
            <p>hhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
            <p>hhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
            <p>hhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
            <p>hhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
            <p>hhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
            <p>hhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
            <p>hhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
        </div>
        <div class="footer">
            <p>hhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
            <el-button @click="finish()">我答完了</el-button>
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
const data = reactive({})

const finish = () =>{

}



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
    height: 100vh;
    width:100%;
}
.containe{
    // position: relative;
    margin-top: 400px;
}
.footer{
    height: 200px;
}
</style>