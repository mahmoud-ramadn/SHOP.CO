<template  lang="pug">
  div(class="space-y-5 md:my-32 my-7 container mx-auto")
    div(class="flex justify-between")
      h2(class="w-[268px] md:w-fit md:text-[48px] font-integralCF font-extrabold text-[32px]")
        | OUR HAPPY CUSTOMERS

      div(class="flex items-center space-x-3")
        Icon(icon="majesticons:arrow-left-line" width="24" height="24" style="color: black")
        Icon(icon="majesticons:arrow-right-line" width="24" height="24" style="color: black")

    div(class="grid lg:grid-cols-3 overflow-hidden md:h-[240px] h-[200px] items-center md:grid-cols-2 gap-4 grid-cols-1")
      div(
        v-for="(card, index) in cards"
        :key="index"
        class="md:h-[240px] h-[186px] flex flex-col justify-center items-start md:p-7 p-5 space-y-2 border-[1px] col-span-1 rounded-[20px]"
      )
        div(class="flex items-center")
          Icon(icon="ic:sharp-star-rate" class="w-[19px] h-[19px] md:w-[24px] md:h-[24px] text-yellow")
          Icon(icon="ic:sharp-star-rate" class="w-[19px] h-[19px] md:w-[24px] md:h-[24px] text-yellow")
          Icon(icon="ic:sharp-star-rate" class="w-[19px] h-[19px] md:w-[24px] md:h-[24px] text-yellow")
          Icon(icon="ic:sharp-star-rate" class="w-[19px] h-[19px] md:w-[24px] md:h-[24px] text-yellow")
          Icon(icon="ic:sharp-star-rate" class="w-[19px] h-[19px] md:w-[24px] md:h-[24px] text-yellow")

        h2(class="md:text-[20px] text-[16px] font-satoshi font-SectionTitel") {{ card.title + " " }}
          Icon(icon="fa6-solid:circle-check" class="inline-block w-[19px] h-[19px] md:w-[24px] md:h-[24px] text-greencricle")

        p(class="font-satoshi text-[14px] md:text-[16px] text-black/60 font-[400]") {{ card.dec }}
</template>


<script setup lang="ts">
import { Icon } from "@iconify/vue/dist/iconify.js";

const cards = [
  {
    title: "Sarah M.",
    dec: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    title: "Alex K.",
    dec: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
  },
  {
    title: "James L.",
    dec: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
  },
];
</script>

