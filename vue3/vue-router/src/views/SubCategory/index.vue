<template>
   <div class="container">

        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: `/homePage/product/${filterData.parentId}`}">{{ filterData.parentName }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ filterData.name }}</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="sub-container">
            <el-tabs
                v-model="reqData.sortField"
                type="card"
                class="demo-tabs"
                @tab-change="handleChange"
            >
                <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
                <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
                <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
            </el-tabs>

            <div class="body"  
                v-infinite-scroll="load"
                :infinite-scroll-disabled="disabled"
             >
                <GoodItem v-for="item in goodList" :key="item.id" :good="item"></GoodItem>
            </div>

        </div>


   </div>


</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute} from 'vue-router'
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/apis/banner.js'

const route = useRoute()

import  GoodItem from '@/views/Home/components/GoodItem.vue'
const filterData = ref({})

const getfilterData = async () => {
    const { code, result} = await getCategoryFilterAPI(route.params.id)
    if (code === '1') {
        filterData.value = result
    }
}

onMounted(() => getfilterData())



const goodList = ref([])
const reqData = ref({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
})

const getGoodList =async () => {
    const { code, result } = await getSubCategoryAPI(reqData)
    if (code === '1') {
        goodList.value = result.items
    }
}

onMounted(() => getGoodList())


const handleChange = () => { getGoodList() }


// 无限加载
let  num = ref(0)
const disabled = ref(false)
const load = async () => {
  reqData.value.page++

  const { code, result } = await getSubCategoryAPI(reqData)
    if (code === '1') {
        num.value++
        if (num.value < 15) {
            goodList.value = [...goodList.value ,...result.items]
        } else {
            disabled.value = true
        }
        
    }


  console.log('无限滚动')
}


  
</script>

<style scoped lang="scss">
.container {
    .el-breadcrumb {
        padding-left: 14px;
        height: 40px;
        line-height: 40px;
    }

    .body {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 18px;
    }
}

</style>
