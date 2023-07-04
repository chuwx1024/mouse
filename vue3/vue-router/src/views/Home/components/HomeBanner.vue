<template>
    <div class="home-banner">
        <el-carousel trigger="click" height="500px">
            <el-carousel-item v-for="item in bannerList" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
 </template>
 
<script setup>
import { getBannerAPI } from '@/apis/banner.js'
import { onMounted,ref } from 'vue';

const bannerList = ref([])

const getBanner = async () => {
    const {result, code} = await getBannerAPI()
    if (code === '1') {
        bannerList.value = result
    } else {
        alert('获取数据失败')
    }
    
}

onMounted(()=> {
    getBanner()
})




</script>

<style lang="scss" scoped>
.home-banner {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
}


</style>