<!--
 * @Author: sunsan 2390864551@qq.com
 * @Date: 2023-11-07 21:08:15
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-05-20 02:34:01
 * @FilePath: \hopeEnroll\hope_enroll\v-lazy\views\main\Body.vue
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
            <div class="sign">
                <svg id="more-arrows" @click="scrollDown">
                    <polygon class="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
                    <polygon class="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
                    <polygon class="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
                </svg>
                <p style="color: #fff;">下拉了解更多</p>
            </div>
        </section>
        <section class="parallax">
            <img v-lazy="require('../../assets/homepage/hill1.png')" ref="hill1">
            <img v-lazy="require('../../assets/homepage/hill2.png')" ref="hill2">
            <img v-lazy="require('../../assets/homepage/hill3.png')" ref="hill3">
            <img v-lazy="require('../../assets/homepage/hill4.png')" ref="hill4">
            <img v-lazy="require('../../assets/homepage/hill5.png')" ref="hill5">
            <img v-lazy="require('../../assets/homepage/tree.png')" ref="tree">
            <img v-lazy="require('../../assets/homepage/leaf.png')" ref="leaf">
            <img v-lazy="require('../../assets/homepage/plant.png')" ref="plant">
        </section>
        <Login ref="open" />
      </div>
      <div id="content2" class="content2">
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
                                <h1 style="margin-left: 10px; white-space: pre-line;font-size:0.05rem;" v-html="formatBackTitle(item.backTitle)"></h1>
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
                <img class="simg" v-lazy="require('../../assets/photo/薪资对比.png')"/>
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
                            <h1 style="margin-left: 10px; white-space: pre-line;font-size:0.05rem;">{{ item.backTitle }}</h1>
                            <!-- <h1 v-html="formatBackTitle(item.backTitle)"></h1> -->
                        </div>
                    </div>
                    <div class="circular-title flag" v-observe="'active'">
                        <h1 class="frontTitle">{{ item.frontTitle }}</h1>
                    </div>
                </el-col>
            </el-row>
        </div>
      </div>
      <div class="content4">
        <h1 class="backtitle" align="center">What's your passion</h1>
        <h1 class="subtitle flag" v-observe="'active'" align="center">探索你感兴趣的领域</h1>
        <p class="description flag" v-observe="'active'" align="center">我们将根据你的兴趣，指引你前进的方向。</p>
        <div class="back-box" >
            <div class="js_nav">
                <div class="xian"></div>
                <div class="city_ul">
                    <div class="city_li">
                        <img v-lazy="require('../../assets/jiaosepage/done.png')" alt="" class="done">
                        <img v-lazy="require('../../assets/jiaosepage/xuanzhong.png')" class="xuanzhong" v-if="cut===1" alt="">
                        <router-link class="frontTitle" to="/main/arithmetic" @click="di(1)" active-class="xuancity">算法组</router-link>
                    </div>
                    <div class="city_li">
                        <img v-lazy="require('../../assets/jiaosepage/done.png')" alt="" class="done">
                        <img v-lazy="require('../../assets/jiaosepage/xuanzhong.png')" class="xuanzhong" v-if="cut===2" alt="">
                        <router-link class="frontTitle" to="/main/in" @click="di(2)" active-class="xuancity">项目组</router-link>
                    </div>
                </div>
            </div>
            <router-view></router-view>
        </div>
      </div>
      <div class="content5">
        <h1 class="backtitle" align="center">About Us</h1>
        <h1 class="subtitle flag" v-observe="'active'" align="center" >关于我们</h1>
        <div class="container1">
            <h1 class="box-title flag" v-observe="'active'">实验室简介</h1>
            <p class="description describe1 flag" v-observe="'active'">Hope工作室(原创新创业工作室)创立于2007年，植根于吉首大学软件学院，是吉首大学最早创立的工作室，由黄伟老师创办，旨在培养懂得感恩，有自驱力和创造力的优秀大学生。目前已培养的正式成员约两百余人，培养成员毕业分布遍布各大高校以及各大互联网行业公司。</p>
        </div>
        <div class="container2">
            <div class="left">
               <el-card class="box-card flag1" v-observe="'active1'">
                    <img class="photo "  v-lazy="require('../../assets/photo/黄sir.jpg')"  />
                </el-card> 
            </div>
            <div class="right">
                <h1 class="box-title flag" v-observe="'active'">指导教师</h1>
                <div class="flag" v-observe="'active'">
                    <h2 class="teacher description describe1">黄伟</h2>
                    <p class="description describe1">2003-至今,工作于吉首大学.
                    曾任软件学院软件工程系主任,现任软件学院工程实训中心主任
                    曾获张家界市优秀教师，吉首大学师德标兵,吉首大学校级骨干教师.吉首大学教学新秀.积极培训和指导学生参加国家级学科竞赛。
                    近年来指导学生获奖共100人次，获各类奖项30多项。指导学生参加教育部和商务部举办“中国大学生服务外包创新创业大赛”，获得团体一等奖3次，团体二等奖6次，团体三等奖3次。指导学生参加工信部和教育部举办“中国大学生软件设计大赛”，获二等奖3次。
                    </p>
                </div>
                
            </div>
        </div>
        <div class="container3">
            <div class="left">
                <h1 class="box-title  flag" v-observe="'active'">学习生活</h1>
                <p class="description describe1 flag" v-observe="'active'">Hope实验室以培养学习与科研兴趣、实践动手能力、快速自学能力、思维能力为首要目标，以学科竞赛为牵引，秉承立志、修身、笃行、创新的理念，坚持厚德、务实、创新、求索的价值观，以成为国内一流的创新创业团队为愿景，从本科低年级开始进行人才培养，同时设立本科生朋辈导师制度，培养创新能力与教导能力。通过“学中干，干中学，带着学”的方式督促培养学生的学习能力与综合素质。</p>
            </div>
            <div class="right">
                <el-card class="box-card flag1" v-observe="'active1'">
                    <img class="photo "  v-lazy="require('../../assets/photo/日常2.jpg')"  />
                </el-card> 
            </div>
        </div>
        <div class="container4">
            <div class="left">
               <el-card class="box-card flag1" v-observe="'active1'">
                    <img class="photo "  v-lazy="require('../../assets/photo/答辩2.png')"  />
                </el-card> 
            </div>
            <div class="right">
                <h1 class="box-title  flag" v-observe="'active'">培养模式</h1>
                <p class="description describe1 flag" v-observe="'active'">Hope工作室不仅是自习场所，更是一个培养学习社区。每周，我们轮流担任值日生，集体进行大扫除，同时召开例会和学习讨论会，共同解决学习和工作中的问题。我们不只是简单的制定措施，更注重严格执行，这也是我们是工作室能从众多工作室脱颖而出的最重要的原因。通过奖惩制度激发学习积极性，优秀成员有奖励，表现差的成员可能面临淘汰。在这里，你将迎接挑战，但也能轻松实现自律和成长。希望工作室助你快速成长，培养独立自律。</p>
            </div>
        </div>
        <div class="container5">
            <div class="left">
                <h1 class="box-title  flag" v-observe="'active'">日常活动</h1>
                <p class="description describe1 flag" v-observe="'active'">
                    在学习的同时，我们注重团队的休闲与互动。定期举办丰富多彩的团建活动，不仅加深了同事间的默契，也为工作环境注入了活力。我们秉持着“每月一善”的理念，共同投入爱心，回馈社会，让我们的努力不仅造福自己，也温暖了更多的人心。为了让团队更加紧密，我们定期举办温馨快乐的生日会，共同庆祝团队成员的生日，感受大家之间的温暖。此外，我们还鼓励在学习分享会上展示自己的学习成果和心得体会，轻松而不失正式，为团队成员提供了一个共享经验和知识的平台。
                </p>
            </div>
            <div class="right">
                <el-card class="box-card flag1" v-observe="'active1'">
                    <img class="photo "  v-lazy="require('../../assets/photo/日常1.jpg')"  />
                </el-card> 
            </div>
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
import { user } from '../../store/user';


