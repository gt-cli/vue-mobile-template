
import Axios from '@/utils/axios'
const axios = new Axios()
// 获取用户接口
export const validate = () => axios.get('vue-project-template/user/validate')

// 用户登录
export const login = (data) => axios.post('vue-project-template/user/login', data)
