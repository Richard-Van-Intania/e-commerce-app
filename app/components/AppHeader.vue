<script setup lang="ts">
function test() {
    console.log("holaa");
}
</script>

<template>
    <div class="h-24 flex items-center">
        <div class="w-20"></div>
        <NuxtLink class="text-[32px] font-[integralcf-bold]" to="/">SHOP.CO</NuxtLink>
        <div class="w-12"></div>
        <button type="button" class="cursor-pointer">
            <span class="text-[16px] font-[Satoshi-Variable]">Shop</span>
            <span class="w-1"></span>
            <Icon name="ri:arrow-down-s-line" style="color: black" size="24px" class="align-middle" />
        </button>
        <div class="w-12"></div>
        <ButtonsNavText label="On Sale" destination="/"></ButtonsNavText>
        <div class="w-12"></div>
        <ButtonsNavText label="New Arrivals" destination="/"></ButtonsNavText>
        <div class="w-12"></div>
        <ButtonsNavText label="Brands" destination="/"></ButtonsNavText>
        <div class="w-12"></div>
        <SearchBar class="flex-1"></SearchBar>
        <div class="w-12"></div>
        <ButtonsNavIcon label="ri:shopping-cart-2-line" v-on:handle-click="test()"></ButtonsNavIcon>
        <div class="w-6"></div>
        <ButtonsNavIcon label="ri:account-circle-line" v-on:handle-click="test()"></ButtonsNavIcon>
        <div class="w-20"></div>
    </div>
</template>

<style scoped></style>
