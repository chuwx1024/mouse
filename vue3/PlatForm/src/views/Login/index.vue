<template>
  <div class="login-container">
    <img  class="banner-img" src="@/assets/imgs/login/login-banner.png" alt="">

    <a-row>
      <a-col :span="12">
        <div class="main-title">
          <h1 class="main-name">上海交通大学</h1>
          <h1 class="main-name">人工智能研究院</h1>
          <p class="main-desc">AI for Science信创算力平台</p>
        </div>
      
      </a-col>
      <a-col :span="12">
        <a-card title="用户登录" class="login-card">
          <a-form
            name="custom-validation"
            ref="formRef"
            :model="formState"
            :rules="rules"
            layout="vertical"
          >
            <a-form-item  label="用户名" name="username">
              <a-input v-model:value="formState.username"  />
            </a-form-item>
            <a-form-item label="用户类型" name="password">
              <a-input-password v-model:value="formState.password"  />
            </a-form-item>
           
            <a-form-item label="用户类型" name="login_method">
              <a-radio-group v-model:value="formState.login_method">
                <a-radio value="ldap">AD域账号</a-radio>
                <a-radio value="local">账户密码</a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item >
              <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">登录系统</a-button>
            </a-form-item>
          </a-form>
      
        </a-card>
      
      
      </a-col>
    </a-row>

  </div>
</template>
<script setup lang="ts">

interface FormState {
  username: string,
  password: string,
  login_method: string
}

import { ref, reactive, computed } from 'vue'



const formState = reactive<FormState>({
  username: '',
  password: '',
  login_method: ''
})


const rules = {
  username: [{ required: true, message: '请输入姓名', trigger: 'blur'}],
  password: [{ required: true, message: '请输入密码', trigger:'blur'}],
  login_method: [{ required: true, message: '请选择', trigger: 'blur'}]
}

const disabled = computed(() => {
  return !(formState.username && formState.password)
})

// const submitForm = function () {
//     console.log('提交')
// }

// 提交成功
const handleFinish = () => {

}

const handleFinishFailed = () => {

}
</script>

<style lang="less" scoped>
.login-container {
  height: 100vh;
  overflow: auto;
  .banner-img {
    width: 100%;
    margin-bottom: 40px;
  }
  .main-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    .main-name {
      color: rgba(0, 0, 0, 0.85);
      font-weight: 800;
      font-size: 66px;
    }
    .main-desc {
      color: #808080;
      font: 500 40px Verdana;
    }
  }

  .login-card {
    width: 450px;
    margin: 0 auto;
    /deep/ .ant-card-head-title {
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
      font-size: 18px;
    }
  }

  .ant-form {
    width: 400px;
    .login-form-button {
      width: 100%;
    }
  }
}
</style>