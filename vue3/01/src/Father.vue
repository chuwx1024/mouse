<script setup>

import HelloWorld from './components/HelloWorld.vue'
import NewHello from './components/newHello.vue'

</script>

<template>
  <div>
    <button>路由跳转</button>
    <div class="line"></div>
    <new-hello></new-hello>
    <div class="line"></div>
    <HelloWorld msg="Vite + Vue" />
    <div class="line"></div>
  </div>
  
</template>

<style scoped>
.line {
  height: 1px;
  width: 100%;
  background: red;
  margin: 10px 0;
}

</style>

