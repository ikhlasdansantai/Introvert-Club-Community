<template>
  <section id="join-with-us" class="grid md:grid-cols-2 mt-20">
    <div class="titles mt-20">
      <h2 class="font-bold text-2xl lg:text-3xl">Sudah siap untuk Bergabung bersama kami?</h2>
      <p class="mt-4">
        Bergabunglah dengan Kami sekarang dan jadilah bagian dari sesuatu yang lebih besar dari dunia Introvert. Di sini, kami membuka pintu untuk kegembiraan dan pertukaran wawasan dalam lingkungan yang mendukung dan tenang.
      </p>
      <p class="mt-4">Bersama-sama, kita merayakan setiap kemenangan, memberi inspirasi satu sama lain, dan mendorong mimpi-mimpi untuk terbang. Di sini, semangat bersatu, dan setiap perjalanan dimulai dengan Introvert Club!</p>
      <button
        type="button"
        class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Gabung Sekarang
      </button>
    </div>
    <figure>
      <img :src="MobileLoginIMG" :alt="MobileLoginIMG" />
    </figure>
  </section>
</template>

<script setup>
import MobileLoginIMG from "../../assets/Mobile-Login.svg";
</script>
