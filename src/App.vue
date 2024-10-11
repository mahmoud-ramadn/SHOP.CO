<script setup lang="ts">
import FooterViewVue from "./components/Footer/FooterView.vue";
import Index from "./components/Header/index.vue";
import AboveFooter from "./components/Footer/AboveFooter.vue";
</script>

<template>
  <div>
    <Index />
    <RouterView />
    <div class="relative bg-card    flex justify-center mt-56">
      <AboveFooter />
      <FooterViewVue />
    </div>
  </div>
</template>

 



