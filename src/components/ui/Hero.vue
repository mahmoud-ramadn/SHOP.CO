<template lang="pug">
  div(class="bg-hero mx-auto")
    div(class="container mx-auto md:h-[663px]")
      div(class="grid md:grid-cols-2 grid-cols-1")
        div(class="relative col-span-1 md:w-fit p-2 space-y-3 md:items-start flex flex-col md:justify-center")
          h1(class="font-integralCF font-extrabold md:w-[577px] w-[315px] text-[36px] md:leading-[64px] leading-[50px] md:text-[64px]")
            | FIND CLOTHES THAT MATCHES YOUR STYLE

          p(class="font-links md:w-[545px] text-black/60")
            | Browse through our diverse range of meticulously crafted garments,
            | designed to bring out your individuality and cater to your sense of
            | style.

          button(class="bg-black w-full md:w-[210px] rounded-[62px] h-[52px] shadow-md text-white")
            | Shop Now

          div(class="grid grid-cols-4 md:mx-0")
            div(class="md:col-span-1 col-span-2 md:text-start pl-2 text-center")
              p(class="text-[24px] md:text-[40px] font-[500] text-black") 200+
              span(class="md:text-[16px] text-[12px] text-black/60") International Brands

            div(class="md:col-span-1 px-5 border-l-[1px] md:border-r-[1px] md:text-start pl-2 text-center col-span-2")
              p(class="text-[24px] md:text-[40px] font-medium text-black") 2,000+
              span(class="md:text-[16px] text-[12px] text-black/60") High-Quality Products

            div(class="md:col-span-1 col-span-4 md:text-start pl-2 text-center")
              p(class="text-[24px] md:text-[40px] font-[500] text-black") 30,000+
              span(class="md:text-[16px] text-[12px] text-black/60") Happy Customers

        div(class="col-span-1 md:h-[663px]")
          img(class="w-full h-full md:w-fit object-contain" src="../../assets/hero.svg" alt="")
</template>
