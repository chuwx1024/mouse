<template>
    
        <HomePanel :title="item.name"  v-for="item in goodList" :key="item.id">
            <template #main>
                <div class="home-product">
                <!-- 左侧图片 -->
                <div class="box">
                    <RouterLink to="/" class="cover">
                        <img :src="item.picture" alt="" v-img-lazy="item.picture">
                    </RouterLink>

                </div>

                <!-- 右侧产品列表 -->
                <ul class="goods-list" >
                    <li v-for="i in item.goods" :key="i.id">
                        <!-- <RouterLink to="/" class="good-item">
                            <img :src="i.picture" alt="" v-img-lazy="i.picture">
                            <p>{{  i.name }}</p>
                            <p>{{  i.desc }}</p>
                            <p class="price">&yen;{{ i.price }}</p>
                        </RouterLink> -->
                        <GoodItem :good="i"></GoodItem>
                    </li>
                </ul>
            </div>

            </template>
        </HomePanel>

 </template>
 
<script setup>

import { RouterLink } from 'vue-router';
import HomePanel from './HomePanel.vue';
import GoodItem from './GoodItem.vue';
import { getGoodsAPI } from '@/apis/banner'
import { ref, onMounted} from 'vue'

const goodList = ref([])


const getGoods = async () => {
    const { code, result } = await getGoodsAPI()
    if (code ==="1") {
        goodList.value = result
    }
}

onMounted(() => { getGoods() })




</script>

<style lang="scss"  scoped>
.home-product {
    background-color: #fff;
    display: flex;
    padding-bottom: 20px;
    .box {
        width: 240px;
        height: 610px;
        overflow: hidden;
        margin-right: 20px;
        img {
            width: 100%;
            height: 100%;
        }
       
    }

    .goods-list {
        flex: 1;
        height: 610px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 40px;
        grid-row-gap: 20px;

        li {
            width: 100%;
            text-align: center;
            overflow: hidden;
            // a {
            //     display: inline-block;
            //     width: 100%;
            //     height: 100%;

            //     img {
            //         width: 90%;
            //     }
            //     p {
            //         padding: 0 6px;
            //         white-space: nowrap;
            //         overflow: hidden;
            //         text-overflow: ellipsis;
            //         color: #333;
            //         &:nth-child(3) {
            //             color: rgb(148, 153, 160);
            //             font-size: 12px;
            //         }
            //     }
            //     .price {
            //         color: rgb(154, 42, 34);
            //     }
            //     &:hover {
            //         transform: translate3d(0, -6px, 0);
            //         box-shadow: 0 6px 10px  rgba(0 0 0 /20%);
            //     }

            // }
            
        }
    }

    
}

</style>