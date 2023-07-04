<template>
  <div class="goods-hot">
    <h3>{{ title  }}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in goodsList" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>

<script setup>
import {  fetchHotGoodsAPI } from '@/apis/banner.js'
import { useRoute} from 'vue-router'
const route = useRoute()
import { onMounted, ref, computed } from 'vue';

const props = defineProps({
    type: {
        type: Number,
        default: 1
    }
})

const TYPEMAP = {
    1: '24小时热榜',
    2: '周热榜'
}

const title = computed(() => TYPEMAP[props.type])

// 获取热门
const goodsList = ref([])
const getHotList= async () => {
  const { code, result } = await fetchHotGoodsAPI({id: route.params.id, type: 1})
  if (code === '1') {
    goodsList.value = result
  }

}

onMounted(() => getHotList())

</script>

<style scoped lang="scss">
.goods-hot {
 
    h3 {
        width: 220px;
        height: 70px;
        line-height: 70px;
        background: #cf4b31;
        color: #fff;
        padding-left: 25px;
        font-weight: normal;
    }

    .goods-item {
        display: block;
        padding: 20px 30px;
        background-color: #fff;
        text-align: center;

        img {
            width: 160px;
            height: 160px;

        }
        p {
            padding-top: 10px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .name {
            font-size: 16px;
        }
        .desc {
            color: #999;
            height: 29px;
        }
        .price {
            color: #9f2039;
            font-size: 20px;
        }


    }

}

</style>
