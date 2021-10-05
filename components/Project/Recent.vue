<template>
  <div>
    <div class="text-3xl font-semibold text-opacity-80">Recent work:</div>
    <div class="grid grid-cols-3 gap-4">
      <template v-for="item,i in data">
        <ProjectItem :key="i" mode="grid" :data="item" class="h-full" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>