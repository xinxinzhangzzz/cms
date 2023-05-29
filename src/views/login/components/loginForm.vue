<template>
  <div class="login-form">
    <div class="title">
      <SketchOutlined class="icon" />
      <div class="desc">xinxinzhangzzz</div>
    </div>

    <a-form hideRequiredMark :labelCol="labelCol" :model="form" ref="formRef" :rules="rules">
      <a-form-item label="用户名" name="name">
        <a-input v-model:value="form.name" />
      </a-form-item>

      <a-form-item label="密码" name="password">
        <InputPassword v-model:value="form.password" autocomplete="off" />
      </a-form-item>

      <a-form-item>
        <a-button class="loginBtn" type="primary" :loading="loadingState" @click="loginClick"
          >登 录</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { SketchOutlined } from '@ant-design/icons-vue'
import type { ILoginForm } from './loginForm'
import useLoginStore from '@/stores/login'
import { InputPassword } from 'ant-design-vue'

const loginStore = useLoginStore()

const labelCol = ref({
  span: 6
})

const formRef = ref()

const form: ILoginForm = reactive({
  name: '',
  password: ''
})

const rules = {
  name: [{ required: true, message: '用户名不能为空!', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空!', trigger: 'blur' }]
}

const loadingState = ref(false)

const loginClick = () => {
  loadingState.value = true
  formRef.value
    .validate()
    .then(() => {
      loginStore.userLoginAction(form)
    })

    .catch((err: any) => {
      console.log(err)
    })

    .finally(() => (loadingState.value = false))
}
</script>

<style scoped lang="less">
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  height: 50px;
  .icon {
    font-size: 40px;
  }
  .desc {
    margin-left: 5px;
    font-weight: bold;
    font-size: 15px;
  }
}
.loginBtn {
  width: 100%;
  background-color: #3f3f46;
  &:hover {
    background-color: #0f0f0f;
  }
}
</style>
