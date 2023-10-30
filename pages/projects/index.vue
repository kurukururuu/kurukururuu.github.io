<template>
  <section id="projects" class="container mx-auto py-20 gap-4 flex flex-col">
    <Typography
      as="h3"
      color="green"
      class="text-4xl font-semibold text-opacity-80 dark:text-opacity-100 mobile:text-2xl uppercase"
    >
      Projects
    </Typography>
    <template v-if="tags">
      <div>
        <span v-show="tags.length > 0" class="text-gray-500"
          >Filter by tags:
        </span>
        <template v-for="(tag, index) in tags">
          <Typography :key="index" as="span" color="green"
            >"{{ tag }}"<span v-if="index < tags.length - 1"
              >,
            </span></Typography
          >
        </template>
      </div>
    </template>
    <div
      :class="
        [
          'transition-opacity duration-500 ease-in-out',
          loading ? 'opacity-0' : 'opacity-100',
        ].join(' ')
      "
    >
      <ProjectList :data="projects" />
    </div>
  </section>
</template>

<script>
export default {
  layout: 'single',
  async asyncData({ $content, route }) {
    const tags =
      route.query.tags?.split(',').map((tag) => {
        return tag.toLowerCase().replace(/[^a-z0-9]/g, '')
      }) || []
    const projects = await $content('projects')
      .where(tags.length > 0 ? { tags: { $contains: tags } } : {})
      .sortBy('start', 'desc')
      .fetch()
    return { projects }
  },
  data() {
    return {
      projects: [],
      loading: false,
    }
  },
  computed: {
    query() {
      return this.$route.query
    },
    tags() {
      return (
        this.query.tags?.split(',').map((tag) => {
          return tag.toLowerCase().replace(/[^a-z0-9]/g, '')
        }) || []
      )
    },
  },
  watch: {
    '$route.query.tags'() {
      this.loading = true
      setTimeout(async () => {
        this.projects = await this.$content('projects')
          .where(this.tags.length > 0 ? { tags: { $contains: this.tags } } : {})
          .sortBy('start', 'desc')
          .fetch()
        this.loading = false
      }, 1000)
    },
  },
}
</script>
