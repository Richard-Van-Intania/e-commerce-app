<script setup lang="ts">
const props = defineProps({ count: { type: Number, required: true }, label: { type: String, required: true } });
</script>

<template>
  <div class="flex flex-col font-[Satoshi-Variable]">
    <div class="font-bold text-[40px]">{{ formatNumber(props.count) }}+</div>
    <div class="text-[16px] text-blk-op-60 leading-none">{{ props.label }}</div>
  </div>
</template>

<style scoped></style>
