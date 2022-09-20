import { getAccessorType } from 'typed-vuex'

import * as count from './count'
import * as stash from './stash'

export const state = () => ({})

export type RootState = ReturnType<typeof state>

export const getters = {}
export const mutations = {}
export const actions = {}

export const accessorType = getAccessorType({
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    count,
    stash,
  },
})
