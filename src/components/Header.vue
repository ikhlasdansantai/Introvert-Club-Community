<script>
import HeaderIMG from "../assets/HeaderIMG.jpg";
export default {
  data() {
    return {
      img: HeaderIMG,
      title: "Jelajahi Dunia Introvert Bersama Kami",
    };
  },
};
</script>

<template>
  <header id="header" class="max-w-7xl mx-auto">
    <div class="header-contents grid sm:grid-cols-2 justify-between items-center space-x-10 space-y-12 py-20 border-red-800">
      <div class="header-title text-left">
        <h2 class="text-2xl sm:text-3xl md:leading-normal md:text-4xl lg:text-[52px] max-w-[20ch] font-bold">{{ title }}</h2>
        <p class="mt-2">Selamat datang di Komunitas Introvert, tempat di mana Kamu dapat menemukan kenyamanan dalam keheningan bersama kami di seluruh indonesia.</p>
      </div>
      <figure class="border-3 border-black">
        <img :src="img" alt="HeaderIMG" />
      </figure>
    </div>
  </header>
</template>
