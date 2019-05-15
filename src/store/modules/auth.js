import auth from '@/api/auth'

const state = {
  user: null,
  isLogin: false
}

const getters = {
  user: state => state.user,
  isLogin: state => state.isLogin
}

const mutations = {
  setUser(state, payload) {
    state.user = payload.user
  },

  setLogin(state, payload) {
    state.isLogin = payload.isLogin
  }
}

const actions = {
  login({ commit }, { username, password }) {
    return auth.login({ username, password })
      .then(res => {
        commit('setUser', { user: res.get('username') })
        commit('setLogin', { isLogin: true})
      })
  },

  async register({ commit }, { username, password }) {
    let res = await auth.register({ username, password })
    commit('setUser', { user: res.get('username') })
    commit('setLogin', {isLogin: true})
    return res.data
  },

  logout({ commit }) {
    auth.logout()
    commit('setUser', { user: null })
    commit('setLogin', { isLogin: false})
  },

  checkLogin({ commit, state}) {
    if(state.isLogin) return true
    let res = auth.getInfo()
    commit('setLogin', { isLogin: res.isLogin })
    if(!res.isLogin) return false
    commit('setUser', { user: res.user })
    return true
  }

  /*
    this.checkLogin().then(isLogin = {

    })
  */
}


export default {
  state,
  getters,
  mutations,
  actions
}
