<template>
  <div class="menu-header">
    <div class="logo">
      <CrownTwoTone class="icon" twoToneColor="#fff" />
    </div>
    <div v-show="!toggleMenuWidth" class="title">xinxinzhangzzz</div>
  </div>
</template>

<script setup lang="ts">
import { CrownTwoTone } from '@ant-design/icons-vue'

defineProps({
  toggleMenuWidth: {
    type: Boolean,
    defalut: false
  }
})
</script>

<style scoped lang="less">
.menu-header {
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
  font-size: 15px;
  font-weight: bold;
  border-bottom: 1px solid #000;
  color: #fff;

  .icon {
    font-size: 20px;
    margin-right: 10px;
    margin-left: 10px;
  }

  .title {
    margin-top: 5px;
  }
}
</style>
