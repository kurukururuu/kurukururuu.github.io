<template>
  <div>
    <div class="text-3xl font-semibold text-opacity-80 mb-8 mobile:text-2xl">
      Most Recent / Ongoing works
    </div>
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
