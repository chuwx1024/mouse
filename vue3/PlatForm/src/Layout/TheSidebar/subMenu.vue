<template>
     <a-sub-menu key="sub1" @titleClick="titleClick">
        <!-- 标题 -->
        <!-- <template #icon>
          <MailOutlined />
        </template> -->
        <template #title>Navigation One</template>

        <a-menu-item-group key="g1">
          <template #icon>
            <QqOutlined />
          </template>
          <template #title>Item 1</template>
          <a-menu-item key="1">Option 1</a-menu-item>
          <a-menu-item key="2">Option 2</a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group key="g2" title="Item 2">
          <a-menu-item key="3">Option 3</a-menu-item>
          <a-menu-item key="4">Option 4</a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
</template>

<script>

</script>

<style scoped lang="less">

</style>

