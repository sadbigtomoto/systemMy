<template>
  <div class="login-phone">
    <el-form label-width="80px" :rules="rules" :model="myPhone">
      <el-form-item label="手机号码" prop="phone">
        <el-input v-model="myPhone.phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="yanzheng">
        <div class="get-code">
          <el-input v-model="myPhone.yanzheng" />
          <el-button type="primary" class="btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/phone-config'
export default defineComponent({
  setup() {
    const myPhone = reactive({
      phone: '',
      yanzheng: ''
    })

    return {
      myPhone,
      rules
    }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
  .btn {
    margin-left: 8px;
  }
}
</style>
