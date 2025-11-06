<script setup lang="ts"></script>

<template>
    <div class="h-24 flex items-center">
        <div class="w-20"></div>
        <div class="text-[32px] font-[integralcf-bold]">SHOP.CO</div>
        <div class="w-12"></div>
        <button type="button" class="cursor-pointer">
            <span class="text-[16px] font-[Satoshi-Variable]">Shop</span>
            <span class="w-1"></span>
            <Icon name="ri:arrow-down-s-line" style="color: black" size="24px" class="align-middle" />
        </button>
        <div class="w-12"></div>
        <NuxtLink class="text-[16px] font-[Satoshi-Variable]" to="/">On Sale</NuxtLink>
        <div class="w-12"></div>
        <NuxtLink class="text-[16px] font-[Satoshi-Variable]" to="/">New Arrivals</NuxtLink>
        <div class="w-12"></div>
        <NuxtLink class="text-[16px] font-[Satoshi-Variable]" to="/">Brands</NuxtLink>
        <div class="w-12"></div>
        <div class="flex-1 bg-cyan-500">max</div>
        <div class="w-12"></div>
        <button type="button" class="cursor-pointer">
            <Icon name="ri:shopping-cart-2-line" size="20px" class="align-middle" />
        </button>
        <div class="w-6"></div>
        <button type="button" class="cursor-pointer">
            <Icon name="ri:account-circle-line" size="20px" class="align-middle" />
        </button>
        <div class="w-20"></div>
    </div>
</template>

<style scoped></style>
