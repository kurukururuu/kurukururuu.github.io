<template>
  <section id="about" class="relative mb-20 mobile:mb-10">
    <img src="https://source.unsplash.com/random" alt="cover"
      class="w-full h-80 object-cover shadow-lg mobile:h-60">

    <div class="profile-wrapper">
      <div class="bg-white p-2 w-56 rounded-full shadow-lg mobile:w-40">
        <img src="/fajar.jpg" alt="photo" class="w-full rounded-full">
      </div>
    </div>

    <div class="text-center mt-40 mb-20 mobile:mb-10 mx-auto container">
      <div class="text-3xl mb-4 mobile:text-xxl">Hi, name is<br class="desktop:hidden" /> Fajar Apriansyah</div>
      <div class="text-xl mb-8 mobile:text-sm">A full-time software engineer currently working at <a href="https://photon.com" class="font-bold hover:underline">Photon Interactive Indonesia</a>. 4+ years in web developing experience, with 3+ years in <a href="https://vuejs.org" class="hover:underline">Vue.js</a> mastery. Figma and VS Code are my best friend, to turn client requirements into web-components.</div>
      <div class="text-xl mobile:text-sm">If you have any questions, please contact me <a href="mailto:apriansyah.fajar94@gmail.com" class="underline">here</a>.</div>
    </div>

    <!-- <div class="absolute bottom-4 w-full flex justify-center">
      <button @click="actionScroll">
        <MouseScroll class="cursor-pointer" />
      </button>
    </div> -->
  </section>
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

  @media (max-width: 768px) {
    top: 160px;
  }
}
</style>