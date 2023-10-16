<template>
  <section id="projects" class="container mx-auto py-20">
    <div class="text-4xl dark:text-green-500 font-semibold text-opacity-80 dark:text-opacity-100 mb-4 mobile:text-2xl uppercase">Projects</div>
    <ProjectList :data="projects" />
  </section>
</template>

<script>
export default {
  layout: 'single',
  async asyncData({ $content, params }) {
    // const recentProjects = await $content('projects').sortBy('start', 'desc').limit(3).fetch()
    const projects = await $content('projects').sortBy('start', 'desc').fetch()
    return { projects }
  },
}
</script>
