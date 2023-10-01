<template>
  <figure>
    <img :src="img" alt="StaryWindowIMG" />
  </figure>
  <h3 class="font-semibold mt-4 text-xl">{{ title }}</h3>
  <p class="mt-3">{{ desc }}</p>
</template>

<script setup>
defineProps({
  title: String,
  desc: String,
  img: String,
});
</script>

<style></style>
