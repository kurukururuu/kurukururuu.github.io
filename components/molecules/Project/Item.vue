<template>
  <div class="relative p-2 text-gray-300 bg-dark-secondary rounded-xl">
    <!-- <div class="border rounded-lg w-full p-4 my-4" :class="list ? 'text-justify': 'text-center'"> -->
      <!-- <img :src="data.img" alt="cover" class="h-40 mb-4 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105" :class="{'mx-auto':!list}" @click="zoom = true"> -->
    <div class="wrapper"
      :style="`background-image:url(${data.img})`">
      <div class="overlay"></div>
      <a :href="data.url" target="_blank" class="text-xl font-semibold clipped clip-2 h-16 mb-4">{{data.title}}</a>
      <div class="details">
        <div>
          <div class="description clipped clip-5 text-sm">{{data.description}}</div>
          <div class="my-4 text-xs">{{formatDate(data.start)}} - {{formatDate(data.end)}}</div>
        </div>
        <div class="flex justify-end w-full text-sm">
          <a v-if="!list" :href="data.url" target="_blank" class="underline font-semibold">See website &#8594;</a>
        </div>
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
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  @apply max-w-0 max-h-0;
}

.wrapper {
  @apply h-80 bg-no-repeat rounded-xl bg-cover p-4 mobile:h-60;
  @apply flex flex-col;
  .overlay {
    @apply transition-all duration-300 ease-in-out;
    @apply bg-gradient-to-b to-transparent absolute top-0 left-0 w-full h-full rounded-xl;

    // this is extended theme color: from-black-opa-50
    // but somehow apply doesn't work for extended theme, but plugin does
    --tw-gradient-from: #0008;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 0, 0, 0));
  }
  &:hover {
    .overlay {
      // @apply bg-black-opa-50; // same case
      background-color: #0008;
    }

    .details {
      @apply max-h-96 flex-1 flex flex-col justify-between;
    }
  }

  .details {
    @apply max-h-0;
    @apply transition-all duration-300 ease-in-out;
    @apply text-lg overflow-hidden relative;

    .description {
      @media (max-width: 768px) {
        -webkit-line-clamp: 3;
		    max-height : calc(1em * 1.5 * 3);
      }
    }
  }
}
</style>