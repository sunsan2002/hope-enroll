<template>
  <div class="box">
    <div class="container">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <el-progress
                    :percentage="percentage"
                    :stroke-width="15"
                    :format="format"
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
                <el-button type="primary" key="primary" text bg size="large" class="button" @click="centerDialogVisible = true">我答完了</el-button>
            </div>
        </el-card>

        <el-dialog v-model="centerDialogVisible" title="温馨提示" width="30%" center  align-center>
            <span>
                仅有一次作答机会且提交之后不能修改，确定提交吗？
            </span>
            <template #footer>
            <span class="dialog-footer">
                <el-button @click="centerDialogVisible = false" class="tbutton">取消</el-button>
                <el-button type="primary" @click="finish()" class="tbutton">
                提交
                </el-button>
            </span>
            </template>
        </el-dialog>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs,h, onBeforeMount, onMounted, watchEffect, computed } from 'vue';import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue'
import { problem } from '../store/problem';
import { user } from '../store/user';
import { ElNotification } from 'element-plus'
import apiFun from '../utils/api';

const storeUser = user();
const store = problem();
const route = useRoute();
const router = useRouter();
let centerDialogVisible = ref(false);
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
let percentage = ref<number>(store.percentage);
let duration = computed(() => Math.floor(percentage.value / 10));
const format = (percentage: number) => (percentage === 100 ? '100%' : `${Math.floor(percentage)}%`);

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

const finish = () =>{
    centerDialogVisible.value = false;
    let answer: string = "";
    for(let i=0; i<store.ans.length; i++){
        answer += store.ans[i].text;
    }
    let number: number = storeUser.curnum;
    console.log("当前是第"+number+"套题")
    apiFun.user.submit({
        select: number,
        answer: answer,
    })
    .then((res: any) => {
    console.log("存储答案信息:")
      console.log(res);
      if(res.code === 200){
        if(number===1){
            storeUser.state1 = false;
        }else if(number===2){
            storeUser.state2 = false;
        }else if(number===3){
            storeUser.state3 = false;
        }else if(number===4){
            storeUser.state4 = false;
        }
        storeUser.curtime = getCurrentTime();
        router.push({ path: "/main/finish"}); 
      }
    }).catch((err: any)=>{
      console.log(err);
    });
}

//下一个
const increase = () => {
    if(data.len-1<=data.curnum){
        let now = data.curnum+1;
        // console.log("第"+now+"题的选项是:"+radio.value);
        conversion(radio.value,now);
        centerDialogVisible.value = true;
        ElNotification({
            title: '温馨提示',
            message: h('i', { style: 'color: teal' }, '没有再多题目啦'),
        })
    }else{
        let next = data.curnum+1;
        // console.log("(下一个)题目序号:"+next)
        reversal(next);
        if(store.curstate === -1){
            data.curnum+=2;
        }else{
            data.curnum+=1;
        }
        console.log("当前题目编号:"+data.curnum);
        saveOpion();
    }
    //进度条
    let dis = 100/store.questions.length;
    percentage.value += dis;
    if (percentage.value > 100) {
        percentage.value = 100;
    }
    store.percentage = percentage.value;
}

//上一个
const decrease = () => {
    store.curstate = -1;
    if(data.curnum<=0){
        ElNotification({
            title: '温馨提示',
            message: h('i', { style: 'color: teal' }, '已经翻到头咯'),
        })
    }else{
        let next = data.curnum;
        // console.log("（上一个）题目序号:"+next)
        reversal1(next);
        data.curnum-=1;
        console.log("当前题目编号是:"+data.curnum);
        saveOpion();
    }

    // conversion();
    // reversal(data.curnum-1);
    //进度条
    let dis = 100/store.questions.length;
    percentage.value -= dis;
    if (percentage.value < 0) {
        percentage.value = 0;
    }
    store.percentage = percentage.value;
}

//显示题目
const saveOpion = () =>{
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

//存选项 1->A
const conversion = (ans:string,now:number) =>{
    let x='';
    // console.log("当前选项："+ans)
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
    const existingIndex = store.ans.findIndex(item => item.number === now);
    console.log("当前是第"+now+"题,当前选项:"+x+",存在吗"+existingIndex)
    if (existingIndex !== -1) {
        // 如果存在，则替换text的值
        store.ans[existingIndex].text = x;
    } else {
        // 如果不存在，则添加新的键值对
        store.setAns({
            number: now,
            text: x
        })
    }
    // 按number由小到大排序
    store.ans.sort((a, b) => a.number - b.number);
    console.log(store.ans);
}

//显示下一题的选项 A->1
const reversal = (now:number) =>{
    const existingIndex = store.ans.findIndex(item => item.number === now);
    console.log("下一个题的序号"+now+",存在吗"+existingIndex)
    if (existingIndex !== -1) {
        // 如果存在
        console.log("这个选项的内容是:"+store.ans[existingIndex].text)
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
    let ans = radio.value;
    console.log("当前第 "+now+" 题的答案："+ans + "  -下一个题的答案：" + store.nxtradio);
    conversion(ans,now);
    radio.value = store.nxtradio;
}



//显示下一题的选项 A->1
const reversal1 = (now:number) =>{
    const existingIndex = store.ans.findIndex(item => item.number === now);
    console.log("下一个题的序号"+now+",存在吗"+existingIndex)
    if (existingIndex !== -1) {
        // 如果存在
        console.log("这个选项的内容是:"+store.ans[existingIndex].text)
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
    let ans = radio.value;
    let nnow = now+1;  //+1回退最后一个正常存,但是再向后一个data.curnum会没有+1    /////bug
    console.log("当前第 "+nnow+" 题的答案："+ans + "  -上一个题的答案：" + store.nxtradio);
    conversion(ans,nnow);
    radio.value = store.nxtradio;
}






//延迟函数
function delayFunction(callback: () => void, delay: number): void {
  setTimeout(callback, delay);
}


// const titles = ref<string[]>([]);
// const questions = ref<{ number: string; text: string }[]>([]);
// const option = ref<string[][]>([]);
onMounted(() => {
    // delayFunction(() => {
    //     console.log("延时函数")
    // }, 100);
    // titles.value = store.titles;
    // questions.value = store.questions;
    // option.value = store.options;
    // console.log('Titles:', store.titles);
    console.log('Questions:', store.questions);
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
    // store.ans.length = 0;
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
.container{
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
        // margin: 0 70px;
        margin-top: 0%;
        margin-left: 10%;
        .question{
            margin-left: 12%;
            margin-right: 12%;
            position: relative;
            top:40px;
            h2{
                
            }
            .option{
                padding-top:50px;
            }
        }
    }
}
.card-footer{
    position: relative;
    bottom: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    .button{
        position: relative;
        top:5%;
        width:62%;
    }
}
.tbutton{
    width:22%;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
::v-deep .el-space__item {
    width: 40vw;
}
::v-deep .el-radio__label{
	white-space: normal;  /* 换行 */
    // text-overflow: ellipsis;
    // line-height: 18px;
    // vertical-align: middle;
    // display: inline-block;
}



</style>