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
                    <div class="question">
                        <div class="topic">
                            <h2>{{ data.problem }}</h2>
                        </div>
                        <div class="option">
                            <el-radio-group v-model="radio">
                                <el-space direction="vertical" :size="20">
                                     <el-radio v-for="option in options" :key="option.value" :label="option.value" size="large" border>
                                        {{ option.label }}
                                    </el-radio>
                                </el-space>
                            </el-radio-group>
                        </div>
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
import { ref, reactive, toRefs,h, onBeforeMount, onMounted, watchEffect, computed } from 'vue';import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue'
import { problem } from '../store/problem';
import { ElNotification } from 'element-plus'

const store = problem();
const route = useRoute();
const router = useRouter();

let data = reactive({
    title:'',
    problem:'',
    curnum: store.curnum,
    len: 0,
})
let radio = ref('1')
let options = reactive([
  { label: 'A、我仍能专心工作', value: '1' },
  { label: 'B、介于A、C之间', value: '2' },
  { label: 'C、我不能专心且感到愤怒', value: '3' },
]);
let percentage = ref<number>(70)
let duration = computed(() => Math.floor(percentage.value / 10))


const finish = () =>{

}
const increase = () => {
    // console.log(data.len)
    // console.log(data.curnum)
    if(data.len-1<=data.curnum){
        ElNotification({
            title: '温馨提示',
            message: h('i', { style: 'color: teal' }, '没有再多题目啦'),
        })
    }else{
        data.curnum+=1;
        data.problem = store.questions[data.curnum].number +'、'+ store.questions[data.curnum].text;
        //持久化存储当前题目
        store.curnum = data.curnum;
        // store.curtopic = data.problem;
        // store.curoptions.push(option.value[data.curnum]);
        options.splice(0, options.length);
        for(let i=0; i<store.options[data.curnum].length; i++){
            options.push({
                label: store.options[data.curnum][i],
                value: (i + 1).toString(),
            });
            console.log(options[i].label);
        }
    }
    //进度条
    percentage.value += 10
    if (percentage.value > 100) {
    percentage.value = 100
    }
}
const decrease = () => {
    // console.log(data.len)
    // console.log(data.curnum)
    if(data.curnum<=0){
        ElNotification({
            title: '温馨提示',
            message: h('i', { style: 'color: teal' }, '已经翻到头咯'),
        })
    }else{
        data.curnum-=1;
        data.problem = store.questions[data.curnum].number +'、'+ store.questions[data.curnum].text;
        //持久化存储当前题目
        store.curnum = data.curnum;
        // store.curtopic = data.problem;
        // store.curoptions.push(option.value[data.curnum]);
        options.splice(0, options.length);
        for(let i=0; i<store.options[data.curnum].length; i++){
            options.push({
                label: store.options[data.curnum][i],
                value: (i + 1).toString(),
            });
            console.log(options[i].label);
        }
    }
    //进度条
    percentage.value -= 10
    if (percentage.value < 0) {
    percentage.value = 0
    }
}


onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})

const titles = ref<string[]>([]);
const questions = ref<{ number: string; text: string }[]>([]);
const option = ref<string[][]>([]);
onMounted(() => {
    titles.value = store.titles;
    questions.value = store.questions;
    option.value = store.options;
    data.len = store.questions.length;
    console.log('Titles:', titles.value);
    console.log('Questions:', questions.value);
    console.log('Options:', option.value);
    if(titles.value[0]!==undefined){
        const matches = titles.value[0].match(/\d+/g);
        if (matches) {
        const numbers = matches.map(match => parseInt(match, 10));
        console.log(numbers);
        } else {
        console.log("未找到数字");
        }
    }
    let j = store.curnum;
    data.problem = store.questions[j].number +'、'+ store.questions[j].text;
    options.splice(0, options.length);
    for(let i=0; i<store.options[j].length; i++){
        options.push({
            label: store.options[j][i],
            value: (i + 1).toString(),
        });
        console.log(options[i].label);
    }
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
        // background-color: aqua;
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
        // background-color: aquamarine;
    }
    .but{
        cursor: pointer;
    }

    .mid {
        // background-color: cadetblue;
        height: 70vh;
        width:84%;
        margin: 0 74px;
        .question{
            margin-left: 12%;
            margin-right: 12%;
            position: relative;
            top:40px;
            h2{
                
            }
            .option{
                padding-top:30px;
            }
        }
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
::v-deep .el-space__item {
    width: 40vw;
}

</style>