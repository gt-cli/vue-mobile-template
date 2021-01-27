<template>
  <div class="login">
    <van-form validate-first @failed="onFailed" @submit="userLogin">
      <!-- 通过 pattern 进行正则校验 -->
      <van-field
        v-model="form.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ pattern, message: '用户名必须大于三个字符' }]"
      />
      <!-- 通过 validator 进行函数校验 -->
      <van-field
        v-model="form.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ validator, message: '长度必须大于6个字符' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import options from './options/index'
import './style/index.scss'
export default {
  name: 'Home',
  ...options
}
</script>
