<script setup lang="ts">
import { useRouter } from 'vue-router';
import { PieChartOutlined, QqOutlined, AppstoreOutlined } from '@ant-design/icons-vue';
import { ref, reactive } from 'vue'
import { useCounterStore } from '@/stores/counter';
const useRoutes = useCounterStore()

// 创建路由
const router = useRouter()


const openKeys = ref<string[]>(['1'])
const selectedKeys = ref<string[]>(['sub1'])

const handleClick = function(obj:any) {
  router.push(obj.key)
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
                    <a-menu-item :key="i.path">
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
        </a-menu>
  </a-layout-sider>
</template>