<script setup lang="ts">
</script>

<template>
  <a-layout-header>
    <RouterLink to="/">图标</RouterLink>
    <p>这是标题</p>
    <div class="header-right">这是标题右侧部分</div>
  </a-layout-header>
</template>

<style scoped lang="less">
.ant-layout-header {
  background: #4c7dff;
  display: flex;
  padding: 0 20px;
  a {
    padding: 0 30px;
  }
  p {
    flex: 1;
  }
  .header-right {
    padding: 0 12px;
  }

}


</style>