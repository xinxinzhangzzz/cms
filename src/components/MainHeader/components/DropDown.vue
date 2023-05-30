<template>
  <div class="drop-down">
    <a-dropdown>
      <div class="info" @click.prevent>
        <a-avatar :size="40">
          <template #icon><UserOutlined /></template>
        </a-avatar>
        <div class="username">{{ userName }}</div>
        <DownOutlined class="dropdownIcon" />
      </div>
      <template #overlay>
        <a-menu>
          <a-menu-item> 个人信息 </a-menu-item>
          <a-menu-item> 修改密码 </a-menu-item>
          <a-menu-item @click="logoutClick"> 退出登录 </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup lang="ts">
import { DownOutlined } from '@ant-design/icons-vue'
import { Modal } from 'ant-design-vue'
import { createVNode } from 'vue'
import { FrownOutlined, UserOutlined } from '@ant-design/icons-vue'
import useLoginStore from '@/stores/login'

const loginStore = useLoginStore()

const userName = loginStore.userInfo.name

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
.info {
  display: flex;
  justify-content: center;
  align-items: center;

  .dropdownIcon {
    padding: 3px 0 0 4px;
    font-size: 10px;
  }
}
</style>
