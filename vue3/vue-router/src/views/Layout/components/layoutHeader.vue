<template>
    <div class="app-header ">
        <div class="container ">
            <h1 class="logo">
                <RouterLink to="/">小兔鲜</RouterLink>
            </h1>
            <ul class="app-header-nav ">
                <li>
                    <RouterLink   to="/">首页</RouterLink>
                </li>
                <li v-for="item in categoryStore.categoryList" :key="item.id">
                    <RouterLink active-class="active" :to="`/homePage/product/${item.id}`"> {{ item.name }}</RouterLink>
                </li>
            </ul>
            <div class="search">
                <i></i>
                <input type="password" placeholder="搜一搜">
            </div>

        </div>
    </div>
</template>

<script setup>
import {category} from '@/stores/category.js'
import { RouterLink } from 'vue-router';
const categoryStore = category()



</script>

<style scoped lang="scss">
.app-header {
    background-color: #fff;
    .container {
        display: flex;
        align-items: center;

        .logo {
            width: 200px;

            a {
                width: 100%;
                height: 122px;
                display: block;
                text-indent: -9999px;
                background: url('@/assets/logo.png') no-repeat center 20px / contain;
            }
        }

        .app-header-nav  {
            display: flex;
            width: 820px;
            padding-left: 10px;

            .active {
                color: #27bb9a;
                // text-decoration: underline;
                border-bottom: 1px solid #27bb9a;
                
            }
        }

        li {
            width: 38px;
            text-align: center;
            margin-right: 10px;

            a {
                font-size: 16px;
                color: #333;
                display: inline-block;
                height: 32px;
                line-height: 32px;
                &:hover {
                    color: $orangeColor;
                    border-bottom: 1px solid blueviolet;
                }
                
            }
        }

        .search {
            width: 170px;
            height: 32px;
            line-height: 32px;
            // background-color: pink;

            input {
                width: 140px;
                padding-left: 5px;
                color: #666;
                height: 22px;
                border: 1px solid #333;
                border-radius: 2px;
            }

        }
    }
}


</style>
