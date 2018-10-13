<template>
<ul><li v-for="ja in ninja" v-bind:key="ja.id">{{ ja }}</li></ul>
</template>

<script>
export default {
  data() {
    return {
      ninja: ["1", "2", "3"]
    };
  }
};
</script>

<style>
</style>