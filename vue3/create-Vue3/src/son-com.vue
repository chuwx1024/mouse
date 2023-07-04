<script setup>
import { ref, onMounted } from 'vue'
import GrandSon from './grandSon.vue'
defineProps({
    message:String
})

var emit = defineEmits(['getMessage'])

var sendMessage = () => {
    emit('getMessage', '子组件传递的值')
}
var h1ref = ref(null)

// 组件挂载之后才能获取
onMounted(() => {
    console.log(h1ref.value, '99999999999')
})

var name = ref('子组件')
var printName = () => {
    console.log('子组件方法')
}



defineExpose({
    name,
    printName
})






</script>
<template>
    <div class="son">
        <h3>子组件Son</h3>
        <p>{{ message }}</p>
        <button @click="sendMessage">父组件传递方法</button>
        <div ref="h1ref">获取组件</div>
        <hr>
        <grand-son></grand-son>
    </div>

</template>

<style scoped>


</style>
