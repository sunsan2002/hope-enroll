<template>
  <div class="background">
    <div class="active_title">
      <span>{{ orderTitle }}</span>
    </div>
    <p v-show="toanswer" ref="question">{{ title }}</p>
    <div class="answer-btns" @click="answerClick($event)">
        <span class="answer-btn" :class="`${isRight && item.result == 1?'right':''}`" v-for="item in answer" :data-result='item.result'>{{ item.name }} <i class="iconfont icon-wrong"></i><i v-show="isRight && item.result == 1" class="iconfont icon-right"></i>
        </span>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, computed, watch, onMounted, toRefs } from 'vue';

const allData = ref(null);
const title = ref('');
const answer = ref('');
const toast = ref(null);
const mask = ref(false);
const isRight = ref(false);
const isWrong = ref(false);
const maskTips = ref(false);
const clickNum = ref(0);
const orderTitles = ['第一题', '第二题']; // 你可能需要调整这里的题目标题数组

const getAllData = async () => {
try {
  const res = await this.$axios.get(答题接口);

  if (parseInt(res.data.errCode) >= 0) {
    allData.value = res.data.data;
    if (allData.value.question.length > 0) {
      toanswer.value = true;
    }
    title.value = allData.value.question[0].title;
    answer.value = allData.value.question[0].answner;
  } else {
    toast.value = this.$createToast({
      txt: res.data.message,
      type: 'txt'
    });
    toast.value.show();
  }
} catch (err) {
  console.log(err);
}
};

const answerClick = (e) => {
const tar = e.target;
const className = e.target.className;

if (className == 'answer-btn') {
  mask.value = true;
  const result = tar.dataset.result;

  if (result == 1) {
    isRight.value = true;
    $(tar).addClass('right');
  } else {
    isRight.value = true;
    isWrong.value = true;
    $(tar).addClass('wrong');
    setTimeout(() => {
      maskTips.value = true;
    }, 1200);
  }

  setTimeout(() => {
    clickNum.value++;

    if (clickNum.value > 2) {
      clickNum.value = 2;

      if (isWrong.value) {
        console.log('答错');
        mask.value = false;
        maskTips.value = true;
        return false;
      } else {
        console.log('答对了');
      }
    }

    $('.answer-btn').removeClass('wrong');
    orderTitle.value = orderTitles[clickNum.value];
    isRight.value = mask.value = false;
    title.value = allData.value.question[clickNum.value].title;
    answer.value = allData.value.question[clickNum.value].answner;
  }, 1200);
}
};
</script>

<style lang="scss" scoped>
  .background {
    position: relative;
    display: block;
    width: 100%;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* background-color: rgba(30, 172, 11,.3); */
  //   z-index: -20 !important;
    overflow: hidden;
  }
  .element{
    position: absolute;
    width: 360px !important;
    height: 378px;
    top: 10%;
    left: 20%;
    opacity: 0.2;
  }
  .namexian{
    position: absolute;
    width: 180px !important;
    height: 4px;
    top: 20%;
    left: 24%;
    background-color: rgb(227, 188, 140);
  }
  .yxname{
    position: absolute;
    color: #fff;
    font-size: 65px;
    top: 23%;
    left: 24%;
  }
  .bighero{
    position: absolute;
    /* width: 32%; */
    height: 100%;
    width: 80% !important;
    top: 0;
    right: 2%;
    bottom: 0;
  //   z-index: -9;
  }
  .sanhua{
    position: absolute;
    width: 76%;
    left: 50%;
    bottom: 0;
    z-index: 1;
    transform: translate(-50%,-2%);
  }
  .Lines{
    position: absolute;
    width: 30% !important;
    top: 40%;
    left: 24%;
  }
  .yxyy{
    position: absolute;
    width: 100%;
    height: 190px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;
    background-image: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.2),rgba(0,0,0,0.5));
  }
  .jtleft,
  .jtright{
    position: absolute;
    width: 45px !important;
    height: 64px;
    bottom: 65px;
    left: 50%;
    transform: translate(-1100%);
    z-index: 10 !important;
    cursor:pointer;
  }
  .jtright{
    right: 50%;
    transform: translate(1000%);
  }
  .jskp{
    position: absolute;
    width: 826px;
    height: 130px;
    left: 50%;
    bottom: 30px;
    transform: translate(-50%);
    z-index: 10 !important;
    list-style-type:none;
    /* background-color: blanchedalmond; */
  }
  .jskp li{
    position: relative;
    float: left;
    width: 106px;
    height: 128px;
    margin-right: 38px;
    background-image: linear-gradient(to bottom right, rgba(0,0,0,0.6),rgba(0,0,0,0.3), rgba(255,255,255,0.5));
    border-radius: 5px;
    cursor:pointer;
    z-index: 10 !important;
    /* border: 2px solid transparent; */
    /* overflow: hidden; *//* 这个会导致文字有黑边 */
  }
  .jskp li:last-of-type{
    margin-right: 0;
  }
  .jskp li:hover{
    border: 2px solid #fff;
    background-image: linear-gradient(to bottom right, rgba(0,0,0,0.7),rgba(0,0,0,0.5), rgba(255,255,255,0.1));
  }
  .xzjl1{
    border: 2px solid #fff;
    background-image: linear-gradient(to bottom right, rgba(0,0,0,0.7),rgba(0,0,0,0.5), rgba(255,255,255,0.1));
  }
  .jskp li img{
    position: relative;
    float: left;
    width: 106px;
    height: 106px;
    z-index: 11 !important;
  }
  .wz{
    position: relative;
    float: left;
    width: 106px;
    height: 22px;
    left: 50%;
    transform: translate(-50%);
    background-color: black;
    text-align: center;
    color: #fff;
    font-size: 16px;
    border-radius: 0 0 5px 5px;
    z-index: 11 !important;
  }
  .jskp li:hover .wz{
    color: #000 !important;
    background-color: #fff !important;
  }
  .xzjl2{
    color: #000 !important;
    background-color: #fff !important;
  }
</style>