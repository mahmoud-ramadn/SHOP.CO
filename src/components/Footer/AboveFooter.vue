<template lang="pug">
  div(
    class="bg-black container absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 h-[293px] md:min-h-[180px] flex p-6 bottom-[30%] justify-center md:justify-around md:px-16 items-center flex-wrap mx-auto rounded-[20px]"
  )
    h1(
      class="md:text-[40px] text-white md:w-[551px] text-[32px] font-SectionTitel text-center md:text-left"
    ) STAY UPTO DATE ABOUT OUR LATEST OFFERS

    div(class="flex flex-col gap-3")
      span.relative
        Icon(
          icon="fontisto:email"
          width="24"
          height="24"
          class="left-3 absolute top-1/2 -translate-y-1/2 text-black/40"
        )
        input(
          class="md:w-[349px] rounded-[62px] w-[311px] h-[48px] px-12"
          type="text"
          placeholder="Enter your email address"
        )

      button(
        class="md:w-[349px] w-[311px] rounded-[62px] h-[48px] px-2 bg-white font-[500]"
      ) Subscribe to Newsletter
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue/dist/iconify.js";
</script>
