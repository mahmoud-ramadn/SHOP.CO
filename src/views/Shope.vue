<template>

  <div class=" container  px-4 mx-auto">

  <ProductDetail />
  <AllReview />
  <MighAlosLikeSection category="jewelery" hed="YOU MIGHT ALSO LIKE" />
</div>

</template>

<script setup lang="ts">
import AllReview from "@/components/ui/AllReview.vue";
import ProductDetail from "@/components/ui/ProductDetail.vue";
import MighAlosLikeSection from "@/components/ui/MighAlosLikeSection.vue";

</script>