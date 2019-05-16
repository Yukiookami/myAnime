// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import auth from './api/auth'
import AV from './helpers/av'
import Util from './helpers/util'
import Filter from './helpers/filter'

Vue.config.productionTip = false
Vue.use(ElementUI)
window.AV = AV
window.AOS = AOS

/* 第三方库初始化 */

AOS.init()

window.onElementHeightChange(document.body, function(){
  AOS.refresh()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
