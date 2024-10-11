<template>
  <div class="relative h-32">
    <div
      class="bg-black content-center md:h-[38px] h-[34px] flex justify-center items-center"
    >
      <p
        class="md:leading-[18.9px] leading-[16.2px] fw-[400] text-[12px] md:text-[14px] text-white"
      >
        Sign up and get 20% off to your first order.<span
          class="underline fs-[12px]"
          >Sign Up Now</span
        >
      </p>
      <span
        @click="toggleOpen"
        class="text-white absolute md:left-[80%] right-[4%] cursor-pointer"
      >
        <Icon icon="carbon:close" width="20px" height="20px" />
      </span>
    </div>

    <div
      :class="{
        '    bg-black/95    text-white rounded-md md:py-5   p-2    ':
          isScrolled,
        'bg-transparen  px-2 ': !isScrolled,
      }"
      class="flex items-center justify-between container mx-auto duration-150 transition-all ease-in-out z-50 top-20 -translate-y-1/2 fixed left-1/2 -translate-x-1/2"
    >
      <div class="flex items-center space-x-2">
        <Icon
          v-if="!isActive"
          @click="toggleMenu"
          icon="uis:bars"
          width="20px"
          height="20px"
          class="block lg:hidden"
          :class="{ ' text-white ': isScrolled, '  text-black ': !isScrolled }"
        />

        <Icon
          @click="toggleMenu"
          v-else
          icon="mdi:close"
          width="24"
          height="24"
          class="block lg:hidden"
          :class="{ ' text-white ': isScrolled, '  text-black ': !isScrolled }"
        />

        <RouterLink to="/" class="font-extrabold font-integralCF text-2xl">
          <h1>SHOP.CO</h1>
        </RouterLink>
      </div>

      <Links />

      <SearchBar />

      <div class="flex items-center h-6 w-24 md:w-16 md:gap-x-3 gap-x-2">
        <!-- Mobile Search Icon -->
        <Icon
          class="md:hidden block"
          icon="fluent:search-32-filled"
          width="24"
          height="24"
          style="color: white"
        />
        <!-- Cart Icon with Notification -->
        <span class="relative">
          <Icon
            @click="router.push('/cart')"
            icon="bx:cart"
            width="24"
            height="24"
            :class="{
              '      text-white ': isScrolled,
              'bg-transparent': !isScrolled,
            }"
          />
          <span
            v-if="cartList.length"
            class="w-[20px] h-[20px] text-[12px] bottom-[16px] animate-pulse -right-[11px] flex justify-center items-center rounded-full absolute"
            :class="{
              ' bg-white  text-black ': isScrolled,
              ' bg-black text-white ': !isScrolled,
            }"
          >
            {{ cartList.length }}
          </span>
        </span>
        <!-- Profile Icon -->
        <Icon
          icon="mingcute:user-4-line"
          width="24"
          height="24"
          :class="{
            '      text-white ': isScrolled,
            'bg-transparent': !isScrolled,
          }"
        />
      </div>

      <div
        :class="{ 'h-auto py-2': isActive, 'h-[0px]': !isActive }"
        class="absolute duration-150 ease-linear px-4 overflow-hidden text-white z-50 left-0 top-full md:hidden shadow-md w-full bg-black"
      >
        <RouterLink
          to="/"
          class="block py-2 text-sm font-links hover:text-gray-400"
        >
          Shop
        </RouterLink>
        <a href="#" class="block py-2 text-sm font-links hover:text-gray-400"
          >On Sale</a
        >
        <a href="#" class="block py-2 text-sm font-links hover:text-gray-400"
          >New Arrivals</a
        >
        <a href="#" class="block py-2 text-sm font-links hover:text-gray-400"
          >Brands</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "../../router/index";
import { Icon } from "@iconify/vue/dist/iconify.js";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import SearchBar from "./SearchBar.vue";
import Links from "./Links.vue";
import { useCartStore } from "@/stores/counter";

import { onMounted, onUnmounted } from "vue";

const { cartList } = useCartStore();
const isActive = ref(false);

const toggleMenu = () => {
  isActive.value = !isActive.value;
};

const opne = ref(false);

const toggleOpen = () => {
  opne.value = !opne.value;
};

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.list {
  height: 40vh;
}
</style>
