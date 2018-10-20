// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import rem from './assets/rem'

// import style from './assets/css/style.css';
// axios.defaults.baseURL = "http://1.zshssss.applinzi.com/"

// 引入mintUI
import MintUI from 'mint-ui'
// 引入mintUI样式
import 'mint-ui/lib/style.css'
// 使用mintUI
Vue.use(MintUI)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
