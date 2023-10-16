<template>
  <div class="col-span-1 mobile:hidden bg-gray-100 dark:bg-dark-tertiary dark:bg-opacity-100">
    <div class="border-opacity-50 h-screen flex flex-col justify-center">
      <ul class="sections">
        <li id="about" @click="scrollToSection">
          <NuxtLink to="#about" replace>About</NuxtLink>
        </li>
        <li id="projects" @click="scrollToSection">
          <NuxtLink to="#projects" replace>Projects</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarComponent',
  methods: {
    scrollToSection(e) {
      this.$emit('scroll-to-section', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.activelink {
  @apply opacity-100 text-green-500 dark:text-green-400;
}
.sections {
  li {
    @apply py-2 flex justify-center items-center cursor-pointer;
    @apply border-gray-400 dark:border-gray-300 dark:border-opacity-25 ;

    span,
    a {
      @apply text-lg opacity-50;
      @apply transition-all ease-in-out duration-300;
    }

    &:hover {
      span {
        @apply opacity-100;
      }
    }

    // &.active {
    //   span {
    //     @apply activelink;
    //     // @apply opacity-100 text-green-500 dark:text-green-400;
    //   }
    // }

    a.nuxt-link-active {
      @apply activelink;
    }
  }
}
</style>
