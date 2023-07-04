<template>
    <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
        <template #main>
            <ul class="goods-list">
                <li v-for="item in newlist" :key="item.id">
                   <RouterLink :to="`/detail/${item.id}`">
                    <img :src="item.picture" alt="" v-img-lazy="item.picture">
                    <p class="name">{{ item.name }}</p>
                    <p class="price">&yen;{{ item.price }}</p>
                   </RouterLink>
                </li>

            </ul>

        </template>

    </HomePanel>
 </template>
 
<script setup>
import HomePanel from './HomePanel.vue';
import { findNewAPI } from '@/apis/home.js'
import {ref, onMounted} from 'vue'


 const newlist = ref([])

 const getNewList =async () => {
    const { code, result } = await findNewAPI()
    if (code === '1') {
        newlist.value = result
    } else {
        alert('获取news数据失败')
    }
 }


 onMounted(() => {
    getNewList()
 })




</script>

<style scoped lang="scss">
.goods-list {
    display: flex;
    justify-content: space-between;

    li {
        background-color: rgb(199, 240, 226);
        ~li {
            margin-left: 6px;
        }

        &:hover {
            transform: translate3d(0, -3px, 10px);
            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }
        overflow: hidden;
        img {
            width: 100%;
        }

        p {
            font-size: 22px;
            padding-top: 12px;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .name {
            color: #333;
            font-size: 18px;
            padding: 6px 10px 0;
        }
        .price {
            color: #9a2a22;
        }
    }
}
</style>