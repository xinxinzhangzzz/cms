<template>
  <div class="menu">
    <!-- <a-menu id="dddddd" style="width: 100%" mode="inline" theme="dark" inlineIndent="30">
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
    </a-menu> -->

    <a-menu
      :class="{ menuWidth: !toggleMenuWidth }"
      mode="inline"
      theme="dark"
      :inlineIndent="30"
      :selectedKeys="[route.path]"
      :openKeys="openKeys"
    >
      <template v-for="item in currentUserMenu" :key="item.url">
        <a-sub-menu>
          <template #icon>
            <RocketOutlined />
          </template>
          <template #title>{{ item.name }}</template>

          <template v-for="childrenItem in item.children" :key="childrenItem.url">
            <a-menu-item @click="changeItemClick(childrenItem)">
              {{ childrenItem.name }}
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { RocketOutlined } from '@ant-design/icons-vue'
import useLoginStore from '@/stores/login'
import { useRouter, useRoute } from 'vue-router'

defineProps({
  toggleMenuWidth: {
    type: Boolean,
    defalut: false
  }
})

const router = useRouter()
const route = useRoute()
const loginStore = useLoginStore()
const currentUserMenu = loginStore.userMenusList

const changeItemClick = (childrenItem: any) => {
  router.push(childrenItem.url)
}

const activeParentMenu = (defaultPath: any) => {
  for (const menus of currentUserMenu) {
    for (const childrenItem of menus.children) {
      if (childrenItem.url === defaultPath) {
        return [menus.url]
      }
    }
  }
}

const openKeys = activeParentMenu(route.path)
</script>

<style scoped lang="less">
.menuWidth {
  width: 200px;
}
</style>
