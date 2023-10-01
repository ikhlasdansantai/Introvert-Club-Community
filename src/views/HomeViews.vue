<template>
  <main class="p-4 max-w-7xl mx-auto">
    <Header />
    <IntrovertDefinition />
    <collaborationVue />
    <JoinWithUs />
  </main>
  <Footer />
</template>

<script setup>
import Header from "../components/Header.vue";
import IntrovertDefinition from "../components/section/IntrovertDefinition.vue";
import collaborationVue from "../components/section/collaboration.vue";
import JoinWithUs from "../components/section/JoinWithUs.vue";
import Footer from "../components/Footer.vue";
</script>
