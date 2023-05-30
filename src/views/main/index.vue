<template>
  <!-- <div class="main">
    <a-button @click="logoutClick">退出登录</a-button>
  </div> -->

  <a-layout class="layout-container">
    <a-layout-sider class="sidebar" :collapsed="toggleMenuWidth">
      <MenuHeader :toggleMenuWidth="toggleMenuWidth" />

      <Menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
        <MainHeader @foldChange="flodChange" />
      </a-layout-header>
      <a-layout-content class="content">Content</a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import useLoginStore from '@/stores/login'
import { Modal } from 'ant-design-vue'
import { createVNode, ref } from 'vue'
import { FrownOutlined } from '@ant-design/icons-vue'
import MenuHeader from '@/components/Menu/components/MenuHeader.vue'
import Menu from '@/components/Menu/components/Menu.vue'
import MainHeader from '@/components/MainHeader/index.vue'

const loginStore = useLoginStore()

const toggleMenuWidth = ref(false)
const flodChange = (isFlod: boolean) => {
  toggleMenuWidth.value = isFlod
}

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

<style scoped lang="less">
.layout-container {
  height: 100vh;

  .sidebar {
    background-color: #020b15;
  }

  .header {
  }

  .content {
    background-color: blueviolet;
  }
}
</style>
