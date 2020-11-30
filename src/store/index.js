import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser(state, user){
      state.user = user
      if(user){
          axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`
          if(user.adm){
              this.state.admin = true
          }
      }
      else{
          delete axios.defaults.headers.common['Authorization']
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