const store = user();

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
  { frontTitle: '腾讯', backTitle: '李薇丽、阳汝昭 李宇杰、覃会江 刘彩云', image: require("../../assets/logo/腾讯.png")},
  { frontTitle: '字节跳动', backTitle: '黄鹏、刘继强 刘毅、朱炳坤', image: require("../../assets/logo/字节跳动.png") },
  { frontTitle: '声网', backTitle: '胡炬、罗汝', image: require("../../assets/logo/声网.png")},
  { frontTitle: '滴滴', backTitle: '唐奇', image: require("../../assets/logo/滴滴.png")},
  { frontTitle: '美团', backTitle: '黄乙轩', image: require("../../assets/logo/美团.jpg")},
  { frontTitle: '水滴', backTitle: '刘菲', image: require("../../assets/logo/水滴.png")},
  { frontTitle: '去哪儿', backTitle: '蒋缇', image: require("../../assets/logo/去哪儿.png")},
  { frontTitle: '水滴', backTitle: '周杨', image: require("../../assets/logo/云账户.png")},
  { frontTitle: '网易', backTitle: '杨腾宇', image: require("../../assets/logo/网易.jpg") },
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

function scrollDown(){
    document.getElementById('content2').scrollIntoView({ behavior: 'smooth' });
}

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
    if(store.state){
        router.push({ path: "/main/option" });
    }else{
        open.value.change();
    }
}


