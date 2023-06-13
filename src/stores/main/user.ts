import { defineStore } from 'pinia'
import { getUserListAPI } from '@/service/modules/main/user'
import type { IUserState } from './userType'

export const useUserStore = defineStore('user', {
  state: (): IUserState => {
    return {
      userList: [],
      userListTotalCount: 0
    }
  },

  getters: {},

  actions: {
    async getUserListAction(queryParams: any) {
      const { list, totalCount } = await getUserListAPI(queryParams)
      this.userList = list
      this.userListTotalCount = totalCount
    }
  }
})
