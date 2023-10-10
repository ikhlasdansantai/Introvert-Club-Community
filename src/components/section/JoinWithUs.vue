<template>
  <section id="join-with-us" class="grid md:grid-cols-2 mt-20">
    <div class="titles lg:mt-20">
      <h2 class="h2-heading lg:text-3xl" data-aos="fade-left" data-aos-duration="1300">Sudah siap untuk Bergabung bersama kami?</h2>
      <p class="mt-4" data-aos="fade-left" data-aos-duration="1500">
        Bergabunglah dengan Kami sekarang dan jadilah bagian dari sesuatu yang lebih besar dari dunia Introvert. Di sini, kami membuka pintu untuk kegembiraan dan pertukaran wawasan dalam lingkungan yang mendukung dan tenang.
      </p>
      <p class="mt-4" data-aos="fade-left" data-aos-duration="1700">
        Bersama-sama, kita merayakan setiap kemenangan, memberi inspirasi satu sama lain, dan mendorong mimpi-mimpi untuk terbang. Di sini, semangat bersatu, dan setiap perjalanan dimulai dengan Introvert Club!
      </p>
      <button type="button" class="btn-prm mt-4" data-aos="fade-left" data-aos-duration="1900">Gabung Sekarang</button>
    </div>
    <figure data-aos="fade-left" data-aos-duration="2100">
      <img :src="MobileLoginIMG" :alt="MobileLoginIMG" />
    </figure>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import MobileLoginIMG from "../../assets/Mobile-Login.svg";
onMounted(() => {
  AOS.init();
});
</script>
