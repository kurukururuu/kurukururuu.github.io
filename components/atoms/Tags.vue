<template>
  <div
    class="cursor-pointer text-xs bg-white text-gray-main rounded-3xl px-2 py-1"
    @click="$emit('click')"
  >
    #{{ title }}
  </div>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    title: {
      type: String,
      default() {
        return ''
      },
    },
  },
}
</script>
