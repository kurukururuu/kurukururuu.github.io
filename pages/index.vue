<template>
  <div>
    <HeroImage />
    <section id="projects" class="py-20 container mx-auto mobile:py-10">
      <!-- <ProjectRecent :data="recentProjects" class="mb-20" /> -->
      <div class="text-4xl dark:text-green-500 font-semibold text-opacity-80 dark:text-opacity-100 mb-4 mobile:text-2xl uppercase">Projects</div>
      <div class="text-lg mb-4">Chosen list from my working projects.</div>
      <ProjectList :data="projects" />
      <NuxtLink to="/projects" class="mt-4 right-0 float-right">and many more...</NuxtLink>
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