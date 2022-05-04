export const state = () => ({
  dark: true
})


export const mutations = {
  TOGGLE_DARK_MODE (state, payload) {
    state.dark = payload
  }
}

export const actions = {
  nuxtServerInit ({ commit, state }, { $colorMode }) {
    
  }
}