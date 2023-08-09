<template>
    <a-sub-menu :key="item.path">
  
      <template #title>{{ item.meta.title }}</template>
      <template v-for="i in item.children" :key="i.name">
        <span>
          <a-menu-item :key="i.path">
                      {{ i.meta.title }}
        </a-menu-item>
        </span>
      </template>
    </a-sub-menu>
</template>

<script>

</script>

<style scoped lang="less">

</style>

