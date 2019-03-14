export const state = () => ({
  result: null
})

export const actions = {
  async setResult ({ commit }, result) {
    commit('setResult', result)
  }
}

export const mutations = {
  setResult (state, result) {
    state.result = result
  }
}
