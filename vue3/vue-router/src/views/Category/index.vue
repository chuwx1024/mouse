<template>
  <div class="home-breadcrumb"> 
    <div class="container">

        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{ topCategory.name }}</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 轮播图 -->
        <el-carousel height="500px">
            <el-carousel-item v-for="item in bannerList" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </el-carousel-item>
        </el-carousel>

        <!-- 全部分布 -->
        <div class="sub-list">
            <h3>全部分类</h3>
            <ul  class="all-list">
                <li v-for="item in topCategory.children" :key="item.id">
                    <RouterLink :to="`/category/sub/${item.id}`">
                        <img :src="item.picture" alt="">
                        <p>{{ item.name }}</p>
                    </RouterLink>
                   
                </li>
            </ul>
        </div>

        <!-- 产品分类 -->
        <div class="ref-goods" v-for="item in topCategory.children" :key="item.id">
            <div class="head">
                <h3>-{{ item.name }}-</h3>
            </div>
            <div class="body">
                <GoodItem v-for="i in item.goods" :good="i" :key="i.id"></GoodItem>
            </div>
        </div>


    </div>
    
  </div>
</template>

<script setup>
import GoodItem from '../Home/components/GoodItem.vue';
// import { useRoute} from 'vue-router'
// import { getTopCatergoryAPI, getBannerAPI } from '@/apis/banner.js'
// import { ref } from 'vue'
// import { onBeforeRouteUpdate } from 'vue-router';
// import { onMounted } from 'vue';
import { useBanner, useCategory } from './composabel/useBanner.js'
// const topCategory = ref({})

// const route = useRoute()

// const getCategory = async (id = route.params.id) => {
//     const { code, result } = await getTopCatergoryAPI(id)
//     if (code == '1') {
//         topCategory.value = result
//     }

// }

// const bannerList = ref([])
// const getBannerList = async () => {
//     const { code, result } = await getBannerAPI({ distributionSite: '2'})
//     if(code == '1') {
//         bannerList.value = result
//     }
// }
const { bannerList} = useBanner()

const { topCategory } = useCategory()

// onMounted(() => {
//     // getBannerList()
//     // getCategory()
// })

// onBeforeRouteUpdate((to)=> {
//     getCategory(to.params.id)
// })






</script>

<style scoped lang="scss">
.home-breadcrumb {
    .el-breadcrumb {
        padding-left: 14px;
        height: 40px;
        line-height: 40px;
    }

    .sub-list {
        margin-top: 20px;
        background: #fff;
        h3 {
            width: 100%;
            text-align: center;
            padding: 20px;
            font-size: 22px;
        }
        .all-list {
            display: flex;
            justify-content: space-between;
            li {
                width: 400px;
                text-align: center;
                padding: 10px;
                ~li {
                    margin-left: 40px;
                }
                img {
                    width: 100px;
                    height: 100px;
                }
            }
        }

    }

    .ref-goods {
        h3 {
            width: 100%;
            text-align: center;
            padding: 20px;
            font-size: 22px;
        }

            
            .body {
                display: flex;
                justify-content: space-around;
            }
        }

}


</style>
