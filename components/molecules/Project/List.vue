<template>
  <div class="grid grid-cols-3 gap-10 mobile:flex mobile:flex-col">
    <template v-for="(item, i) in data">
      <ProjectItem
        :key="i"
        mode="grid"
        :data="item"
        class="h-full mobile:w-full mobile:mx-auto"
      />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
