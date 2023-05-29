<template>
  <div class="login">
    <a-row class="container">
      <a-col :span="18" class="left"></a-col>
      <a-col :span="6" class="right">
        <login-form />
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import LoginForm from './components/loginForm.vue'
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  background-color: pink;
  .container,
  .left,
  .right {
    height: 100%;
  }

  .left {
    background-color: #171717;
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fcfcfc;
  }
}
</style>
