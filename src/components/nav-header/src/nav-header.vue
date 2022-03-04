<template>
  <div class="nav-header">
    <el-icon
      class="fold-menu"
      @click="handleFoldClick"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      ><document
    /></el-icon>
    <div class="content">
      <div>面包屑</div>
      <div>
        <user-info></user-info>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Document } from '@element-plus/icons-vue'
import userInfo from './user-info.vue'
export default defineComponent({
  components: {
    Document,
    userInfo
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return { handleFoldClick, isFold }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
