import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    searchResult: [],
    selected: {},
    logged: localStorage.getItem('__user') ? true : false
  },
  mutations: {
    setUser(state, user){
      state.user = user
      if(user){
          axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`
          state.logged = true
          if(user.adm){
              this.state.admin = true
          }
      }
      else{
          delete axios.defaults.headers.common['Authorization']
          state.logged = false
      }
    },
    setSearchResult(state, result) {
      state.searchResult = result;
    },
    setSelected(state, selected) {
      state.selected = selected
    }
  },
  actions: {
  },
  modules: {
  }
})
