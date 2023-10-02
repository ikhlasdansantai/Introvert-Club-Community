<template>
  <div class="md:pt-20 max-w-[97rem]">
    <div class="websites md:mt-10">
      <h2 class="font-semibold text-xl md:mt-20">Karya Website</h2>
      <div class="websites-contents grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        <div class="our-works-card" v-for="(websiteData, index) in websites" :key="index">
          <ourWorksCard :title="websiteData.title" :imgContent="websiteData.imgContent" :imgAuthor="websiteData.imgAuthor" :authorName="websiteData.authorName" :iconType="websiteData.icon" />
        </div>
      </div>
    </div>
    <div class="instagram mt-20">
      <h2 class="font-semibold text-xl mt-10 md:mt-20">Karya Instagram</h2>
      <div class="websites-contents grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        <div class="our-works-card" v-for="(instagramData, index) in instagram" :key="index">
          <ourWorksCard :title="instagramData.title" :imgContent="instagramData.imgContent" :imgAuthor="instagramData.imgAuthor" :authorName="instagramData.authorName" :iconType="instagramData.icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DIWebsite from "../assets/our-works-images/Di-website.png";
import RenzAura from "../assets/our-works-images/RenzAura.png";
import RenzMakeup from "../assets/our-works-images/Website/RenzMakeup.png";
import imgAuthor from "../assets/Ayang.jpg";
import MyProgressIG from "../assets/our-works-images/Instagram/MyProgress.png";
import RenzAuraIG from "../assets/our-works-images/Instagram/RenzAura.png";
import ourWorksCard from "../components/cards/ourWorksCard.vue";

export default {
  components: { ourWorksCard },
  data() {
    return {
      websites: [
        {
          imgContent: DIWebsite,
          imgAuthor: imgAuthor,
          title: "Introvert Club Website",
          authorName: "Ikhlasdansantai",
          icon: "iconoir:globe",
          link: "",
        },
        {
          imgContent: RenzAura,
          imgAuthor: imgAuthor,
          title: "RenzAura Website",
          authorName: "Ikhlasdansantai",
          icon: "iconoir:globe",
          link: "",
        },
        {
          imgContent: RenzMakeup,
          imgAuthor: imgAuthor,
          title: "RenzMakeup Website",
          authorName: "Ikhlasdansantai",
          icon: "iconoir:globe",
          link: "",
        },
      ],
      instagram: [
        {
          imgContent: MyProgressIG,
          imgAuthor: imgAuthor,
          title: "Learning Recap",
          authorName: "Ikhlasdansantai",
          icon: "mdi:instagram",
          link: "",
        },
        {
          imgContent: RenzAuraIG,
          imgAuthor: imgAuthor,
          title: "Renz Aura",
          authorName: "Ikhlasdansantai",
          icon: "mdi:instagram",
          link: "",
        },
      ],
    };
  },
};
</script>
