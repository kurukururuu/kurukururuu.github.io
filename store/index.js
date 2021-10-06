export const state = () => ({
  dark: false
})


export const mutations = {
  TOGGLE_DARK_MODE (state, payload) {
    state.dark = payload
  }
}