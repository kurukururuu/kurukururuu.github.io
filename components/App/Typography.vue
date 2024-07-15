<template>
  <component :is="as" :class="[colorClass, cssClass]">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'Typography',
  props: {
    as: {
      type: String,
      default: 'p',
    },
    color: {
      type: String,
      default: 'gray',
    },
    cssClass: {
      type: String,
      default: '',
    },
  },
  computed: {
    colorClass() {
      switch (this.color) {
        case 'brown':
          return 'text-yellow-600 dark:text-yellow-500'
        case 'green':
          return `text-green-600 dark:text-green-500`
        case 'pink':
          return `text-pink-600 dark:text-pink-500`
        default:
          return 'dark:text-gray-300'
      }
    },
  },
}
</script>