// 点击切换组
let cut = ref(1);

function di(e) {
    cut.value = e;
}

// // 比赛照片
//  let imagesll = [
//     {'background-image':'url('+require('../../assets/jiaosepage/md001.jpg')+')'},
//  ];

// 定时器
let backtp = TimerTpChange();
let k = computed(() => cut.value * 2 + backtp.value - 2);

// let image = ref(imagesll[parseInt(k.value)]);



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
.frontTitle{
    font-size: 20px;
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
    height:calc(100vh - 47px);
    overflow: hidden;
    .wrap{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1;
        width: 80%; /* 适当调整宽度百分比 */
        max-width: 1200px; /* 添加最大宽度，防止在大屏幕上过宽 */
        margin: 0 auto; /* 居中 */
    }
    .parallax img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
    }
    .sign{
        position: absolute;
        top: 88vh;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }
    #more-arrows {
        cursor: pointer;
    }
    .title{
        position: absolute;
        // top: 250px;
        // font-size: 105px;
        top: 50%; /* 将元素顶部与父容器的中心对齐 */
        transform: translateY(100%); /* 通过向上移动自身高度的一半来实现垂直居中 */
        font-size: 0.8rem;
        letter-spacing:1.5px;
        font-weight: 700;
        color: #eeeeee;
        cursor: pointer;
    }
}


/* Arrow & Hover Animation */
#more-arrows {
    width: 1.7rem;
    height: 1rem;
    cursor: pointer;
  &:hover {
    
    polygon {
    //   fill: #FFF;
      transition: all .2s ease-out;

      &.arrow-bottom {
        transform: scale(0.5) translateY(-18px);
      }

      &.arrow-top {
        transform: scale(0.5) translateY(18px);
      }
    }
  }
}
.arrow-top,
.arrow-middle,
.arrow-bottom {
    transform: scale(0.5); /* 设置缩小比例，此处为50% */
    transform-origin: center; /* 设置缩小的原点为中心点 */
}

