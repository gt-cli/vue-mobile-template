import Axios from '@/utils/axios'
const axios = new Axios()
// 获取用户接口
export const getUserList = () => axios.get('vue-project-template/user/get')
