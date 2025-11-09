<script setup lang="ts">
const props = defineProps<{
    item: ItemData;
}>();
</script>

<template>
    <div class="w-[295px] flex flex-col">
        <div class="h-[298px]"><NuxtImg v-bind:src="props.item.source" class="rounded-4xl"></NuxtImg></div>
        <div class="text-[20px] font-[Satoshi-Variable] font-bold">{{ props.item.label }}</div>
        <HomeItemRating v-if="props.item.rating != null" v-bind:rating="props.item.rating" v-bind:show-score="true"></HomeItemRating>
        <div class="flex">
            <div>1</div>
            <div>2</div>
            <div>2</div>
        </div>
    </div>
</template>

<style scoped></style>
