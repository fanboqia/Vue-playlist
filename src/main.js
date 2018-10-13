import Vue from 'vue'
import App from './App.vue'
import Ninja from './Ninja.vue'

//注册ninja组建
Vue.component('ninja',Ninja);


new Vue({
  el: '#app',
  render: h => h(App)
})
