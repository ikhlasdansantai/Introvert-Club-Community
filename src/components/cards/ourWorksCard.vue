<template>
  <figure class="rounded-xl overflow-hidden relative z-0 cursor-pointer group">
    <img :src="imgContent" alt="DI Website" loading="lazy" />
    <div class="project-details">
      <h2 class="text-xl text-white">{{ title }}</h2>
      <Icon :icon="iconType" class="text-white text-4xl" />
    </div>
  </figure>
  <div class="author flex items-center mt-4 gap-3">
    <figure class="w-10 sm:w-12 rounded-full overflow-hidden border-2 border-slate-500">
      <img :src="imgAuthor" alt="author IMG" loading="lazy" />
    </figure>
    <h4 class="font-medium sm:text-lg">{{ authorName }}</h4>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
defineProps({
  imgContent: "string",
  imgAuthor: "string",
  title: "string",
  authorName: "string",
  iconType: "string",
});
</script>
