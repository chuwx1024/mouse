<template>
    <NavSection></NavSection>
    <HeaderSection></HeaderSection>
    <HeaderFixed></HeaderFixed>
    <!-- <Router-view :key="$route.fullPath"></Router-view> -->
    <Router-view></Router-view>
    <FooterSection></FooterSection>
 </template>
 
<script setup>
import HeaderSection from './components/layoutHeader.vue'
import NavSection from './components/layoutNav.vue'
import FooterSection from './components/layoutFooter.vue'
import HeaderFixed from './components/layoutFixed.vue'
import {category} from '@/stores/category.js'
import { onMounted } from 'vue'
const categoryStore = category()

onMounted(() => {
    categoryStore.getList()
})




</script>