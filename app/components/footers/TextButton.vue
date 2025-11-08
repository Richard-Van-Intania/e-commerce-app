<script setup lang="ts">
const props = defineProps({
    label: { type: String, required: true },
    destination: { type: String, required: true },
});
</script>

<template>
    <NuxtLink class="text-[16px] font-[Satoshi-Variable] text-blk-op-60 pb-4" v-bind:to="props.destination">{{ label }}</NuxtLink>
</template>
