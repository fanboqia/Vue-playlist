<template>
<div>
<h1>123</h1>
<ul><li v-for="ja in ninja" v-bind:key="ja.id">{{ ja.name }} - {{ ja.age }}</li></ul>
</div>
</template>

<script>
export default {

  props:{
      ninja : {
          type: Array,
          required : true
      } 
  },

  data() {
    return {
    };
  }
};
</script>

<style scoped>
h1{
    color : purple;
}
</style>