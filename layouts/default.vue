<template>
  <div class="bg-gray-main text-gray-300 min-h-screen font-roboto">
    <!-- <HeaderComponent /> -->
    <Nuxt />
    <DarkModeSwitch :initial-state="darkMode" class="fixed bottom-8 left-8 hidden" @switched="onSwitched" />
    <gh-btns-follow
      class="fixed bottom-8 left-8"
      user="kurukururuu"
    />

    <transition name="fade">
      <ScrollTopComponent
        v-if="showScrollTop"
        class="fixed bottom-8 right-16 cursor-pointer"
        @click="handleScroll" />
    </transition>
  </div>
</template>

<script>
import DarkModeSwitch from 'vue-dark-mode-switch'
import 'vue-dark-mode-switch/dist/vue-dark-mode-switch.css'

export default {
  components: {
    DarkModeSwitch
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
    }
  },
  mounted() {
    if (process.browser) {
      window.addEventListener('scroll', this.onScroll)
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onSwitched (isSwitched) {
      console.log('dark mode is enabled :', isSwitched)
      this.$store.commit('TOGGLE_DARK_MODE', !this.darkMode)
    },
    handleScroll() {
      this.$el.scrollIntoView({top:0, behavior: 'smooth'})
    },
    onScroll (e) {
      if (window.top.scrollY > 500) {
        this.showScrollTop = true
      } else if (window.top.scrollY === 0) {
        this.showScrollTop = false
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  @apply transition-all ease-in-out duration-500;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  @apply opacity-0;
}
</style>