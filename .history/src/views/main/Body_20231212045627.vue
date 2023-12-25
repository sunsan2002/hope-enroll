<!--
 * @Author: sunsan 2390864551@qq.com
 * @Date: 2023-11-07 21:08:15
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-12 04:55:38
 * @FilePath: \hopeEnroll\hope_enroll\src\views\main\Body.vue
 * @Description: 介绍实验室（引导页）
-->

<template>
  <div class="box">
    <div class="layout">
      <video src="../../assets/video/坂本龍一.mp3" id="backgroundvideo" autoplay="autoplay" loop="true"></video>
      <div class="content1">
        <section class="wrap flag" v-observe="'active'">
            <h1 class="title" @click="handleClick">Hope实验室</h1>
            <div class="button" @click="handleClick"><p>加入我们</p></div>
        </section>
        <section class="parallax">
            <img src="../../assets/homepage/hill1.png" ref="hill1">
            <img src="../../assets/homepage/hill2.png" ref="hill2">
            <img src="../../assets/homepage/hill3.png" ref="hill3">
            <img src="../../assets/homepage/hill4.png" ref="hill4">
            <img src="../../assets/homepage/hill5.png" ref="hill5">
            <img src="../../assets/homepage/tree.png" ref="tree">
            <img src="../../assets/homepage/leaf.png" ref="leaf">
            <img src="../../assets/homepage/plant.png" ref="plant">
        </section>
        <Login ref="open" />
      </div>
      <div class="content2">
        <h1 class="backtitle" align="center">Employment</h1>
        <h1 class="subtitle flag" v-observe="'active'" align="center">就业情况</h1>
        <p class="description flag" v-observe="'active'" align="center">实验室已培养了约两百余名正式成员，他们毕业后分布于各大高校和互联网公司。</p>
        <el-card class="back-card">
            <div class="card-box">
                <el-row :gutter="20" >
                    <el-col v-for="(item, index) in employmentData" :key="index" :span="6" class="layout-col" >
                        <div class="flipbox">
                            <div class="card front" :style="{ background: `url(${item.image}) repeat center`, 'background-size': 'cover'}">
                            <!-- <h1>{{ item.frontTitle }}</h1> -->
                            </div>
                            <div class="card back">
                                <!-- <h1 style="margin-left: 10px; white-space: pre-line;">{{ item.backTitle }}</h1> -->
                                <h1 v-html="formatBackTitle(item.backTitle)"></h1>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-card>
        <div class="salary-comparison">
            <h1 class="backtitle-l" >Salary</h1>
            <h1 class="subtitle-l flag" v-observe="'active'" >薪资对比</h1>
            <p class="description-l flag" v-observe="'active'">近五届实验室成员就业及薪资情况</p>
            <div class="salary-img">
                <img class="simg" src="../../assets/photo/薪资对比.png"/>
            </div>
        </div>

      </div>
      <div class="content3">
        <h1 class="backtitle" align="center">Research</h1>
        <h1 class="subtitle flag" v-observe="'active'" align="center">升学情况</h1>
        <p class="description flag" v-observe="'active'" align="center">实验室近五年升学情况</p>
        <div class="circular-box">
            <el-row :gutter="20" >
                <el-col v-for="(item, index) in postgraduateData" :key="index" :span="6" class="layout-col" >
                    <div class="flipbox">
                        <div class="card front" :style="{ background: `url(${item.image}) repeat center`, 'background-size': 'cover'}">
                        </div>
                        <div class="card back">
                            <h1 style="margin-left: 10px; white-space: pre-line;">{{ item.backTitle }}</h1>
                            <!-- <h1 v-html="formatBackTitle(item.backTitle)"></h1> -->
                        </div>
                    </div>
                    <div class="circular-title flag" v-observe="'active'">
                        <h1>{{ item.frontTitle }}</h1>
                    </div>
                </el-col>
            </el-row>
        </div>
      </div>
      <div class="content4">
        <h1 class="backtitle" align="center">What's your passion</h1>
        <h1 class="subtitle flag" v-observe="'active'" align="center">探索你感兴趣的领域</h1>
        <p class="description flag" v-observe="'active'" align="center">近三届实验室成员就业情况</p>
        <div class="back-box" :style="image.value">
            <!-- <img src="../../assets/jiaosepage/ysyy.png" alt="" class="ysyy"> -->
            <div class="js_nav">
                <div class="xian"></div>
                <div class="city_ul">
                    <div class="city_li">
                        <img src="../../assets/jiaosepage/done.png" alt="" class="done">
                        <img src="../../assets/jiaosepage/xuanzhong.png" class="xuanzhong" v-if="cut===1" alt="">
                        <router-link class="city_Mengde" to="/main/project" @click="di(1)" active-class="xuancity">算法组</router-link>
                    </div>
                    <div class="city_li">
                        <img src="../../assets/jiaosepage/done.png" alt="" class="done">
                        <img src="../../assets/jiaosepage/xuanzhong.png" class="xuanzhong" v-if="cut===2" alt="">
                        <router-link class="city_Liyue" to="/main/project" @click="di(2)" active-class="xuancity">项目组</router-link>
                    </div>
                </div>
            </div>
            <router-view></router-view>
        </div>
      </div>
      <div class="content5">
        <h1 class="backtitle" align="center">About Us</h1>
        <h1 class="subtitle flag" v-observe="'active'" align="center" >关于我们</h1>
        <div class="box1">
            <h1>实验室简介</h1>
            <p class="description flag" v-observe="'active'">创新创业工作室创立于2007年，植根于吉首大学软件学院，是吉首大学最早创立的工作室，由黄伟老师创办，旨在培养懂得感恩，有自驱力和创造力的优秀大学生。目前已培养的正式成员约两百余人，培养成员毕业分布遍布各大高校以及各大互联网行业公司。</p>
        </div>
        <div class="box2">
            <el-card class="box-card">
                <img class="photo" src="../../assets/photo/黄sir.jpg"  />
            </el-card>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "../../router";
