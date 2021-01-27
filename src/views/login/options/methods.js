import { login } from '@/api/user/index'
import { setLocal } from '@/utils/storage-helper'

export default {
  async userLogin(values) {
    const data = await login(values)
    if (data) {
      setLocal('hasLogin', data.name)
      this.$router.push('/')
    } else {
      console.log('error')
    }
  },
  // 校验函数返回 true 表示校验通过，false 表示不通过
  validator(val) {
    return /\w{6}/.test(val)
  },
  onFailed(errorInfo) {
    console.log('failed', errorInfo)
  }
}
