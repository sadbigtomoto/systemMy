<template>
  <div class="user">
    <div class="search">
      <yh-form v-bind="formConfig"></yh-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import yhForm from '@/base-ui/form/index'
import { formConfig } from './config/search.config'
export default defineComponent({
  components: {
    yhForm
  },
  setup() {
    return { formConfig }
  }
})
</script>

<style scoped></style>
