import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import blog from './modules/blog'

Vue.use(Vuex)

const store =  new Vuex.Store({
  modules: {
    auth,
    blog
  }
})

export default store
