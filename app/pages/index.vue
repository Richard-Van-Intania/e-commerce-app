<script setup lang="ts"></script>

<template>
    <div class="my-background-div">
        <div class="grid grid-cols-2 h-[663px]">
            <div class="flex flex-col pl-20 pt-20">
                <div class="text-[64px] font-[integralcf-bold] leading-none">
                    <div>FIND CLOTHES</div>
                    <div>THAT MATCHES</div>
                    <div>YOUR STYLE</div>
                </div>
                <div class="py-12 text-[16px] font-[Satoshi-Variable] text-blk-op-60">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div>
                <div><button type="button" class="h-[52px] w-[210px] rounded-full bg-black text-[16px] font-[Satoshi-Variable] font-medium text-white cursor-pointer" v-on:click="onClick()">Shop Now</button></div>
                <div class="flex pt-12 gap-4 items-end">
                    <HomeCountBanner v-bind:count="200" label="International Brands"></HomeCountBanner>
                    <HomeVerticalDivider></HomeVerticalDivider>
                    <HomeCountBanner v-bind:count="2000" label="High-Quality Products"></HomeCountBanner>
                    <HomeVerticalDivider></HomeVerticalDivider>
                    <HomeCountBanner v-bind:count="30000" label="Happy Customers"></HomeCountBanner>
                </div>
            </div>
            <div class="relative"><NuxtImg src="/Vector.png" height="56" class="absolute left-0 top-1/2" /><NuxtImg src="/Vector2.png" height="104" class="absolute right-1/10 top-1/10" /></div>
        </div>
    </div>
    <div class="h-[122px] bg-black">v</div>
</template>

<style scoped>
.my-background-div {
    background-image: url("~/assets/images/Rectangle 2.png");
    background-size: cover;
    background-position: center;
}
</style>
