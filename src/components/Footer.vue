<template>
  <Footer footer-type="socialmedia" class="max-w-7xl mx-auto">
    <div class="md:flex md:justify-between">
      <FooterBrand href="https://flowbite.com" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" name="Flowbite" />
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
          <FooterLinkGroup class="flex flex-col items-start">
            <FooterLink class="mb-4" href="/">Freepik</FooterLink>
            <FooterLink class="mb-4" href="/">Flowbite</FooterLink>
            <FooterLink class="mb-4" href="/">LottieFiles</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>
          <FooterLinkGroup class="flex flex-col items-start">
            <FooterLink class="mb-4" href="/">Facebook</FooterLink>
            <FooterLink class="mb-4" href="/">Discord Server</FooterLink>
            <FooterLink class="mb-4" href="/">Telegram</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
          <FooterLinkGroup class="flex flex-col items-start">
            <FooterLink class="mb-4" href="/">Privacy Policy</FooterLink>
            <FooterLink class="mb-4" href="/">Terms & Conditions</FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterCopyright href="/" by="Introvert Club™" />
    </div>
  </Footer>
</template>

<script setup>
import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from "flowbite-vue";
</script>
