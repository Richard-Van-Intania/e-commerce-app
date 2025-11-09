<script setup lang="ts">
const items: ItemData[] = [{ source: "/items/image 7.png", label: "T-SHIRT WITH TAPE DETAILS", rating: 4.9, price: 120, discounted: 90 }];
</script>

<template>
    <div class="relative">
        <NuxtImg src="/images/Rectangle 2.png" />
        <div class="absolute left-0 top-0">
            <div class="flex flex-col pl-20 pt-20">
                <div class="text-[64px] font-[integralcf-bold] leading-none">
                    <div>FIND CLOTHES</div>
                    <div>THAT MATCHES</div>
                    <div>YOUR STYLE</div>
                </div>
                <div class="py-12 text-[16px] font-[Satoshi-Variable] text-blk-op-60 w-3/4">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div>
                <div><button type="button" class="h-[52px] w-[210px] rounded-full bg-black text-[16px] font-[Satoshi-Variable] font-medium text-white cursor-pointer" v-on:click="onClick()">Shop Now</button></div>
                <div class="flex pt-12 items-end">
                    <HomeCountBanner v-bind:count="200" label="International Brands"></HomeCountBanner>
                    <HomeVerticalDivider></HomeVerticalDivider>
                    <HomeCountBanner v-bind:count="2000" label="High-Quality Products"></HomeCountBanner>
                    <HomeVerticalDivider></HomeVerticalDivider>
                    <HomeCountBanner v-bind:count="30000" label="Happy Customers"></HomeCountBanner>
                </div>
            </div>
        </div>
        <NuxtImg src="/images/Vector.png" height="56" class="absolute left-1/2 top-1/3" />
        <NuxtImg src="/images/Vector2.png" height="104" class="absolute right-1/20 top-1/10" />
    </div>
    <div class="px-20 py-14 bg-black">
        <div class="flex justify-between">
            <NuxtImg src="/brands/ver.png" height="32" />
            <NuxtImg src="/brands/zara-logo-1 1.png" height="38" />
            <NuxtImg src="/brands/gucci-logo-1 1.png" height="36" />
            <NuxtImg src="/brands/prada-logo-1 1.png" height="32" />
            <NuxtImg src="/brands/cal.png" height="32" />
        </div>
    </div>
    <HomeBigBanner label="NEW ARRIVALS"></HomeBigBanner>
    <div class="px-20 flex gap-1">
        <HomeItemCard v-bind:item="items[0]!"></HomeItemCard>
    </div>
    <HomeBigBanner label="TOP SELLING" class="bg-amber-100"></HomeBigBanner>
</template>

<style scoped></style>
