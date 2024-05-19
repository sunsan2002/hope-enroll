<!--
 * @Author: sunsan 2390864551@qq.com
 * @Date: 2023-11-07 21:08:17
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-05-20 03:24:12
 * @FilePath: \hopeEnroll\hope_enroll\src\views\main\Foot.vue
 * @Description: 底部组件
-->

<template>
  <div class="footer">
    <div class="wrapper">
      <div class="left">
        <div style="display: flex; flex: 1">
          <img src="../../assets/logo.png" class="logoImg" />
          <h1 class="logo">Hope实验室</h1>
        </div>
        <p style="text-align: left">
          Hope工作室创立于2007年<br />
          植根于吉首大学计算机科学与工程学院，由黄伟老师创办。
        </p>
      </div>
      <div class="right">
        <dl>
          <dt>公众号</dt>
          <img src="../../assets/yard1.png" class="dtimg">
        </dl>
        <dl>
          <dt>QQ招新群</dt>
          <img src="../../assets/qqcourt.jpg" class="dtimg">
        </dl>
        <dl>
          <dt>开发者</dt>
          <dd><a href="">sunsan</a></dd>
          <dd><a href="">Fleurxxx</a></dd>
        </dl>
      </div>
    </div>
    <div class="more">
      <hr />
    </div>
    <el-backtop :right="100" :bottom="100" />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
* {
  text-align: left;
}
li {
  list-style: none;
}
hr {
  border: none;
  height: 1px;
  background: #3d3d3d;
}
.logoImg {
  width: 50px;
  height: 50px;
  align-self: center;
  margin-right: 10px;
}
.logo {
  line-height: 50px;
  color: #bbb9b9;
  margin-right: 40px;
}
a {
  color: #ffffff;
  text-decoration: none;
}
.footer {
  padding: 70px 250px 0 250px;
  height: 380px;
}
.footer .left {
  float: left;
}

.footer .right {
  float: right;
}

.footer .left p {
  margin: 20px 0 10px;
  color: rgb(185, 185, 185);
  font-size: 13px;
}

.footer .left a {
  display: block;
  width: 120px;
  height: 36px;
  border: 1px solid #2f2fed;
  text-align: center;
  line-height: 36px;
  font-size: 16px;
  color: #2f2fed;
}

.footer .right dt {
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 20px;
}

.footer .right dl {
  float: left;
  margin-left: 80px;
  margin-right: 20px;
  font-size: 13px;
  line-height: 21px;
  color: rgb(185, 185, 185);
}
.dtimg{
  height: 100px;
}
.more {
  margin-top: 260px;
}
@media (max-width: 767px) {
  .footer {
    padding: 20px 20px 0 20px;
    height: auto;
    .wrapper {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .left,
    .right {
      width: 100%;
      margin-bottom: 20px;
    }
    .more {
      margin-top: 20px;
    }
    .logo{
      font-size: 0.7rem;
    }
    dd{
      line-height:1.4rem;
    }
  }
}
</style>