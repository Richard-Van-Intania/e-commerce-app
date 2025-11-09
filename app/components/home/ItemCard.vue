<script setup lang="ts">
const props = defineProps<{
    item: ItemData;
}>();
</script>

<template>
    <div class="w-[295px] flex flex-col gap-2">
        <div class="h-[298px]"><NuxtImg v-bind:src="props.item.source" class="rounded-4xl"></NuxtImg></div>
        <div class="text-[20px] font-[Satoshi-Variable] font-bold">{{ props.item.label }}</div>
        <HomeItemRating v-if="props.item.rating != null" v-bind:rating="props.item.rating" v-bind:show-score="true"></HomeItemRating>
        <div v-if="props.item.discounted != null" class="flex items-center">
            <div class="text-[24px] font-[Satoshi-Variable] font-bold">${{ props.item.discounted }}</div>
            <div class="pl-4 text-[24px] font-[Satoshi-Variable] font-bold text-blk-op-40 discounted">${{ props.item.price }}</div>
            <div class="pl-4">
                <div class="text-[12px] font-[Satoshi-Variable] font-medium text-rd-op-100 bg-rd-op-10 py-2 px-4 rounded-full">-{{ (((props.item.price - props.item.discounted) / props.item.price) * 100).toFixed(2) }}%</div>
            </div>
        </div>
        <div v-else class="flex items-center">
            <div class="text-[24px] font-[Satoshi-Variable] font-bold">${{ props.item.price }}</div>
        </div>
    </div>
</template>

<style scoped>
.discounted {
    text-decoration-line: line-through;
    text-decoration-color: var(--color-blk-op-40);
}
</style>
