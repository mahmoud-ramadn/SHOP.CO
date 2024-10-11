<template>
  <div class="container md:px-0 px-4 mx-auto">
    <div class="flex flex-col items-center space-y-5">
      <h1
        class="font-integralCF font-extrabold md:text-[48px] text-center my-4 text-[32px]"
      >
        {{ hed }}
      </h1>
      <p v-if="error">{{ error }}</p>

      <div
        class="card grid w-full justify-between gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          class="col-span-1 overflow-hidden space-y-2 relative group"
          v-for="product in productsToShow"
          :key="product.id"
        >
          <div
            class="w-full bg-card shadow-md xl:h-[400px] overflow-hidden md:h-[250px] h-[200px] p-6 rounded-md flex justify-center items-center"
          >
            <img
              class="md:w-[295px] w-[198px] h-[200pz] object-contain md:h-[298px] opacity-90 mix-blend-multiply"
              :src="product.image"
              alt="image"
            />
          </div>

          <h3 class="font-SectionTitel font-satoshi md:text-[20px] text-[16px]">
            {{ product.title.substring(0, 24) }}
          </h3>

          <div class="flex items-center">
            <div class="flex items-center">
              <span
                v-for="star in getStarCount(product.rating.rate)"
                :key="star"
              >
                <Icon
                  icon="ic:sharp-star-rate"
                  class="text-yellow md:w-[18px] md:h-[18px] w-[15px] h-[15px]"
                />
              </span>
              <Icon
                icon="carbon:star-half"
                class="text-yellow md:w-[18px] md:h-[18px] w-[15px]"
              />
            </div>

            <span class="font-satoshi text-[12px] md:text-[14px] font-[400]"
              >{{ product.rating.rate }} /5</span
            >
          </div>
          <p class="font-satoshi font-SectionTitel md:text-[24px] text-[20px]">
            ${{ Math.floor(product.price) }}
          </p>

          <button
            @click="addToCart(product.id)"
            class="absolute bottom-4 w-[100px] text-[12px] left-1/2 transform -translate-x-1/2 md:px-4 px-2 py-2 bg-black/80 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Add to Cart
          </button>

          <RouterLink
            :to="`/shope/${product.id}`"
            class="absolute left-1/2 top-1/2 transform text-[12px] text-center w-[100px] -translate-y-1/2 -translate-x-1/2 md:px-4 px-2 py-3 bg-black/40 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            view Details
          </RouterLink>
        </div>
      </div>

      <button
        v-if="hasMore"
        @click="loadMore"
        class="md:w-[218px] w-[90%] h-[52px] border-[1px] md:h-[52px] border-black/10 rounded-[62px] font-satoshi font-medium text-[14px] md:text-[16px]"
      >
        View All
      </button>
    </div>
  </div>
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

