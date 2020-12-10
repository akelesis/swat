import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    searchResult: [],
    selected: {}
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
