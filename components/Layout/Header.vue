<template>
  <div class="relative overflow-visible mb-20 shadow-lg">
    <img src="https://source.unsplash.com/random" alt="cover"
      class="w-full h-80 object-cover">

    <div class="profile-wrapper">
      <div class="bg-white p-2 w-56 rounded-full shadow-lg">
        <img src="/fajar.jpg" alt="photo" class="w-full rounded-full">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile-wrapper {
  @apply absolute w-full h-full flex items-center justify-center;
  top: 160px;
  z-index: 1;
}
</style>