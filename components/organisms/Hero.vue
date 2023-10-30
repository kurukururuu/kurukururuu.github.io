<template>
  <section id="about" class="relative">
    <img
      src="https://source.unsplash.com/random"
      alt="cover"
      class="w-full h-80 object-cover shadow-lg mobile:h-60"
    />

    <div class="profile-wrapper">
      <div class="bg-white p-2 w-56 rounded-full shadow-lg mobile:w-40">
        <img src="/fajar.jpg" alt="photo" class="w-full rounded-full" />
      </div>
    </div>

    <div class="text-center mt-40 mb-20 mobile:mb-10 mx-auto container">
      <Typography class="text-3xl mb-4 mobile:text-xxl"
        >Hi, name is<br class="desktop:hidden" />
        Fajar Apriansyah</Typography
      >
      <Typography class="text-xl mb-8 mobile:text-sm"
        >A full-time software engineer currently working at
        <Typography as="span" color="brown"
          ><a
            href="https://photon.com"
            target="_blank"
            class="font-bold hover:underline"
            >Photon Interactive Indonesia</a
          ></Typography
        >. 6+ years in web developing experience, with 3+ years in
        <Typography as="span" color="pink"
          ><a href="https://vuejs.org" target="_blank" class="hover:underline"
            >Vue.js</a
          ></Typography
        >
        mastery and 2+years in
        <Typography as="span" color="pink"
          ><a href="https://react.dev" target="_blank" class="hover:underline"
            >React.js</a
          ></Typography
        >. Figma and VS Code are my best friend, to turn client requirements
        into web-components.</Typography
      >
      <Typography class="text-xl mobile:text-sm"
        >For questions & opportunities, please contact me
        <a
          href="mailto:apriansyah.fajar94@gmail.com"
          target="_blank"
          class="underline hover:text-green-500"
          >here</a
        >.</Typography
      >
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    init() {
      this.$el.addEventListener('scroll', this.handleScroll)
    },
    actionScroll() {
      window.scrollTo({ top: this.$el.clientHeight, behavior: 'smooth' })
    },
  },
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
