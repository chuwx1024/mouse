<template>
    <div class="home-category">
        <ul class="menu">
            <li v-for="item in categoryStore.categoryList" :key="item.id">
                <RouterLink to="/">{{ item.name }}</RouterLink>
                <RouterLink v-for="i in item.children.slice(0,2)" :key="i.id"  to="/">{{ i.name }}</RouterLink>
                <!-- 炭层推荐 -->
                <div class="layer">
                    <h4>分类推荐<small>根据您的购买或浏览记录推荐</small></h4>
                    <ul>
                        <li v-for="i in item.goods" :key="i.id">
                            <RouterLink to="/">
                                <img :src="i.picture" alt="">
                                <div class="info">
                                    <p class="name">{{ i.name }}</p>
                                    <p class="desc">{{ i.desc }}</p>
                                    <p class="price"><i>$</i>{{ i.price }}</p>
                                </div>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { category } from '@/stores/category.js'
var categoryStore = category()


</script>

<style scoped lang="scss">
.home-category  {
    width: 250px;
    height: 500px;
    background-color: rgba(0,0,0, .8);
    position: relative; 
    z-index: 99;
    .menu {
       &>li {
        padding-left: 40px;
        height: 55px;
        line-height: 55px;
        a {
            color: $whiteColor;
        }
        
        &:hover {
            background: $blueColor;
            &>.layer {
                display: block;
            }
            a {
                color: orange;
            }
        }
        .layer {
            width: 990px;
            height: 500px;
            position: absolute;
            left: 250px;
            top: 0;
            padding: 0 15px;
            background: rgba(255, 255, 255);
            display: none;

            h4 {
                font-size: 20px;
                font-weight: normal;
                

                small {
                    font-size: 16px;
                    color: #666;
                    margin-left: 10px;
                }
                
            }
            ul {
                display: flex;
                flex-wrap: wrap;
                
                li {
                    width: 310px;
                    height: 120px;
                    border: 1px solid #eee;
                    border-radius: 4px;
                    margin-right: 15px;
                    margin-bottom: 15px;
                    &:nth-child(3n) {
                        margin-right: 0px;
                    }

                    a {
                        display: flex;
                        width: 100%;
                        height: 100%;
                        padding: 10px;
                        align-items: center;
                        display: flex;

                        &:hover {
                            background: $blueColor;
                        }

                        img {
                            width: 95px;
                            height: 95px;
                        }

                        .info {
                            padding-left: 10px;
                            line-height: 25px;
                            flex: 1 1 auto;
                            overflow: hidden;
                            .name {
                                font-size: 16px;
                                color: #666;
                            }
                            .desc {
                                color: #999;  
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                            .price {
                                font-size: 22px;
                                color: orange;
                            }
                        }
                    }
                }
            }

        }
        


       }
    }
}
</style>