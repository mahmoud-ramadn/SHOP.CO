<template>
    <div class="block container mx-auto px-4 space-y-6">
    <span
      class="font-satoshi md:text-[16px] text-[14px] px-3 flex items-center gap-2 fon-[400] text-black/60"
    >
      <RouterLink to="/"> Home </RouterLink>

      <Icon
        icon="weui:arrow-outlined"
        width="16"
        height="16"
        class="text-black/60"
      />
      {{ route.name }}
      <Icon
        icon="weui:arrow-outlined"
        width="16"
        height="16"
        class="text-black/60"
      />
      {{ product?.category }}
      <Icon
        icon="weui:arrow-outlined"
        width="16"
        height="16"
        class="text-black/60"
      />
      {{ product?.title.substring(0, 19) }}
    </span>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-28 h-full md:h-[530px]">
      <div
        class="col-span-1 flex gap-3 px-8 justify-center items-center md:justify-between h-[290px] md:h-[530px] md:flex-row flex-col-reverse"
      >
        <div
          class="flex md:flex-col flex-row my-10 md:justify-center gap-9 h-[290px] md:h-[530px]"
        >
          <img
            class="object-contain md:w-full md:h-[25%] rounded-[20px] h-[106px] w-[111px]"
            :src="product?.image"
            alt=""
            @click="getUrlimg(product?.image   )"
          />
          <img
            v-for="(img, index) in imgs"
            class="rounded-md md:w-full md:h-[25%] h-[106px] w-[111px]"
            :key="index"
            :src="img"
            alt=""
            @click="getUrlimg(img)"
          />
        </div>

        <div
          class="md:h-[530px] overflow-hidden md:w-[444px] w-[358px] h-[290px] bg-[#e7e2e4] shadow-md rounded-md"
        >
          <img
            class="h-full object-contain w-full opacity-90 mix-blend-multiply"
            :src="product?.image"
            alt=""
          />
        </div>
      </div>

      <div class="col-span-1 md:h-[530px]">
        <h3 class="font-extrabold md:text-[40px] leading-[48px] text-[16px]">
          {{ product?.title.substring(0, 24) }}
        </h3>

        <div class="flex items-center">
          <div class="flex items-center">
            <span
              v-for="star in getStarCount(product?.rating.rate as any )"
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
            >{{ product?.rating.rate }} /5</span
          >
        </div>

        <p
          class="font-satoshi font-SectionTitel md:text-[32px] text-[24px] flex items-center gap-3"
        >
          ${{ Math.floor(product?.price as number ) }}

          <span
            class="font-satoshi font-SectionTitel md:text-[32px] line-through text-black/30 text-[24px]"
          >
            ${{ Math.floor(product?.price / 3 as  number) }}
          </span>

          <span
            class="text-[#FF3333] bg-[#FF33331A] rounded-[62px] px-2 py-1 md:text-[16px] text-[14px] mx-[12px]"
          >
            -40%
          </span>
        </p>

        <p
          class="text-black/60 font-satoshi font-[400] md:text-[16px] text-[14px]"
        >
          {{ product?.description.substring(0, 120) }}
        </p>

        <hr class="my-5" />
        <h3
          class="text-[14px] md:text-[16px] font-satoshi text-black/60 font-[400]"
        >
          Select Colors
        </h3>

        <div class="ball my-2 gap-4 flex">
          <div
            v-for="(ball, index) in colors"
            :key="index"
            :style="{ backgroundColor: ball.value }"
            class="rounded-full md:w-[37px] w-[39px] h-[39px] md:h-[37px] flex justify-center items-center"
            @click="selectColor(index)"
          >
            <Icon
              v-if="selectedColorIndex === index"
              icon="icon-park-solid:correct"
              width="16"
              height="16"
              style="color: white"
            />
          </div>
        </div>

        <hr class="my-5" />

        <h3
          class="text-[14px] md:text-[16px] font-satoshi text-black/60 font-[400]"
        >
          Choose Size
        </h3>

        <div class="btn my-2 gap-4 flex">
          <div
            v-for="(ball, index) in btns"
            :key="index"
            :class="{ active: selectedBtn === index }"
            class="rounded-full bg-card md:w-[105px] flex items-center justify-center md:h-[46px] w-[89px] h-[39px] cursor-pointer"
            @click="clieckbtn(index)"
          >
            {{ ball.value }}
          </div>
        </div>
        <hr class="my-5" />
        <div class="my-2 flex items-center gap-2 justify-between">
          <div
            class="w-[110px] h-[44px] rounded-[62px] md:w-[170px] md:h-[52px] bg-browser flex justify-around items-center"
          >
            <button @click="() => count--" :disabled="count > 0 ? false : true">
              <Icon
                icon="fluent:subtract-12-filled"
                class="md:w-[24px] md:h-[24px] w-[20px] h-[20px]"
                style="color: black"
              />
            </button>

            <span class="text-[16px] font-satoshi font-medium">{{
              count
            }}</span>

            <button @click="() => count++">
              <Icon
                icon="fa6-solid:plus"
                class="md:w-[24px] md:h-[24px] w-[20px] h-[20px]"
                style="color: black"
              />
            </button>
          </div>

          <button
            @click="addToCart(product?.id as  any)"
            class="w-[236px] h-[44px] text-[14px] md:text-[16px] rounded-[62px] bg-black text-white font-medium md:w-[400px] md:h-[52px]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <hr class="my-6 h-[1px]" />

    <div class="flex items-center my-11">
      <div
        class="w-1/3 md:text-[20px] text-[14px] py-3 text-black/20 font-satoshi font-[400] text-center border-b-[1px] border-b-black/20"
      >
        Product Details
      </div>
      <div
        class="w-1/3 text-center py-3 md:text-[20px] text-[14px] text-black font-satoshi font-[400] border-b-[1px] border-b-black/60"
      >
        Product Details
      </div>
      <div
        class="w-1/3 text-center md:text-[20px] py-3 text-[14px] font-satoshi font-[400] border-b-[1px] text-black/20 border-b-black/20"
      >
        FAQs
      </div>
    </div>

    <div class="flex justify-between items-center">
      <h3
        class="font-SectionTitel font-satoshi md:text-[24px] text-[20px] text-black"
      >
        All Reviews
        <span class="text-[14px] md:text-[16px] text-black/60">(58)</span>
      </h3>

      <div class="flex items-center gap-3">
        <Icon
          icon="lets-icons:filter"
          class="md:w-[48px] md:h-[48px] w-[40px] h-[40px] bg-card rounded-full p-2"
          style="color: black"
        />

        <div
          class="w-[120px] h-[48px] font-[400] font-satoshi text-[14] md:text-[16px] bg-card rounded-[62px] justify-center gap-2 hidden md:flex items-center"
        >
          Latest

          <Icon
            icon="oui:arrow-down"
            width="11"
            height="11"
            style="color: black"
          />
        </div>

        <div
          class="w-[166px] h-[48px] font-[400] font-satoshi text-[14] md:text-[16px] bg-black text-white rounded-[62px] justify-center gap-2 flex items-center"
        >
          Write a Review
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import one from "../../assets/statci/face.svg";
import tow from "../../assets/statci/back.svg";
import { ref } from "vue";
import { useCartStore } from "@/stores/counter";

