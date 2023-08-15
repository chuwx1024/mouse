<template>
  <FilterGrid>
    <template v-slot:title>
      账户信息
    </template>

    <a-descriptions style="padding: 20px 2%">
      <a-descriptions-item label="账户昵称">Zhou Maomao</a-descriptions-item>
      <a-descriptions-item label="主账户手机号">1810000000</a-descriptions-item>
      <a-descriptions-item label="账户余额">Hangzhou, Zhejiang</a-descriptions-item>
      <a-descriptions-item label="账户名">empty</a-descriptions-item>
      <a-descriptions-item label="上次登录时间">Wantang Road</a-descriptions-item>
      <a-descriptions-item label="会员等级">
        <span>黄金会员</span>

        <a-popover title="Title">
          <template #content>
            <h3>黄金会员</h3>
                            <p style=" padding-bottom: 20px; font-size: 12px;">
                                <span>300.00/3000 还差1200会员升级 </span>
                                <a-button style=" float: right; font-size: 12px;"  shape="round" type="primary" size="small">会员攻略</a-button>
                            </p>
                            <div style="transform: translateX(-70px);">
                                <a-steps :current="1"  progress-dot>
                                    <a-step title="0"></a-step>
                                    <a-step title="100"></a-step>
                                    <a-step title="300"></a-step>
                                    <a-step title="600"></a-step>
                                </a-steps>
                            </div>
          </template>
          <QuestionCircleOutlined />
        </a-popover>
        
      </a-descriptions-item>
    </a-descriptions>
  </FilterGrid>


</template>

<script lang="ts" setup>
import FilterGrid from '@/components/FilterGrid.vue'

</script>

<style scoped lang="less">
/deep/ .wrap-left {
  font-size: 20px;
}

</style>
