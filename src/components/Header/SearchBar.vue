<template>
  <div class="hidden md:block relative">
    <Icon
      class="absolute left-3 top-1/ translate-y-1/2"
      icon="f7:search"
      width="24"
      height="24"
      style="color: #00000066"
    />
    <input
      class="md:min-w-[557px] h-12 focus:border-blue-100 text-black rounded-full px-11 bg-browser placeholder:font-normal placeholder:text-sm placeholder:text-black/40"
      type="search"
      placeholder="Search for products..."
    />
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue/dist/iconify.js";
</script>



<!--   text - 48px  5xl -->