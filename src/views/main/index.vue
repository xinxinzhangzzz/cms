<template>
  <div class="main">
    <a-button @click="logoutClick">退出登录</a-button>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/stores/login'
import { Modal } from 'ant-design-vue'
import { createVNode } from 'vue'
import { FrownOutlined } from '@ant-design/icons-vue'

const loginStore = useLoginStore()

const logoutClick = () => {
  Modal.confirm({
    title: () => '确定退出登录吗?',
    icon: () => createVNode(FrownOutlined),
    content: () =>
      createVNode('div', { style: 'color: #44403c;' }, '我会化作人间的风雨陪在你身边~'),
    cancelText: () => '取消',
    okText: () => '确认退出',
    okType: 'primary',
    onOk() {
      loginStore.logout()
    }
  })
}
</script>

<style scoped lang="less"></style>
