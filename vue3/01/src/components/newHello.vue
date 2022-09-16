<script setup>
import { ref , reactive } from 'vue'
// ref定义简单数据

let a = ref('张三')
function testClick () {
    a.value = '翠花'
}

// reactive 定义复杂数据
let b = reactive([{id: 1, name: '翠花'}, {id: 2, name: '王五'}])

function changeData () {
    b[1].name = '王五的老铺'
}

</script>

<template>
    <div class="box">
        {{ a }}
        <button @click="testClick">修改变量的值</button>
        <ul>
            <li v-for="(item,index) in b" :key="index">{{ item.id }}-{{ item.name }}</li>
        </ul>
        <button @click="changeData">修改复杂数据</button>
    </div>
</template>

<style scoped lang="less">

</style>
