
<template lang="pug">
  div(class="container my-6 mx-auto")
    div(class="grid md:grid-cols-2 grid-cols-1 gap-6")
      div(
        v-for="(card, index) in cards"
        :key="index"
        class="col-span-1 flex flex-col justify-center items-start md:p-7 p-5 border-[1px] space-y-5 rounded-[20px]"
      )
        div(class="flex items-center")
          Icon(icon="ic:sharp-star-rate" class="w-5 h-5 md:w-6 md:h-6 text-yellow")
          Icon(icon="ic:sharp-star-rate" class="w-5 h-5 md:w-6 md:h-6 text-yellow")
          Icon(icon="ic:sharp-star-rate" class="w-5 h-5 md:w-6 md:h-6 text-yellow")
          Icon(icon="ic:sharp-star-rate" class="w-5 h-5 md:w-6 md:h-6 text-yellow")
          Icon(icon="ic:sharp-star-rate" class="w-5 h-5 md:w-6 md:h-6 text-yellow")
        
        div(class="flex justify-between items-center w-full")
          h2(class="md:text-xl text-sm font-satoshi font-SectionTitel") {{ card.title }}
           Icon(icon="fa6-solid:circle-check" class="inline-block w-5 h-5 md:w-6 md:h-6 text-greencricle")
          Icon(icon="bi:three-dots" class="md:block hidden text-black/60" width="24" height="24")
        
        p(class="font-satoshi text-xs md:text-sm text-black/60 font-normal") {{ card.dec }}
        p(class="font-satoshi text-xs md:text-sm text-black/60 font-normal") {{ card.data }}
      
    div(class="w-full my-6 flex justify-center")
      button(
        @click="loadmore"
        class="rounded-full w-[230px] h-[52px] font-medium md:text-sm text-xs font-satoshi text-black border-[1px]"
      ) Load More Reviews
</template>

  
  <script setup lang="ts">
import { Icon } from "@iconify/vue/dist/iconify.js";
import { ref } from "vue";

const cards = ref([
  {
    title: "Sarah M.",
    dec: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    data: "Posted on August 14, 2023",
  },
  {
    title: "Alex K.",
    dec: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    data: "Posted on August 14, 2023",
  },
  {
    title: "James L.",
    dec: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    data: "Posted on August 14, 2023",
  },
  {
    title: "Samantha D.",
    dec: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    data: "Posted on August 14, 2023",
  },
  {
    title: "Alex M.",
    dec: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    data: "Posted on August 14, 2023",
  },
  {
    title: "Ethan R.",
    dec: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    data: "Posted on August 14, 2023",
  },
]);

const LoadeMoreArry = [
  {
    title: "Chris P.",
    dec: "The attention to detail in this shirt is outstanding. From the fabric to the design, everything feels premium and well thought out.",
    data: "Posted on August 20, 2023",
  },
  {
    title: "Emma W.",
    dec: "This is one of the best purchases I've made in a while. The clothes from Shop.co are not only stylish but also very comfortable to wear.",
    data: "Posted on August 18, 2023",
  },
  {
    title: "Oliver B.",
    dec: "I love the versatility of this brand. No matter the occasion, I always find something that suits my style perfectly.",
    data: "Posted on August 16, 2023",
  },
];

const loadmore = () => {
  cards.value.push(...LoadeMoreArry);
};
</script>
  
  
  
 