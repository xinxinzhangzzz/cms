<template>
  <div class="login-form">
    <div class="title">
      <GithubOutlined class="icon" />
      <div class="desc">xinxinzhangzzz</div>
    </div>

    <a-form hideRequiredMark :labelCol="labelCol" :model="form" ref="formRef" :rules="rules">
      <a-form-item label="用户名" name="name">
        <a-input v-model:value="form.name" />
      </a-form-item>

      <a-form-item label="密码" name="password">
        <InputPassword v-model:value="form.password" autocomplete="off" />
      </a-form-item>

      <a-form-item class="pwdContainer">
        <a-checkbox v-model:checked="isRemmberPwd">记住密码</a-checkbox>
        <a-button type="link" @click="resetPwdClick">忘记密码</a-button>
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
import { reactive, ref, watch } from 'vue'
import { GithubOutlined } from '@ant-design/icons-vue'
import type { ILoginForm } from './loginForm'
import useLoginStore from '@/stores/login'
import { InputPassword } from 'ant-design-vue'
import { local } from '@/utils/cache'

const loginStore = useLoginStore()

const isRemmberPwd = ref<boolean>(local.getCache('isRemmberPwd') ?? false)

watch(isRemmberPwd, (newValue) => {
  local.setCache('isRemmberPwd', newValue)
})

const labelCol = ref({
  span: 6
})

const formRef = ref()

const form: ILoginForm = reactive({
  name: local.getCache('USER_NAME') ?? '',
  password: local.getCache('PASS_WORD') ?? ''
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

const emits = defineEmits(['isResetPwd'])

const resetPwdClick = () => {
  emits('isResetPwd')
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
    font-size: 25px;
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

.pwdContainer {
  display: flex;
  justify-content: right;
}
</style>
