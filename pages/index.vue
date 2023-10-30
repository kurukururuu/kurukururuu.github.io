<template>
  <div class="flex flex-col gap-20 mobile:gap-10">
    <Hero />
    <section id="projects" class="container mx-auto flex flex-col gap-4">
      <Typography
        as="h3"
        color="green"
        class="text-4xl font-semibold text-opacity-80 dark:text-opacity-100 mobile:text-2xl uppercase"
        >Projects</Typography
      >
      <Typography as="h4" class="text-lg"
        >Chosen list from my working projects.</Typography
      >
      <ProjectList :data="projects" />
      <NuxtLink
        to="/projects"
        class="self-center px-8 py-2 border-2 border-transparent hover:border-gray-500 rounded-lg transition-all duration-200 animate-bounce"
        ><Typography>See More</Typography></NuxtLink
      >
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const projects = await $content('projects')
      .sortBy('start', 'desc')
      .limit(6)
      .fetch()
    return { projects }
  },
}
</script>
