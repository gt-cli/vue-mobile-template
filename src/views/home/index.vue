<template>
  <div>
    <van-button
      color="linear-gradient(to right, #ff6034, #ee0a24)"
      style="width: 80%;margin:10px 10%;"
      @click="logout"
    >
      退出
    </van-button>
    <van-cell-group>
      <van-cell v-for="u in userList" :key="u.id" :title="u.name" :value="u.age" />
    </van-cell-group>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import options from './options/index'
export default {
  name: 'Home',
  ...options
}
</script>

<style lang="scss" scoped></style>
