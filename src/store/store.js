import Vue from 'vue'
import Vuex from 'vuex'
import { LOGIN, LOGOUT } from './types'

Vue.use(Vuex)

const state = {
  user: ''
}

export default new Vuex.Store({
  state,
  mutations: {
    [LOGIN]: (state, data) => {
      state.user = data
    },
    [LOGOUT]: (state, data) => {
      state.user = ''
    }
  }
})