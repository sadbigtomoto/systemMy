<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <div class="block">
          <el-avatar
            :size="30"
            src=" https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          >
          </el-avatar>
          <span>{{ name }}</span>
        </div>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  components: {},
  setup() {
    const store = useStore()
    const name = computed(() => store.state.name)
    return { name }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  display: flex;
  cursor: pointer;
  align-items: center;
}
</style>
