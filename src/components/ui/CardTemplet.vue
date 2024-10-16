<template   lang="pug" >
  div(class="container md:px-0 px-4 mx-auto")
   div(class="flex flex-col items-center space-y-5")
    h1(class="font-integralCF font-extrabold md:text-[48px] text-center my-4 text-[32px]") {{ hed }}
    p(v-if="error") {{ error }}

    div(class="card grid w-full justify-between gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4")
      div(class="col-span-1 overflow-hidden space-y-2 relative"
        v-for="product in productsToShow" :key="product.id")
        RouterLink(:to="`/shope/${product.id}`")
          div(class="w-full bg-card shadow-md xl:h-[400px] overflow-hidden md:h-[250px] h-[200px] p-6 rounded-md flex justify-center items-center")
            img(class="md:w-[295px] w-[198px] h-[200px] object-contain md:h-[298px] opacity-90 mix-blend-multiply" :src="product.image" alt="image")
          h3(class="font-SectionTitel font-satoshi md:text-[20px] text-[16px]") {{ product.title.substring(0, 24) }}

        div(class="flex items-center")
          div(class="flex items-center")
            span(v-for="star in getStarCount(product.rating.rate)" :key="star")
              Icon(icon="ic:sharp-star-rate" class="text-yellow md:w-[18px] md:h-[18px] w-[15px] h-[15px]")
            icon("carbon:star-half" class="text-yellow md:w-[18px] md:h-[18px] w-[15px] h-[15px]")
          span(class="font-satoshi text-[12px] md:text-[14px] font-[400]") {{ product.rating.rate }} /5
        p(class="font-satoshi font-SectionTitel md:text-[24px] text-[20px]") ${{ Math.floor(product.price) }}

  div(class='w-full  flex justify-center')
     button(v-if="hasMore" @click="loadMore"
    class="md:w-[218px] w-[90%] h-[52px] border-[1px] md:h-[52px] border-black/10 rounded-[62px] font-satoshi font-medium text-[14px] md:text-[16px]") View All


</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue/dist/iconify.js";
import { useFetch } from "../Shared/useFetchProduct";
import { RouterLink } from "vue-router";
import { useCartStore } from "../../stores/counter";

const { addToCart, cartList } = useCartStore();

const props = defineProps<{
  category: string;
  hed: string;
}>();

const {
  error,
  products,
  productsToShow,
  hasMore,
  fetchProducts,
  getStarCount,
  loadMore,
} = useFetch(props.category);
</script>

