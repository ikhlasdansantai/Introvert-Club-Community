<template>
  <section id="collaboration" class="mt-40">
    <h2 class="h2-heading" data-aos="fade-left" data-aos-duration="1500">Mari Berkolaborasi</h2>
    <div class="collaboration-images grid sm:grid-cols-2 lg:grid-cols-3 mt-4">
      <figure v-for="(image, index) in images" :key="index" data-aos="fade-left" data-aos-duration="1500">
        <img :src="image" :alt="image" />
      </figure>
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
import image1 from "../../assets/collaboration-images/image-1.png";
import image2 from "../../assets/collaboration-images/image-2.png";
import image3 from "../../assets/collaboration-images/image-3.png";
import image4 from "../../assets/collaboration-images/image-4.png";
import image5 from "../../assets/collaboration-images/image-5.png";
import image6 from "../../assets/collaboration-images/image-6.png";
export default {
  data() {
    return {
      images: [image1, image2, image3, image4, image5, image6],
    };
  },
};
</script>
