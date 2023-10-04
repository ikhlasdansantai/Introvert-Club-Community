<template>
  <div id="not-dound" class="h-screen flex flex-col justify-center items-center">
    <figure class="w-[30rem]">
      <img :src="notFoundIcon" alt="notfound icon" />
    </figure>
    <RouterLink to="/" class="-mt-8 ml-4 btn-prm">Kembali Ke Beranda</RouterLink>
  </div>
</template>

<script setup>
import notFoundIcon from "../assets/not-found.svg";
</script>
