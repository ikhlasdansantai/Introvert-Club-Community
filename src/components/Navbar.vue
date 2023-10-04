<script setup>
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from "flowbite-vue";
</script>

<template>
  <header id="header" class="fixed left-0 right-0 w-full px-4 z-50 bg-white">
    <Navbar id="nav" class="p-4 max-w-7xl mx-auto">
      <template #logo>
        <RouterLink to="/" class="font-semibold text-lg">Introvert Club</RouterLink>
      </template>
      <template #default="{ isShowMenu }">
        <NavbarCollapse :isShowMenu="isShowMenu" class="text-[#646cff]">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/karya-kami" class="my-4 md:m-0">Karya Kami</RouterLink>
          <RouterLink to="/tentang-kami">Tentang Kami</RouterLink>
        </NavbarCollapse>
      </template>
    </Navbar>
  </header>
</template>
