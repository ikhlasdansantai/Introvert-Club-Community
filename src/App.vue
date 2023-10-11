<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="container-all overflow-hidden">
    <Navbar />
    <RouterView class="py-20 px-4 mx-auto" />
  </div>
</template>