polygon {
  fill: #FFF;
  transition: all .2s ease-out;
    
  &.arrow-middle {
	  opacity: 0.75;
	}

	&.arrow-top {
	  opacity: 0.5
	}
	 
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
        background-color: #fffdfd;
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
    font-size: 50px;
    line-height: 67px;
    color: #1f2329;
    opacity: 0.04;
    letter-spacing: 2px;
    font-family: 'Gilroy Extra Bold', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
.subtitle{
    position: relative;
    top:60px;
    font-size: 26px;
    letter-spacing: 3px;
}
.description{
    position: relative;
    top:100px;
    font-size: 14px;
    line-height: 1.5;
    color: #646a73;
}

// 左标题
.backtitle-l{
    position: relative;
    left: 10%;
    top:80px;
    font-size: 50px;
    line-height: 67px;
    color: #1f2329;
    opacity: 0.04;
    letter-spacing: 2px;
    font-family: 'Gilroy Extra Bold', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
.subtitle-l{
    position: relative;
    left: 10%;
    top:50px;
    font-size: 26px;
    letter-spacing: 3px;
}
.description-l{
    position: relative;
    top:80px;
    left: 10%;
    font-size: 14px;
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
            width: 1.5rem;
            height: 1.5rem;
            // display: flex;
            // flex-direction: column;
            // justify-content: center;
            // align-items: center;
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
                text-align: center;
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
        margin-left: 5%;
        margin-right: 10%;
        h1{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .circular-title{
        // margin-left: -80px;
        padding-top: 40px;
    }
    .layout-col{
            margin-bottom:60px;
            transform: translate(10%);
            display: flex;
            flex-direction: column;
            // justify-content: center;
            align-items: center;
        }
        .flipbox{
            position: relative;
            // display: flex;
            // flex-direction: column;
            // justify-content: center;
            width:1.5rem;
            height:1.5rem;
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
.box-title{
    position: relative;
    font-size: 24px;
    color: #333; /* 设置标题文字颜色 */
    margin-left: 20px; /* 设置左侧边距，确保蓝色竖线不贴在文字上 */
}
.box-title::before {
    content: "";
    position: absolute;
    top: 0;
    left: -15px; /* 设置竖线离标题左侧的距离 */
    width: 5px; /* 设置竖线的宽度 */
    height: 100%; /* 设置竖线的高度，与标题高度一致 */
    background-color: #018E98; /* 设置竖线的颜色 */
}
.describe1{
    top:35px;
}
@media (max-width: 767px) {
    .content2 .back-card{
        top:4.2rem;
    }
    .content4 {
        height: 12rem;
    }
    .js_nav{
        margin-top: -1.5rem;
    }
}
// .content5{
//     height: 2630px;
//     z-index: 3;
//     position: relative;
//     justify-content: center;
//     align-items: center;
//     .container1{
//         position: absolute;
//         top:250px;
//         left:10%;
//         right:15%;
//     }
//     .container2{
//         position: absolute;
//         top:450px;
//         left:10%;
//         right:15%;
//         .right{
//             width: 42%;
//             float: right;
//             margin-top: 20px;
//         }
//         .left{
//             width: 50%;
//             float: left;
//         }
//         .teacher{
//             margin-top: 55px;
//         }
//         .box-card{
//             width:350px;
//             .photo{
//                 width: 100%; 
//                 height: 100%;
//             }
//         }
//     }

//     .container3{
//         position: absolute;
//         top:970px;
//         left:10%;
//         right:15%;
//         .right{
//             width: 40%;
//             float: left;
//             margin-right:10%;
//             margin-top: 55px;
//         }
//         .left{
//             width: 50%;
//             float: left;
//             margin-top: 35px;
//         }
//         .box-card{
//             width:625px;
//             .photo{
//                 width: 100%; 
//                 height: 100%;
//             }
//         }
//     }
    
//     .container4{
//         position: absolute;
//         top:1550px;
//         left:10%;
//         right:10%;
//         .right{
//             width: 48%;
//             float: left;
//             margin-right: 5%;
//         }
//         .left{
//             width: 35%;
//             float: left;
//             margin-top: 35px;
//             margin-left:12%;
//         }
//         .box-card{
//             width:650px;
//             .photo{
//                 width: 100%; 
//                 height: 100%;
//             }
//         }
//     }
//     .container5{
//         position: absolute;
//         top:2000px;
//         left:10%;
//         right:15%;
//         .right{
//             width: 40%;
//             float: left;
//             margin-right:10%;
//             margin-top: 95px;
//         }
//         .left{
//             width: 50%;
//             float: left;
//             margin-top: 35px;
//         }
//         .box-card{
//             width:650px;
//             .photo{
//                 width: 100%; 
//                 height: 100%;
//             }
//         }
//     }
// }
.content5 {
    height: 21rem;
    z-index: 3;
    position: relative;
    justify-content: center;
    align-items: center;
}

.container1 {
    position: absolute;
    top: 2.5rem;
    left: 10%;
    right: 15%;
}

.container2,
.container3,
.container4,
.container5 {
    position: absolute;
    left: 10%;
    right: 15%;
}

.container2 {
    top: 4.5rem;
}

.container3 {
    top: 9.7rem;
}

.container4 {
    top: 13.5rem;
}

.container5 {
    top: 16.8rem;
}

.right, .left {
    float: left;
    width: 48%;
    margin-top: 20px;
    box-sizing: border-box;
}

.right{
    margin-left: 0.2rem;
}

.box-card {
    width: 100%;
    .photo {
        width: 100%;
        height: auto;
    }
}
@media (min-width: 767px) {
    .teacher{
        margin-bottom: 0.1rem;
        font-size: 0.18rem;
    }
}

@media (max-width: 767px) {
    .content5 {
        height: 58rem;
    }

    .container1,
    .container2,
    .container3,
    .container4,
    .container5 {
        position: static;
        margin-bottom: 1rem;
    }

    .right,
    .left {
        width: 100%;
        float: none;
    }

    .right {
        order: 2;
    }

    .left {
        order: 1;
    }

    .box-card {
        margin-bottom: 20px;
    }

    .box-title,
    .teacher {
        text-align: left;
    }
}


.back-box{
    height: 90vh;
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
    // background-image: url(../../assets/black.png);
    // background-color: #e0e0e0;
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
    height: 40px;
    z-index: 10 !important;
    // cursor: pointer;
    /* background-color:blue; */
    overflow: hidden;
    a{
        font-size: 0.15rem;
        text-decoration: none;
    }
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