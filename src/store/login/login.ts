import { Module } from 'vuex'

import { accountLoginRequest } from '@/service/login/login'

import { Iaccount } from '@/service/login/type'
import router from '@/router/index'
import { IloginState } from './types'
import { IrootState } from '../types'

const loginModule: Module<IloginState, IrootState> = {
  namespaced: true,
  state() {
    return {
      id: 1,
      name: '',
      password: ''
    }
  },
  getters: {},
  mutations: {
    changeId(state, id: number) {
      state.id = id
    },
    changeName(state, name: string) {
      state.name = name
    },
    changePassword(state, password: string) {
      state.password = password
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: Iaccount) {
      const loginResult: any = await accountLoginRequest(payload)
      const { name, password, id } = JSON.parse(loginResult.data)
      commit('changeName', name)
      commit('changePassword', password)
      commit('changeId', id)
      router.push('/main')
    }
  }
}

export default loginModule
