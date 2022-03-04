<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus/lib/components'
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/accout-config'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? '',
      id: localCache.getCache('id')
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (keepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (keepPassword) {
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
            localCache.setCache('id', 1)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }
    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