import TimerTpChange from '../../hooks/TimerTpChange.js';
import { ref, reactive, computed, watch, onMounted, toRefs } from 'vue';
import Login from '../Login.vue'
import gsap from 'gsap';

const { text, leaf, hill1, hill4, hill5 } = toRefs({
  text: ref(null),
  leaf: ref(null),
  hill1: ref(null),
  hill4: ref(null),
  hill5: ref(null),
});

//就业信息
const employmentData = ref([
  { frontTitle: '阿里巴巴', backTitle: '伍孝林', image: require("../../assets/logo/阿里巴巴.png") },
  { frontTitle: '百度', backTitle: '李钢', image: require("../../assets/logo/百度.png") },
  { frontTitle: '腾讯', backTitle: '李薇丽、阳汝招 李宇杰、覃会江 刘彩云', image: require("../../assets/logo/腾讯.png")},
  { frontTitle: '字节跳动', backTitle: '黄鹏、刘继强 刘毅、朱炳坤', image: require("../../assets/logo/字节跳动.png") },
  { frontTitle: '声网', backTitle: '胡炬、罗汝', image: require("../../assets/logo/声网.png")},
  { frontTitle: '滴滴', backTitle: '唐奇', image: require("../../assets/logo/滴滴.png")},
  { frontTitle: '美团', backTitle: '黄乙轩', image: require("../../assets/logo/美团.png")},
  { frontTitle: '水滴', backTitle: '刘菲', image: require("../../assets/logo/水滴.png")},
  { frontTitle: '去哪儿', backTitle: '蒋提', image: require("../../assets/logo/去哪儿.png")},
  { frontTitle: '水滴', backTitle: '周扬', image: require("../../assets/logo/云账户.png")},
  { frontTitle: '神策数据', backTitle: '邓志远、周龙波', image: require("../../assets/logo/神策数据.png") },
  { frontTitle: '达达集团', backTitle: '李锐', image: require("../../assets/logo/达达集团.png")},
]);

//研究生信息
const postgraduateData = ref([
  { frontTitle: '中国科学技术大学', backTitle: '魏勋', image: require("../../assets/logo/中国科学技术大学.png") },
  { frontTitle: '中南大学', backTitle: '彭润泽、易松杰', image: require("../../assets/logo/中南大学.png") },
  { frontTitle: '湖南大学', backTitle: '赖淇', image: require("../../assets/logo/湖南大学.png")},
  { frontTitle: '南京航空航天大学', backTitle: '林聪', image: require("../../assets/logo/南京航空航天大学.png")},
  { frontTitle: '湖南师范大学', backTitle: '蒋超、徐雪娇', image: require("../../assets/logo/湖南师范大学.png") },
  { frontTitle: '西安电子科技大学', backTitle: '刘宇阳', image: require("../../assets/logo/西安电子科技大学.png")},
  { frontTitle: '深圳大学', backTitle: '李美婷、黎子龙', image: require("../../assets/logo/深圳大学.png")},
  { frontTitle: '江南大学', backTitle: '唐文亮', image: require("../../assets/logo/江南大学.png")},
  { frontTitle: '南昌大学', backTitle: '刘杰', image: require("../../assets/logo/南昌大学.png")},
  { frontTitle: '新疆大学', backTitle: '李翔', image: require("../../assets/logo/新疆大学.png")},
  { frontTitle: '云南大学', backTitle: '陈晨', image: require("../../assets/logo/云南大学.png")},
  
]);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});


