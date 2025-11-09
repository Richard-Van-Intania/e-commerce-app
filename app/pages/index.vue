<script setup lang="ts">
const items: ItemData[] = [{ source: "/items/image 7.png", label: "T-SHIRT WITH TAPE DETAILS", rating: 4.9, price: 120, discounted: 90 }];
const { data, error, status } = await useFetch<ItemData[]>("/api/new-arrivals");
const viewAll = useState<boolean>(() => false);

const filteredItemData = computed<ItemData[]>(() => {
    if (data.value) {
        if (!viewAll.value) {
            const list: ItemData[] = [];
            for (let i = 0; i < data.value.length; i++) {
                if (i < 4) {
                    list.push(data.value[i]!);
                }
            }
            return list;
        } else {
            return data.value;
        }
    } else {
        return [];
    }
});
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
                <div><button type="button" class="h-[52px] w-[210px] rounded-full bg-black text-[16px] font-[Satoshi-Variable] font-medium text-white cursor-pointer" v-on:click="onClick('Shop Now')">Shop Now</button></div>
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
    <div v-if="status === 'success'">
        <div class="px-20 flex gap-x-5 gap-y-14 flex-wrap"><HomeItemCard v-for="(item, index) in filteredItemData" v-bind:item="item" v-bind:key="index" v-on:handle-click="onClick(item.label)"></HomeItemCard></div>
    </div>
    <div v-else-if="status === 'pending' || status === 'idle'"><div class="px-20 h-40 flex justify-center items-center">Loading..</div></div>
    <div v-else-if="status === 'error' || error"><div class="px-20 h-40 flex justify-center items-center">Error!</div></div>
    <div class="h-10"></div>
    <div v-if="!viewAll" class="flex justify-center items-center">
        <button type="button" class="w-[218px] bg-white h-[52px] rounded-full text-[16px] font-[Satoshi-Variable] font-medium cursor-pointer border border-blk-op-10" v-on:click="viewAll = true">View All</button>
    </div>
    <div class="h-10"></div>
    <div class="px-20"><div class="h-px bg-blk-op-10"></div></div>
    <HomeBigBanner label="TOP SELLING"></HomeBigBanner>
</template>

<style scoped></style>
