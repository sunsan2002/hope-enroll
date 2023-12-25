<template>
    <div class="box">
        <div class="title">
            <h1 class="backtitle" align="center">Psychological Test</h1>
            <h1 class="subtitle flag" v-observe="'active'" align="center">心理测试</h1>
            <p class="description flag" v-observe="'active'" align="center">参加测试的人员请务必诚实、独立地回答问题。请在规定时间内完成下面四套题目，否则视为放弃。</p>
        </div>
        <div class="container"   @mouseenter.once="data.isHovered = true" @mouseleave="data.isHovered = false">
            <div class="glass" style="--r:-15;" >
                <div class="hint">
                    <img v-if="data.isShow1" src="../assets/iconfont/未完成.png" />
                    <img v-else src="../assets/iconfont/已完成.png" />
                </div>
                <div class="content">
                <h2>01</h2>
                <h3>测试1</h3>
                <a v-if="data.isShow1" class="but" @click="test(data.url1)">立即测试</a>
                <a v-else class="disable" @click="reminder()">已作答</a>
            </div>
            </div>
            <div class="glass" style="--r:5;" >
                <div class="hint">
                    <img v-if="data.isShow2" src="../assets/iconfont/未完成.png" />
                    <img v-else src="../assets/iconfont/已完成.png" />
                </div>
                <div class="content">
                    <h2>02</h2>
                    <h3>测试2</h3>
                    <a v-if="data.isShow2" class="but" href="#" @click="test(data.url2)">立即测试</a>
                    <a v-else class="disable" @click="reminder()">已作答</a>
                </div>
            </div>
            <div class="glass" style="--r:25;" >
                <div class="hint">
                    <img v-if="data.isShow3" src="../assets/iconfont/未完成.png" />
                    <img v-else src="../assets/iconfont/已完成.png" />
                </div>
                <div class="content">
                    <h2>03</h2>
                    <h3>测试3</h3>
                    <a v-if="data.isShow3" class="but" href="#" @click="test(data.url3)">立即测试</a>
                    <a v-else class="disable" @click="reminder()">已作答</a>
                </div>
            </div>
            <div class="glass" style="--r:-15;" data-text="">
                <div class="hint">
                    <img v-if="data.isShow4" src="../assets/iconfont/未完成.png" />
                    <img v-else src="../assets/iconfont/已完成.png" />
                </div>
                <div class="content">
                    <h2>04</h2>
                    <h3>测试4</h3>
                    <a v-if="data.isShow4" class="but" href="#" @click="test(data.url4)">立即测试</a>
                    <a v-else class="disable" @click="reminder()">已作答</a>
                </div>
            </div>
        </div>
        <div class="title"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, h, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ElNotification,ElLoading  } from 'element-plus'
import axios from 'axios';
import * as XLSX from 'xlsx';
import transformSheets from '../utils/read';
import { problem } from '../store/problem';

const store = problem();
const route = useRoute();
const router = useRouter();
const data = reactive({
  isHovered: false,
  isShow1: true,
  isShow2: true,
  isShow3: true,
  isShow4: true,
  url1: '/1.xlsx',
  url2: '/2.xlsx',
  url3: '/3.xlsx',
  url4: '/4.xlsx',
});
const content = ref([] as string[][]);
const error = ref('');

const handleMouseEnter = () => {
    data.isHovered = true;
    // 移除事件监听器，确保只触发一次
    // 确保找到 .container 元素再移除事件监听器
    const containerElement = document.querySelector('.container');
    if (containerElement) {
        containerElement.removeEventListener('mouseenter', handleMouseEnter);
    }
};

const reminder = () =>{
    ElNotification({
    title: '温馨提示',
    message: h('i', { style: 'color: teal' }, '这套已经答完咯！'),
  })
}


const test  = (url: string) =>{
    clearProblem();
    infoProblem(url);
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    setTimeout(() => {
        loading.close()
        // router.push({ path: "/main/answer" }); 
    }, 200   )
}

//清空题目缓存
const clearProblem = () =>{
    store.curnum = 0;
    store.nxtradio = '';
    store.titles.length = 0;
    store.questions.length = 0;
    store.options.length = 0;
    store.ans.length = 0;
}

//加入心里测试
const infoProblem = async (url:any) => {
    try {
        console.log("这是套题："+url);
        const res = await axios.get(url, { responseType: 'arraybuffer' });
        const data = new Uint8Array(res.data);
        const wb = XLSX.read(data, { type: 'array' });
        const sheets = wb.Sheets;
        content.value = transformSheets(sheets);
        console.log(content)
        console.log(content.value.length)
        if(url==='/1.xlsx'){
            text1(content);
        }else if(url==='/2.xlsx'){
            text2(content);
        }else if(url==='/3.xlsx'){
            text3(content);
        }else if(url==='/4.xlsx'){
            text4(content);
        }
    } catch (err:any) {
        error.value = err.toString(); 
    }
}

const text1 = (content:any) =>{
    for(let i=1; i<content.value.length; i++){
        //题目
        if(typeof content.value[i][0] === 'number'){
            let num = content.value[i][0]; //题目编号
            let str = content.value[i][1]; //题干
            // let newStr = str.slice(0, -1); 
            if (str.includes(':')) {//去掉冒号
                str = str.replace(/:/g, '');
            }
            console.log(num+'、'+ str);
            store.setQuestion({
                number: num,
                text: str,
            })
        }else if(typeof content.value[i][0] === 'string'){
            if(content.value[i][0][0]==='第'){
                let str = content.value[i][0]; //小标题
                // console.log(str);
                store.setTitle(str);
            }else if(content.value[i][0][0]==='A'){
                let str = content.value[i][0]; //选项
                const matches = str.match(/[A-Z]、[^A-Z]+/g); //存数组
                store.setOptions(matches || []);
            }
        }    
    }
}

