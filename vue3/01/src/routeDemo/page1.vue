<template>
  <div>
    page11111111111111
    <h6>pinia</h6>
    {{ counter.count }}
  </div>
</template>

<script setup> 

import { defineStore, storeToRefs } from 'pinia'

import { testStore } from '../stores/TestStore'

const counter = testStore()





</script>

<style scoped lang="less">

</style>
