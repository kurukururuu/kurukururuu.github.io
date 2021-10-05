<template>
  <div>
    <div class="text-3xl font-semibold text-opacity-80 mb-4">More work:</div>
    <ul class="list-disc list-inside">
      <template v-for="item,i in data">
        <li :key="i"><a :href="item.url" class="text-xl hover:underline">{{ item.title }}</a></li>
      </template>
    </ul>
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