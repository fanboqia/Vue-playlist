<template>
  <div>
    <h1>{{ title }}</h1>
    <ninja :ninja="ninja" ></ninja>
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
      ninja : [
        {name : 'frank',age: 20},
        {name : 'james',age: 21}
      ]
    }
  }
}
</script>

<style scoped>
h1{
  color: green;
}
</style>