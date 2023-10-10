<template>
  <section id="Intovert-Definition">
    <h2 class="h2-heading" data-aos="fade-left" data-aos-duration="2000">Kenali apa itu introvert</h2>
    <div class="cards-container grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-10 mt-4">
      <div v-for="(cardData, index) of cardDatas" :key="index" class="Introvert-Definition-Card" data-aos="fade-up" data-aos-duration="2000">
        <IntrovertDefinitionCard :title="cardData.title" :desc="cardData.desc" :img="cardData.img" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
onMounted(() => {
  AOS.init();
});
</script>
<script>
import StaryWindowIMG from "../../assets/card-1.png";
import ConversationIMG from "../../assets/Conversation.png";
import TirednessIMG from "../../assets/card-3.png";
import IntrovertDefinitionCard from "../IntrovertDefinitionCard.vue";
export default {
  components: { IntrovertDefinitionCard },
  data() {
    return {
      cardDatas: [
        {
          title: "Keheningan Adalah Syurga",
          desc: "Introvert cenderung lebih suka waktu untuk diri sendiri atau dalam lingkungan yang tenang. Mereka merasa nyaman dengan keheningan dan kesendirian.",
          img: StaryWindowIMG,
        },
        {
          title: "Pendengar Yang Baik",
          desc: "introvert sering sekali dianggap sebagai pendengar yang baik, karena mereka lebih cenderung sering mendengarkan dengan saksama dalam sebuah percakapan.",
          img: ConversationIMG,
        },
        {
          title: "Cara Cas Energi Mereka",
          desc: "Introvert mendapatkan energi dari waktu yang dihabiskan sendirian atau dalam kelompok kecil. Seringkali, interaksi sosial yang berlebihan dapat membuat mereka merasa kelelahan atau terkuras..",
          img: TirednessIMG,
        },
      ],
    };
  },
};
</script>
