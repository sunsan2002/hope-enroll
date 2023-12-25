<template>
    <div class="box">
        <div class="title"></div>
        <div class="container"   @mouseenter.once="data.isHovered = true" @mouseleave="data.isHovered = false">
            <div class="glass" style="--r:-15;" >
                <div class="hint">
                    <img v-if="data.isShow1" src="../assets/iconfont/未完成.png" />
                    <img v-else src="../assets/iconfont/已完成.png" />
                </div>
                <div class="content">
                <h2>01</h2>
                <h3>测试1</h3>
                <!-- <p>请尽快完成测试</p> -->
                <a href="#">Read More</a>
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
                    <!-- <p>Realistic glass card hover effect, realistic glass card hover effect, realistic glass card hover effect.</p> -->
                    <a href="#">Read More</a>
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
                    <!-- <p>Realistic glass card hover effect, realistic glass card hover effect, realistic glass card hover effect, realistic glass card hover effect.</p> -->
                    <a href="#">Read More</a>
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
                    <!-- <p>Realistic glass card hover effect, realistic glass card hover effect, realistic glass card hover effect, realistic glass card hover effect.</p> -->
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div class="title"></div>
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
  isHovered: false,
  isShow1: true,
  isShow2: false,
  isShow3: true,
  isShow4: true,
});

const handleMouseEnter = () => {
    console.log("??????")
    data.isHovered = true;
    // 移除事件监听器，确保只触发一次
    document.querySelector('.container').removeEventListener('mouseenter', handleMouseEnter);
};


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

<style lang="scss" scoped>
.box{
    height: 100%;
    background-color: rgb(170, 159, 159);
}
.title{
    position: relative;
    height: 150px;
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
        background: linear-gradient(#fff2, transparent);
        border: 1px solid rgba(255, 255, 255,0.1);
        box-shadow:0 25px 25px rgba(0,0,0,0.25);
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
            /* 鼠标移入，上移+显示 */
            transform: translateY(-100px);
            transition: 0.6s;
            opacity: 0;
        }
        .hint{
            position:absolute;
            img{
                // transform: translateY(0);
                opacity:0.7;
            }
        }
        .content{
            padding: 20px;
            text-align: center;
            /* 默认下移+隐藏 */
            transform: translateY(0);
            opacity: 1;
            transition: 0.5s;
            h2{
                position: absolute;
                top: -45px;
                right: 31px;
                font-size: 148px;
                color: rgba(255,255,255,0.05);
            }
            h3{
                position: absolute;
                top: 45px;
                right: 75px;
                font-size: 38px;
            }
            p{
                font-size: 16px;
                color: #fff;
                font-weight: 300;
                margin: 40% 0 15px 0;
            }
            a{
                position: relative;
                display: inline-block;
                padding: 8px 20px;
                margin-top: 151px;
                background-color: #fff;
                color: #000;
                text-decoration: none;
                border-radius: 20px;
                font-weight: 500;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            }
        }
        
    }
    &:hover .glass{
        cursor: pointer;
        transform: rotate(0deg);
        margin: 0 20px;
        transition-delay: 0s;
        animation-play-state:paused;
    } 

}

</style>