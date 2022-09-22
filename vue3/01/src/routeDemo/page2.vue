<template>
  <div>
    page22222222222222222222222222
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()


const id = route.params.hehe
console.log(route, '99999999999999')
console.log(route.params, '99999999999999')
console.log(id, '99999999999999')


</script>

<style scoped lang="less">

</style>
