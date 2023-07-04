<script setup>
import { inject } from 'vue'

 const  datakey = inject('data-key')
 const firstValue = inject('first-value')
 const setFirstValue = inject('set-firstValue')


</script>

<template>
<!-- <div> -->
    <h3>这是孙子组件</h3>
    <p>{{ datakey }}</p>
    <p>{{ firstValue }}</p>
    <button @click="setFirstValue">接受爷爷组件传递的方法</button>
<!-- </div> -->
    
</template>
