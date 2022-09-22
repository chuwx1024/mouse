<template>
  <div>
    姓名: {{ info.name }}<br>
    年龄: {{ info.age }}
    <button @click="goPage1">二级路由跳转1</button>
    <button @click="goPage2">二级路由跳转2</button>
    <Main-Page></Main-Page>

    
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter, useRoute,} from 'vue-router'
import MainPage from './main.vue'

const router = useRouter()
const route = useRoute()

console.log(router)

const info = reactive({
    name: route.query.name,
    age: route.query.age
})

function goPage1 () {
  router.push({
    path: '/main/page1',
    query: {
      id: '444444444444'
    }
  })
}

const goPage2  = function () {

  // router.push('main/page2') // 路由名称跳转

  router.push({
    name: 'main/page2'
  })

}


</script>

<style scoped >
button {
  background: white;
  border: 1px solid skyblue;
  font-size: 12px;
  color: #5f6863;
  padding: 4px 4px;
  border-radius: 4px;
  margin: 0 6px;
  cursor: pointer;
}

</style>
