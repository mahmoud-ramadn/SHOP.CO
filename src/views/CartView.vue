<template>
  <div class="container mx-auto">
    <span
      class="font-satoshi md:text-sm text-xs flex items-center gap-2  font-normal text-black/60"
    >
      <RouterLink to="/"> Home </RouterLink>

      <Icon
        icon="weui:arrow-outlined"
        width="16"
        height="16"
        class="text-black/60"
      />
      {{ name }}
    </span>

    <h1 class="font-extrabold md:text-4xl  text-4xl font-integralCF my-3">
      YOUR CART
    </h1>

    <div
      class="flex xl:justify-between md:justify-center flex-wrap md:gap-y-3 gap-y-6 items-start"
    >
      <div
        v-if="cartList.length"
        class="xl:w-[58%] p-6 md:w-[715px] w-full border-[1px] rounded-[20px]"
      >
        <!--  product cart  -->

        <div
          v-for="(item, index) in cartList"
          :key="index"
          class="flex border-b-[1px] p-2 md:items-start items-center"
        >
          <div
            class="my-2 md:w-32 md:h-32 w-24 h-24  bg-card rounded-md p-1"
          >
            <RouterLink :to="`/shope/${item.id}`">
              <img
                class="h-full object-contain w-full opacity-90 mix-blend-multiply"
                :src="item.image"
                alt=""
              />
            </RouterLink>
          </div>

          <div class="w-full pl-6">
            <div class="flex justify-between items-start">
              <h2
                class="font-SectionTitel text-sm md:text-xl font-satoshi"
              >
                {{ item.title.substring(0, 20) }}
              </h2>
              <Icon
                @click="() => removeFromCart(item.id as number  ) "
                icon="gravity-ui:trash-bin"
                class="md:w-6  w-5 md:h-6 h-5"
                style="color: #ff0000"
              />
            </div>

            <p class="md:text-sm text-xs text-black">Size: Large</p>
            <p class="md:text-sm text-xs text-black">Color: White</p>

            <div class="flex w-full justify-between items-center">
              <p
                class="font-SectionTitel font-satoshi  text-xl md:text-2xl"
              >
                ${{Math.floor(item.price as number )}}
              </p>

              <div
                class="md:w-[126px] w-[105px]  h-8 rounded-full bg-card md:h-11 flex justify-center gap-4 items-center"
              >
                <span>
                  <Icon
                    @click="Dincrement(index)"
                    icon="fluent:subtract-16-filled"
                    width="16"
                    height="16"
                    style="color: black"
                  />
                </span>
                <span>{{ item.count }}</span>

                <span>
                  <Icon
                    @click="Increment(index)"
                    icon="line-md:plus"
                    width="16"
                    height="16"
                    style="color: black"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="xl:w-[40%] md:w-[505px] space-y-4 md:h-[448px] w-full border-[1px] h-fit md:px-[24px] md:py-[20px] p-[20px] rounded-[20px]"
      >
        <h1
          class="text-[20px] md:[24px] font-satoshi text-black font-SectionTitel"
        >
          Order Summary
        </h1>

        <div class="flex justify-between items-start w-full">
          <span
            class="text-black/60 font-[400] font-satoshi md:text-[20px] text-[16px]"
            >Subtotal</span
          >
          <span
            class="text-black font-[400] font-satoshi md:text-[20px] text-[16px]"
            >${{ calculateTotalPrice() }}</span
          >
        </div>

        <div class="flex justify-between items-start w-full">
          <span
            class="text-black/60 font-[400] font-satoshi md:text-[20px] text-[16px]"
            >Discount (-20%)</span
          >
          <span
            class="text-[#FF3333] font-[400] font-satoshi md:text-[20px] text-[16px]"
            >${{ Dicount }}</span
          >
        </div>
        <div class="flex justify-between items-start w-full">
          <span
            class="text-black/60 font-[400] font-satoshi md:text-[20px] text-[16px]"
            >Delivery Fee</span
          >
          <span
            class="text-black/60 font-[400] font-satoshi md:text-[20px] text-[16px]"
            >$15</span
          >
        </div>

        <hr class="my-2" />

        <div class="flex justify-between items-start w-full">
          <span
            class="text-black font-[400] font-satoshi md:text-[20px] text-[16px]"
            >Total</span
          >
          <span
            class="text-black font-[400] font-satoshi md:text-[20px] text-[16px]"
            >${{ TotalPrice() }}</span
          >
        </div>

        <div class="flex relative justify-between items-center">
          <img
            class="md:w-[24px] md:h-[24px] w-[17px] h-[17px] absolute left-6 top-1/2 -translate-y-1/2"
            src="../assets/Vector.svg"
            alt=""
          />
          <input
            type="text"
            class="md:w-[326px] md:h-[62px] h-[54px] w-[218px] h-[48px ] placeholder:text-sm md:placeholder::text-sm px-14 bg-card rounded-[62px]"
            placeholder="Add promo code"
          />
          <button
            class="bg-black text-white text-sm md:text-[16px] rounded-[62px] w-[88px] h-[48px] md:h-[48px] md:w-[119px]"
          >
            Apply
          </button>
        </div>
        <button
          class="w-full bg-black rounded-[62px] h-[54px] md:h-[60px] text-white font[700] md:text-[22px] text-[16px] flex items-center justify-center"
        >
          Go To Checkout

          <Icon
            icon="formkit:arrowright"
            class="w-[24px] h-[24px]"
            style="color: white"
          />
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import { Icon } from "@iconify/vue/dist/iconify.js";
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import { useCartStore } from "@/stores/counter";

const { name } = useRoute();

const { cartList, removeFromCart, calculateTotalPrice, TotalPrice } =
  useCartStore();

const Dicount = ref(
  Math.floor(
    cartList
      .map((it: any) => it.price)
      .reduce((a: number, b: number) => a + b, 0)
  ) / 4
);

const Increment = (index: Number) => {
  const item:any = cartList[index as any] ;

  item.count++;

  Dicount.value += 1;

  item.price += item.price;
};

const Dincrement = (index: number) => {
  const item: any = cartList[index];

  if (item.count > 0) {
    item.count--;
  }

  if (item.count === 0) {
    removeFromCart(item.id);
  }

  item.price = item.price / 2;
  Dicount.value -= 1;
};

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
  