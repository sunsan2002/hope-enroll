<template>
  <div class="box">
    <div class="containe">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <el-progress
                    :percentage="percentage"
                    :stroke-width="15"
                    status="exception"
                    striped
                    striped-flow
                    :duration="duration"
                    />
                </div>
            </template>
            <div class="content">
                <div class="left">
                    <el-icon class="but" :size="40" @click="decrease"><ArrowLeftBold /></el-icon>
                </div>
                <div class="mid">
                    <div>
                        <div class="topic">

                        </div>
                        <div class="">

                        </div>
                        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
                    </div>
                </div>
                <div class="right">
                    <el-icon class="but" :size="40" @click="increase"><ArrowRightBold /></el-icon>
                </div>
            </div>
            <div class="card-footer">
                <el-button class="button" @click="finish()">我答完了</el-button>
            </div>
        </el-card>
        
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue'
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
const percentage = ref<number>(70)
const duration = computed(() => Math.floor(percentage.value / 10))
const finish = () =>{

}
const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}
const decrease = () => {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
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
    height:100%;
    width:100%;
}
.containe{
    position: relative;
    margin-top:8%;
    margin-bottom:5%;
    height: 85%;
    background-color: rgba(98, 98, 98, 0.177);
    display: flex;
    justify-content: center;
    align-items: center;
}
.box-card{
    width: 70%;
    height: 80%;
    margin: 4%;
}
// .card-header {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }
.content{
    position: relative;
    height: 80%;
    .left {
        position: absolute;
        width: 8%;
        height: 100%;
        left: 0;
        top: 0; 
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: aqua;
    }

    .right {
        position: absolute;
        width: 8%;
        height: 100%;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: aquamarine;
    }
    .but{
        cursor: pointer;
    }

    .mid {
        background-color: cadetblue;
        height: 200px;
        width:84%;
        margin: 0 74px;
    }
}
.card-footer{
    position: relative;
    margin-top: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    .button{
        position: relative;
        top:5%;
        width:60%;
    }
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

</style>