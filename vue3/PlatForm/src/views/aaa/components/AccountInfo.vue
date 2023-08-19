<template>
    <filter-grid>
      <template v-slot:title>
        <a-input-search
          v-model:value="value"
          placeholder="搜索"
          style="width: 200px"
          @search="onSearch"
        />
      </template>
      <template #btn>
        <a-button type="primary">
          <template #icon><SearchOutlined /></template>
          创建账号
        </a-button>

      </template>
      

      <!-- table -->
      <a-table  :data-source="dataSource" :columns="columns" :scroll="{ x: 1500, }">
        <template v-slot:operationMode="{ record }">
          <span v-if="record.oprationMode === '1'">乘法</span>
          <span v-else>除法</span>
        </template>
        <template v-slot:state="{ record }">
          <span>{{ record.state === '1' ? '开发' : '生产'}}环境</span>
        </template>
        <template v-slot:operation="{ record }">
          <a-button type="link" size="small" @click="editItem(record)">编辑</a-button>
        </template>
      </a-table>
    </filter-grid>
</template>
  
  <script  lang="ts" setup>
  import FilterGrid from "../../../components/FilterGrid.vue";
  import { ref, type Ref, toRefs } from 'vue'
  const columns = [
      {
        title: '用户昵称',
        dataIndex: 'name',
      },
      {
        title: '实例名称',
        dataIndex: 'demoName',
      },
      {
        title: '手机号',
        dataIndex: 'phone',
        width: 150
      },
      {
        title: '环境资源',
        dataIndex: 'resource',
        width: 150
      },
      {
        title: '计算方式',
        dataIndex: 'oprationMode',
        width: 150,
        slots: { customRender: 'operationMode' },
      },
      {
        title: '费用',
        dataIndex: 'fee',
        width: 150
      },
      {
        title: '运行时间',
        dataIndex: 'runTime',
        width: 150
      },
      {
        title: '机房',
        dataIndex: 'machineRoom',
      },
      {
        title: '状态',
        dataIndex: 'state',
        slots: { customRender: 'state' },
      },
      {
        title: '链接方式',
        dataIndex: 'linkStyle',
      },
      {
        title: '操作',
        align: 'center',
        dataIndex: 'operation',
        fixed: 'right',
        slots: { customRender: 'operation' },
      },
    ];

    // interface Ref<T> {
    //     value: T
    //   }

      interface DataItem {
        key: string,
        name: string,
        demoName: string,
        resource: string,
        oprationMode: string,
        fee: number,
        runTime: string,
        machineRoom: string,
        state: string,
        linkStyle: string
      }

    // const dataSource: Ref<DataItem[]> = ref([
    const dataSource: Ref<DataItem[]> = ref([
      {
        key: '0',
        name: '张三',
        demoName: '测试案例',
        phone: '1234556444',
        resource: '测试',
        oprationMode: '1',
        fee: 12,
        runTime: '30分钟',
        machineRoom: '房子',
        state: '2',
        linkStyle: '百度'
      },
      {
        key: '1',
        name: '李四',
        demoName: '测试案例',
        phone: '1234556444',
        resource: '测试',
        oprationMode: '1',
        fee: 23,
        runTime: '30分钟',
        machineRoom: '房子',
        state: '2',
        linkStyle: '百度'
      }
    ]);
  let value = ref('')

  const onSearch = () => {

  }

  const editItem = (Item:DataItem) => {
    console.log(Item, '0000')
    const { name } = toRefs<any>(Item)
    alert( name.value )
  }
  
  </script>
  
  <style scoped lang="less">
  
  </style>
  