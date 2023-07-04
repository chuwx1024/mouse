<template>

    <div class="container">
        <HomeCategory/>
        <HomeBanner/>
    </div>
    <HomeNew></HomeNew>
    <HomeHot></HomeHot>
    <HomeProduct></HomeProduct>
 </template>
 
<script setup>
import HomeCategory from './components/HomeCategory.vue'
import  HomeBanner from './components/HomeBanner.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomeNew from './components/HomeNew.vue'





</script>