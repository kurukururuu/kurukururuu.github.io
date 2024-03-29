<template>
  <div
    class="dark:bg-dark-main transition-colors ease-in-out duration-150 min-h-screen font-roboto grid grid-cols-10 h-screen overflow-hidden"
  >
    <Sidebar ref="sidebar" @scroll-to-section="onScrollToSection" />
    <div class="col-span-9 mobile:col-span-10 overflow-auto">
      <Nuxt />

      <transition name="fade">
        <ScrollTopComponent
          v-if="showScrollTop"
          class="fixed bottom-4 right-8 cursor-pointer"
          @click="handleScrollTop"
        />
      </transition>
    </div>

    <client-only placeholder="Loading...">
      <ColorScheme placeholder="..." tag="span">
        <DarkModeSwitch
          ref="darkModeSwitcher"
          :initial-state="darkMode"
          class="fixed top-8 right-8"
          @switched="onSwitched"
        />
      </ColorScheme>
    </client-only>
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
      observer: null,
    }
  },
  computed: {
    darkMode() {
      const isDark =
        this.$colorMode.preference === 'system' ||
        this.$colorMode.preference === 'dark'
      return isDark
    },
    scrollTop() {
      if (!this.$el) return 0
      return this.$el.scrollTop
    },
  },
  watch: {
    '$colorMode.preference'(newValue) {
      switch (newValue) {
        case 'system':
        case 'dark':
          this.$store.commit('TOGGLE_DARK_MODE', true)
          break
        case 'light':
          this.$store.commit('TOGGLE_DARK_MODE', false)
          this.$refs.darkModeSwitcher.$el.querySelector('input').click()
          break
      }
    },
    $route(to, from) {
      if (to.name !== from.name) {
        setTimeout(() => {
          this.resetIntersectListener()
        }, 1000)
      }

      // if (to.hash !== from.hash) {
      // this.onScrollToSection()
      // }
    },
  },
  // created() {
  //   if (process.browser) {
  //     this.observer = new IntersectionObserver(this.onElementObserved, {
  //       root: this.$el,
  //       threshold: 0.22
  //     })
  //   }
  // },
  mounted() {
    if (process.browser) {
      window.addEventListener('scroll', this.onScroll)
    }

    this.initIntersectListener()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
    this.observer.disconnect()
  },
  methods: {
    initIntersectListener() {
      this.observer = new IntersectionObserver(this.onElementObserved, {
        root: this.$el,
        threshold: 0.22,
      })

      this.$el.querySelectorAll('section[id]').forEach((section) => {
        this.observer.observe(section)
      })
    },
    resetIntersectListener() {
      this.observer.disconnect()
      this.initIntersectListener()
    },
    onElementObserved(entries) {
      entries.forEach(({ target, isIntersecting }) => {
        if (
          isIntersecting &&
          this.$route.hash.replace(/#/, '') !== target.getAttribute('id')
        ) {
          this.$router.replace({ hash: target.getAttribute('id') })
        }
      })
    },
    onSwitched(isSwitched) {
      this.$store.commit('TOGGLE_DARK_MODE', !this.darkMode)
      this.$colorMode.preference = isSwitched ? 'dark' : 'light'
    },
    onScrollToSection(e) {
      const li = e.target.closest('li')
      this.$el
        .querySelector(`section[id=${li.id}]`)
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        })
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

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-all ease-in-out duration-500;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  @apply opacity-0;
}
</style>
