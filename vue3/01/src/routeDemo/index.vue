<template>
  <div>
    姓名: {{ info.name }}<br>
    年龄: {{ info.age }}
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter, useRoute} from 'vue-router'

const router = useRouter()
const route = useRoute()

console.dir(route, '00000')
console.log(route.query)

const info = reactive({
    name: route.query.name,
    age: route.query.age
})



</script>

<style scoped >

</style>
