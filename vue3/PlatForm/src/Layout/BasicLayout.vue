<script setup lang="ts">
import TheHeader from './TheHeader/index.vue'
import TheMain from './TheMainApp/index.vue'
import TheSidebar from './TheSidebar/index.vue'
</script>

<template>
  <a-layout>
    <TheHeader></TheHeader>
    <a-layout>
      <TheSidebar></TheSidebar>
      <TheMain></TheMain>
    </a-layout>
  </a-layout>
</template>

<style lang="less" scoped>
.ant-layout-has-sider {
  height: calc(100vh - 64px);
}


</style>