<template>
  <a-result status="404" title="404" sub-title="404? 在暗示你疯狂星期四!.">
    <template #extra>
      <a-button type="primary" @click="backClick">回到首页</a-button>
    </template>
  </a-result>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const backClick = () => router.replace('/main')
</script>

<style scoped lang="less"></style>