function formatBackTitle(title) {
    return title.replace(/[, ]/g, '<br>');
}

//图片平移
function handleScroll() {
  let value = window.scrollY;
  if (text.value) text.value.style.marginTop = value * -1.5 + 'px';
  if (leaf.value) {
    leaf.value.style.top = value * -1.5 + 'px';
    leaf.value.style.left = value * 1.5 + 'px';
  }
  if (hill5.value) hill5.value.style.left = value * 1.5 + 'px';
  if (hill4.value) hill4.value.style.left = value * -1.5 + 'px';
  if (hill1.value) hill1.value.style.top = value * 0.5 + 'px';
}


// 获取子组件实例
const open = ref()

//加入我们
function handleClick() {
    const $button = event.target;
    if ($button) {
        const duration = 0.3;
        const delay = 0.08;
        gsap.to($button, { scaleY: 1.6, ease: 'expo.out', duration });
        gsap.to($button, { scaleX: 1.2, scaleY: 1, ease: 'back.out(3)', delay, duration });
        gsap.to($button, { scaleX: 1, scaleY: 1, ease: 'back.out(6)', delay: delay * 3, duration: duration * 1.25 });
    }
    open.value.change();
}


// 点击切换组
let cut = ref(1);

function di(e) {
    cut.value = e;
}

// 比赛照片
 let imagesll = [
    {'background-image':'url('+require('../../assets/jiaosepage/md001.jpg')+')'},
 ];

// 定时器
let backtp = TimerTpChange();
let k = computed(() => cut.value * 2 + backtp.value - 2);

let image = ref(imagesll[parseInt(k.value)]);



// watch(k, (newValue) => {
//   image.value = ref(imagesll[newValue]);
// });

defineExpose({
  ...toRefs(employmentData,postgraduateData)
})


</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

body {
    background: #f9f9f9;
    min-height: 100vh;
    overflow-x: hidden;
}
.box {
  height: 100%;
}
  
.layout{
    position: relative;
    top: 8px;
    left: 0;
    width: 100%;
    z-index: 0;
    display: flex;
    flex-direction: column;
    /* height: 720px;
    overflow: hidden; */
}
#backgroundvideo{
    position: absolute;
    top: -120px;
    left: 0;
    width: 100%;
    z-index: -1;
    overflow: hidden;
}

::selection {
    background: rgba(0, 0, 0, .2);
}
.content1{
    position: relative;
    justify-content: center;
    align-items: center;
    height:calc(100vh - 47px);
    overflow: hidden;
    .wrap{
        position: relative;
        z-index: 1;
    }
    .parallax img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

}

.title{
    position: absolute;
    top: 230px;
    left: 32%;
    font-size: 105px;
    letter-spacing:1.5px;
    font-weight: 700;
    color: #eeeeee;
}
.button{
    position: absolute;
    left: 50%;
    top: 530px;
    background: #eeeeee;
    width: 15%;
    height: 45px;
    padding: 4px 0;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        font-size: 26px;
        letter-spacing:1px;
        text-transform: uppercase;
        color: #000000;
        user-select: none;
    }
    &:hover{
        cursor: pointer;
    }
    &:after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 10%;
        border-radius: 50%;
        background-color: darken(#a9a48e, 20%);
        opacity: 0.4;
        bottom: -25px;
    }
}


// 标题
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