const { addToCart, cartList } = useCartStore();

import { Icon } from "@iconify/vue/dist/iconify.js";

const route = useRoute();

const count = ref(0);

const productId = route.params.id;

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}
const product = ref<Product>();

const error = ref<string | null>(null);

const fetchProducts = async (id: Number) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const result = await response.json();

    product.value = result;
  } catch (err: any) {
    error.value = err.message || "An error occurred";
  }
};

onMounted(() => {
  fetchProducts(productId as any);
});

const getStarCount = (rating: number): number[] => {
  if (rating > 3) {
    return [1, 2, 3];
  } else {
    return [1, 2, 3, 4];
  }
};

const imgs = [tow, one];

const selectimg = ref(imgs[0]);

const getUrlimg = (url: string) => {
  selectimg.value = url;
};

onMounted(() => {
  window.scrollTo(0, 0);
});

const colors = ref([
  { value: "#4F4631" },
  { value: "#314F4A" },
  { value: "#314F4A" },
]);

const btns = ref([
  { value: "Small" },
  { value: "Medium" },
  { value: "Large" },
  { value: "X-Large" },
]);

const selectedColorIndex = ref<number | null>(null);

const selectedBtn = ref<number | null>(0);

const clieckbtn = (index: number) => {
  selectedBtn.value = index;
};

const selectColor = (index: number) => {
  selectedColorIndex.value = index;
};

const selectedColor = computed(() => {
  return selectedColorIndex.value !== null
    ? colors.value[selectedColorIndex.value].value
    : null;
});
</script>

<style scoped>
.active {
  background: black;
  color: white;
}
</style>
