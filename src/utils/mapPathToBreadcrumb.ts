interface IBreadcrumbs {
  name: string
  path: string
}

// 过滤面包屑
export const mapPathToBreadcrumb = (path: string, userMenus: any[]) => {
  // 用于存放面包屑名称与路径
  const breadcrumbs: IBreadcrumbs[] = []

  // 遍历菜单
  for (const menu of userMenus) {
    // 遍历子菜单
    for (const subMenu of menu.children) {
      // 判断当前子菜单路径是否与传入的路径匹配
      if (subMenu.url === path) {
        // 如果匹配,将父级菜单与当前子菜单的名称与路径存入数组
        breadcrumbs.push({ name: menu.name, path: menu.url })
        breadcrumbs.push({ name: subMenu.name, path: subMenu.url })
      }
    }
  }

  // 返回数组
  return breadcrumbs
}
