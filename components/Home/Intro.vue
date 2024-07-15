<template>
  <div class="space-y-6">
    <img
      src="/avatar/fajar.png"
      alt="Fajar Apriansyah"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px"
      placeholder
      format="webp"
    />
    <h1
      class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100"
    >
      Hello! <br/>Name is Fajar Apriansyah <small>(or Fajar Apri)</small>
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      A full-time software engineer. 8+ years in web developing experience, with
      3+ years in
      <AppTypography as="span" color="pink"
        ><a href="https://vuejs.org" target="_blank" class="hover:underline"
          >VueJS</a
        ></AppTypography
      >
      and 3+ years in
      <AppTypography as="span" color="pink"
        ><a href="https://react.dev" target="_blank" class="hover:underline"
          >ReactJS</a
        ></AppTypography
      >. Figma and VS Code are my best friend, to turn client requirements into
      web-components.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      By day, I'm a Software Engineer at
      <AppTypography as="span" color="brown"
        ><a
          href="https://www.photon.com/homepage"
          target="_blank"
          class="underline"
          >Photon Interactive Indonesia</a
        ></AppTypography
      >, and by night (and weekends), I'm either going for an adventure with my
      gaming friends or working on my personal projects, code or music-related.
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Fajar Apriansyah",
  description:
    "A full-time software engineer. 6+ years in web developing experience, with 3+ years in Vue.js mastery and 2+years in React.js. Figma and VS Code are my best friend, to turn client requirements into web-components.",
});
</script>
