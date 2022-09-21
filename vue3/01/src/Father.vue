<script setup>
import { useRouter, useRoute} from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import NewHello from './components/newHello.vue'

const router = useRouter()
const route = useRoute()

function testClick () {
    router.push({
        name: 'testDemo',
        query: {
            name: '8888',
            age: '88898997666'
        }
    })
}



</script>

<template>
  <div>
    <button @click="testClick">路由跳转</button>
    <div class="line"></div>
    <new-hello></new-hello>
    <div class="line"></div>
    <HelloWorld  />
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

