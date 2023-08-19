<template>
  <div class="filter-grid">
    <div class="wrap-left">
        <slot name="title"></slot>

    </div>
    <div class="wrap-right">
        <slot name="btn"></slot>
    </div>
  </div>
  <slot></slot>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.filter-grid {
    display: flex;
    background: #fff;
    padding: 0px 20px;
    height: 56px;
    justify-content: space-between;
    align-items: center;
}

</style>
