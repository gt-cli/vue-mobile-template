import { getLocal } from '@/utils/storage-helper'
export default {
  'loginPermission': async function(to, form, next) {
    // 返回的结果，需要存到 vuex 中
    // 先判断是否需要登录
    const hasLogin = getLocal('hasLogin')
    if (hasLogin) {
      next()
    } else {
      if (to.path === '/login') {
        next()
      } else {
        next('/login')
      }
    }
  }
}
