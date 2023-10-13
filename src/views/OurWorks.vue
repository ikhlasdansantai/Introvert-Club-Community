<template>
  <div class="md:pt-20 max-w-[97rem]">
    <div class="websites md:mt-10">
      <h2 class="font-semibold text-xl md:mt-20">Karya Website</h2>
      <div class="websites-contents grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        <div class="our-works-card" v-for="(websiteData, index) in websites" :key="index">
          <ourWorksCard :title="websiteData.title" :imgContent="websiteData.imgContent" :imgAuthor="websiteData.imgAuthor" :authorName="websiteData.authorName" :iconType="websiteData.icon" :linkPath="websiteData.link" />
        </div>
      </div>
    </div>
    <div class="instagram mt-20">
      <h2 class="font-semibold text-xl mt-10 md:mt-20">Karya Instagram</h2>
      <div class="websites-contents grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        <div class="our-works-card" v-for="(instagramData, index) in instagram" :key="index">
          <ourWorksCard :title="instagramData.title" :imgContent="instagramData.imgContent" :imgAuthor="instagramData.imgAuthor" :authorName="instagramData.authorName" :iconType="instagramData.icon" :linkPath="instagramData.link" />
        </div>
      </div>
    </div>
    <div class="instagram mt-20">
      <h2 class="font-semibold text-xl mt-10 md:mt-20">Karya Musik Video</h2>
      <div class="websites-contents grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        <div class="our-works-card" v-for="(youtubeData, index) in youtube" :key="index">
          <ourWorksCard :title="youtubeData.title" :imgContent="youtubeData.imgContent" :imgAuthor="youtubeData.imgAuthor" :authorName="youtubeData.authorName" :iconType="youtubeData.icon" :linkPath="youtubeData.link" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DIWebsite from "../assets/our-works-images/Website/DIWeb.png";
import RenzAura from "../assets/our-works-images/Website/RenzAuraWeb.png";
import RenzMakeup from "../assets/our-works-images/Website/RenzMakeup.png";
import imgAuthor from "../assets/Ayang.jpg";
import MyProgressIG from "../assets/our-works-images/Instagram/MyProgress.png";
import RenzAuraIG from "../assets/our-works-images/Instagram/RenzAura.png";

import cmjtvYT from "../assets/our-works-images/VideoYT/cmjtv.png";
import cmjtvAuthor from "../assets/author/cmjtv.jpeg";

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
          link: "https://introvert-club.vercel.app/",
        },
        {
          imgContent: RenzAura,
          imgAuthor: imgAuthor,
          title: "RenzAura Website",
          authorName: "Ikhlasdansantai",
          icon: "iconoir:globe",
          link: "https://renz-aura.vercel.app/",
        },
        {
          imgContent: RenzMakeup,
          imgAuthor: imgAuthor,
          title: "RenzMakeup Website",
          authorName: "Ikhlasdansantai",
          icon: "iconoir:globe",
          link: "https://ikhlasdansantai.github.io/renz-makeup/",
        },
      ],
      instagram: [
        {
          imgContent: MyProgressIG,
          imgAuthor: imgAuthor,
          title: "Learning Recap",
          authorName: "Ikhlasdansantai",
          icon: "mdi:instagram",
          link: "https://www.instagram.com/myprogress.ik/",
        },
        {
          imgContent: RenzAuraIG,
          imgAuthor: imgAuthor,
          title: "Renz Aura",
          authorName: "Ikhlasdansantai",
          icon: "mdi:instagram",
          link: "https://www.instagram.com/renz_aura/",
        },
      ],
      youtube: [
        {
          imgContent: cmjtvYT,
          imgAuthor: cmjtvAuthor,
          title: "Asep Aziz - Untuk Sejenak",
          authorName: "Asep Aziz",
          icon: "mdi:youtube",
          link: "https://www.youtube.com/watch?v=QQXzEkuHyns",
        },
      ],
    };
  },
};
</script>
