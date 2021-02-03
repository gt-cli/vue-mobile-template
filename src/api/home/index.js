import { axios } from '@/utils/axios'
// 获取用户接口
export const getUserList = () => axios.get('vue-project-template/user/get')
