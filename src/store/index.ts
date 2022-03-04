import { createStore } from 'vuex'
import { IrootState } from './types'

import login from './login/login'
const store = createStore<IrootState>({
  state: () => {
    return {
      name: 'hai',
      age: 21
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export default store
