<!--
 * @Author: sunsan 2390864551@qq.com
 * @Date: 2023-11-07 20:46:44
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-12 21:28:01
 * @FilePath: \hopeEnroll\hope_enroll\src\views\Login.vue
 * @Description: 登录页面
-->
<template>
  <div class="box">
    <el-dialog v-model="dialog" title="登陆" width="30%" draggable>
        <el-form :model="form">
          <el-form-item label="" >
              <el-input v-model="form.username" autocomplete="off" :prefix-icon="UserFilled" placeholder="请输入您的学号"/>
          </el-form-item>
          <el-form-item label="" >
              <el-input v-model="form.password" autocomplete="off" :prefix-icon="Lock" type="password" placeholder="请输入密码" show-password/>
          </el-form-item>
        </el-form>
        <div class="button">
          <el-button width="100%" type="primary" @click="login()">立即登录</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch, onMounted, toRefs } from 'vue';
import { UserFilled, Lock } from '@element-plus/icons-vue'
import apiFun from '../utils/api';
import { ElMessage } from "element-plus";
import { localSet } from '../utils'


// 使用 props 获取父组件传递过来的数据
// const props = defineProps(['dialog']);
const dialog = ref(false);

let form = reactive({
  username: '',
  password: '',
})

function change(){
	dialog.value = true;
}

function login(){
  console.log(form)

  apiFun.user.login({
      username: form.username,
      password: form.password,
    })
    .then((res: any) => {
      console.log(res);
      let token = res.data;
      // window.localStorage.setItem("token", token);
      localSet("token", token);
      //解析token
      const decode = jwt_decode(token);
      console.log("token解析内容", decode); //decode是一个对象
      //把解析后的token内容放进store中
      // useStore.id = decode.id;
      // useStore.username = decode.username;
      // useStore.token = token;

      if(res.code === 200){
        ElMessage.success("登录成功");
        this.$router.push('/')
        // window.location.href = 'http://localhost:8080/#/home' //跳转到主页面管理界面
      }else{
        console.log(res.message)
        ElMessage.error("登录失败");
        // router.push({ path: "/home" }); //跳转到主页面
      }
    }).catch((err: any)=>{
      console.log(err);
    });
  
  dialog.value = false;
}

onMounted(() => {
  
});


defineExpose({
  change
})


</script>

<style lang="scss" scoped>
// .box{
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
// .el-dialog{
//   height:50%;
// }
// .el-input {
//   width: 80%;
//   margin: 0 auto;
// }

// .button {
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   margin-top: 25px; 
//   margin-bottom: 20px;
//   .el-button{
//     margin: 0 auto;
//     width: 80%;
//   }
// }
</style>
