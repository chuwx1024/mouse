<script setup>
import { ref , reactive, onMounted, watch, computed } from 'vue'
import FirstComponent from './firstComponent.vue'
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

// 声明周期
onMounted(() => {
    console.log('onMounted---1')
})

// watch 监听
watch(b, (v1,v2) => {
    // console.log(v1,v2, '监听')
    console.log(v1[0].id)
})

// 计算属性
const c = computed(() => {
    return b[1].name + '爱跳舞'
})
const d = computed(() => {
    return a.value
})

// dialog 控制
let showDialog = ref(false)

let weather = ref('晴转多云')
function dialog () {
    showDialog.value = !showDialog.value
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
        <h6>计算属性</h6>
        {{ c }}
        {{ d }}
        <h6>展示dialog</h6>
        <button @click="dialog">dialog显示隐藏</button>




        <first-component v-if="showDialog" v-model="weather" title="测试标题啊" @close='dialog'>
            <template #title>
                <span>测试标题啊123</span>
            </template>
            今天的天气是:
        </first-component>

    </div>
</template>

<style scoped >


</style>
