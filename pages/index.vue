<template>
  <div>
    <HeroImage />
    <div class="py-20 container mx-auto">
      
      <ProjectRecent :data="recentProjects" class="mb-8" />
      <ProjectList :data="projects" />
      <!-- Place this tag where you want the button to render. -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const recentProjects = await $content('projects').sortBy('start', 'desc').limit(3).fetch()
    const projects = await $content('projects').sortBy('start', 'desc').skip(3).fetch()
    return { recentProjects, projects }
  }
}
</script>