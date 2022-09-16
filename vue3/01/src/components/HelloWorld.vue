<script >
export default {
  data () {
    return {
      msg: 10
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeUnmount () {
    console.log('beforeUnmount')
  },
  unmounted () {
    console.log('unmounted')
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
