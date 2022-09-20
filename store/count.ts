/* eslint-disable @typescript-eslint/no-unused-vars */
import { mutationTree, actionTree, getterTree } from 'typed-vuex'

export const namespaced = true

export const state = () => ({
  count: 0 as number,
})

export const getters = getterTree(state, {
  getCount(state): number {
    return state.count
  },
})

export const mutations = mutationTree(state, {
  incrementCount(state): void {
    state.count += 1
  },
  setCount(state, setNum: number): void {
    state.count = setNum
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    increment({ state, commit }): void {
      this.commit('count/incrementCount')
    },
    initCount({ state, commit }): void {
      this.commit('count/setCount', 0)
    },
    toStash(state, setNum: number): void {
      this.commit('stash/setStash', setNum)
    },
  }
)
