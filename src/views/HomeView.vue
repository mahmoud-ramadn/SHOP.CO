<template>
<Hero/>
  <Brand/>
  <CardTemplet category="women's clothing" hed="TOP  SELLING" />

  <hr class="bg-black/10 h-[1px] my-10 container mx-auto" />

  <CardTemplet category="men's clothing" hed="NEW ARRIVALS" />

  <BrowserDress />

  <customer-swiper />



</template>

<script setup lang="ts">
import BrowserDress from "@/components/ui/BrowserDress.vue";
import CustomerSwiper from "@/components/ui/CustomerSwiper.vue";
import CardTemplet from "@/components/ui/CardTemplet.vue";
import Hero from "@/components/ui/Hero.vue";
import Brand from "@/components/ui/Brand.vue";
</script>

<style scoped>
.pic {
  background-image: url("../assets/hero.svg");
}
</style>