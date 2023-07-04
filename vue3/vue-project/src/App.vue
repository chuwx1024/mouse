<script setup>
import { onMounted } from 'vue';
import { useCounterStore } from './store/counter';
import { storeToRefs } from 'pinia';
const counterStore = useCounterStore()

const { count, doubleCount} = storeToRefs(counterStore)
onMounted(() => {
  counterStore.getList()
})

</script>

<template>
  <button @click="counterStore.increment">{{ count }}</button>
  <p>{{ doubleCount }}</p>
</template>

<style scoped>
</style>
