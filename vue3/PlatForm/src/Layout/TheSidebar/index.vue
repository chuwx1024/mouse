<script setup lang="ts">
import { PieChartOutlined, QqOutlined, AppstoreOutlined } from '@ant-design/icons-vue';
import { ref, reactive } from 'vue'
import { useCounterStore } from '@/stores/counter';
const useRoutes = useCounterStore()
console.log(useRoutes.sidebarData, 'routes')

const openKeys = ref<string[]>(['1'])
const selectedKeys = ref<string[]>(['sub1'])

const handleClick = function(obj:any) {
  console.log(obj, '0000000000000000')

}

const titleClick = function (obj:any) {
  console.log(obj, 'titleClick')
}


</script>

<template>
  <a-layout-sider>
    <a-menu
          :style="{ height: '100%', borderRight: 0 }"
          style="width: 200px"
          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
          mode="inline"
          @click="handleClick"
        >
          <template v-for="(item,index) in useRoutes.sidebarData" :key="index">

            <span v-if="item.children.length === 1">
              <a-menu-item :key="item.path">{{ item.meta.title }}</a-menu-item>
            </span>
            <span v-else>

              <a-sub-menu :key="item.path">
  
                <template #title>{{ item.meta.title }}</template>
                <template v-for="i in item.children" :key="i.name">
                  <span>
                    <a-menu-item :key="i.name">
                                {{ i.meta.title }}
                  </a-menu-item>
                  </span>
                    <!-- <template v-if="!item.children">
                        <RouterLink :to="item.path">
                            <a-menu-item :key="item.key">
                                {{ item.meta.title }}
                            </a-menu-item>
                        </RouterLink>
                    </template> -->
                </template>
            </a-sub-menu>
            </span>
            
          </template>
            
          <!-- <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                subnav 1
              </span>
            </template>
            <a-menu-item key="1">option1</a-menu-item>
            <a-menu-item key="2">option2</a-menu-item>
            <a-menu-item key="3">option3</a-menu-item>
            <a-menu-item key="4">option4</a-menu-item> -->
          <!-- </a-sub-menu> -->
        </a-menu>
  </a-layout-sider>
</template>