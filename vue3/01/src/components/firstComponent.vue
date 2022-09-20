<script setUp>
import {ref, reactive,defineProps} from 'vue'

const props = defineProps({
    title: {
        type: String,
        default: ''
    }
})





</script>

<template>
<div>
  <div class="box">
    <div class="head">
        <h5>{{ title }}</h5>
    </div>
    <div class="body"></div>
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


</style>
