<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Projects" :description="description" />
    <div class="space-y-4">
      <AppProjectLink
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </main>
</template>

<script setup>
const description =
  "I’ve been in tons of projects and doing contributions over the years, but these are the ones that I’m most proud of being on to (and also the site is still online). Some are open-source, some are NOT because of company policy. But if you see something that get your attention, you could contact me for the development journey of related apps.";
useSeoMeta({
  title: "Projects | Fajar Apriansyah",
  description,
});

const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);
</script>
