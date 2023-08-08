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

    <!-- <a-menu
      style="width: 200px"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      @click="handleClick"
    >

      <template v-for="item in useRoutes.sidebarData" >
        <a-menu-item :key="item.path">
          <pie-chart-outlined />
          <span>Option 1</span>
        </a-menu-item>
      </template> -->

    
    <a-menu
          :style="{ height: '100%', borderRight: 0 }"
          style="width: 200px"
          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
          mode="inline"
          @click="handleClick"
        >
            <a-menu-item v-for="item in useRoutes.sidebarData" :key="item.path">{{ item.path }}</a-menu-item>
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