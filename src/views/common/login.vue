<script setup lang="ts">
import {useRouter} from 'vue-router';

const router = useRouter();
const loginLoading = ref(false);
const tabLogin = ref(false);
const form = reactive({account: '', password: ''});

const login = () => {
  loginLoading.value = true;
  router.push('/');
};
const register = () => {
  tabLogin.value = !tabLogin.value;
};
</script>

<template>
  <div class="login">
    <div class="login-box" v-if="!tabLogin">
      <div class="title">
        <h1 class="titleName">顺其自然</h1>
        <!--        <p class="tip">还没有账号吗?<strong class="register" @click="register">在此注册</strong></p>-->
      </div>
      <el-divider content-position="center" style="color: #ccc">OR</el-divider>
      <div class="form">
        <el-form>
          <el-form-item>
            <el-input v-model="form.account" placeholder="请输入账号"/>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.password" placeholder="请输入密码"/>
          </el-form-item>
        </el-form>
      </div>
      <div class="login-foot">
        <el-button @click="login" type="primary" :loading="loginLoading">登录</el-button>
      </div>
    </div>
    <div class="login-box" v-if="tabLogin">
      <div class="title">
        <h1 class="titleName">顺其自然</h1>
        <p class="tip">还没有账号吗?<strong class="register" @click="register">在此注册</strong></p>
      </div>
      <el-divider content-position="center" style="color: #ccc">OR</el-divider>
      <div class="form">
        <el-form>
          <el-form-item>
            <el-input v-model="form.account" placeholder="请输入账号"/>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.password" placeholder="请输入密码"/>
          </el-form-item>
        </el-form>
      </div>
      <div class="login-foot">
        <el-button @click="login" type="primary" :loading="loginLoading">登录</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: #fff;

  .login-box {
    margin-top: 100px;
    padding: 20px;
    width: 300px;
    height: 300px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);

    .title {
      text-align: center;

      .titleName {
        margin-bottom: 8px;
        font-size: 16px;
      }

      .tip {
        margin-bottom: 16px;
        font-size: 12px;

        .register {
          cursor: pointer;
          color: #377dff;
        }
      }
    }

    .login-foot {
      display: flex;
      align-items: center;
      justify-content: center;

      .el-button {
        width: 280px;
      }
    }
  }
}
</style>
