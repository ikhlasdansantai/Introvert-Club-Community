<template>
  <figure class="rounded-xl overflow-hidden relative z-0 cursor-pointer group">
    <img :src="imgContent" alt="DI Website" loading="lazy" />
    <div class="absolute bottom-0 left-0 right-0 py-8 px-8 bg-[#0d0c22] bg-opacity-70 translate-y-20 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
      <h2 class="text-xl text-white">{{ title }}</h2>
    </div>
  </figure>
  <div class="author flex items-center mt-4 gap-3">
    <figure class="w-10 sm:w-12 rounded-full overflow-hidden border-2 border-slate-500">
      <img :src="imgAuthor" alt="author IMG" />
    </figure>
    <h4 class="font-medium sm:text-lg">{{ authorName }}</h4>
  </div>
</template>

<script setup>
defineProps({
  imgContent: "string",
  imgAuthor: "string",
  title: "string",
  authorName: "string",
});
</script>
