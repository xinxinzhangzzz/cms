<template>
  <div class="menu">
    <a-menu id="dddddd" style="width: 100%" mode="inline" theme="dark" inlineIndent="30">
      <a-sub-menu>
        <template #icon>
          <RocketOutlined />
        </template>
        <template #title>系统总览</template>
        <a-menu-item>核心技术</a-menu-item>
        <a-menu-item>商品统计</a-menu-item>
      </a-sub-menu>

      <a-sub-menu>
        <template #icon>
          <SettingOutlined />
        </template>
        <template #title>系统管理</template>
        <a-menu-item>用户管理</a-menu-item>
        <a-menu-item>部门管理</a-menu-item>
        <a-menu-item>菜单管理</a-menu-item>
        <a-menu-item>角色管理</a-menu-item>
      </a-sub-menu>

      <a-sub-menu>
        <template #icon>
          <ShopOutlined />
        </template>
        <template #title>商品中心</template>
        <a-menu-item>商品类别</a-menu-item>
        <a-menu-item>商品信息</a-menu-item>
      </a-sub-menu>

      <a-sub-menu>
        <template #icon>
          <MessageOutlined />
        </template>
        <template #title>随便聊聊</template>
        <a-menu-item>你的故事</a-menu-item>
        <a-menu-item>故事列表</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import {
  SettingOutlined,
  RocketOutlined,
  ShopOutlined,
  MessageOutlined
} from '@ant-design/icons-vue'
</script>

<style scoped lang="less"></style>
