<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/大蘑菇.png" alt="" />
      <span v-if="!collapse" class="title">Vue3+Ts</span>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      :default-active="defaultValue"
      text-color="#fff"
      :unique-opened="true"
      :collapse="collapse"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>数据一</span>
        </template>
        <el-menu-item-group title="一组">
          <el-menu-item index="1-1">标题1</el-menu-item>
          <el-menu-item index="1-2">标题1</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="二组">
          <el-menu-item index="1-3">标题3</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>标题4</template>
          <el-menu-item index="1-4-1">标题（1）</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>数据二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <span>数据三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>数据四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'

import {
  Location,
  Document,
  Menu as IconMenu,
  Setting
} from '@element-plus/icons-vue'
export default defineComponent({
  components: {
    Location,
    Document,
    IconMenu,
    Setting
  },
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const defaultValue = ref('1')

    return { defaultValue }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  .em-menu {
    border-right: none;
  }
  .el-submenu {
    background-color: #001529 !important;
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }
  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }
  .el-menu-item:hover {
    color: #fff !important;
  }
  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
.el-menu-vertical:not(.el-menu-collapse) {
  width: 100%;
  height: calc(100%-48px);
}
</style>
