import Vue from 'vue'
import App from './App.vue'
import vuePayKeyboard from './lib/index.js'//开发时的路径
import vuePayKeyboard from '../dist/vue-lzj-header.js'//打包时的路径
Vue.use(vuePayKeyboard)
new Vue({
  el: '#app',
  render: h => h(App)
})
