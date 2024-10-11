<template>
  <div
    class="md:flex hidden md:justify-between items-center justify-center md:w-[321px] h-5"
  >
    <RouterLink to="#" class="flex items-center text-sm font-links">
      Shop
      <Icon
        icon="iconamoon:arrow-down-2-light"
        class="w-4"
        style="color: black"
      />
    </RouterLink>
    <RouterLink to="#" class="font-links text-sm"> On Sale </RouterLink>
    <RouterLink to="#" class="font-links text-xs"> New Arrivals </RouterLink>
    <RouterLink to="#" class="font-links text-xs"> Brands </RouterLink>
  </div>
</template>


<script  lang="ts" setup >
import { Icon } from "@iconify/vue/dist/iconify.js";
</script>
