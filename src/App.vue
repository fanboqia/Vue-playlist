<template>
  <div>
    {{ title }}
    <ninja></ninja>
  </div>
</template>

<script>

//局部引用其他组件
import Ninja from './Ninja.vue'

export default {

  components:{
    ninja:Ninja
  },

  data () {
    return {
      title: 'frank! Sick!'
    }
  }
}
</script>

<style>

</style>