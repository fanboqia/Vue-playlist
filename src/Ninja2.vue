<template>
<div>
<h1>Ninja2</h1>
<h2> Title Got From App -> {{ title }}</h2>
<ul><li v-for="ja in ninja21" v-bind:key="ja.id">{{ ja.name }} - {{ ja.age }}</li></ul>
</div>
</template>

<script>

import { bus } from './main.js';

export default {

  props:{
      ninja21 : {
          type: Array,
          required : true
      },
      title : {
          type : String
      }
  },

  data() {
    return {
    };
  },

  created(){
      bus.$on('changeTitle',(data)=>{
          this.title = data;
      });
  }
};
</script>

<style scoped>
h1{
    color : purple;
}
</style>