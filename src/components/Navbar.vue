<script setup>
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from "flowbite-vue";
</script>

<template>
  <nav id="nav" class="fixed left-0 right-0 w-full px-4 z-50">
    <Navbar>
      <template #logo>
        <h2 class="font-semibold text-lg">Introvert Club</h2>
      </template>
      <template #default="{ isShowMenu }">
        <NavbarCollapse :isShowMenu="isShowMenu">
          <RouterLink to="/">Home</RouterLink>
          <!-- Soon -->
          <!-- <NavbarLink link="#">Tim Web Kami</NavbarLink> -->
          <RouterLink to="/karya-kami" class="my-4 md:m-0">Karya Kami</RouterLink>
          <RouterLink to="/tentang-kami">Tentang Kami</RouterLink>
        </NavbarCollapse>
      </template>
    </Navbar>
  </nav>
</template>
