<template>
  <div>
    <LayoutHeader />
    <div class="py-20 container mx-auto">
      <div class="text-center mb-20">
        <div class="text-3xl mb-4">Hi, name is Fajar Apriansyah</div>
        <div class="text-xl mb-8">A full-time front-end web developer currently working at a small company called <a href="https://ordent.co" class="font-bold hover:underline">Ordent</a>, a digital web company that bring user ideas to life. 4+ years in web developing experience, with 3+ years in <a href="https://vuejs.org" class="hover:underline">Vue.js</a> mastery. Figma and VS Code are my best friend, to turn client requirements into web-components.</div>
        <div class="text-xl">If you have any questions, please contact me <a href="mailto:apriansyah.fajar94@gmail.com" class="underline">here</a>.</div>
      </div>
      
      <ProjectRecent :data="recentProjects" class="mb-8" />
      <ProjectList :data="projects" />
      <!-- Place this tag where you want the button to render. -->
      <gh-btns-follow
        class="fixed bottom-8 right-8"
        user="kurukururuu"
      />
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