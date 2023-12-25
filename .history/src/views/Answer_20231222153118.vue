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
let radio = ref(store.nxtradio);
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
    let ans = radio.value;
    conversion(ans);
    reversal(data.curnum+1);
    if(data.len-1<=data.curnum){
        ElNotification({
            title: '温馨提示',
            message: h('i', { style: 'color: teal' }, '没有再多题目啦'),
        })
    }else{
        data.curnum+=1;
        data.problem = store.questions[data.curnum].number +'、'+ store.questions[data.curnum].text;
        store.curnum = data.curnum; //持久化存储当前题目
        options.splice(0, options.length);
        for(let i=0; i<store.options[data.curnum].length; i++){
            options.push({
                label: store.options[data.curnum][i],
                value: (i + 1).toString(),
            });
        }
    }
    //进度条
    percentage.value += 10
    if (percentage.value > 100) {
        percentage.value = 100
    }
}
const decrease = () => {
    console.log("当前题目序号:"+data.curnum)
    let ans = radio.value;
    reversal(data.curnum);
    conversion(ans);
    if(data.curnum<=0){
        ElNotification({
            title: '温馨提示',
            message: h('i', { style: 'color: teal' }, '已经翻到头咯'),
        })
    }else{
        data.curnum-=1;
        data.problem = store.questions[data.curnum].number +'、'+ store.questions[data.curnum].text;
        store.curnum = data.curnum;  //持久化存储当前题目
        options.splice(0, options.length);
        for(let i=0; i<store.options[data.curnum].length; i++){
            options.push({
                label: store.options[data.curnum][i],
                value: (i + 1).toString(),
            });
        }
    }

    // conversion();
    // reversal(data.curnum-1);
    //进度条
    percentage.value -= 10
    if (percentage.value < 0) {
        percentage.value = 0
    }
}

//存选项 1->A
const conversion = (ans:string) =>{
    let x='';
    console.log("当前选项："+ans)
    if(ans === '1'){
        x = 'A';
    }else if(ans === '2'){
        x = 'B';
    }else if(ans === '3'){
        x = 'C';
    }else if(ans === '4'){
        x = 'D';
    }else if(ans === '5'){
        x = 'E';
    }
    let now = data.curnum;
    const existingIndex = store.ans.findIndex(item => item.number === now);
    console.log("当前是第"+now+"题,当前选项"+x+"存在吗"+existingIndex)
    if (existingIndex !== -1) {
        // 如果存在，则替换text的值
        store.ans[existingIndex].text = x;
    } else {
        // 如果不存在，则添加新的键值对
        store.setAns({
            number: data.curnum,
            text: x
        })
    }
    // 按number由小到大排序
    store.ans.sort((a, b) => a.number - b.number);
    console.log(store.ans)
}

//显示下一题的选项 A->1
const reversal = (now:number) =>{
    const existingIndex = store.ans.findIndex(item => item.number === now);
    // console.log("下一个题的序号"+now+"存在吗"+existingIndex)
    if (existingIndex !== -1) {
        // 如果存在
        // console.log("这是什么"+store.ans[existingIndex].text)
        if(store.ans[existingIndex].text === ''){
            store.nxtradio='';
        }else if(store.ans[existingIndex].text === 'A'){
            store.nxtradio = '1';
        }else if(store.ans[existingIndex].text === 'B'){
            store.nxtradio = '2';
        }else if(store.ans[existingIndex].text ==='C'){
            store.nxtradio = '3';
        }else if(store.ans[existingIndex].text ==='D'){
            store.nxtradio = '4';
        }else if(store.ans[existingIndex].text ==='E'){
            store.nxtradio = '5';
        }
    } else {
        // 如果不存在
        store.nxtradio='';
    }
    radio.value = store.nxtradio;
}


// const titles = ref<string[]>([]);
// const questions = ref<{ number: string; text: string }[]>([]);
// const option = ref<string[][]>([]);
onMounted(() => {
    // titles.value = store.titles;
    // questions.value = store.questions;
    // option.value = store.options;
    // console.log('Titles:', store.titles);
    // console.log('Questions:', store.questions);
    // console.log('Options:', store.options);
    data.len = store.questions.length;
    let j = store.curnum;
    data.problem = store.questions[j].number +'、'+ store.questions[j].text;
    options.splice(0, options.length);
    for(let i=0; i<store.options[j].length; i++){
        options.push({
            label: store.options[j][i],
            value: (i + 1).toString(),
        });
    }
    store.ans.length = 0;
    // reversal();
    //小标题区间
    if(store.titles[0]!==undefined){
        const matches = store.titles[0].match(/\d+/g);
        if (matches) {
        const numbers = matches.map(match => parseInt(match, 10));
        // console.log(numbers);
        } else {
        console.log("未找到数字");
        }
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