<template>
  <div class="relative">
    <div class="border rounded-lg w-full p-4 my-4" :class="list ? 'text-justify': 'text-center'">
      <img :src="data.img" alt="cover" class="h-40 mb-4 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105" :class="{'mx-auto':!list}" @click="zoom = true">
      <a :href="data.url" target="_blank" class="text-xl font-semibold clipped clip-2 h-16">{{data.title}}</a>
      <div v-if="list" class="text-lg"> {{data.description}}</div>
      <div class="my-4">{{formatDate(data.start)}} - {{formatDate(data.end)}}</div>
      <div class="flex justify-end w-full">
        <a v-if="!list" :href="data.url" target="_blank" class="underline">See website &#8594;</a>
      </div>
    </div>

    <transition name="fade">
      <div v-if="zoom" class="zoom-wrapper fixed w-full h-full top-0 left-0 bg-black bg-opacity-75 z-20">
        <div class="relative p-16">
          <img :src="data.img" alt="image" class="w-full h-full object-contain">
          <div class="absolute right-4 top-4 cursor-pointer text-xl" @click="zoom = false">&#10006;</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import formatDate from '~/assets/js/formatDate' 

export default {
  props: {
    mode: {
      type: String,
      default() {
        return 'list'
      }
    },
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      formatDate,
      zoom: false
    }
  },
  computed: {
    list() {
      return this.mode === 'list'
    }
  }
}
</script>

<style lang="scss" scoped>
.zoom-wrapper {
  @apply transition-all duration-300 ease-in-out;
}

.fade-enter-active, .fade-leave-active {
  @apply max-w-screen-2xl max-h-screen;
  // transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  // opacity: 0;
  @apply max-w-0 max-h-0;
}
</style>