// 左标题
.backtitle-l{
    position: relative;
    left: 10%;
    top:80px;
    font-size: 68px;
    line-height: 67px;
    color: #1f2329;
    opacity: 0.04;
    letter-spacing: 2px;
    font-family: 'Gilroy Extra Bold', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
.subtitle-l{
    position: relative;
    left: 10%;
    top:40px;
    font-size: 32px;
    letter-spacing: 3px;
}
.description-l{
    position: relative;
    top:80px;
    left: 10%;
    font-size: 18px;
    line-height: 1.5;
    color: #646a73;
}


.content2{
    position: relative;
    min-height: 1700px;
    .back-card{
        position: absolute;
        width:80%;
        top: 340px;
        transform: translate(-50%);
        left: 50%;
        .card-box{
            margin:50px 50px 10px 50px;
        }
        .layout-col{
            margin-bottom:50px;
            transform: translate(10%);
        }
        .flipbox{
            position: relative;
            width:200px;
            height:200px;
            cursor: pointer;
            .card{
                position:absolute;
                top:0;
                left: 0;
                width:100%;
                height:100%;
                // background:#c4cbcf;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow:1px 5px 12px 2px rgba(0,0,0,0.2);
                // color:#fff;
                border-radius:10px;
                transform-style:preserve-3d;
                backface-visibility:hidden;
                transition:transform .5s ease-in-out;
            }
            .front{
                transform: rotateY(0deg);
            }
            .back{
                transform: rotateY(180deg);
            }
            &:hover .front{
                transform: rotateY(-180deg);
            }
            &:hover .back{
                transform: rotateY(0deg);
            }
        }
    }
    .salary-comparison{
        position: absolute;
        width: 100%;
        height: 500px;
        right: 0;
        bottom: 40px;
        .salary-img{
            position: relative;
            top:-55px;
            left: 35%;
            height: 80%;
            .simg{
                width:500px;
                height: 120%;
            }
        }
    }
    
}

.content3{
    // background-color: yellow;
    position: relative;
    min-height: 1220px;
    // background-image: url("../../assets/background.png");
    // opacity: 0.3;
    // background-position: center bottom;
    // background-size: 1440px 100%; 
    // background-repeat: no-repeat;
    // z-index: -100;
    
    .circular-box{
        margin-top:200px;
        margin-left: 10%;
        margin-right: 10%;
        h1{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .circular-title{
        margin-left: -80px;
        padding-top: 40px;
    }
    .layout-col{
            margin-bottom:60px;
            transform: translate(10%);
        }
        .flipbox{
            position: relative;
            width:200px;
            height:200px;
            cursor: pointer;
            .card{
                position:absolute;
                top:0;
                left: 0;
                width:100%;
                height:100%;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow:1px 5px 12px 2px rgba(0,0,0,0.2);
                border-radius: 50%; /* 设置为50%以创建圆形 */
                overflow: hidden; /* 防止内容溢出边界 */
                transform-style:preserve-3d;
                backface-visibility:hidden;
                transition:transform .5s ease-in-out;
            }
            .front{
                transform: rotateY(0deg);
            }
            .back{
                transform: rotateY(180deg);
            }
            &:hover .front{
                transform: rotateY(-180deg);
            }
            &:hover .back{
                transform: rotateY(0deg);
            }
        }
}
.content4{
    position: relative;
    height: 980px;
    // background-color: rgb(0, 255, 26);
}
.content5{
    height: 2000px;
    z-index: 3;
    position: relative;
    justify-content: center;
    align-items: center;
    .box1{

    }
    .box2{
        .box-card{
            position: absolute;
            top:250px;
            width: 25%;
            height: 480px;
            left:15%;
            .photo{
                width: 100%; 
                height: 100%;
            }
        }
    }
    
}





.back-box{
    height: 100vh;
    position: absolute;
    display: block;
    /* width: 100%; */
    top: 310px;
    bottom: 0;
    left: 0;
    right: 0;
    background-position: center;
    background-size: cover;
    transform-origin: center;
    /* background-color: aqua; */
    // z-index: -100 !important;
    background-image: url(../../assets/black.png);
    background-repeat:no-repeat;
    transition: background-image 1s ease;
    overflow: hidden;
  }
  .ysyy{
    position: absolute;
    width: 112%;
    top: 0;
    left: -90px;
    bottom: 0;
    right: 0;
    z-index: -25 !important;
  }
  .js_nav{
    position: absolute;
    top: 25%;
    left: 0;
    width: 370px;
    // z-index: -5 !important;
    
    background-color: brown;
  }
  .xian{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 10%;
    width: 2px;
    height: 100%;
    background-image: linear-gradient(to bottom right, #fff, rgba(255, 255, 255, 0.2), transparent);
  }
  .city_ul{
    position: absolute;
    top: 25%;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20%;/*大小肯定小了，但叠放次序难调 */
    // z-index: -8 !important;
    /* background-color:aquamarine; */
  }
  .city_li{
    position: relative;
    float: left;
    width: 100%;
    height: 52.75px;
    // cursor: pointer;
    /* background-color:blue; */
    overflow: hidden;
  }
  .done{
    position: absolute;
    left: 17.5px;
    top: 50%;
    width: 40px;
    transform: translate(0,-50%);
  }
  .city_li a{
    position: absolute;
    left: 0;
    width: 50%;
    margin-left: 30px;
    padding-left: 25px;
    top: 50%;
    transform: translate(0,-50%);
    color: #fff;
    font-size: 18px;
    // z-index: 10 !important;
  }
  .xuancity{
    padding-left: 45px !important;
  }
  .xuanzhong{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
    

</style>