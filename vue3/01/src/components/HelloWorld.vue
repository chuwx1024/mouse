<script >
export default {
  data () {
    return {
      msg: 10
    }
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

    }
   
  }
}

</script>

<template>
<div class="box">
  <h1>{{ msg }}</h1>
  <button @click="countNum">点击</button>
</div>
  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
