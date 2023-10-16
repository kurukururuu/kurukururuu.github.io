<template>
  <div>
    <Hero />
    <section id="projects" class="py-20 container mx-auto mobile:py-10 flex flex-col gap-4">
      <!-- <ProjectRecent :data="recentProjects" class="mb-20" /> -->
      <div class="text-4xl dark:text-green-500 font-semibold text-opacity-80 dark:text-opacity-100 mobile:text-2xl uppercase">Projects</div>
      <div class="text-lg">Chosen list from my working projects.</div>
      <ProjectList :data="projects" />
      <NuxtLink to="/projects" class="self-center px-8 py-2 border-2 border-transparent hover:border-gray-500 rounded-lg transition-all duration-200 animate-bounce">See More</NuxtLink>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    // const recentProjects = await $content('projects').sortBy('start', 'desc').limit(3).fetch()
    const projects = await $content('projects').sortBy('start', 'desc').limit(6).fetch()
    return { projects }
  },
}
</script>
