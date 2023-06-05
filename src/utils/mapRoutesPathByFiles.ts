import router from '@/router'
import type { RouteRecordRaw } from 'vue-router'

export const mapRoutesPathByFiles = (userMenusList: any) => {
  // 1.动态获取所有的路由对象,放到数组中
  // 路由对象都在独立的文件中
  // 从文件中将所有路由对象先读取到数组中
  const localRoutes: RouteRecordRaw[] = []

  // 1.1 读取router/main文件夹下中所有的ts文件
  const files: Record<string, any> = import.meta.glob('@/router/main/**/*.ts', {
    eager: true
  })

  // 1.2 将加载到的路由路径放到localRoutes
  for (const key in files) {
    const menusPath = files[key]
    localRoutes.push(menusPath.default)
  }

  for (const menus of userMenusList) {
    for (const subMenu of menus.children) {
      const route: any = localRoutes.find((item) => item.path === subMenu.url)
      router.addRoute('main', route)
    }
  }
}
