<template lang="pug">
  div(class="container mx-auto")
    div(class="flex flex-col items-center my-8 space-y-5")
      h1(class="font-integralCF font-extrabold md:text-[48px] text-center my-4 text-[32px]")
        | {{ hed }}
      p(v-if="error")
        | {{ error }}

      div(class="card grid w-full justify-between gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4")
        div(class="col-span-1 overflow-hidden space-y-2 relative group" v-for="product in productsToShow" :key="product.id")
          div(class="w-full overflow-hidden bg-card shadow-md xl:h-[400px] md:h-[250px] h-[200px] p-6 rounded-md flex justify-center items-center")
            img(class="md:w-[295px] w-[198px] md:h-[298px] h-[200px] object-contain opacity-90 mix-blend-multiply" :src="product.image" alt="image")
          
          h3(class="font-SectionTitel font-satoshi md:text-[20px] text-[16px]")
            | {{ product.title.substring(0, 24) }}

          div(class="flex items-center")
            div(class="flex items-center")
              span(v-for="star in getStarCount(product.rating.rate)" :key="star")
                Icon(icon="ic:sharp-star-rate" class="text-yellow md:w-[18px] md:h-[18px] w-[15px] h-[15px]")
              Icon(icon="carbon:star-half" class="text-yellow md:w-[18px] md:h-[18px] w-[15px] h-[15px]")

            span(class="font-satoshi text-[12px] md:text-[14px] font-[400]")
              | {{ product.rating.rate }} /5

          p(class="font-satoshi font-SectionTitel md:text-[24px] text-[20px]")
            | ${{ Math.floor(product.price) }}

          button(@click="addToCart(product.id)" class="absolute bottom-4 w-[100px] text-[12px] left-1/2 transform -translate-x-1/2 md:px-4 px-2 py-2 bg-black/80 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300")
            | Add to Cart
</template>

<script setup lang="ts">
import { useFetch } from "../Shared/useFetchProduct";
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue/dist/iconify.js";
import { useCartStore } from "../../stores/counter";

const { addToCart, cartList } = useCartStore();

const props = defineProps<{
  category: string;
  hed: string;
}>();

const {
  error,
  productsToShow,
  products,
  fetchProducts,
  getStarCount,
  loadMore,
} = useFetch(props.category);
</script>
