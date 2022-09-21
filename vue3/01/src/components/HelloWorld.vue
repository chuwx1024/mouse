<script >
import SonSon from './sonson.vue'
export default {

  // props: {
  //   title: {
  //     type: String,
  //     default: ''
  //   }
  // },
  data () {
    return {
      msg: 10,
      weather: '请转多云',
      title: '这是标题',
      showDialog: false
      
    }
  },
  components: {
    SonSon
  },
  beforeCreate () {
    console.log('beforeCreate---0')
  },
  created () {
    console.log('created--0')
  },
  beforeMount () {
    console.log('beforeMount---0')
  },
  mounted () {
    console.log('mounted----0')
  },
  beforeUpdate () {
    console.log('beforeUpdate----0')
  },
  updated () {
    console.log('updated----0')
  },
  beforeUnmount () {
    console.log('beforeUnmount----0')
  },
  unmounted () {
    console.log('unmounted-------0')
  },
  methods: {
    countNum () {
      this.msg++

    },
    close (val) {
      console.log(val, 'val')
      this.showDialog = !this.showDialog
    }
   
  }
}

</script>

<template>
<div class="box">
  <h1>{{ msg }}</h1>
  <button @click="countNum">点击</button>
  <button @click="close">dialog 展示</button>
  {{ title }}

  <SonSon v-model="weather" title="标题" v-if="showDialog"  @close="close">
    <template #title="titleParams">
      <span>{{ titleParams.hello }} {{ titleParams.title }}</span>
    </template>  
    今天的天气是<span style="color: red">{{ weather }}</span>
  </SonSon>
</div>
  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
