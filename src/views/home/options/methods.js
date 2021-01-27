import { getUserList } from '@/api/home/index'
import { setLocal } from '@/utils/storage-helper'

export default {
  async getUserList() {
    const data = await getUserList()
    if (data) {
      this.userList = data || []
    } else {
      console.log('error')
    }
  },
  logout() {
    setLocal('hasLogin', '')
    this.$router.push('/login')
  }
}
