<template>
    <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
        <template #main>
            <ul class="goods-list">
                <li v-for="item in hotList" :key="item.id">
                    <RouterLink :to="`/detail/${item.id}`">
                        <img :src="item.picture" v-img-lazy="item.picture">
                        <p class="title">{{ item.title }}</p>
                        <p class="alt">{{  item.alt }}</p>
                    </RouterLink>
                </li>

            </ul>

        </template>

    </HomePanel>
 </template>
 
<script setup>

import HomePanel from './HomePanel.vue';
import { getHotAPI } from '@/apis/home.js'
import {ref, onMounted} from 'vue'

const hotList = ref([])

const getHotList = async () => {
    const {code, result} = await getHotAPI()
    if (code === '1') {
        hotList.value = result
    } else {
        alert('获取hot数据失败')
    }
}

onMounted(() => {
    getHotList( )
})




</script>

<style scoped lang="scss">
.goods-list {
    display: flex;
    justify-content: space-between;

    li {
        width: 100%;
        background-color: rgb(193, 229, 217);

        ~li {
            margin-left: 6px;
        }
        img {
            width: 100%;
        }

        p {
            font-size: 20px;
            text-align: center;
        }
        .title {
            padding: 6px 10px 0;
            color: #333;
        }
        .alt {
            padding: 12px 10px 6px;
            color: #f9cc9d;
        }
    }
}
</style>