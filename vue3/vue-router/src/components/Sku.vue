<template>
  <div class="goods-sku">
    <dl v-for="item in goods.specs" :key="item.id">
        <dt>{{ item.name }}</dt>
        <dd>
            <template v-for="i in item.values" :key="i.id" >
                <img :class="{ selected: i.selected}" v-if="i.picture"  :src="i.picture" alt="" @click="changeSelectedStatus(item, i)">
                <span :class="{ selected: i.selected }" v-else @click="changeSelectedStatus(item, i)">{{ i.name }}</span>
            </template>
        </dd>
    </dl>
  </div>
</template>

<script setup>
import { ref, onMounted} from 'vue'

const goods = ref({})

import axios from 'axios'

const getGoods = async () => {
    const res = await axios.get('http://pcapi-xiaotuxian-front-devtest.itheima.net/goods?id=1369155859933827074')
    goods.value = res.data.result
    getPathMap(goods)
}

const changeSelectedStatus = (item, val) => {
    if (val.selected) {
        val.selected = false
    } else {
        item.values.forEach(val => val.selected = false)
        val.selected = true
    }

}

onMounted(() => getGoods())

// 生成有效子集

const getPathMap = (goods) => {
    console.log(goods.value.skus)
    // 过滤有库存的值
    const effectiveSkus = goods.value.skus.filter(item => item.inventory > 0)

    // 获取valueName数组
    effectiveSkus.forEachsku => 
        const selectedValArr = sku.specs.map(val => val.valueName)
        // console.log(selectedValArr)
        const abc = bwPowerSet(selectedValArr)
        console.log(abc)


    
    // console.log(effectiveSkus)
}

// 求子集

function bwPowerSet (list) {
    const subsets = []

    const num = 2 ** list.length

    for (let index = 0; index < num; index += 1) {
        const subSet = []

        for (let sIndex = 0; sIndex < list.length; sIndex +=1) {
            if (index  & (1 << sIndex)) {
                subSet.push(list[sIndex])
            }
        }

        subsets.push(subSet)

    }
    return subsets
}


</script>

<style scoped lang="scss">
@mixin sku-state-mixin {
    border: 1px solid #e4e4e4;
    // border: 1px solid  purple;
    margin-right: 10px;
    cursor: pointer;

    &.selected {
        border-color: #27ba9b;
    }
    &.disabled {
        opacity: .6;
        border-style: dashed;
        cursor: not-allowed;
    }


}

.goods-sku {
    padding-left: 10px;
    padding-top: 20px;
    dl {
        display: flex;
        padding-bottom: 20px;
        align-items: center;

        dt {
            width: 50px;
            color: #999;
        }

        dd {
            flex: 1;
            color: #666;

            >img {
                width: 50px;
                height: 50px;
                margin-bottom: 4px;
                @include sku-state-mixin;

            }
            >span {
                // background-color: green;
                display: inline-block;
                height: 32px;
                line-height: 30px;
                padding: 0 20px;
                margin-bottom: 4px;
                @include sku-state-mixin;
            }
        }
    }
}


</style>
