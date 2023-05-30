<template>
  <div class="main-header">
    <div class="left-section">
      <div class="fold" @click="foldChangeClick">
        <MenuFoldOutlined v-show="isFold === false" class="icon" />
        <MenuUnfoldOutlined v-show="isFold === true" class="icon" />
      </div>
      <div class="breadcrumb">breadcrumb</div>
    </div>
    <div class="info">info</div>
  </div>
</template>

<script setup lang="ts">
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'

const emits = defineEmits(['foldChange'])
const isFold = ref(false)
const foldChangeClick = () => {
  isFold.value = !isFold.value
  emits('foldChange', isFold.value)
}
</script>

<style scoped lang="less">
.main-header {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  height: 100%;

  .left-section {
    display: flex;
    padding: 0 20px 0 0;

    .fold .icon {
      font-size: 20px;
      cursor: pointer;
    }
    .breadcrumb {
      margin-left: 20px;
    }
  }
}
</style>
