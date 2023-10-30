<template>
  <div
    class="dark:bg-dark-main dark:text-gray-300 transition-colors ease-in-out duration-150 min-h-screen font-roboto"
  >
    <NuxtLink
      to="/"
      class="fixed top-8 left-8 hover:underline transition-all duration-100 ease-in-out p-2 z-10"
      >&larr; Back to Home</NuxtLink
    >
    <Nuxt />

    <transition name="fade">
      <ScrollTopComponent
        v-if="showScrollTop"
        class="fixed bottom-4 right-8 cursor-pointer"
        @click="handleScrollTop"
      />
    </transition>

    <DarkModeSwitch
      :initial-state="darkMode"
      class="fixed top-8 right-8"
      @switched="onSwitched"
    />
    <gh-btns-follow class="fixed bottom-8 left-8" user="kurukururuu" />
  </div>
</template>

<script>
import DarkModeSwitch from 'vue-dark-mode-switch'
import 'vue-dark-mode-switch/dist/vue-dark-mode-switch.css'

export default {
  components: {
    DarkModeSwitch,
  },
  data() {
    return {
      showScrollTop: false,
    }
  },
  computed: {
    darkMode() {
      return this.$store.state.dark
    },
    scrollTop() {
      if (!this.$el) return 0
      return this.$el.scrollTop
    },
  },
  mounted() {
    if (process.browser) {
      window.addEventListener('scroll', this.onScroll)
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onSwitched(isSwitched) {
      this.$store.commit('TOGGLE_DARK_MODE', !this.darkMode)
      this.$colorMode.preference = isSwitched ? 'dark' : 'light'
    },
    handleScrollTop() {
      this.$el.scrollIntoView({ top: 0, behavior: 'smooth' })
    },
    onScroll() {
      this.showScrollTop = window.scrollY > 500
    },
  },
}
</script>
