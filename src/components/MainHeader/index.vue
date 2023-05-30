<template>
  <div class="main-header">
    <div class="left-section">
      <div class="fold" @click="foldChangeClick">
        <MenuFoldOutlined v-show="isFold === false" class="icon" />
        <MenuUnfoldOutlined v-show="isFold === true" class="icon" />
      </div>
      <div class="breadcrumb">breadcrumb</div>
    </div>
    <div class="info">
      <div class="icons">
        <ExpandOutlined class="info-icon" />
        <GlobalOutlined class="info-icon" />
        <a href="https://github.com/xinxinzhangzzz/cms" target="blank">
          <GithubOutlined class="info-icon" />
        </a>
      </div>

      <DropDown />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ExpandOutlined,
  GlobalOutlined,
  GithubOutlined
} from '@ant-design/icons-vue'
import { ref } from 'vue'
import DropDown from './components/DropDown.vue'

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

  .info {
    display: flex;
    align-items: center;
    .icons {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 20px;
      .info-icon {
        padding: 0 10px;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>
