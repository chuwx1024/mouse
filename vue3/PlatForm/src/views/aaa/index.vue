<template>
  <a-tabs type="card" v-model:activeKey="activeKey">
    <a-tab-pane v-for="item in tabData" :key="item.id" :tab="item.tab">
      <component :is="item.component"></component>
    </a-tab-pane>
  </a-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AccountInfo from './components/AccountInfo.vue'
import CouponsManagement from './components/CouponsManagement.vue'
import UserInfo from './components/UserInfo.vue'

const activeKey = ref('1')

const tabData = [
  { id: 0, tab: '账户信息', component: UserInfo },
  { id: 1, tab: '租用记录', component: AccountInfo},
  { id: 2, tab: '卡券管理', component: CouponsManagement},
  { id: 3, tab: '充值记录', component: AccountInfo}
]



</script>