<template lang="pug">
  div(class="md:p-16 container bg-browser rounded-[40px] p-8 my-5 mx-auto md:h-[866px]")
    h1(class="md:w-fit w-[246px] py-10 mx-auto font-extrabold text-[32px] font-integralCF md:text-[48px] text-center")
      | BROWSE BY DRESS STYLE

    div(class="grid md:grid-cols-3 grid-cols-1 justify-around gap-6")
      div(class="col-span-1 relative bg-white h-[190px] md:h-[289px] overflow-hidden rounded-[20px]")
        h1(class="absolute left-[10%] top-[10%] md:text-[36px] font-satoshi font-SectionTitel text-[24px]")
          | Casual
        img(src="../../assets/browserSection/casual.svg" alt="")

      div(class="md:col-span-2 relative col-span-1 bg-white h-[190px] md:h-[289px] object-cover overflow-hidden rounded-[20px]")
        h1(class="absolute left-[10%] top-[10%] md:text-[36px] font-satoshi font-SectionTitel text-[24px]")
          | Formal
        img(class="w-full h-full opacity-90 mix-blend-multiply fill-current" src="../../assets/browserSection/Formal.svg" alt="")

      div(class="md:col-span-2 col-span-1 relative bg-white h-[190px] md:h-[289px] overflow-hidden rounded-[20px]")
        h1(class="absolute left-[10%] top-[10%] md:text-[36px] font-satoshi font-SectionTitel text-[24px]")
          | Party
        img(src="../../assets/browserSection/Party.svg" alt="")

      div(class="col-span-1 relative bg-white h-[190px] md:h-[289px] overflow-hidden rounded-[20px]")
        h1(class="absolute left-[10%] top-[10%] md:text-[36px] font-satoshi font-SectionTitel text-[24px]")
          | Gym
        img(class="h-full w-full" src="../../assets/browserSection/Gym.svg" alt="")
</template>

<style scoped>
  .a {
    background-repeat: no-repeat;
    background-image: url("../../assets/browserSection/casual.svg");
  }
  .b {
    object-fit: cover;
    background-image: url("../../assets//browserSection/Formal.svg");
  }
  .c {
    background-image: url("../../assets//browserSection/Gym.svg");
  }
  .d {
    background-image: url("../../assets//browserSection/Party.svg");
  }
</style>
