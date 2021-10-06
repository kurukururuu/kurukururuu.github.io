<template>
  <div class="relative mb-20 h-screen">
    <img src="https://source.unsplash.com/random" alt="cover"
      class="w-full h-80 object-cover shadow-lg">

    <div class="profile-wrapper">
      <div class="bg-white p-2 w-56 rounded-full shadow-lg">
        <img src="/fajar.jpg" alt="photo" class="w-full rounded-full">
      </div>
    </div>

    <div class="text-center mt-40 mb-20 mx-auto container">
      <div class="text-3xl mb-4">Hi, name is Fajar Apriansyah</div>
      <div class="text-xl mb-8">A full-time front-end web developer currently working at a small company called <a href="https://ordent.co" class="font-bold hover:underline">Ordent</a>, a digital web company that bring user ideas to life. 4+ years in web developing experience, with 3+ years in <a href="https://vuejs.org" class="hover:underline">Vue.js</a> mastery. Figma and VS Code are my best friend, to turn client requirements into web-components.</div>
      <div class="text-xl">If you have any questions, please contact me <a href="mailto:apriansyah.fajar94@gmail.com" class="underline">here</a>.</div>
    </div>

    <div class="absolute bottom-4 w-full flex justify-center">
      <button @click="actionScroll">
        <MouseScroll class="cursor-pointer" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    init() {
      this.$el.addEventListener('scroll', this.handleScroll)
    },
    actionScroll() {
      window.scrollTo({top: this.$el.clientHeight,behavior: 'smooth'})
    },
  }
}
</script>

<style lang="scss" scoped>

.profile-wrapper {
  @apply absolute w-full flex items-center justify-center;
  top: 200px;
}
</style>