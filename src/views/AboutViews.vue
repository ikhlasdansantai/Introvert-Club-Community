<template>
  <div id="about" class="max-w-3xl">
    <div class="main-about">
      <secition id="awal">
        <h2 class="font-bold text-2xl">Apa yang kami lakukan?</h2>
        <p class="mt-2">
          Kami terinspirasi dari sebuah komentar yang di posting 3 tahun yang lalu di grup facebook bernama <b>DIARY INTROVERT</b>, komentar tersebut memunculkan sebuah ide, bagaimana jika ada sebuah komunitas dengan wadah yang luas untuk
          bisa saling berkolaborasi 🤔
        </p>
        <figure class="border mt-4">
          <img :src="inspirationIMG" alt="" class="max-w-full block" />
        </figure>
        <p class="mt-4">Dari sinilah kami mulai mewujudkan idenya dengan membuat website ini, yang menjadi tempat <i>"Promosi"</i> dan perkenalan diri kami.</p>
      </secition>

      <figure class="mb-10 mt-4 bg-red-50">
        <img :src="catGIF" alt="cat icon" class="mx-auto" />
      </figure>

      <section id="bakat" class="mt-40">
        <h2 class="font-bold text-2xl">Menunjukan bakat emas mu</h2>
        <p class="mt-2">
          Ada juga salah satu postingan, dimana dia sangat berbakat dalam bidang menggambar, mungkin di grup itu juga banyak orang berbakat seperti dia, yang mungkin saja <i>Malu</i> untuk menunjukannya, sehingga dia gak PD untuk itu.
        </p>
        <figure class="my-4">
          <img :src="inspiration2IMG" alt="inspirationIMG" />
        </figure>
        <p>Sehingga sekarang kami mencoba untuk membuat komunitas lebih luas lewat layanan bernama <b>Discord</b>, yang harapannya adalah bisa meraih dan mengajak lebih banyak orang untuk bergabung dengan komunitas kami.</p>
      </section>

      <section id="goals" class="mt-40">
        <h2 class="font-bold text-2xl">Harapan Dan Rencana</h2>
        <p>Selain membangun komunitas baru, tentu ada beberapa harapan dan rencana kami untuk ini, meliputi</p>
        <ul class="list-disc px-8 mt-4">
          <li>Kamu akan bertemu dengan orang-orang yang memiliki minat dan tujuan yang sama denganmu</li>
          <li>Kamu akan dapat membangun jaringan dengan orang-orang yang dapat membantumu dalam pengembangan diri</li>
          <li>Kamu akan dapat bekerja sama dengan orang-orang yang memiliki keterampilan dan bakat yang berbeda darimu</li>
          <li>Kamu akan dapat bersosialisasi dan menjalin hubungan dengan anggota komunitas lainnya</li>
          <li>Kamu bisa berkolaborasi dengan teman sebakat untuk membuat projek / karya baru</li>
          <li>Meningkatkan keterlibatan anggota komunitas melalui kegiatan dan acara yang menarik</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
import inspirationIMG from "../assets/inspiration.png";
import inspiration2IMG from "../assets/inspiration-2.png";
import catGIF from "../assets/GIF/cat.gif";
</script>
