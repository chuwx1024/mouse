<template>
  <a-layout-header>
    <RouterLink to="/">
      <img class="logo-img" src="@/assets/imgs/header/download.png" alt="logo">
    </RouterLink>
    <centerNav></centerNav>
    <div class="header-right">
      <DownloadList></DownloadList>
      <Setting></Setting>
      <UserAbout></UserAbout>
      <ProjectList></ProjectList>
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">

import centerNav from './centerNav.vue';
import DownloadList from './rightNav/DownloadList.vue';
import ProjectList from './rightNav/ProjectList.vue';
import UserAbout from './rightNav/UserAbout.vue'
import Setting from './rightNav/Setting.vue'

</script>

<style scoped lang="less">
.ant-layout-header {
  background: #4c7dff;
  display: flex;
  padding: 0 20px;
  a {
    padding: 0 40px;
    img {
      width: 30px;
    }
  }
  p {
    flex: 1;
  }
  .header-right {
    padding: 0 12px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /deep/ .ant-btn {
      height: 78%;
      background: unset;
      border: unset;
      color: #fff;
      &:hover {
        background: rgba(255, 255, 255, .2);
      }
    }
  }

}


</style>