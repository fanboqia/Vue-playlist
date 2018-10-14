<template>
<div>
<h1>Ninja1</h1>
<h2> Title Got From App -> {{ title }}</h2>
<ul><li v-for="ja in ninja" v-bind:key="ja.id">{{ ja.name }} - {{ ja.age }}</li></ul>
<hr><p>测试reference</p>
<ul><li v-for="ja in ninja" v-bind:key="ja.id">{{ ja.name }} - {{ ja.age }}</li></ul>
<button @click="change">删除</button>
<button @click="changeTitle">改变title</button>
</div>
</template>

<script>
export default {

  props:{
      ninja : {
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

  methods :{
      change : function(){
          let title = this.title;
          this.ninja.pop();
      },
      changeTitle : function(){
          this.title = 'changed Title...';
      }
  }
};
</script>

<style scoped>
h1{
    color : purple;
}
</style>