<template>
  <a-layout class="layout-container">
    <a-layout-sider class="sidebar" :collapsed="toggleMenuWidth">
      <MenuHeader :toggleMenuWidth="toggleMenuWidth" />

      <Menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
        <MainHeader @foldChange="flodChange" />
      </a-layout-header>
      <a-layout>
        <a-layout-content>
          124
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MenuHeader from '@/components/Menu/components/MenuHeader.vue'
import Menu from '@/components/Menu/components/Menu.vue'
import MainHeader from '@/components/MainHeader/index.vue'

const toggleMenuWidth = ref(false)
const flodChange = (isFlod: boolean) => {
  toggleMenuWidth.value = isFlod
}
</script>

<style scoped lang="less">
.layout-container {
  height: 100vh;

  .sidebar {
    background-color: #020b15;
  }
}
</style>
