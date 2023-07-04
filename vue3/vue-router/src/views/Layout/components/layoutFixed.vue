<template>
    <div class="header-fixed"  :class="{ show: y > 60}">
        <div class="container">
            <ul class="app-header-nav ">
                <li>
                    <RouterLink to="/">首页</RouterLink>
                </li>
                <li v-for="item in categoryStore.categoryList" :key="item.id">
                    <RouterLink :to="`/homePage/product/${item.id}`"> {{ item.name }}</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useScroll } from '@vueuse/core'
import {category} from '@/stores/category.js'
const categoryStore = category()


// 表头展示

const {y} = useScroll(window)

</script>

<style scoped lang="scss">
     
.header-fixed {
    background-color: #fff;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    transform: translateY(-100%);
    opacity: 0;
    z-index: 999;
    background-color: #f1f3f4;

    .app-header-nav  {
            display: flex;
            height: 40px;
            align-items: center;

        li {
            // width: 40px;
            text-align: center;
            margin-right: 40px;

            a {
                font-size: 16px;
                color: #333;
                display: inline-block;
                padding: 0px 12px;
                height: 32px;
                line-height: 32px;
                &:hover {
                    color: $orangeColor;
                    border-bottom: 1px solid blueviolet;
                }
                
            }
        }
    }

    &.show {
        transition: all 0.4s linear;
        transform: translateY(0);
        opacity: 1;
    }
}



</style>
