import Vue from 'vue'
import App from './App.vue'
// import Ninja from './Ninja.vue'

// //global注册ninja
// Vue.component('ninja',Ninja);

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
