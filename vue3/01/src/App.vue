<script setup>

import HelloWorld from './components/HelloWorld.vue'
import NewHello from './components/newHello.vue'
</script>

<template>
  <div>
    <new-hello></new-hello>
    <div class="line"></div>
    <HelloWorld msg="Vite + Vue" />
  </div>
  
</template>

<style scoped>
.line {
  height: 1px;
  width: 100%;
  background: red;
}

</style>
