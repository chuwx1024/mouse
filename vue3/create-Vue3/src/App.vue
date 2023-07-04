<script setup>
  import {ref, onMounted, provide} from 'vue'
  import SonCom from './son-com.vue'
  var getMessage = (msg) => {
    console.log(msg)
  }

  // onMounted
  var testVue = ref(null)
  onMounted(() => {
    console.log(testVue)
    console.log(testVue.value.name)
    testVue.value.printName()

    
  })
  // 跨组件传值
  provide('data-key', '爷爷给你1个数据')
  const firstValue = ref(0)
  provide('first-value', firstValue)

  var setFirstValue = () => {
    firstValue.value++
  }
  provide('set-firstValue', setFirstValue)
  // setTimeout(() => {
  //   firstValue.value += 10
  // }, 1000)

</script>

<template>
  <div class="father">
    <h2>父组件App</h2>
    <SonCom ref="testVue" message="father message" @getMessage="getMessage"></SonCom>
  </div>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
</template>

<style scoped>
.father {
  border: 1px solid red;
}
</style>
