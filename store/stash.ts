import { mutationTree, actionTree, getterTree } from 'typed-vuex'

export const namespaced = true

export const state = () => ({
  stashNumber: 0 as number,
  isStash: false as boolean,
})

export const getters = getterTree(state, {
  isStash(state) {
    return state.isStash
  },
  getStash(state) {
    return state.stashNumber
  },
})

export const mutations = mutationTree(state, {
  setStash(state, setNum: number): void {
    state.stashNumber = setNum
    state.isStash = true
  },
  clearStash(state): void {
    state.stashNumber = 0
    state.isStash = false
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    setStashNumber({ commit }, setNum: number): void {
      this.commit('stash/setStash', setNum)
    },
    clearStashNumber({ state, commit }): void {
      this.commit('stash/clearStash')
    },
  }
)