const text2 = (content:any) =>{
    for(let i=1; i<content.value.length; i++){
        if(typeof content.value[i][0] === 'number'){
            let num = content.value[i][0]; //题目编号
            let str = content.value[i][1]; //题干
            // let newStr = str.slice(0, -1); 
            if (str.includes(':')) {//去掉冒号
                str = str.replace(/:/g, '');
            }
            console.log(num+'、'+ str);
            store.setQuestion({
                number: num,
                text: str,
            })
        }
        //选项
        let an = 'A、从无 B、很轻  C、中等  D、偏重  E、严重'
        const matches = an.match(/[A-Z]、[^A-Z]+/g); //存数组
        store.setOptions(matches || []);
    }
                
}

const text3 = (content:any) =>{
    for(let i=1; i<content.value.length; i++){
        int f = -1;
        if(typeof content.value[i][0] === 'number'){
            let num = content.value[i][0]; //题目编号
            let str = content.value[i][1]; //题干
            // let newStr = str.slice(0, -1); 
            if (str.includes(':')) {//去掉冒号
                str = str.replace(/:/g, '');
            }
            console.log(num+'、'+ str);
            store.setQuestion({
                number: num,
                text: str,
            })
        }else if(typeof content.value[i][0] === 'string'){
            if(content.value[i][0][0]==='一' || content.value[i][0][0]==='三'){
                let str = content.value[i][0]; //小标题
                console.log("小标题:"+str);
                store.setTitle(str);
            }else if(content.value[i][0][0]==='A'){
                let str = content.value[i][0]; //选项
                const matches = str.match(/[A-Z]、[^A-Z]+/g); //存数组
                store.setOptions(matches || []);
            }
        }    
        //选项
        let an = 'A、从无 B、很轻  C、中等  D、偏重  E、严重'
        const matches = an.match(/[A-Z]、[^A-Z]+/g); //存数组
        store.setOptions(matches || []);
    }
}

const text4 = (content:any) =>{
}



onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
    console.log(store.name);
    console.log(store.titles);
})
watchEffect(()=>{
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>

<style lang="scss" scoped>
.box{
    height: 100%;
    // background-color: rgb(170, 159, 159);
}
.title{
    position: relative;
    height: 200px;
    .backtitle{
        position: relative;
        top:90px;
        font-size: 68px;
        line-height: 67px;
        color: #1f2329;
        opacity: 0.04;
        letter-spacing: 2px;
        font-family: 'Gilroy Extra Bold', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    }
    .subtitle{
        position: relative;
        top:60px;
        font-size: 32px;
        letter-spacing: 3px;
    }
    .description{
        position: relative;
        top:100px;
        font-size: 18px;
        line-height: 1.5;
        color: #646a73;
    }
}
.container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    z-index: 1;
    .glass{
        position: relative;
        width:18%;
        height:46vh;
        top:100px;
        // height:350px;
        background: linear-gradient(#fff2, transparent);
        // border: 1px solid rgba(255, 255, 255,0.1);
        border: 1px solid rgba(98, 98, 98, 0.177);
        box-shadow:0px 25px 25px rgba(0,0,0,0.25);
        backdrop-filter: blur(10px);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.5s;
        border-radius:10px;
        margin: 0 -45px;
        transform: rotate(calc(var(--r)*1deg)); 
        transition-delay:9999s;
        &::before{
            content: attr(data-text);
            position:absolute;
            bottom: 0;
            // width: 100%;
            height: 40px;
            background: rgba(255,255,255,0.05);
            display:flex;
            justify-content:center;
            align-items: center;
            color: #fff;
        }

        &:hover .content{
            /* 鼠标移入，上移+显示 */
            transform: translateY(0);
            opacity: 1;
        }
        &:hover .hint{
            transition: 0.5s;
            opacity: 0;
        }
        .hint{
            position:absolute;
            transition: 0.5s;
            img{
                opacity:0.8;
            }
        }
        .content{
            padding: 20px;
            text-align: center;
            /* 默认下移+隐藏 */
            transform: translateY(100px);
            opacity: 0;
            transition: 0.5s;
            h2{
                position: absolute;
                top: -45px;
                right: -40px;
                font-size: 148px;
                color: rgba(98, 98, 98, 0.071);
            }
            h3{
                position: absolute;
                top: 70px;
                right: 30px;
                font-size: 38px;
            }
            p{
                font-size: 16px;
                color: #fff;
                font-weight: 300;
                margin: 40% 0 15px 0;
            }
            .but{
                position: relative;
                display: inline-block;
                width:120px;
                padding: 8px 20px;
                margin-top: 151px;
                background-color: #fff;
                color: #000;
                text-decoration: none;
                border-radius: 10px;
                font-weight: 500;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            }
            .disable{
                position: relative;
                display: inline-block;
                width:120px;
                padding: 8px 20px;
                margin-top: 151px;
                background-color: #fff;
                border-color: #e4d7ed;
                color: #a8abb2;
                text-decoration: none;
                border-radius: 10px;
                font-weight: 500;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);

            }
        }
        
    }
    &:hover .glass{
        transform: rotate(0deg);
        margin: 0 20px;
        transition-delay: 0s;
        animation-play-state:paused;
    } 

}

</style>