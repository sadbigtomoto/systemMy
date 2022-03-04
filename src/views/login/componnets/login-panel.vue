<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon><calendar /></el-icon>账号登录
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon><calendar /></el-icon>手机登录
          </span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="keepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-button" @click="handleLoginClick" type="primary"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { Calendar } from '@element-plus/icons-vue'

import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'
export default defineComponent({
  components: {
    Calendar,
    loginAccount,
    loginPhone
  },
  setup() {
    const keepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof loginAccount>>()
    const phoneRef = ref<InstanceType<typeof loginPhone>>()

    const currentTab = ref<string>('account')
    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(keepPassword.value)
      } else {
        console.log('区分手机登录')
      }
    }
    return {
      keepPassword,
      handleLoginClick,
      accountRef,
      phoneRef,
      currentTab
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  margin-top: -120px;
  width: 320px;
  .title {
    text-align: center;
  }
  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .login-button {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
