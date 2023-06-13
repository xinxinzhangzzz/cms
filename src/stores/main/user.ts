import { defineStore } from 'pinia'
import { getUserListAPI } from '@/service/modules/main/user'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userList: [],
      userListTotalCount: 0
    }
  },

  getters: {},

  actions: {
    async getUserListAction() {
      const { list, totalCount } = await getUserListAPI()
      this.userList = list
      this.userListTotalCount = totalCount
    }
  }
})
