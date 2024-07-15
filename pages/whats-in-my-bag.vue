<template>
  <main class="min-h-screen">
    <AppHeader
      class="mb-12"
      title="What's in my bag?"
      :description="description"
    />
    <div class="space-y-24">
      <ul class="space-y-8">
        <AppUsesHeader title="Hardware" />
        <AppUsesItem v-for="(item, id) in hardware" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="Software" />
        <AppUsesItem v-for="(item, id) in software" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="Desk" />
        <AppUsesItem v-for="(item, id) in desk" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="PC Setup" />
        <AppUsesItem v-for="(item, id) in pcSetup" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="Other" />
        <AppUsesItem v-for="(item, id) in other" :key="id" :item="item" />
      </ul>
    </div>
  </main>
</template>

<script setup>
const description =
  "Everything that I use to get my work done, from hardware to software, and everything in between. I also share my desk setup and other things that I use.";
useSeoMeta({
  title: "Things I use | Fajar Apriansyah",
  description,
});
const { data: items } = await useAsyncData("uses", () =>
  queryContent("/uses").find()
);
const hardware = items.value.filter((item) => item.category === "hardware");
const software = items.value.filter((item) => item.category === "software");
const desk = items.value.filter((item) => item.category === "desk");
const pcSetup = items.value.filter((item) => item.category === "pc-setup");
const other = items.value.filter((item) => item.category === "others");
</script>
