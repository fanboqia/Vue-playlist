<template>
  <div>
    <h1>{{ title }}</h1>
    <ninja :ninja="ninja" :title="title" v-on:changeTitle="updateTitle($event)"></ninja>
    <ninja2 :ninja21="ninja2" :title="title"></ninja2>
  </div>
</template>

<script>

//局部引用其他组件
import Ninja from './Ninja.vue'
import Ninja2 from './Ninja2.vue'

export default {

  components:{
    ninja:Ninja,
    ninja2: Ninja2
  },

  data () {
    return {
      title : 'App',
      ninja : [
        {name : 'frank',age: 20},
        {name : 'james',age: 21}
      ],
      ninja2 : [
        {name : 'frank',age: 22},
        {name : 'james',age: 23}
      ]
    }
  },

  methods : {
    updateTitle : function(titleNew){
      this.title = titleNew;
    }
  }
}
</script>

<style scoped>
h1{
  color: green;
}
</style>