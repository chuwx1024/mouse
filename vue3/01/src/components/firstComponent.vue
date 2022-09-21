<script setup>
import {ref, reactive,defineEmits} from 'vue'

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    modelValue: {
        type: String,
        default: ''
    }
})


console.log(props, 123)

// 定义emit
const emit = defineEmits(['close','update:model-value'])

function submit () {
    emit('update:model-value', props.modelValue)

}

function cancel () {
    emit('close', {name: '翠花'})
}





</script>

<template>
  <div  class="dialog-bg">
    <div class="box">
        <div class="head">
           <slot name="title" :title="title" hello="张三">{{ title }}</slot>
        </div>
        <div class="body">
            <slot></slot>
            <input v-model="modelValue" type="text" placeholder="请输入天气" @keydown.enter="submit" @keydown.esc="cancel">
        </div>
        <div class="btns">
            <button @click="submit">确认</button>
            <button  @click="cancel">取消</button>
        </div>
    </div>
    <div class="mask"></div>
  </div>
  
</template>

<style scoped >
.mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
    opacity: .5;

}
.box {
    width: 50%;
    height: 50%;
    background: white;
    position: absolute;
    /* left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto; */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
}
.box .head {
    height: 40px;
    background: pink;
}
.btns {
    width: 100%;
    position: absolute;
    bottom: 0;
    border-top: 1px solid #ccc;
    padding: 10px;
}


</style>
