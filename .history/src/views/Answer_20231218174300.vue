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
                <el-button :icon="ArrowLeftBold" @click="decrease" />
                <el-button :icon="ArrowRightBold" @click="increase" />
            </div>
            <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
            <div class="card-footer">
                <p>hhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
                <el-button @click="finish()">我答完了</el-button>
            </div>
        </el-card>
        
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { ArrowLeftBold, Plus } from '@element-plus/icons-vue'
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
    height: 90vh;
    width:100%;
}
.containe{
    position: relative;
    margin-top:8%;
    height: 85%;
    background-color: rgba(98, 98, 98, 0.177);
    display: flex;
    justify-content: center;
    align-items: center;
}
.box-card{
    // position: relative;
    width: 70%;
    height: 80%;
}
// .card-header {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

</style>