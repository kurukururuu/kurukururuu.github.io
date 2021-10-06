<template>
  <div class="bg-gray-700 text-gray-300 min-h-screen font-roboto">
    <!-- <HeaderComponent /> -->
    <Nuxt />
    <DarkModeSwitch :initial-state="darkMode" class="fixed bottom-8 left-8 hidden" @switched="onSwitched" />
    <gh-btns-follow
      class="fixed bottom-8 right-8"
      user="kurukururuu"
    />
  </div>
</template>

<script>
import DarkModeSwitch from 'vue-dark-mode-switch'
import 'vue-dark-mode-switch/dist/vue-dark-mode-switch.css'

export default {
  components: {
    DarkModeSwitch
  },
  computed: {
    darkMode() {
      return this.$store.state.dark
    }
  },
  methods: {
    onSwitched (isSwitched) {
      console.log('dark mode is enabled :', isSwitched)
      this.$store.commit('TOGGLE_DARK_MODE', !this.darkMode)
    }
  }
}
</script>